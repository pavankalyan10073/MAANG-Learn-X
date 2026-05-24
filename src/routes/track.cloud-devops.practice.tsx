import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/cloud-devops/practice")({
  head: () => ({
    meta: [
      { title: "Cloud & DevOps Interview Prep — MAANG Learn X" },
      { name: "description", content: "Cloud & DevOps interview questions, hands-on practice and Q&A for AWS, Docker, CI/CD and deployment." },
    ],
  }),
  component: CloudDevopsPracticePage,
});

const practiceGroups = [
  {
    label: "Cloud Computing Interview Questions",
    icon: "☁️",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Cloud Computing Tutorial — GfG", url: "https://www.geeksforgeeks.org/cloud-computing/cloud-computing-tutorial/", tag: "Tutorial + Q&A", desc: "Complete cloud computing tutorial with interview-focused content — IaaS, PaaS, SaaS, virtualization and cloud security", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "☁️" },
      { title: "AWS Tutorial — GfG", url: "https://www.geeksforgeeks.org/devops/aws-tutorial/", tag: "AWS Deep Dive", desc: "Comprehensive AWS tutorial covering EC2, S3, Lambda, IAM, RDS, VPC — with interview questions and real-world scenarios", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-amber-700", thumbEmoji: "🔶" },
      { title: "AWS Cloud Practitioner Practice Exams", url: "https://skillbuilder.aws/", tag: "Practice Tests", desc: "Official AWS Skill Builder — free practice exams, hands-on labs and certification prep for Cloud Practitioner", stars: 5, gradient: "from-cyan-500/20 via-blue-500/10 to-transparent", thumbBg: "from-cyan-600 to-blue-700", thumbEmoji: "🎓" },
    ],
  },
  {
    label: "DevOps Interview Questions",
    icon: "⚙️",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "DevOps Tutorial — GfG", url: "https://www.geeksforgeeks.org/devops/devops-tutorial/", tag: "Tutorial + Q&A", desc: "Complete DevOps tutorial with interview questions — CI/CD, Docker, Kubernetes, Jenkins, Ansible, Terraform and monitoring", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "⚙️" },
      { title: "What is an API — GfG", url: "https://www.geeksforgeeks.org/software-testing/what-is-an-api/", tag: "API Guide", desc: "Comprehensive API guide — REST, GraphQL, authentication, versioning and best practices for DevOps interviews", stars: 4, gradient: "from-indigo-500/20 via-violet-500/10 to-transparent", thumbBg: "from-indigo-600 to-violet-700", thumbEmoji: "🔗" },
    ],
  },
  {
    label: "Hands-on Labs & Deployment Practice",
    icon: "🧪",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-blue-600 to-indigo-700",
    items: [
      { title: "AWS Free Tier — Hands-on Labs", url: "https://aws.amazon.com/free/", tag: "Hands-on Lab", desc: "AWS Free Tier — practice EC2, S3, Lambda and more with real AWS infrastructure at no cost", stars: 5, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "🧪" },
      { title: "Vercel — Deploy & Practice", url: "https://vercel.com/docs", tag: "Deployment", desc: "Deploy real projects with Vercel — zero-config deployments, preview URLs, edge functions and serverless", stars: 4, gradient: "from-blue-500/20 via-indigo-500/10 to-transparent", thumbBg: "from-blue-600 to-indigo-700", thumbEmoji: "▲" },
      { title: "Docker Playground — Play with Docker", url: "https://labs.play-with-docker.com/", tag: "Interactive Lab", desc: "Free browser-based Docker playground — practice containers, images, Dockerfiles and docker-compose without installation", stars: 5, gradient: "from-cyan-500/20 via-blue-500/10 to-transparent", thumbBg: "from-cyan-600 to-blue-700", thumbEmoji: "🐳" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "8", label: "Resources" },
  { icon: TargetIcon, value: "50+", label: "Questions" },
  { icon: TrophyIcon, value: "3", label: "Categories" },
];

function CloudDevopsPracticePage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "cloud-devops" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Cloud & DevOps Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/cloud-devops-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Cloud & DevOps <span className="text-gradient">Interview Prep</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Interview questions, hands-on practice and Q&A for Cloud & DevOps. Master AWS, Docker, CI/CD pipelines and deployment strategies.</p>
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
