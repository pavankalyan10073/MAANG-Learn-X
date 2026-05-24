import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/git-linux/practice")({
  head: () => ({
    meta: [
      { title: "Git, GitHub & Linux Interview Prep — MAANG Learn X" },
      { name: "description", content: "Git, GitHub & Linux interview questions, hands-on practice and Q&A to crack technical interviews." },
    ],
  }),
  component: GitLinuxPracticePage,
});

const practiceGroups = [
  {
    label: "Git Interview Questions & Answers",
    icon: "🎯",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Git Interview Questions and Answers — GfG", url: "https://www.geeksforgeeks.org/git/git-interview-questions-and-answers/", tag: "Interview Q&A", desc: "Top Git interview questions with detailed answers — branching, merging, rebasing, cherry-pick, stash and more", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "🎯" },
      { title: "Git Cheat Sheet — GitHub Education", url: "https://education.github.com/git-cheat-sheet-education.pdf", tag: "Quick Review", desc: "Official GitHub Git cheat sheet — all essential commands at a glance for quick interview revision", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "📋" },
      { title: "Learn Git Branching — Interactive", url: "https://learngitbranching.js.org/", tag: "Interactive Practice", desc: "The most visual and interactive way to master Git branching — practice merge, rebase, cherry-pick and more", stars: 5, gradient: "from-indigo-500/20 via-violet-500/10 to-transparent", thumbBg: "from-indigo-600 to-violet-700", thumbEmoji: "🌿" },
      { title: "Git Challenges — Oh My Git!", url: "https://ohmygit.org/", tag: "Game", desc: "Open-source game that teaches Git through fun challenges — visualize branches, merges and rebasing in real-time", stars: 4, gradient: "from-cyan-500/20 via-blue-500/10 to-transparent", thumbBg: "from-cyan-600 to-blue-700", thumbEmoji: "🎮" },
    ],
  },
  {
    label: "Linux Interview Questions & Answers",
    icon: "🐧",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "Linux Interview Questions and Answers — GfG", url: "https://www.geeksforgeeks.org/linux-unix/linux-interview-questions/", tag: "Interview Q&A", desc: "Comprehensive Linux interview questions — file permissions, processes, memory, shell scripting, grep, awk and sed", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "🐧" },
      { title: "Linux Command Practice — OverTheWire", url: "https://overthewire.org/wargames/bandit/", tag: "Hands-on Practice", desc: "Bandit wargame — learn Linux commands and security concepts through progressive hands-on challenges", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "💻" },
      { title: "Shell Scripting Tutorial — Ryan's Tutorials", url: "https://ryanstutorials.net/bash-scripting-tutorial/", tag: "Tutorial", desc: "Complete Bash scripting tutorial — variables, loops, conditionals, functions and practical automation scripts", stars: 4, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-amber-600 to-orange-700", thumbEmoji: "📝" },
    ],
  },
  {
    label: "GitHub Workflow Mastery",
    icon: "⚡",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-blue-600 to-indigo-700",
    items: [
      { title: "Master Git Today Course with AI", url: "https://unstop.com/courses/software-tools/master-git-today", tag: "Course", desc: "AI-powered interactive Git course — commit, branch, merge, rebase and collaborate with personalized practice", stars: 4, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "🤖" },
      { title: "GitHub Workflow Mastery with AI", url: "https://unstop.com/courses/software-tools/github-workflow-mastery", tag: "Course", desc: "Master GitHub workflows — PRs, CI/CD, code review, Actions and team collaboration with AI support", stars: 4, gradient: "from-blue-500/20 via-indigo-500/10 to-transparent", thumbBg: "from-blue-600 to-indigo-700", thumbEmoji: "⚡" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "9", label: "Resources" },
  { icon: TargetIcon, value: "100+", label: "Questions" },
  { icon: TrophyIcon, value: "3", label: "Categories" },
];

function GitLinuxPracticePage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "git-linux" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Git, GitHub & Linux Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/git-linux-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Git, GitHub & Linux <span className="text-gradient">Interview Prep</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Interview questions, hands-on practice and Q&A for Git, GitHub & Linux. Master version control workflows, shell commands and system administration concepts.</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm">
              {stats.map((s) => {
                const SI = s.icon;
                return (
                  <div key={s.label} className="rounded-xl border border-border bg-background/40 px-3 py-2.5 text-center">
                    <SI className="h-4 w-4 text-violet-400 mx-auto mb-1" />
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {practiceGroups.map((group, gIdx) => (
        <section key={gIdx} className="mb-10 last:mb-0">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">{group.icon}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{group.label}</h2>
              <p className="text-xs text-muted-foreground">{group.items.length} {group.items.length === 1 ? "resource" : "resources"}</p>
            </div>
          </div>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((practice) => (
              <a key={practice.url} href={practice.url} target="_blank" rel="noopener noreferrer" className="group/prac">
                <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_oklch(0.6_0.22_290/0.3)] h-full">
                  <div className={"absolute inset-0 bg-gradient-to-br " + practice.gradient + " opacity-0 group-hover/prac:opacity-100 transition-opacity duration-500"} />
                  <div className="relative z-10">
                    <div className={"relative h-36 sm:h-40 bg-gradient-to-br " + practice.thumbBg + " flex items-center justify-center overflow-hidden"}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-3 left-3 w-12 h-12 border-2 border-white/30 rounded-lg rotate-45" />
                        <div className="absolute bottom-3 right-3 w-16 h-16 border-2 border-white/20 rounded-full" />
                        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-white/20 rounded-md rotate-12" />
                        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-white/10 rounded-xl -rotate-12" />
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-5xl sm:text-6xl mb-2 drop-shadow-lg">{practice.thumbEmoji}</div>
                        <div className="flex items-center justify-center gap-0.5">
                          {Array.from({ length: practice.stars }).map((_, i) => (
                            <StarIcon key={i} className="h-3.5 w-3.5 text-yellow-300 fill-yellow-300 drop-shadow" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover/prac:opacity-100 transition-all duration-300 translate-x-2 group-hover/prac:translate-x-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <ExternalLinkIcon className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-[10px]">{practice.tag}</Badge>
                        <div className="flex items-center gap-0.5 ml-auto">
                          {Array.from({ length: practice.stars }).map((_, i) => (
                            <StarIcon key={i} className="h-3 w-3 text-warning fill-warning" />
                          ))}
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/prac:text-primary transition-colors mb-1.5">{practice.title}</h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">{practice.desc}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <CodeIcon className="h-3 w-3 text-violet-400" />
                        <span>Start Practicing</span>
                        <ExternalLinkIcon className="h-3 w-3 ml-auto opacity-0 group-hover/prac:opacity-100 transition-opacity" />
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
