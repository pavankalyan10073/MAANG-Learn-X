import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapIcon, ArrowRightIcon, RocketIcon, ClockIcon,
  CalendarDaysIcon, GraduationCapIcon, CheckIcon,
  BookOpenIcon, Code2Icon, BrainIcon, LayersIcon,
  TargetIcon, BriefcaseIcon, SparklesIcon, DatabaseIcon,
} from "@/components/icons";

export const Route = createFileRoute("/roadmaps")({
  head: () => ({
    meta: [
      { title: "Roadmaps — MAANG Learn X" },
      { name: "description", content: "Structured MAANG interview preparation plans for 2 month, 3 month, 6 month, and 1 year timelines." },
    ],
  }),
  component: RoadmapsPage,
});

const roadmaps = [
  {
    slug: "2-month",
    title: "2 Month Roadmap",
    tagline: "Fast-track prep for upcoming interviews",
    timeline: "2 Months",
    icon: RocketIcon,
    gradient: "from-primary/20 via-primary-glow/10 to-transparent",
    borderHover: "hover:border-primary/50",
    accentColor: "text-primary",
    glowColor: "shadow-glow",
    overview:
      "Designed for candidates with interviews starting soon. Focuses on the highest-yield DSA patterns, essential System Design concepts, and key behavioral frameworks to maximize your readiness in a short timeframe.",
    weeks: [
      {
        label: "Weeks 1–2",
        title: "Core DSA Patterns",
        items: [
          "Arrays, Strings, Two Pointers, Sliding Window",
          "Hash Maps, Prefix Sum, Kadane's Algorithm",
          "50+ must-do LeetCode problems (Easy/Medium)",
        ],
      },
      {
        label: "Weeks 3–4",
        title: "Advanced DSA & Patterns",
        items: [
          "Linked Lists, Stacks, Queues, Monotonic Stack",
          "Binary Trees, BST, LCA, Traversals",
          "Binary Search, Search Space problems",
        ],
      },
      {
        label: "Weeks 5–6",
        title: "Graphs, DP & Greedy",
        items: [
          "BFS, DFS, Topological Sort, Union-Find",
          "1D DP patterns: Knapsack, LIS, Edit Distance",
          "Greedy: Intervals, Jump Game, N-Queens",
        ],
      },
      {
        label: "Weeks 7–8",
        title: "System Design & Behavioral",
        items: [
          "HLD: Load Balancer, Caching, CDN, DB scaling",
          "LLD: Design patterns, OOD case studies",
          "STAR stories, Amazon LP, conflict & ownership",
        ],
      },
    ],
    resources: [
      { label: "Striver A2Z DSA Sheet", icon: Code2Icon },
      { label: "NeetCode 150", icon: TargetIcon },
      { label: "System Design Primer", icon: LayersIcon },
      { label: "Amazon Leadership Principles", icon: BriefcaseIcon },
    ],
  },
  {
    slug: "3-month",
    title: "3 Month Roadmap",
    tagline: "Balanced plan covering all interview rounds",
    timeline: "3 Months",
    icon: ClockIcon,
    gradient: "from-accent/20 via-primary/10 to-transparent",
    borderHover: "hover:border-accent/50",
    accentColor: "text-accent",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.7_0.18_180/0.4)]",
    overview:
      "A well-rounded plan that covers DSA, System Design, Core CS fundamentals, and behavioral preparation. Ideal for candidates targeting MAANG interviews in the next quarter with time for deeper understanding.",
    weeks: [
      {
        label: "Month 1",
        title: "DSA Foundations & Core Patterns",
        items: [
          "Arrays, Strings, Two Pointers, Sliding Window",
          "Linked Lists, Stacks, Queues, Hash Maps",
          "Trees, BST, Heaps, Binary Search",
          "80+ LeetCode problems with pattern recognition",
        ],
      },
      {
        label: "Month 2",
        title: "Advanced DSA & Core CS",
        items: [
          "Graphs: BFS, DFS, Dijkstra, MST, Topo Sort",
          "Dynamic Programming: 1D/2D, Knapsack, MCM",
          "OS: Processes, Threads, Scheduling, Deadlocks",
          "DBMS: Normalization, Indexing, ACID, SQL",
        ],
      },
      {
        label: "Month 3",
        title: "System Design & Behavioral",
        items: [
          "HLD: Design Twitter, WhatsApp, URL Shortener",
          "LLD: Parking Lot, Splitwise, BookMyShow",
          "Computer Networks: TCP/IP, HTTP, DNS, TLS",
          "STAR stories, Leadership Principles, mock interviews",
        ],
      },
    ],
    resources: [
      { label: "Striver DSA Playlists", icon: Code2Icon },
      { label: "OSTEP (Free OS Book)", icon: BookOpenIcon },
      { label: "GfG DBMS & CN", icon: DatabaseIcon },
      { label: "ByteByteGo System Design", icon: LayersIcon },
    ],
  },
  {
    slug: "6-month",
    title: "6 Month Roadmap",
    tagline: "Comprehensive prep with deep dives & projects",
    timeline: "6 Months",
    icon: CalendarDaysIcon,
    gradient: "from-success/20 via-accent/10 to-transparent",
    borderHover: "hover:border-success/50",
    accentColor: "text-success",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.4)]",
    overview:
      "A thorough preparation plan with time for deep dives into advanced topics, building portfolio projects, and extensive mock interviews. Perfect for candidates who want to build strong fundamentals while also preparing for specialized roles.",
    weeks: [
      {
        label: "Month 1–2",
        title: "DSA Mastery & Problem Solving",
        items: [
          "Complete topic-wise DSA with 150+ problems",
          "Pattern-based learning: Sliding Window, Two Pointers",
          "Advanced: Segment Trees, Tries, Bit Manipulation",
          "Weekly contests on LeetCode & Codeforces",
        ],
      },
      {
        label: "Month 3",
        title: "Core CS Deep Dive",
        items: [
          "OS: Memory Management, File Systems, Concurrency",
          "DBMS: Query Optimization, NoSQL, Distributed DBs",
          "Computer Networks: Socket Programming, REST, gRPC",
          "OOP: SOLID, Design Patterns, Clean Architecture",
        ],
      },
      {
        label: "Month 4",
        title: "System Design & Architecture",
        items: [
          "HLD: Design YouTube, Uber, Netflix, Dropbox",
          "Distributed Systems: Consensus, Sharding, Replication",
          "LLD: Design patterns in real-world scenarios",
          "Microservices, Event-Driven Architecture",
        ],
      },
      {
        label: "Month 5",
        title: "Projects & Specialization",
        items: [
          "Build 2-3 portfolio projects (MERN/Full Stack)",
          "Contribute to open-source projects",
          "Specialize: AI/ML, DevOps, or Backend track",
          "Git, CI/CD, Cloud deployment (AWS/Vercel)",
        ],
      },
      {
        label: "Month 6",
        title: "Mock Interviews & Polish",
        items: [
          "10+ mock interviews (technical + behavioral",
          "Resume refinement & LinkedIn optimization",
          "Company-specific preparation strategies",
          "Final revision of weak areas & confidence building",
        ],
      },
    ],
    resources: [
      { label: "LeetCode Contest", icon: TargetIcon },
      { label: "Designing Data-Intensive Applications", icon: BookOpenIcon },
      { label: "AWS Skill Builder", icon: SparklesIcon },
      { label: "Pramp Mock Interviews", icon: BriefcaseIcon },
    ],
  },
  {
    slug: "1-year",
    title: "1 Year Roadmap",
    tagline: "Master-level plan from fundamentals to expert",
    timeline: "1 Year",
    icon: GraduationCapIcon,
    gradient: "from-warning/20 via-success/10 to-transparent",
    borderHover: "hover:border-warning/50",
    accentColor: "text-warning",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.78_0.16_75/0.4)]",
    overview:
      "The ultimate MAANG preparation plan. Starts from programming fundamentals and builds up to expert-level System Design, AI/ML, and full-stack development. Ideal for students starting early or career switchers who want a complete transformation.",
    weeks: [
      {
        label: "Month 1–2",
        title: "Programming Foundations",
        items: [
          "Python/Java mastery: Syntax, OOP, Collections",
          "Data Structures: Arrays, Linked Lists, Stacks, Queues",
          "Basic Algorithms: Sorting, Searching, Recursion",
          "50+ beginner-friendly coding problems",
        ],
      },
      {
        label: "Month 3–4",
        title: "Intermediate DSA & Problem Solving",
        items: [
          "Trees, Graphs, Heaps, Tries, Segment Trees",
          "Dynamic Programming: All major patterns",
          "150+ LeetCode problems (Easy/Medium/Hard)",
          "Competitive programming introduction",
        ],
      },
      {
        label: "Month 5–6",
        title: "Core CS & System Design Basics",
        items: [
          "OS, DBMS, CN, OOP — complete theory",
          "SQL mastery: Window functions, CTEs, optimization",
          "System Design fundamentals: Scaling, Caching, LB",
          "Design patterns & clean code practices",
        ],
      },
      {
        label: "Month 7–8",
        title: "Advanced System Design & Projects",
        items: [
          "HLD: Design complex distributed systems",
          "LLD: Real-world OOD problems",
          "Build 3-4 full-stack portfolio projects",
          "Open-source contributions & tech blogging",
        ],
      },
      {
        label: "Month 9–10",
        title: "AI/ML & Specialization",
        items: [
          "ML Foundations: Regression, Classification, Trees",
          "Deep Learning: CNNs, RNNs, Transformers",
          "LLMs, RAG, Prompt Engineering, LangChain",
          "Choose specialization: Backend, ML, DevOps, etc.",
        ],
      },
      {
        label: "Month 11–12",
        title: "Interview Readiness & Placement Prep",
        items: [
          "20+ mock interviews (all round types)",
          "Resume, LinkedIn, portfolio finalization",
          "Company-specific prep: Amazon LP, Googleyness",
          "Aptitude, puzzles, and communication skills",
        ],
      },
    ],
    resources: [
      { label: "Andrew Ng ML Course", icon: BrainIcon },
      { label: "Alex Xu System Design", icon: LayersIcon },
      { label: "Clean Code (Robert Martin)", icon: BookOpenIcon },
      { label: "LeetCode & Codeforces", icon: Code2Icon },
    ],
  },
];

