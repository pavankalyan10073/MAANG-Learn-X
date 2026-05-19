import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, BookOpenIcon, Code2Icon, GraduationCapIcon, BrainIcon, LayersIcon, TargetIcon, SparklesIcon, DatabaseIcon, ArrowRightIcon, CloudIcon, ExternalLinkIcon } from "@/components/icons";

export const Route = createFileRoute("/roadmap/cloud-devops-engineer")({
  head: () => ({ meta: [{ title: "Cloud & DevOps Engineer Roadmap — MAANG Learn X" }, { name: "description", content: "Complete Cloud & DevOps Engineer roadmap for 2026." }] }),
  component: CloudDevOpsRoadmapPage,
});

const phases = [
  { label:" 3 MONTH",title:"Beginner → Intermediate",goal:"Build strong Linux + Cloud + DevOps foundations.",accent:"text-primary",
    months:[
      {emoji:"📅",title:"MONTH 1 — Linux + Networking + Git",learn:[{icon:"🐧",text:"Linux — commands, file system, permissions, shell scripting"},{icon:"🌐",text:"Networking — IP, DNS, HTTP/HTTPS, Ports, SSH"},{icon:"🛠",text:"Git & GitHub — workflow, branching, pull requests"}],resources:[{label:"Linux Journey",icon:BookOpenIcon,url:"https://linuxjourney.com"},{label:"Computer Networking Course",icon:LayersIcon,url:"https://www.youtube.com/watch?v=qiQR5rTSshw"},{label:"Git & GitHub Crash Course",icon:Code2Icon,url:"https://www.youtube.com/watch?v=RGOj5yH7evk"}],projects:["Linux Scripts","GitHub Portfolio","Server Setup Practice"]},
      {emoji:"📅",title:"MONTH 2 — AWS + Cloud Basics",learn:[{icon:"☁️",text:"AWS Core Services — EC2, S3, IAM, VPC, Route53"},{icon:"🌍",text:"Cloud Concepts — Virtualization, Scaling, Load Balancers, Security"}],resources:[{label:"AWS Skill Builder",icon:SparklesIcon,url:"https://aws.amazon.com/training/digital"},{label:"Free AWS Course - freeCodeCamp",icon:Code2Icon,url:"https://www.youtube.com/watch?v=3hLmDS179YE"}],projects:["Host Static Website","Configure EC2 Server","Deploy React Website on AWS"]},
      {emoji:"📅",title:"MONTH 3 — Docker + CI/CD Basics",learn:[{icon:"🐳",text:"Docker — Containers, Dockerfile, Docker Compose"},{icon:"🔄",text:"CI/CD — GitHub Actions, Jenkins Basics"}],resources:[{label:"Docker Docs",icon:BookOpenIcon,url:"https://docs.docker.com"},{label:"TechWorld with Nana",icon:GraduationCapIcon,url:"https://www.youtube.com/@TechWorldwithNana"}],projects:["Dockerized Web App","Automated Deployment Pipeline"]},
    ],
    result:["✅ Linux Strong","✅ AWS Basics","✅ Docker Basics","✅ CI/CD Intro","✅ Beginner DevOps Projects"],
    opportunities:["Cloud Internship","DevOps Internship"],
  },
  { label:" 6 MONTH",title:"Intermediate → Industry Ready",goal:"Become job-ready Cloud & DevOps Engineer.",accent:"text-accent",
    months:[
      {emoji:"📅",title:"MONTH 4 — Kubernetes + Advanced Docker",learn:[{icon:"☸",text:"Kubernetes — Pods, Deployments, Services, Ingress"},{icon:"🐳",text:"Docker Advanced — Multi-stage builds, Volumes, Networking"}],resources:[{label:"Kubernetes Docs",icon:BookOpenIcon,url:"https://kubernetes.io/docs/home/"}],projects:["Deploy Multi-container App","Kubernetes Cluster Deployment"]},
      {emoji:"📅",title:"MONTH 5 — Infrastructure as Code + Monitoring",learn:[{icon:"🏗",text:"Infrastructure as Code — Terraform"},{icon:"📊",text:"Monitoring — Prometheus, Grafana"},{icon:"🔐",text:"Security — IAM Policies, Secrets Management"}],resources:[{label:"Terraform Docs",icon:Code2Icon,url:"https://developer.hashicorp.com/terraform/docs"}],projects:["AWS Infrastructure Automation","Monitoring Dashboard"]},
      {emoji:"📅",title:"MONTH 6 — Real DevOps Projects + Resume",learn:[{icon:"🏗",text:"Production Architecture — Auto Scaling, Load Balancers, CDN"},{icon:"💼",text:"Career Prep — Resume, LinkedIn, GitHub"}],resources:[{label:"AWS Skill Builder",icon:SparklesIcon,url:"https://aws.amazon.com/training/digital"}],projects:["CI/CD Pipeline","AWS Infrastructure Setup","Kubernetes Deployment","Monitoring Dashboard"]},
    ],
    result:["✅ Cloud Deployment Skills","✅ Kubernetes Knowledge","✅ CI/CD Pipelines","✅ Production Infrastructure Basics"],
    opportunities:["₹10–25 LPA roles","Cloud Engineer","DevOps Engineer","Platform Engineering"],
  },
  { label:" 1 YEAR",title:"Advanced → High Paying DevOps Engineer",goal:"Become advanced Cloud/Platform Engineer.",accent:"text-success",
    months:[
      {emoji:"📅",title:"MONTHS 7–9 — Advanced Cloud Engineering",learn:[{icon:"☁",text:"Advanced AWS — ECS/EKS, Lambda, CloudFront, RDS"},{icon:"🔄",text:"Advanced CI/CD — GitOps, ArgoCD"},{icon:"🔐",text:"Security — DevSecOps, Secrets management"}],resources:[{label:"AWS Skill Builder",icon:SparklesIcon,url:"https://aws.amazon.com/training/digital"}],projects:["Production Cloud Architecture","Serverless Application"]},
      {emoji:"📅",title:"MONTHS 10–12 — Enterprise DevOps",learn:[{icon:"🏗",text:"Scaling Systems — Distributed systems, High availability, Disaster recovery"},{icon:"☁",text:"Multi-Cloud — Azure/GCP basics"}],resources:[{label:"Kubernetes - KodeKloud",icon:GraduationCapIcon,url:"https://kodekloud.com/courses/the-kubernetes-course/"}],projects:["Enterprise Kubernetes Project","CI/CD Automation Platform","Cloud Infrastructure Setup","Monitoring & Logging System","Serverless Architecture"]},
    ],
    result:["✅ Enterprise DevOps","✅ Multi-Cloud Knowledge","✅ Production-Ready Skills"],
    opportunities:["₹15–30+ LPA roles","Senior DevOps Engineer","Platform Architect","SRE roles"],
  },
];
const mustMaster=["Linux","AWS","Docker","Kubernetes","CI/CD","Terraform","Monitoring","Networking"];

function CloudDevOpsRoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur"><CloudIcon className="h-3 w-3 text-primary" />Role-Based Roadmap</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Cloud & DevOps <span className="text-gradient">Engineer</span></h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Linux + Networking + AWS + Docker + Kubernetes + CI/CD</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">{["DevOps Engineer roles","Cloud Engineer roles","SRE roles","Remote Cloud/Platform Engineering"].map(t=><Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>)}</div>
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
      <section className="text-center"><Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border"><h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become a Cloud & DevOps Engineer?</h3><p className="text-sm text-muted-foreground mb-5 max-w-md">Start with Linux and AWS fundamentals and build your way up to production-grade infrastructure.</p><div className="flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0"><Link to="/track/$slug" params={{slug:"cloud-devops"}}>Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/roadmaps">View All Roadmaps</Link></Button></div></Card></section>
    </div>
  );
}
