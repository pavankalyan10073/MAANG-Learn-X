import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, BookOpenIcon,
  NotebookIcon, SparklesIcon, MapIcon, LibraryIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/git-linux/notes")({
  head: () => ({
    meta: [
      { title: "Git, GitHub & Linux Full Notes — MAANG Learn X" },
      { name: "description", content: "Comprehensive Git, GitHub & Linux notes, cheat sheets, tutorials and documentation for interview prep." },
    ],
  }),
  component: GitLinuxNotesPage,
});

const noteGroups = [
  {
    label: "Git & GitHub — Tutorials & Guides",
    icon: "📖",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Git Tutorial — GeeksforGeeks", url: "https://www.geeksforgeeks.org/git/git-tutorial/", tag: "Tutorial", desc: "Complete Git tutorial covering all commands, branching, merging and workflows from basics to advanced", thumbIcon: "📖" },
      { title: "Git Branching — Interactive Visualizer", url: "https://learngitbranching.js.org/", tag: "Interactive", desc: "The most visual and interactive way to learn Git branching — step-by-step guided exercises", thumbIcon: "🌿" },
      { title: "Pro Git Book (Free)", url: "https://git-scm.com/book/en/v2", tag: "Book", desc: "The complete Pro Git book by Scott Chacon and Ben Straub — everything from basics to advanced Git internals", thumbIcon: "📕" },
      { title: "GitHub Docs — Official", url: "https://docs.github.com/", tag: "Docs", desc: "Official GitHub documentation — repositories, PRs, Actions, Pages, and all GitHub features explained", thumbIcon: "📝" },
    ],
  },
  {
    label: "Linux & Shell — Tutorials & Guides",
    icon: "🐧",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "Linux Tutorial — GeeksforGeeks", url: "https://www.geeksforgeeks.org/linux-unix/linux-tutorial/", tag: "Tutorial", desc: "Complete Linux tutorial — file system, commands, permissions, processes, shell scripting and system administration", thumbIcon: "🐧" },
      { title: "Linux Journey — Free Interactive Course", url: "https://linuxjourney.com/", tag: "Course", desc: "Free interactive Linux course covering fundamentals, command line, networking, security and more", thumbIcon: "🗺" },
      { title: "MIT Missing Semester — Shell & Tools", url: "https://missing.csail.mit.edu/", tag: "Course", desc: "MIT's famous Missing Semester — shell scripting, Vim, Git, debugging and developer tools you never learned in school", thumbIcon: "🎓" },
      { title: "Bash Cheatsheet — devhints.io", url: "https://devhints.io/bash", tag: "Cheatsheet", desc: "Quick-reference Bash cheatsheet — variables, loops, conditionals, string manipulation and one-liners", thumbIcon: "📋" },
    ],
  },
  {
    label: "Quick Reference & Cheat Sheets",
    icon: "⚡",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    thumbBg: "from-blue-600 to-indigo-700",
    items: [
      { title: "Git Cheat Sheet — GitHub Education", url: "https://education.github.com/git-cheat-sheet-education.pdf", tag: "PDF", desc: "Official GitHub Git cheat sheet — all essential commands at a glance", thumbIcon: "📄" },
      { title: "Linux Command Line — Full Guide", url: "https://linuxcommand.org/tlcl.php", tag: "Free Book", desc: "The Linux Command Line by William Shotts — free PDF covering shell, scripting and system administration", thumbIcon: "📖" },
      { title: "Oh My Zsh — Shell Customization", url: "https://ohmyz.sh/", tag: "Tool", desc: "Community-driven Zsh framework — 300+ plugins, beautiful themes and productivity boosters for your terminal", thumbIcon: "⚡" },
    ],
  },
];

const stats = [
  { icon: NotebookIcon, value: "10", label: "Resources" },
  { icon: MapIcon, value: "3", label: "Cheat Sheets" },
  { icon: LibraryIcon, value: "4", label: "Tutorials" },
];

function GitLinuxNotesPage() {
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "git-linux" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Git, GitHub & Linux Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/git-linux-sections/full-notes.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-semibold tracking-wider">NOTES & GUIDES</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Git, GitHub & Linux <span className="text-gradient">Full Notes</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Comprehensive notes, cheat sheets, tutorials and documentation for Git, GitHub & Linux — commands, workflows, branching strategies and shell scripting.</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm">
              {stats.map((s) => {
                const SI = s.icon;
                return (
                  <div key={s.label} className="rounded-xl border border-border bg-background/40 px-3 py-2.5 text-center">
                    <SI className="h-4 w-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {noteGroups.map((group, gIdx) => (
        <section key={gIdx} className="mb-10 last:mb-0">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">{group.icon}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{group.label}</h2>
              <p className="text-xs text-muted-foreground">{group.items.length} {group.items.length === 1 ? "resource" : "resources"}</p>
            </div>
          </div>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((note) => (
              <a key={note.url} href={note.url} target="_blank" rel="noopener noreferrer" className="group/note">
                <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.3)] h-full">
                  <div className={"absolute inset-0 bg-gradient-to-br " + group.gradient + " opacity-0 group-hover/note:opacity-100 transition-opacity duration-500"} />
                  <div className="relative z-10">
                    <div className={"relative h-36 sm:h-40 bg-gradient-to-br " + group.thumbBg + " flex items-center justify-center overflow-hidden"}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-lg rotate-12" />
                        <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-xl -rotate-6" />
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-4xl sm:text-5xl mb-1">{note.thumbIcon}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{note.tag}</div>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover/note:opacity-100 transition-all duration-300 translate-x-2 group-hover/note:translate-x-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <ExternalLinkIcon className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-[10px]">{note.tag}</Badge>
                      </div>
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/note:text-primary transition-colors flex-1">{note.title}</h3>{wishlistIds.has(note.url) ? (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); removeFromWishlist(note.url); }} className="shrink-0 p-1 rounded-md hover:bg-amber-500/10 transition-colors mt-0.5" title="Remove from Wishlist">
                              <BookmarkFilledIcon className="h-3.5 w-3.5 text-amber-400" />
                            </button>
                          ) : (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToWishlist(note.url, note.title); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title="Add to Wishlist">
                              <BookmarkPlusIcon className="h-3.5 w-3.5 text-muted-foreground hover:text-amber-400" />
                            </button>
                          )}</div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">{note.desc}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <BookOpenIcon className="h-3 w-3 text-emerald-400" />
                        <span>Open Resource</span>
                        <ExternalLinkIcon className="h-3 w-3 ml-auto opacity-0 group-hover/note:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
