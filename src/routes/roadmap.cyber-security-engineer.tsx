import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, BookOpenIcon, Code2Icon, GraduationCapIcon, BrainIcon, LayersIcon, TargetIcon, SparklesIcon, DatabaseIcon, ArrowRightIcon, MapIcon, ExternalLinkIcon } from "@/components/icons";

export const Route = createFileRoute("/roadmap/cyber-security-engineer")({
  head: () => ({ meta: [{ title: "Cyber Security Engineer Roadmap — MAANG Learn X" }, { name: "description", content: "Complete Cyber Security Engineer roadmap for 2026." }] }),
  component: CyberSecurityRoadmapPage,
});

const phases = [
  { label:" 3 MONTH",title:"Beginner → Intermediate",goal:"Build strong networking + Linux + security foundations.",accent:"text-primary",
    months:[
      {emoji:"📅",title:"MONTH 1 — Networking + Linux Basics",learn:[{icon:"🌐",text:"Networking — IP Addressing, DNS, HTTP/HTTPS, TCP/IP, Ports"},{icon:"🐧",text:"Linux — Commands, File System, Permissions, SSH"},{icon:"🛠",text:"Basic Security — Firewalls, VPN, Encryption"}],resources:[{label:"Computer Networking Course",icon:LayersIcon,url:"https://www.youtube.com/watch?v=qiQR5rTSshw"},{label:"Linux Journey",icon:BookOpenIcon,url:"https://linuxjourney.com"}],projects:["Linux terminal practice","Configure virtual machine","Networking labs"]},
      {emoji:"📅",title:"MONTH 2 — Ethical Hacking + Web Security",learn:[{icon:"🔐",text:"Ethical Hacking — Reconnaissance, Vulnerability Scanning, Password Attacks"},{icon:"🌍",text:"Web Security — SQL Injection, XSS, CSRF, Authentication flaws"},{icon:"🧪",text:"Tools — Nmap, Burp Suite, Wireshark"}],resources:[{label:"TryHackMe",icon:GraduationCapIcon,url:"https://tryhackme.com"},{label:"PortSwigger Web Security Academy",icon:BookOpenIcon,url:"https://portswigger.net/web-security"}],projects:["Security Lab Setup","Vulnerability Reports","Web Security Testing Practice"]},
      {emoji:"📅",title:"MONTH 3 — Security Operations + Bug Bounty Basics",learn:[{icon:"🛡",text:"SOC Basics — Logs, SIEM Concepts, Threat Detection"},{icon:"🐞",text:"Bug Bounty — Recon tools, Reporting vulnerabilities"},{icon:"☁",text:"Cloud Security Intro — AWS Security Basics"}],resources:[{label:"HackerOne",icon:TargetIcon,url:"https://www.hackerone.com"},{label:"Hack The Box",icon:GraduationCapIcon,url:"https://www.hackthebox.com"}],projects:["Basic Security Reports","Bug Bounty Recon Practice","Security Checklist Projects"]},
    ],
    result:["✅ Linux Strong","✅ Networking Basics","✅ Web Security Understanding","✅ Ethical Hacking Intro","✅ Security Labs Experience"],
    opportunities:["Security Internship","SOC Analyst Internship"],
  },
  { label:" 6 MONTH",title:"Intermediate → Industry Ready",goal:"Become job-ready Cyber Security Engineer.",accent:"text-accent",
    months:[
      {emoji:"📅",title:"MONTH 4 — Advanced Web Security + Pen Testing",learn:[{icon:"🌍",text:"Web Pen Testing — Authentication Bypass, Session Security, API Security"},{icon:"🧪",text:"Security Tools — Metasploit, OWASP ZAP"}],resources:[{label:"PortSwigger Academy",icon:BookOpenIcon,url:"https://portswigger.net/web-security"}],projects:["Vulnerability Assessment Reports","Security Testing Labs"]},
      {emoji:"📅",title:"MONTH 5 — Cloud Security + Scripting",learn:[{icon:"☁",text:"Cloud Security — IAM, S3 Security, Security Groups"},{icon:"🐍",text:"Scripting — Python for Security Automation"}],resources:[{label:"AWS Security Docs",icon:SparklesIcon,url:"https://docs.aws.amazon.com/security/"}],projects:["Security Automation Scripts","Cloud Security Audit Practice"]},
      {emoji:"📅",title:"MONTH 6 — Portfolio + Certifications + Resume",learn:[{icon:"📜",text:"Certifications — Security+, CEH Basics"},{icon:"💼",text:"Career Prep — Resume, LinkedIn, GitHub"}],resources:[{label:"CompTIA Security+",icon:GraduationCapIcon,url:"https://www.comptia.org/certifications/security"}],projects:["Vulnerability Scanner","Security Monitoring Dashboard","Web Security Audit","Security Automation Scripts"]},
    ],
    result:["✅ Ethical Hacking Skills","✅ Security Tool Experience","✅ Web Security Knowledge","✅ Portfolio Projects","✅ Industry-Ready Foundations"],
    opportunities:["₹8–20 LPA opportunities","SOC Analyst roles","Junior Security Engineer","Bug Bounty freelancing"],
  },
  { label:" 1 YEAR",title:"Advanced → High Paying Security Engineer",goal:"Become advanced Cyber Security Engineer.",accent:"text-success",
    months:[
      {emoji:"📅",title:"MONTHS 7–9 — Advanced Security Engineering",learn:[{icon:"🔐",text:"Advanced — Malware Analysis, Reverse Engineering, Threat Hunting"},{icon:"☁",text:"Advanced Cloud Security — Kubernetes Security, DevSecOps"}],resources:[{label:"Hack The Box",icon:GraduationCapIcon,url:"https://www.hackthebox.com"}],projects:["Threat Detection System","Secure Cloud Architecture"]},
      {emoji:"📅",title:"MONTHS 10–12 — Enterprise Security + Red Teaming",learn:[{icon:"🛡",text:"Enterprise Security — SIEM, Incident Response, Security Architecture"},{icon:"🔴",text:"Red Team — Advanced Exploitation, Adversary Simulation"}],resources:[{label:"TryHackMe",icon:GraduationCapIcon,url:"https://tryhackme.com"}],projects:["Web Security Audit Platform","Security Monitoring System","Cloud Security Project","Threat Detection Dashboard","Security Automation Toolkit"]},
    ],
    result:["✅ Enterprise Security","✅ Red Team Skills","✅ Advanced Pen Testing","✅ Security Architecture"],
    opportunities:["₹15–35+ LPA roles","Senior Security Engineer","Red Team Lead","Security Architect"],
  },
];
const mustMaster=["Linux","Networking","Web Security","Cloud Security","Python Scripting","Security Tools","Threat Detection","Penetration Testing"];

function CyberSecurityRoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur"><MapIcon className="h-3 w-3 text-primary" />Role-Based Roadmap</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Cyber Security <span className="text-gradient">Engineer</span></h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Networking + Linux + Security + Ethical Hacking + Cloud Security</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">{["Cyber Security Engineer roles","Ethical Hacker roles","SOC Analyst roles","Penetration Tester roles"].map(t=><Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>)}</div>
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
      <section className="text-center"><Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border"><h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become a Cyber Security Engineer?</h3><p className="text-sm text-muted-foreground mb-5 max-w-md">Start with networking and Linux fundamentals and build your way up to advanced security engineering.</p><div className="flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0"><Link to="/">Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/roadmaps">View All Roadmaps</Link></Button></div></Card></section>
    </div>
  );
}
