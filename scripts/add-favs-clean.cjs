const fs = require('fs');

// These files already have HeartIcon from the previous successful import fix.
// We just need to add: useFavorites import, hook call, and heart button in JSX.

const files = [
  'src/routes/track.dsa.videos.tsx',
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
];

let done = [], skipped = [], failed = [];

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Skip if already processed
    if (content.includes('useFavorites')) {
      skipped.push(file);
      continue;
    }
    
    // 1. Add HeartIcon to import - find the last import from icons and add HeartIcon
    content = content.replace(
      /} from "@\/components\/icons";/,
      '  HeartIcon,\n} from "@/components/icons";'
    );
    
    // 2. Add useFavorites import after the icons import
    content = content.replace(
      '} from "@/components/icons";\n',
      '} from "@/components/icons";\nimport { useFavorites } from "@/hooks/use-favorites";\n'
    );
    
    // 3. Add hook call inside the component function
    // Find "function XXPage() {" and add hook after it
    content = content.replace(
      /(function \w+Page\(\) \{)/,
      '$1\n  const { favIds, toggle: toggleFav } = useFavorites();'
    );
    
    // 4. Add heart button to the h3 title area
    // Videos: group-hover/vid ... video.title}
    content = content.replace(
      /(<h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover\/vid:text-primary transition-colors mb-1\.5">\{video\.title\}<\/h3>)/,
      `<div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/vid:text-primary transition-colors flex-1">{video.title}</h3><button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(video.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(video.url) ? "Remove from Favorites" : "Add to Favorites"}><HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(video.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} /></button></div>`
    );
    
    // Notes: group-hover/note ... note.title}
    content = content.replace(
      /(<h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover\/note:text-primary transition-colors mb-1\.5">\{note\.title\}<\/h3>)/,
      `<div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/note:text-primary transition-colors flex-1">{note.title}</h3><button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(note.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(note.url) ? "Remove from Favorites" : "Add to Favorites"}><HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(note.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} /></button></div>`
    );
    
    // Practice: group-hover/prac ... practice.title}
    content = content.replace(
      /(<h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover\/prac:text-primary transition-colors mb-1\.5">\{practice\.title\}<\/h3>)/,
      `<div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/prac:text-primary transition-colors flex-1">{practice.title}</h3><button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(practice.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(practice.url) ? "Remove from Favorites" : "Add to Favorites"}><HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(practice.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} /></button></div>`
    );
    
    fs.writeFileSync(file, content, 'utf8');
    done.push(file);
  } catch (e) {
    failed.push(file + ': ' + e.message);
  }
}

console.log('Done:', done.length);
console.log('Skipped:', skipped.length);
console.log('Failed:', failed.length);
done.forEach(f => console.log('  +', f));
skipped.forEach(f => console.log('  ~', f));
if (failed.length) failed.forEach(f => console.log('  X', f));
