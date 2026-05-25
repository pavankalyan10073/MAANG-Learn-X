import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon,
  HeartIcon,
} from "@/components/icons";
import { useFavorites } from "@/hooks/use-favorites";

export const Route = createFileRoute("/track/core-cs/practice")({
  head: () => ({
    meta: [
      { title: "Core CS Interview Prep — MAANG Learn X" },
      { name: "description", content: "Interview questions and practice resources for OS, DBMS, Computer Networks and OOPs." },
    ],
  }),
  component: CoreCSPracticePage,
});

const practiceGroups = [
  {
    label: "Operating System",
    icon: "🖥️",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "OS Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/operating-systems/commonly-asked-operating-systems-interview-questions/", tag: "Interview Q&A", desc: "Most asked OS interview questions — scheduling, deadlock, semaphores, paging, threads and process synchronization", stars: 5, gradient: "from-blue-500/20 via-cyan-500/10 to-transparent", thumbBg: "from-blue-600 to-cyan-700", thumbEmoji: "🖥️" },
      { title: "OS Interview Questions — InterviewBit", url: "https://www.interviewbit.com/operating-system-interview-questions/", tag: "Interview Q&A", desc: "Comprehensive OS interview questions with answers — CPU scheduling, memory management, deadlocks and file systems", stars: 4, gradient: "from-cyan-500/20 via-teal-500/10 to-transparent", thumbBg: "from-cyan-600 to-teal-700", thumbEmoji: "⚙️" },
    ],
  },
  {
    label: "Database Management System",
    icon: "🗄️",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "DBMS Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/dbms/commonly-asked-dbms-interview-questions/", tag: "Interview Q&A", desc: "Most asked DBMS interview questions — normalization, ACID, indexing, transactions, joins and SQL queries", stars: 5, gradient: "from-orange-500/20 via-red-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "🗄️" },
      { title: "DBMS Interview Questions — InterviewBit", url: "https://www.interviewbit.com/dbms-interview-questions/", tag: "Interview Q&A", desc: "DBMS interview questions with detailed answers — ER model, relational algebra, concurrency control and B+ trees", stars: 4, gradient: "from-amber-500/20 via-orange-500/10 to-transparent", thumbBg: "from-amber-600 to-orange-700", thumbEmoji: "📊" },
      { title: "Most Asked DBMS Questions — TUF", url: "https://takeuforward.org/dbms/most-asked-dbms-interview-questions", tag: "Interview Q&A", desc: "TakeUForward's most asked DBMS interview questions — SQL queries, normalization, indexing and transaction management", stars: 5, gradient: "from-red-500/20 via-pink-500/10 to-transparent", thumbBg: "from-red-600 to-pink-700", thumbEmoji: "📋" },
      { title: "SQL Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/sql/sql-interview-questions/", tag: "SQL Q&A", desc: "SQL interview questions — joins, subqueries, window functions, indexing, normalization and query optimization", stars: 4, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "💾" },
      { title: "Top SQL 50 — LeetCode Study Plan", url: "https://leetcode.com/studyplan/top-sql-50/", tag: "Practice Sheet", desc: "Crack SQL interviews with 50 essential problems — SELECT, JOINs, subqueries, window functions and advanced SQL patterns", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "🧠" },
      { title: "SQLZoo — Interactive SQL Practice", url: "https://sqlzoo.net/", tag: "Interactive", desc: "Interactive SQL practice platform — learn and practice SQL with real-time exercises and instant feedback", stars: 4, gradient: "from-teal-500/20 via-cyan-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "🐘" },
      { title: "10 SQL Project Ideas — GeeksforGeeks", url: "https://www.geeksforgeeks.org/blogs/sql-project-ideas/", tag: "Projects", desc: "Best SQL project ideas with source code — build real-world databases, analytics dashboards and data pipelines", stars: 3, gradient: "from-indigo-500/20 via-blue-500/10 to-transparent", thumbBg: "from-indigo-600 to-blue-700", thumbEmoji: "🏗️" },
    ],
  },
  {
    label: "Computer Networks",
    icon: "🌐",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "CN Interview Questions Set 1 — GeeksforGeeks", url: "https://www.geeksforgeeks.org/computer-networks/commonly-asked-computer-networks-interview-questions-set-1/", tag: "Interview Q&A", desc: "Most asked CN interview questions — OSI model, TCP vs UDP, IPv4/IPv6, routing algorithms, congestion control and Ethernet", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "🌐" },
      { title: "Networking Interview Questions — InterviewBit", url: "https://www.interviewbit.com/networking-interview-questions/", tag: "Interview Q&A", desc: "Networking interview questions with answers — HTTP, SMTP, FTP, DNS, TLS, routing protocols and network security", stars: 4, gradient: "from-emerald-500/20 via-teal-500/10 to-transparent", thumbBg: "from-emerald-600 to-teal-700", thumbEmoji: "🔗" },
    ],
  },
  {
    label: "Object-Oriented Programming (OOPs)",
    icon: "🧩",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-purple-600 to-violet-700",
    items: [
      { title: "OOPs Interview Questions — InterviewBit", url: "https://www.interviewbit.com/oops-interview-questions/", tag: "Interview Q&A", desc: "OOPs interview questions with answers — inheritance, polymorphism, abstraction, encapsulation, SOLID principles and design patterns", stars: 5, gradient: "from-purple-500/20 via-violet-500/10 to-transparent", thumbBg: "from-purple-600 to-violet-700", thumbEmoji: "🧩" },
      { title: "OOPs Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/interview-prep/oops-interview-questions/", tag: "Interview Q&A", desc: "Comprehensive OOPs interview prep — classes, objects, virtual functions, friend functions, constructors, destructors and exception handling", stars: 4, gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent", thumbBg: "from-violet-600 to-fuchsia-700", thumbEmoji: "🔷" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "11", label: "Resources" },
  { icon: TargetIcon, value: "200+", label: "Questions" },
  { icon: TrophyIcon, value: "4", label: "Subjects" },
];

function CoreCSPracticePage() {
  const { favIds, toggle: toggleFav } = useFavorites();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "core-cs" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Core CS Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/core-cs-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Core CS <span className="text-gradient">Interview Prep</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Curated interview questions for OS, DBMS, Computer Networks and OOPs. Practice 200+ questions across all Core CS topics to crack MAANG interviews.</p>
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
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/prac:text-primary transition-colors flex-1">{practice.title}</h3><button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(practice.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(practice.url) ? "Remove from Favorites" : "Add to Favorites"}><HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(practice.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} /></button></div>
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
