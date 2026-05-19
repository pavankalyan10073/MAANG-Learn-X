import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, BookOpenIcon, Code2Icon, GraduationCapIcon, BrainIcon, LayersIcon, TargetIcon, BriefcaseIcon, SparklesIcon, DatabaseIcon, ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";

export const Route = createFileRoute("/roadmap/sde")({
  head: () => ({
    meta: [
      { title: "SDE Roadmap — MAANG Learn X" },
      { name: "description", content: "Complete Software Development Engineer (SDE) roadmap for 2026. DSA + Development + System Design + Core CS + Projects." },
    ],
  }),
  component: SDERoadmapPage,
});

const phases = [
  {
    label: " 3 MONTH", title: "Beginner → Intermediate", goal: "Build strong coding foundations + start solving DSA + basic development.", accent: "text-primary",
    months: [
      { emoji: "📅", title: "MONTH 1 — Programming + DSA Basics", learn: [{icon:"🐍",text:"Programming Language — Python (Recommended) OR Java/C++"},{icon:"⚡",text:"DSA Basics — Arrays, Strings, Sorting, Hashing, Recursion"},{icon:"💻",text:"Git & GitHub — Git basics, Push/Pull, Branching"}], resources:[{label:"Python Full Course - freeCodeCamp",icon:Code2Icon,url:"https://www.youtube.com/watch?v=rfscVS0vtbw"},{label:"Striver A2Z DSA Sheet",icon:TargetIcon,url:"https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"},{label:"Git & GitHub Crash Course",icon:BookOpenIcon,url:"https://www.youtube.com/watch?v=RGOj5yH7evk"}], projects:["Calculator App","To-Do App","Student Management System"] },
      { emoji: "📅", title: "MONTH 2 — Intermediate DSA + Frontend", learn: [{icon:"⚡",text:"DSA Intermediate — Linked List, Stack, Queue, Binary Search, Sliding Window"},{icon:"🌐",text:"Frontend Development — HTML, CSS, JavaScript, DOM"}], resources:[{label:"The Odin Project",icon:BookOpenIcon,url:"https://www.theodinproject.com"},{label:"freeCodeCamp Web Dev",icon:Code2Icon,url:"https://www.freecodecamp.org/learn/2022/responsive-web-design/"}], projects:["Portfolio Website","Weather App","Notes App"] },
      { emoji: "📅", title: "MONTH 3 — Trees + React + Core CS Intro", learn: [{icon:"⚡",text:"Advanced DSA — Trees, BST, Heaps, Graph Basics"},{icon:"⚛",text:"React.js — Components, Hooks, Routing"},{icon:"🧠",text:"Core CS Basics — OOPs, DBMS Intro"}], resources:[{label:"React Docs",icon:Code2Icon,url:"https://react.dev"},{label:"CodeHelp DBMS Playlist",icon:DatabaseIcon,url:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"}], projects:["React Dashboard","Expense Tracker","Blog App"] },
    ],
    result:["✅ DSA Basics Strong","✅ Frontend Projects","✅ React Basics","✅ GitHub Portfolio Started"],
    opportunities:["Web Dev Internship","Beginner SDE Internship"],
  },
  {
    label: " 6 MONTH", title: "Intermediate → Placement Ready", goal: "Become internship/job ready for product companies.", accent: "text-accent",
    months: [
      { emoji: "📅", title: "MONTH 4 — Graphs + Backend Development", learn: [{icon:"⚡",text:"DSA — Graphs, BFS/DFS, Greedy"},{icon:"🖥",text:"Backend — Node.js, Express.js, REST APIs"},{icon:"🗄",text:"Database — MongoDB, SQL Basics"}], resources:[{label:"Node.js Docs",icon:Code2Icon,url:"https://nodejs.org/en/docs/"},{label:"MongoDB University",icon:DatabaseIcon,url:"https://learn.mongodb.com"}], projects:["Authentication System","Task Manager API","Chat App Backend"] },
      { emoji: "📅", title: "MONTH 5 — Dynamic Programming + Full Stack", learn: [{icon:"⚡",text:"DSA Advanced — Dynamic Programming, Backtracking, Tries"},{icon:"🌐",text:"Full Stack — MERN Stack, Authentication, Firebase"}], resources:[{label:"Striver DP Series",icon:TargetIcon,url:"https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY"},{label:"MERN Stack Course",icon:Code2Icon,url:"https://www.youtube.com/watch?v=7CqJlxBYj-M"}], projects:["Full Stack E-commerce App","AI Integrated Website","Internship Portal"] },
      { emoji: "📅", title: "MONTH 6 — System Design + Interview Prep", learn: [{icon:"🏗",text:"System Design — Load Balancer, Caching, Databases, API Design"},{icon:"💼",text:"Interview Prep — Resume, Mock Interviews, Behavioral Questions"}], resources:[{label:"Gaurav Sen",icon:LayersIcon,url:"https://www.youtube.com/@GauravSen"},{label:"ByteByteGo",icon:BookOpenIcon,url:"https://bytebytego.com"}], projects:["Full Stack SaaS","Real-time Chat App","AI Integrated Web App","Placement Portal"] },
    ],
    result:["✅ Strong DSA","✅ Full Stack Development","✅ Backend APIs","✅ System Design Basics","✅ Placement Ready Portfolio"],
    opportunities:["₹8–20 LPA internships/jobs","Product startups","Remote development roles"],
  },
  {
    label: " 1 YEAR", title: "Advanced → FAANG Ready", goal: "Become FAANG-level SDE.", accent: "text-success",
    months: [
      { emoji: "📅", title: "MONTHS 7–9 — Advanced Engineering", learn: [{icon:"⚡",text:"DSA Mastery — LeetCode Medium/Hard, Competitive Patterns"},{icon:"🏗",text:"Advanced Backend — Microservices, WebSockets, Redis, Kafka Basics"},{icon:"☁",text:"Cloud — AWS, Docker, CI/CD"}], resources:[{label:"LeetCode",icon:TargetIcon,url:"https://leetcode.com"},{label:"AWS Skill Builder",icon:SparklesIcon,url:"https://aws.amazon.com/training/digital"}], projects:["Scalable SaaS Platform","Real-Time Collaboration App","Distributed Backend System"] },
      { emoji: "📅", title: "MONTHS 10–12 — FAANG Interview Preparation", learn: [{icon:"💻",text:"DSA — 300+ Problems"},{icon:"🏗",text:"System Design — Design Twitter, Design Netflix, Design Uber"},{icon:"🧠",text:"Core CS — OS, DBMS, CN, OOPs"}], resources:[{label:"Striver A2Z DSA Sheet",icon:Code2Icon,url:"https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"},{label:"ByteByteGo",icon:LayersIcon,url:"https://bytebytego.com"}], projects:["Enterprise Full Stack App","AI SaaS Platform","Real-Time Chat System","Cloud Deployment Project","System Design Case Studies"] },
    ],
    result:["✅ FAANG Ready","✅ 300+ DSA Problems","✅ System Design Mastery","✅ Strong Portfolio"],
    opportunities:["FAANG SDE roles","Top product companies","Remote global opportunities"],
  },
];

const mustMaster = ["DSA","React","Backend APIs","Databases","System Design","Cloud Basics","Problem Solving","Projects"];

function SDERoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <Code2Icon className="h-3 w-3 text-primary" />Role-Based Roadmap
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Software Development <span className="text-gradient">Engineer</span></h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">DSA + Development + System Design + Core CS + Projects</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {["FAANG Companies","Product-Based Companies","High Paying Startups","Remote Software Engineering Roles"].map(t=><Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>)}
        </div>
      </section>
      <div className="space-y-8">
        {phases.map((phase)=>(
          <Card key={phase.label} className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6 md:p-8">
            <div className="mb-6">
              <div className={`text-xs font-bold uppercase tracking-[0.15em] ${phase.accent} mb-1`}>{phase.label}</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">{phase.title}</h2>
              <p className="text-sm text-muted-foreground">{phase.goal}</p>
            </div>
            <div className="space-y-6">
              {phase.months.map((month)=>(
                <div key={month.title} className="rounded-xl border border-border bg-background/40 p-4 sm:p-5">
                  <h3 className="font-bold text-sm sm:text-base mb-3">{month.emoji} {month.title}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">✅ Learn</h4><ul className="space-y-1.5">{month.learn.map((item)=><li key={item.text} className="flex items-start gap-2 text-xs text-muted-foreground"><span className="shrink-0">{item.icon}</span><span>{item.text}</span></li>)}</ul></div>
                    <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">📚 Resources</h4><ul className="space-y-1.5">{month.resources.map((res)=>{const RI=res.icon;return <li key={res.label}><a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group"><RI className="h-3 w-3 shrink-0 mt-0.5 text-primary" /><span className="group-hover:underline">{res.label}</span><ExternalLinkIcon className="h-2.5 w-2.5 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>})}</ul></div>
                    <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">🛠 Build</h4><ul className="space-y-1.5">{month.projects.map((p)=><li key={p} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckIcon className="h-3 w-3 shrink-0 mt-0.5 text-success" /><span>{p}</span></li>)}</ul></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-success/20 bg-success/[0.06] p-4 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-success mb-2"> RESULT</h4>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-3">{phase.result.map((r)=><p key={r} className="text-xs text-muted-foreground">{r}</p>)}</div>
              <div className="flex flex-wrap gap-2">{phase.opportunities.map((o)=><Badge key={o} variant="outline" className="text-[10px] font-medium text-success border-success/30">{o}</Badge>)}</div>
            </div>
          </Card>
        ))}
      </div>
      <section className="mt-10 mb-8">
        <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-warning/[0.06] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1"> MOST IMPORTANT SKILLS FOR HIGH PAY</h3>
            <p className="text-xs text-muted-foreground mb-4">MUST MASTER:</p>
            <div className="flex flex-wrap gap-2">{mustMaster.map((s)=><span key={s} className="inline-flex items-center rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-semibold text-foreground">{s}</span>)}</div>
          </div>
        </Card>
      </section>
      <section className="text-center">
        <Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become an SDE?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md">Start with DSA fundamentals and build your way up to FAANG-level software engineering roles.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0"><Link to="/track/$slug" params={{slug:"dsa"}}>Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/roadmaps">View All Roadmaps</Link></Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
