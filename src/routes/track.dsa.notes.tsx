import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, BookOpenIcon,
  NotebookIcon, SparklesIcon, MapIcon, LibraryIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/dsa/notes")({
  head: () => ({
    meta: [
      { title: "DSA Full Notes — MAANG Learn X" },
      { name: "description", content: "Comprehensive DSA notes, roadmaps, PDFs and theory resources." },
    ],
  }),
  component: DSANotesPage,
});

const noteGroups = [
  {
    label: "Complete Notes",
    icon: "📋",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Striver A2Z DSA Course Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", tag: "Sheet", desc: "The ultimate A2Z DSA sheet covering every topic systematically", thumbIcon: "📋" },
      { title: "GfG DSA Tutorial", url: "https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/", tag: "Tutorial", desc: "Complete DSA tutorial from GeeksforGeeks — theory + practice", thumbIcon: "🎓" },
      { title: "W3Schools DSA", url: "https://www.w3schools.com/dsa/", tag: "Tutorial", desc: "Beginner-friendly DSA tutorials with interactive examples", thumbIcon: "📝" },
      { title: "Array Introduction — GfG", url: "https://www.geeksforgeeks.org/dsa/introduction-to-arrays-data-structure-and-algorithm-tutorials/", tag: "Arrays", desc: "Deep dive into arrays — the foundation of all data structures", thumbIcon: "📖" },
    ],
  },
  {
    label: "Python Notes (Coddy)",
    icon: "📖",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "Python Theory Notes & Practice", url: "https://coddy.tech/courses/introduction_to_python", tag: "Python", desc: "Interactive Python course with hands-on practice exercises", thumbIcon: "🐍" },
      { title: "DSA with Python — GfG", url: "https://www.geeksforgeeks.org/dsa/python-data-structures-and-algorithms/", tag: "Guide", desc: "Comprehensive GeeksforGeeks guide for DSA in Python", thumbIcon: "📖" },
    ],
  },
  {
    label: "Important Patterns & 100 Questions",
    icon: "⚡",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    thumbBg: "from-blue-600 to-indigo-700",
    items: [
      { title: "14 Patterns PDF", url: "https://drive.google.com/file/d/1zlfPgS7qnZmqRLA7rHBtN5V1PXw5U1S5/view?pli=1", tag: "PDF", desc: "Master 14 essential coding patterns to crack any DSA interview", thumbIcon: "📖" },
      { title: "100 Days DSA Challenge Roadmap", url: "https://www.notion.so/100-Days-DSA-Challenge-With-complete-Roadmap-259b38ca942c80a58147cf84a61c64fb", tag: "Roadmap", desc: "Structured 100-day challenge with daily goals and milestones", thumbIcon: "📝" },
    ],
  },
  {
    label: "Roadmaps",
    icon: "🗺",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Roadmap.sh DSA", url: "https://roadmap.sh/datastructures-and-algorithms", tag: "Roadmap", desc: "Visual roadmap with step-by-step DSA learning path", thumbIcon: "🗺" },
      { title: "Python Roadmap — Basics to DSA", url: "https://maroon-gruyere-785.notion.site/26c518b3b8fe809cb484cbc36d57700f", tag: "Roadmap", desc: "Complete Notion roadmap from Python basics to advanced DSA", thumbIcon: "📝" },
    ],
  },
];

const stats = [
  { icon: NotebookIcon, value: "10", label: "Resources" },
  { icon: MapIcon, value: "2", label: "Roadmaps" },
  { icon: LibraryIcon, value: "4", label: "Tutorials" },
];

function DSANotesPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "dsa" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to DSA Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/dsa-sections/full-notes.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-semibold tracking-wider">NOTES & GUIDES</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">DSA <span className="text-gradient">Full Notes</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Comprehensive notes, roadmaps, PDFs and theory resources. Python-specific guides, pattern sheets and structured learning paths to master DSA.</p>
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
                      <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/note:text-primary transition-colors mb-1.5">{note.title}</h3>
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
