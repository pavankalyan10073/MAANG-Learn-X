const fs = require('fs');

// Map: file -> { prefix, itemVar }
const config = {
  'src/routes/track.dsa.videos.tsx': { prefix: 'dsa-vid', itemVar: 'video' },
  'src/routes/track.dsa.notes.tsx': { prefix: 'dsa-notes', itemVar: 'note' },
  'src/routes/track.dsa.practice.tsx': { prefix: 'dsa-prac', itemVar: 'practice' },
  'src/routes/track.system-design.videos.tsx': { prefix: 'sd-vid', itemVar: 'video' },
  'src/routes/track.system-design.notes.tsx': { prefix: 'sd-notes', itemVar: 'note' },
  'src/routes/track.system-design.practice.tsx': { prefix: 'sd-prac', itemVar: 'practice' },
  'src/routes/track.aptitude.videos.tsx': { prefix: 'apt-vid', itemVar: 'video' },
  'src/routes/track.aptitude.notes.tsx': { prefix: 'apt-notes', itemVar: 'note' },
  'src/routes/track.aptitude.practice.tsx': { prefix: 'apt-prac', itemVar: 'practice' },
  'src/routes/track.core-cs.videos.tsx': { prefix: 'ccs-vid', itemVar: 'video' },
  'src/routes/track.core-cs.notes.tsx': { prefix: 'ccs-notes', itemVar: 'note' },
  'src/routes/track.core-cs.practice.tsx': { prefix: 'ccs-prac', itemVar: 'practice' },
  'src/routes/track.fullstack.videos.tsx': { prefix: 'fs-vid', itemVar: 'video' },
  'src/routes/track.fullstack.notes.tsx': { prefix: 'fs-notes', itemVar: 'note' },
  'src/routes/track.fullstack.practice.tsx': { prefix: 'fs-prac', itemVar: 'practice' },
  'src/routes/track.ai-ml.videos.tsx': { prefix: 'aiml-vid', itemVar: 'video' },
  'src/routes/track.ai-ml.notes.tsx': { prefix: 'aiml-notes', itemVar: 'note' },
  'src/routes/track.ai-ml.practice.tsx': { prefix: 'aiml-prac', itemVar: 'practice' },
  'src/routes/track.git-linux.videos.tsx': { prefix: 'gl-vid', itemVar: 'video' },
  'src/routes/track.git-linux.notes.tsx': { prefix: 'gl-notes', itemVar: 'note' },
  'src/routes/track.git-linux.practice.tsx': { prefix: 'gl-prac', itemVar: 'practice' },
  'src/routes/track.cloud-devops.videos.tsx': { prefix: 'cd-vid', itemVar: 'video' },
  'src/routes/track.cloud-devops.notes.tsx': { prefix: 'cd-notes', itemVar: 'note' },
  'src/routes/track.cloud-devops.practice.tsx': { prefix: 'cd-prac', itemVar: 'practice' },
  'src/routes/track.math.videos.tsx': { prefix: 'math-vid', itemVar: 'video' },
  'src/routes/track.math.notes.tsx': { prefix: 'math-notes', itemVar: 'note' },
  'src/routes/track.math.practice.tsx': { prefix: 'math-prac', itemVar: 'practice' },
  'src/routes/track.data-science.videos.tsx': { prefix: 'ds-vid', itemVar: 'video' },
  'src/routes/track.data-science.notes.tsx': { prefix: 'ds-notes', itemVar: 'note' },
  'src/routes/track.data-science.practice.tsx': { prefix: 'ds-prac', itemVar: 'practice' },
};

let done = [], failed = [];

for (const [file, cfg] of Object.entries(config)) {
  try {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Change toggleFav(x.url) -> toggleFav(x.id)
    content = content.replace(
      new RegExp(`toggleFav\\(${cfg.itemVar}\\.url\\)`, 'g'),
      `toggleFav(${cfg.itemVar}.id)`
    );
    // 2. Change favIds.has(x.url) -> favIds.has(x.id)
    content = content.replace(
      new RegExp(`favIds\\.has\\(${cfg.itemVar}\\.url\\)`, 'g'),
      `favIds.has(${cfg.itemVar}.id)`
    );

    // 3. Add id field to each item in the data arrays
    // Find the data array (e.g., videoGroups, noteGroups, practiceGroups)
    // and add id to each item object
    const lines = content.split('\n');
    const newLines = [];
    let inItemsArray = false;
    let braceDepth = 0;
    let inObject = false;
    let objectStartLine = -1;
    let groupIdx = 0;
    let itemIdx = 0;
    let currentObjectLines = [];
    let hasIdField = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Detect items: [ start
      if (trimmed === 'items: [') {
        inItemsArray = true;
        groupIdx++;
        itemIdx = 0;
        newLines.push(line);
        continue;
      }

      if (inItemsArray) {
        // Track brace depth
        for (const ch of line) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }

        // Detect start of a new item object
        if (braceDepth === 1 && trimmed.startsWith('{')) {
          inObject = true;
          currentObjectLines = [line];
          hasIdField = false;
          objectStartLine = i;
          continue;
        }

        if (inObject) {
          currentObjectLines.push(line);

          // Check if this line has an id field
          if (trimmed.startsWith('id:')) {
            hasIdField = true;
          }

          // Detect end of object (braceDepth back to 0 for this object)
          if (braceDepth === 0 && (trimmed === '},' || trimmed === '}')) {
            inObject = false;

            if (!hasIdField) {
              // Add id field after the title line
              const id = `${cfg.prefix}-${groupIdx}-${itemIdx}`;
              const objContent = currentObjectLines.join('\n');

              // Find the title line and add id after it
              const objLines = objContent.split('\n');
              const rebuilt = [];
              let titleAdded = false;
              for (const ol of objLines) {
                rebuilt.push(ol);
                if (!titleAdded && ol.trim().startsWith('title:')) {
                  // Get the indentation from the title line
                  const indent = ol.match(/^(\s*)/)[1] + '  ';
                  rebuilt.push(`${indent}id: "${id}",`);
                  titleAdded = true;
                }
              }
              newLines.push(rebuilt.join('\n'));
            } else {
              newLines.push(currentObjectLines.join('\n'));
            }

            itemIdx++;
            currentObjectLines = [];
            continue;
          }

          continue;
        }

        // Detect end of items array
        if (braceDepth === 0 && (trimmed === '],' || trimmed === ']')) {
          inItemsArray = false;
        }
      }

      newLines.push(line);
    }

    fs.writeFileSync(file, newLines.join('\n'), 'utf8');
    done.push(file);
  } catch (e) {
    failed.push(file + ': ' + e.message);
  }
}

console.log('Done:', done.length);
console.log('Failed:', failed.length);
if (failed.length) failed.forEach(f => console.log('  X', f));