function RoadmapsPage() {
  return (
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <section className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <MapIcon className="h-3 w-3 text-primary" />
          Your path to MAANG, structured.
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Preparation <span className="text-gradient">Roadmaps</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose a timeline that matches your goals. Each roadmap is carefully designed to maximize your interview readiness.
        </p>
      </section>

      {/* Roadmap Cards */}
      <div className="space-y-8">
        {roadmaps.map((rm) => {
          const Icon = rm.icon;
          return (
            <Card
              key={rm.slug}
              className={`relative overflow-hidden bg-card/60 backdrop-blur border-border ${rm.borderHover} transition-all hover:shadow-glow`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${rm.gradient} pointer-events-none`} />

              <div className="relative z-10 p-6 md:p-8">
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary ${rm.glowColor}`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h2 className="text-2xl font-bold">{rm.title}</h2>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {rm.timeline}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{rm.tagline}</p>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                  {rm.overview}
                </p>

                {/* Timeline */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  {rm.weeks.map((week) => (
                    <div
                      key={week.label}
                      className="rounded-xl border border-border bg-background/40 p-4"
                    >
                      <div className={`text-xs font-semibold uppercase tracking-wider ${rm.accentColor} mb-1`}>
                        {week.label}
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{week.title}</h4>
                      <ul className="space-y-1.5">
                        {week.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckIcon className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${rm.accentColor}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Key Resources */}
                <div>
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Key Resources</h4>
                  <div className="flex flex-wrap gap-2">
                    {rm.resources.map((res) => {
                      const ResIcon = res.icon;
                      return (
                        <div
                          key={res.label}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          <ResIcon className="h-3.5 w-3.5 text-primary" />
                          {res.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Contact Us CTA */}
      <section className="mt-14 mb-14">
        <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-success/10 via-accent/5 to-primary/10 pointer-events-none" />
          <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-success/80 to-success shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.5)]">
                <i className="fa-brands fa-whatsapp text-2xl text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Need a Personalized Roadmap?</h3>
                <p className="text-sm text-muted-foreground">Get in touch with us on WhatsApp for a detailed, customized preparation plan tailored to your goals and timeline.</p>
              </div>
            </div>
            <a
              href="https://wa.me/919391485316?text=Hi%2C%20I%20want%20the%20detailed%20roadmaps%20to%20crack%20MAANG%20companies.%20Please%20share%20the%20complete%20preparation%20plan%20and%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-success to-success/80 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.4)] hover:shadow-[0_10px_50px_-10px_oklch(0.72_0.18_150/0.6)] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Contact Us
            </a>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="mt-14 text-center">
        <Card className="inline-block p-8 bg-card/60 backdrop-blur border-border">
          <h3 className="text-xl font-bold mb-2">Ready to start your journey?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md">
            Pick a track and begin preparing with curated resources, video solutions, and our AI tutor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0">
              <Link to="/track/$slug" params={{ slug: "dsa" }}>
                Start with DSA <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/tutor">Ask the AI Tutor</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
