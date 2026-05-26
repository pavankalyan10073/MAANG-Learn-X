const fs = require('fs');

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
    const lines = content.split('\n');
    const newLines = [];

    let inItems = false;
    let groupIdx = 0;
    let itemIdx = 0;
    let foundTitleInItem = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Detect items: [
      if (trimmed === 'items: [') {
        inItems = true;
        groupIdx++;
        itemIdx = 0;
        foundTitleInItem = false;
        newLines.push(line);
        continue;
      }

      if (inItems) {
        // Check if this line contains title: (start of new item object)
        // Lines look like: { title: "...", url: "...", ... }
        if (!foundTitleInItem && /title:\s*"/.test(trimmed)) {
          foundTitleInItem = true;
          newLines.push(line);

          // Get indentation from this line
          const indent = line.match(/^(\s*)/)[1] + '  ';
          const id = `${cfg.prefix}-${groupIdx}-${itemIdx}`;
          newLines.push(`${indent}id: "${id}",`);
          itemIdx++;
          continue;
        }

        // Check if we're leaving an item (line ends with }, or })
        if (foundTitleInItem && (trimmed === '},' || trimmed === '},' || trimmed === '}')) {
          foundTitleInItem = false;
        }

        // Check if we're leaving the items array
        if (trimmed === '],' || trimmed === ']') {
          inItems = false;
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
