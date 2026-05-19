import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, BookOpenIcon, Code2Icon, GraduationCapIcon, BrainIcon, LayersIcon, TargetIcon, SparklesIcon, DatabaseIcon, ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";

export const Route = createFileRoute("/roadmap/system-design-engineer")({
  head: () => ({ meta: [{ title: "System Design / Backend Engineer Roadmap — MAANG Learn X" }, { name: "description", content: "Complete System Design / Backend Engineer roadmap for 2026." }] }),
  component: SystemDesignRoadmapPage,
});

const phases = [
  { label:" 3 MONTH",title:"Beginner → Intermediate",goal:"Build strong backend + database + API foundations.",accent:"text-primary",
    months:[
      {emoji:"📅",title:"MONTH 1 — Programming + Backend Basics",learn:[{icon:"🐍",text:"Programming — Python (FastAPI/Django) OR JavaScript (Node.js)"},{icon:"🖥",text:"Backend Basics — Servers, HTTP/HTTPS, APIs, JSON"},{icon:"🗄",text:"Database Basics — SQL, CRUD Operations"}],resources:[{label:"Node.js Docs",icon:Code2Icon,url:"https://nodejs.org/en/docs/"},{label:"FastAPI Docs",icon:Code2Icon,url:"https://fastapi.tiangolo.com"},{label:"SQLBolt",icon:DatabaseIcon,url:"https://sqlbolt.com"}],projects:["Notes API","User Authentication API","Blog Backend"]},
      {emoji:"📅",title:"MONTH 2 — Advanced APIs + Databases",learn:[{icon:"🔗",text:"APIs — REST APIs, Authentication, JWT, Middleware"},{icon:"🗄",text:"Databases — PostgreSQL/MySQL, MongoDB Basics"},{icon:"🔐",text:"Security — Password hashing, API security"}],resources:[{label:"PostgreSQL Tutorial",icon:DatabaseIcon,url:"https://www.postgresqltutorial.com"},{label:"MongoDB University",icon:DatabaseIcon,url:"https://learn.mongodb.com"}],projects:["Task Manager API","Authentication System","RESTful Backend"]},
      {emoji:"📅",title:"MONTH 3 — System Design Basics",learn:[{icon:"🏗",text:"System Design Fundamentals — Load Balancer, Caching, CDN, Scaling"},{icon:"⚡",text:"Backend Optimization — Async Programming, Rate Limiting"}],resources:[{label:"Gaurav Sen",icon:LayersIcon,url:"https://www.youtube.com/@GauravSen"},{label:"ByteByteGo",icon:BookOpenIcon,url:"https://bytebytego.com"}],projects:["URL Shortener","Chat Backend","File Upload Service"]},
    ],
    result:["✅ Backend Fundamentals","✅ APIs Strong","✅ Database Basics","✅ Intro to System Design","✅ Backend Projects"],
    opportunities:["Backend Internship","Junior Backend Roles"],
  },
  { label:" 6 MONTH",title:"Intermediate → Industry Ready",goal:"Become job-ready Backend/System Engineer.",accent:"text-accent",
    months:[
      {emoji:"📅",title:"MONTH 4 — Advanced Backend Engineering",learn:[{icon:"🖥",text:"Advanced Backend — WebSockets, Queues, Background Jobs"},{icon:"⚡",text:"Performance — Database Optimization, Query Optimization"},{icon:"🧠",text:"Architecture — MVC, Clean Architecture"}],resources:[{label:"System Design Primer",icon:LayersIcon,url:"https://github.com/donnemartin/system-design-primer"}],projects:["Real-Time Chat App","Notification System","Queue-based Backend"]},
      {emoji:"📅",title:"MONTH 5 — Distributed Systems + Cloud",learn:[{icon:"🏗",text:"Distributed Systems — Microservices, Message Queues, Event-driven"},{icon:"☁",text:"Cloud — AWS Basics, Docker, CI/CD Intro"}],resources:[{label:"AWS Skill Builder",icon:SparklesIcon,url:"https://aws.amazon.com/training/digital"},{label:"Docker Docs",icon:Code2Icon,url:"https://docs.docker.com"}],projects:["Dockerized Backend","API Gateway","Scalable Backend Service"]},
      {emoji:"📅",title:"MONTH 6 — Advanced System Design + Interview Prep",learn:[{icon:"🏗",text:"System Design — Design Twitter, Design Netflix, Design WhatsApp"},{icon:"💼",text:"Career Prep — Resume, LinkedIn, Mock Interviews"}],resources:[{label:"ByteByteGo",icon:LayersIcon,url:"https://bytebytego.com"}],projects:["Scalable Chat Backend","API Gateway System","Notification Service","Distributed File Storage System"]},
    ],
    result:["✅ Backend Development Strong","✅ System Design Basics","✅ Distributed Systems Intro","✅ Cloud & Docker Basics","✅ Production Backend Projects"],
    opportunities:["₹10–25 LPA opportunities","Backend Engineer roles","Product startups","Remote backend work"],
  },
  { label:" 1 YEAR",title:"Advanced → High Paying Backend Engineer",goal:"Become advanced Backend/System Design Engineer.",accent:"text-success",
    months:[
      {emoji:"📅",title:"MONTHS 7–9 — Enterprise Backend Engineering",learn:[{icon:"🏗",text:"Advanced Distributed Systems — Kafka, Event Streaming, Service Discovery"},{icon:"⚡",text:"Scalability — Horizontal Scaling, Database Sharding, Redis Caching"}],resources:[{label:"System Design Primer GitHub",icon:LayersIcon,url:"https://github.com/donnemartin/system-design-primer"}],projects:["Distributed Chat System","Event-driven Architecture","High-scale Backend"]},
      {emoji:"📅",title:"MONTHS 10–12 — FAANG-Level System Design",learn:[{icon:"🧠",text:"Advanced Design — CAP Theorem, Consistency Models, High Availability"},{icon:"☁",text:"Production Cloud — Kubernetes Basics, Monitoring, Logging"}],resources:[{label:"ByteByteGo",icon:LayersIcon,url:"https://bytebytego.com"}],projects:["Enterprise Backend Platform","Distributed Chat System","Scalable API Architecture","Event-driven Backend","System Design Case Studies"]},
    ],
    result:["✅ FAANG-Level System Design","✅ Distributed Systems Expert","✅ Production Architecture","✅ Enterprise Portfolio"],
    opportunities:["₹20–40+ LPA roles","Senior Backend Engineer","System Design Engineer","Staff Engineer"],
  },
];
const mustMaster=["APIs","Databases","System Design","Distributed Systems","Caching","Docker","Cloud Basics","Backend Optimization"];

function SystemDesignRoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur"><LayersIcon className="h-3 w-3 text-primary" />Role-Based Roadmap</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">System Design / Backend <span className="text-gradient">Engineer</span></h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Backend + Databases + APIs + Distributed Systems + Scalability</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">{["Backend Engineer roles","System Design Engineer roles","Distributed Systems Engineer roles","FAANG Backend roles"].map(t=><Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>)}</div>
      </section>
      <div className="space-y-8">{phases.map((phase)=>(
        <Card key={phase.label} className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6 md:p-8">
          <div className="mb-6"><div className={`text-xs font-bold uppercase tracking-[0.15em] ${phase.accent} mb-1`}>{phase.label}</div><h2 className="text-xl sm:text-2xl font-bold mb-1">{phase.title}</h2><p className="text-sm text-muted-foreground">{phase.goal}</p></div>
          <div className="space-y-6">{phase.months.map((m)=>(
            <div key={m.title} className="rounded-xl border border-border bg-background/40 p-4 sm:p-5">
              <h3 className="font-bold text-sm sm:text-base mb-3">{m.emoji} {m.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">✅ Learn</h4><ul className="space-y-1.5">{m.learn.map((i)=><li key={i.text} className="flex items-start gap-2 text-xs text-muted-foreground"><span className="shrink-0">{i.icon}</span><span>{i.text}</span></li>)}</ul></div>
                <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">📚 Resources</h4><ul className="space-y-1.5">{m.resources.map((r)=>{const RI=r.icon;return <li key={r.label}><a href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group"><RI className="h-3 w-3 shrink-0 mt-0.5 text-primary" /><span className="group-hover:underline">{r.label}</span><ExternalLinkIcon className="h-2.5 w-2.5 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>})}</ul></div>
                <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">🛠 Build</h4><ul className="space-y-1.5">{m.projects.map((p)=><li key={p} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckIcon className="h-3 w-3 shrink-0 mt-0.5 text-success" /><span>{p}</span></li>)}</ul></div>
              </div>
            </div>
          ))}</div>
          <div className="mt-6 rounded-xl border border-success/20 bg-success/[0.06] p-4 sm:p-5"><h4 className="text-xs font-bold uppercase tracking-wider text-success mb-2"> RESULT</h4><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-3">{phase.result.map((r)=><p key={r} className="text-xs text-muted-foreground">{r}</p>)}</div><div className="flex flex-wrap gap-2">{phase.opportunities.map((o)=><Badge key={o} variant="outline" className="text-[10px] font-medium text-success border-success/30">{o}</Badge>)}</div></div>
        </Card>
      ))}</div>
      <section className="mt-10 mb-8"><Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6"><div className="absolute inset-0 bg-gradient-to-r from-warning/[0.06] to-transparent pointer-events-none" /><div className="relative z-10"><h3 className="text-lg font-bold mb-1"> MOST IMPORTANT SKILLS FOR HIGH PAY</h3><p className="text-xs text-muted-foreground mb-4">MUST MASTER:</p><div className="flex flex-wrap gap-2">{mustMaster.map((s)=><span key={s} className="inline-flex items-center rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-semibold text-foreground">{s}</span>)}</div></div></Card></section>
      <section className="text-center"><Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border"><h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become a Backend Engineer?</h3><p className="text-sm text-muted-foreground mb-5 max-w-md">Start with backend fundamentals and build your way up to FAANG-level system design.</p><div className="flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0"><Link to="/track/$slug" params={{slug:"system-design"}}>Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/roadmaps">View All Roadmaps</Link></Button></div></Card></section>
    </div>
  );
}
