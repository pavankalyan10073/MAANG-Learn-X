import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, BookOpenIcon, Code2Icon, GraduationCapIcon, BrainIcon, LayersIcon, TargetIcon, SparklesIcon, DatabaseIcon, ArrowRightIcon, WorkflowIcon, ExternalLinkIcon } from "@/components/icons";

export const Route = createFileRoute("/roadmap/fullstack-developer")({
  head: () => ({ meta: [{ title: "Full Stack Developer Roadmap — MAANG Learn X" }, { name: "description", content: "Complete Full Stack Developer roadmap for 2026." }] }),
  component: FullStackRoadmapPage,
});

const phases = [
  { label:" 3 MONTH",title:"Beginner → Intermediate",goal:"Build strong frontend foundations + basic projects.",accent:"text-primary",
    months:[
      {emoji:"📅",title:"MONTH 1 — Web Fundamentals",learn:[{icon:"🌐",text:"Frontend — HTML5, CSS3, Flexbox, Grid, Responsive Design"},{icon:"⚡",text:"JavaScript — Variables, Functions, DOM, Events, APIs"},{icon:"🛠",text:"Git & GitHub — Push/Pull, Branching"}],resources:[{label:"freeCodeCamp Web Development",icon:Code2Icon,url:"https://www.freecodecamp.org/learn/2022/responsive-web-design/"},{label:"The Odin Project",icon:BookOpenIcon,url:"https://www.theodinproject.com"},{label:"JavaScript Info",icon:Code2Icon,url:"https://javascript.info"}],projects:["Portfolio Website","Landing Page","Calculator App","Weather App"]},
      {emoji:"📅",title:"MONTH 2 — Advanced JavaScript + React.js",learn:[{icon:"⚛",text:"React.js — Components, Props, Hooks, State Management, Routing"},{icon:"🎨",text:"UI Libraries — Tailwind CSS, Framer Motion"}],resources:[{label:"React Docs",icon:Code2Icon,url:"https://react.dev"},{label:"Tailwind CSS Docs",icon:BookOpenIcon,url:"https://tailwindcss.com/docs"}],projects:["React Dashboard","Movie App","Notes App","Expense Tracker"]},
      {emoji:"📅",title:"MONTH 3 — Backend Basics + APIs",learn:[{icon:"🖥",text:"Backend — Node.js, Express.js"},{icon:"🔗",text:"APIs — REST APIs, CRUD Operations"},{icon:"🗄",text:"Database — MongoDB, Firebase"}],resources:[{label:"Node.js Docs",icon:Code2Icon,url:"https://nodejs.org/en/docs/"},{label:"MongoDB University",icon:DatabaseIcon,url:"https://learn.mongodb.com"}],projects:["Authentication System","Notes API","Blog Backend","Todo API"]},
    ],
    result:["✅ Frontend Strong","✅ React Basics","✅ Backend Intro","✅ Full Stack Basics","✅ Portfolio Started"],
    opportunities:["Frontend Internship","Web Development Internship"],
  },
  { label:" 6 MONTH",title:"Intermediate → Industry Ready",goal:"Become job-ready Full Stack Developer.",accent:"text-accent",
    months:[
      {emoji:"📅",title:"MONTH 4 — Full MERN Stack",learn:[{icon:"🌐",text:"MERN Stack — MongoDB, Express, React, Node"},{icon:"🔐",text:"Authentication — JWT, Firebase Auth"},{icon:"📦",text:"State Management — Context API, Redux Basics"}],resources:[{label:"MERN Stack Course",icon:Code2Icon,url:"https://www.youtube.com/watch?v=7CqJlxBYj-M"}],projects:["Full Stack Authentication App","Internship Portal","Social Media App"]},
      {emoji:"📅",title:"MONTH 5 — Advanced Backend + Deployment",learn:[{icon:"🖥",text:"Backend Advanced — Middleware, Error Handling, Security"},{icon:"☁",text:"Deployment — Vercel, Render, Netlify"},{icon:"🐳",text:"Docker Intro"}],resources:[{label:"Vercel Docs",icon:SparklesIcon,url:"https://vercel.com/docs"}],projects:["SaaS Dashboard","AI Integrated App","Real-time Chat App"]},
      {emoji:"📅",title:"MONTH 6 — System Design + Production Apps",learn:[{icon:"🏗",text:"Basics — Caching, Database Design, API Scaling"},{icon:"💼",text:"Career Prep — Resume, GitHub, Portfolio"}],resources:[{label:"System Design Primer",icon:LayersIcon,url:"https://github.com/donnemartin/system-design-primer"}],projects:["Full Stack SaaS Platform","AI Integrated Web App","Real-Time Chat Application","Internship Management Portal"]},
    ],
    result:["✅ Full MERN Stack","✅ Production-Level Apps","✅ Authentication Systems","✅ Deployment Knowledge","✅ Strong Portfolio"],
    opportunities:["₹8–20 LPA opportunities","Startup roles","Remote freelance work","Product company internships"],
  },
  { label:" 1 YEAR",title:"Advanced → High Paying Full Stack Engineer",goal:"Become advanced Full Stack/Product Engineer.",accent:"text-success",
    months:[
      {emoji:"📅",title:"MONTHS 7–9 — Advanced Engineering",learn:[{icon:"🖥",text:"Advanced Backend — WebSockets, Microservices, Redis, Queues"},{icon:"☁",text:"Cloud — AWS, Docker, CI/CD"},{icon:"⚡",text:"Performance — Optimization, Scalability"}],resources:[{label:"AWS Skill Builder",icon:SparklesIcon,url:"https://aws.amazon.com/training/digital"}],projects:["Scalable SaaS Product","Real-Time Collaboration Tool","AI Dashboard"]},
      {emoji:"📅",title:"MONTHS 10–12 — Product Engineering + System Design",learn:[{icon:"🏗",text:"Advanced System Design — Design scalable systems, Distributed architecture"},{icon:"🤖",text:"AI Integration — OpenAI APIs, AI Chatbots, AI Features"}],resources:[{label:"ByteByteGo",icon:LayersIcon,url:"https://bytebytego.com"}],projects:["Enterprise SaaS Product","AI Productivity Platform","Real-Time Communication System","Scalable Full Stack Architecture","AI Integrated Dashboard"]},
    ],
    result:["✅ Product Engineer","✅ AI Integration Skills","✅ Scalable Architecture","✅ Enterprise Portfolio"],
    opportunities:["₹15–35+ LPA roles","Senior Full Stack Engineer","Product Engineer","Tech Lead roles"],
  },
];
const mustMaster=["JavaScript","React","Node.js","APIs","MongoDB","Authentication","Deployment","System Design"];

function FullStackRoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur"><WorkflowIcon className="h-3 w-3 text-primary" />Role-Based Roadmap</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Full Stack <span className="text-gradient">Developer</span></h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">HTML + CSS + JavaScript + React + Node.js + Databases + Deployment</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">{["Full Stack Developer roles","Frontend + Backend Engineering","Startup/Product Development","SaaS Building","Remote Web Development"].map(t=><Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>)}</div>
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
      <section className="text-center"><Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border"><h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become a Full Stack Developer?</h3><p className="text-sm text-muted-foreground mb-5 max-w-md">Start with web fundamentals and build your way up to production-grade full stack applications.</p><div className="flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0"><Link to="/track/$slug" params={{slug:"fullstack"}}>Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/roadmaps">View All Roadmaps</Link></Button></div></Card></section>
    </div>
  );
}
