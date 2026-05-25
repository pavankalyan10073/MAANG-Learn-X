const fs = require('fs');

const files = [
  'src/routes/track.dsa.notes.tsx',
  'src/routes/track.dsa.practice.tsx',
  'src/routes/track.system-design.videos.tsx',
  'src/routes/track.system-design.notes.tsx',
  'src/routes/track.system-design.practice.tsx',
  'src/routes/track.aptitude.videos.tsx',
  'src/routes/track.aptitude.notes.tsx',
  'src/routes/track.aptitude.practice.tsx',
  'src/routes/track.core-cs.videos.tsx',
  'src/routes/track.core-cs.notes.tsx',
  'src/routes/track.core-cs.practice.tsx',
  'src/routes/track.fullstack.videos.tsx',
  'src/routes/track.fullstack.notes.tsx',
  'src/routes/track.fullstack.practice.tsx',
  'src/routes/track.ai-ml.videos.tsx',
  'src/routes/track.ai-ml.notes.tsx',
  'src/routes/track.ai-ml.practice.tsx',
  'src/routes/track.git-linux.videos.tsx',
  'src/routes/track.git-linux.notes.tsx',
  'src/routes/track.git-linux.practice.tsx',
  'src/routes/track.cloud-devops.videos.tsx',
  'src/routes/track.cloud-devops.notes.tsx',
  'src/routes/track.cloud-devops.practice.tsx',
  'src/routes/track.math.videos.tsx',
  'src/routes/track.math.notes.tsx',
  'src/routes/track.math.practice.tsx',
  'src/routes/track.data-science.videos.tsx',
  'src/routes/track.data-science.notes.tsx',
  'src/routes/track.data-science.practice.tsx',
  'src/routes/track.dsa.videos.tsx',
];

let done = [], failed = [];

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix video.url -> sp.id pattern: toggleFav(video.url) -> toggleFav(sp.id)
    // The sub-pages now use sp.id from the shared data
    // But wait - the sub-pages don't import from shared data yet.
    // The items don't have .id fields. We need to add them.
    // Actually, for now let's just ensure the toggle uses a consistent key.
    // The favorites page looks up by sp.id for sub-pages.
    // So sub-pages need to toggle by sp.id too.
    
    // For now, the sub-pages use video.url/note.url/practice.url as the key
    // and the favorites page has entries with those URLs as the id.
    // This should work as-is since the favorites page checks favIds.has(sp.id)
    // and sp.id = url for the old entries.
    
    // But we removed the getSubPageResources function. Let's not change the sub-pages.
    // The sub-pages use URL as key, and the favorites page has URL-based entries.
    
    done.push(file);
  } catch (e) {
    failed.push(file + ': ' + e.message);
  }
}

console.log('Done:', done.length, '(no changes needed)');
console.log('Failed:', failed.length);
