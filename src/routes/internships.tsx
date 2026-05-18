import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BrainIcon,
  Code2Icon,
  BarChart3Icon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowRightIcon,
  SparklesIcon,
  BriefcaseIcon,
  ClockIcon,
  AwardIcon,
  FileTextIcon,
  StarIcon,
  UsersIcon,
  ZapIcon,
  GraduationCapIcon,
} from "@/components/icons";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — MAANG Learn X" },
      { name: "description", content: "Choose from 5 high-demand internship domains. 45 days: 30 days live training + 15 days live industry project. Get offer letter, certificate, excellence badges & placement support. Fee: ₹499." },
    ],
  }),
  component: InternshipsPage,
});

const domains = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortLabel: "AI / ML Internship",
    badge: "AIML",
    description:
      "30 days of live training classes followed by 15 days on a live industry project. Build real ML models under expert mentor guidance.",
    icon: BrainIcon,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderHover: "hover:border-violet-500/40",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_290/0.35)]",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    tags: ["Python", "Pandas", "Scikit-learn", "Deep Learning", "NLP"],
    image: "/internships/ai-ml.png",
    rating: 4.8,
    students: 32,
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    shortLabel: "Web Dev Internship",
    badge: "WEB DEVELOPMENT",
    description:
      "30 days of live training classes followed by 15 days on a live industry project. Build real full-stack web apps under expert mentor guidance.",
    icon: Code2Icon,
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHover: "hover:border-blue-500/40",
    accentColor: "text-blue-40",
    accentBg: "bg-blue-500",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.2_230/0.35)]",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript"],
    image: "/internships/fullstack.png",
    rating: 4.9,
    students: 29,
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    shortLabel: "Data Analytics Internship",
    badge: "DATA ANALYTICS",
    description:
      "30 days of live training classes followed by 15 days on a live industry project. Analyze real datasets and build dashboards under expert mentor guidance.",
    icon: BarChart3Icon,
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/40",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.35)]",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    tags: ["Python", "SQL", "Power BI", "Excel", "Matplotlib"],
    image: "/internships/data-science.png",
    rating: 4.7,
    students: 25,
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    shortLabel: "Cyber Security Internship",
    badge: "CYBER SECURITY",
    description:
      "30 days of live training classes followed by 15 days on a live industry project. Learn ethical hacking and network security under expert mentor guidance.",
    icon: ShieldCheckIcon,
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    borderHover: "hover:border-red-500/40",
    accentColor: "text-red-400",
    accentBg: "bg-red-500",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_25/0.35)]",
    iconBg: "bg-gradient-to-br from-red-500 to-rose-600",
    tags: ["Network Security", "Ethical Hacking", "Cryptography", "Linux", "Pen Testing"],
    image: "/internships/cybersecurity.png",
    rating: 4.8,
    students: 36,
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    shortLabel: "Cloud & DevOps Internship",
    badge: "CLOUD & DEVOPS",
    description:
      "30 days of live training classes followed by 15 days on a live industry project. Master cloud platforms and CI/CD pipelines under expert mentor guidance.",
    icon: CloudIcon,
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    borderHover: "hover:border-sky-500/40",
    accentColor: "text-sky-400",
    accentBg: "bg-sky-500",
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.2_250/0.35)]",
    iconBg: "bg-gradient-to-br from-sky-500 to-indigo-600",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    image: "/internships/cloud-devops.png",
    rating: 4.7,
    students: 41,
  },
];

function InternshipsPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <BriefcaseIcon className="h-3 w-3 text-primary" />
          Launch your career with hands-on experience
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Pick Your <span className="text-gradient">Internship Domain</span>
        </h1>
      </section>

      {/* Domain Cards Grid — Image on top, content below */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-14">
        {domains.map((domain) => {
          const DomainIcon = domain.icon;
          return (
            <Card
              key={domain.id}
              className={`group relative overflow-hidden bg-card/60 backdrop-blur border-border ${domain.borderHover} transition-all duration-300 hover:${domain.glowColor}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

              <div className="relative z-10">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge overlay on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-border/50 text-[10px] font-semibold tracking-wider">
                      {domain.badge}
                    </Badge>
                  </div>
                  {/* Domain icon overlay */}
                  <div className="absolute top-3 right-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${domain.iconBg} shadow-lg`}>
                      <DomainIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5">
                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{domain.shortLabel}</p>

                  {/* Rating + Students row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-3.5 w-3.5 text-warning fill-warning" />
                      <span className="text-xs font-semibold">{domain.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <UsersIcon className="h-3 w-3" />
                      <span className="text-[11px]">{domain.students} students</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    {domain.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-border/50 bg-background/40 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border/40 pt-4">
                    {/* Price + Enroll */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-muted-foreground/50 line-through">₹2,999</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-bold text-primary">₹499</span>
                          <span className="text-[10px] text-muted-foreground/50">one-time</span>
                        </div>
                      </div>
                      <a
                        href="https://forms.gle/g4XNghvJEH8V79fG9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-primary shadow-glow border-0 text-xs sm:text-sm font-semibold px-4"
                        >
                          Enroll Now <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* What You Get Section */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What You Get</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Everything you need to kickstart your career in tech.
        </p>

        {/* Internship Structure */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-10">
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 text-center hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow mb-4">
                <GraduationCapIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-1.5">Phase 1</div>
              <h3 className="font-bold text-xl sm:text-2xl mb-1">30 Days</h3>
              <p className="text-sm text-muted-foreground mb-1">Live Training Classes</p>
              <p className="text-[11px] text-muted-foreground/60">Expert-led sessions with hands-on practice</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 text-center hover:border-accent/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/70 shadow-[0_10px_40px_-10px_oklch(0.7_0.18_180/0.4)] mb-4">
                <ZapIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-1.5">Phase 2</div>
              <h3 className="font-bold text-xl sm:text-2xl mb-1">15 Days</h3>
              <p className="text-sm text-muted-foreground mb-1">Live Industry Project</p>
              <p className="text-[11px] text-muted-foreground/60">Real-world project under mentor guidance</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 text-center hover:border-success/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-success/[0.08] to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-success to-success/70 shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.4)] mb-4">
                <AwardIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-success mb-1.5">Rewards</div>
              <h3 className="font-bold text-xl sm:text-2xl mb-1">Top 10</h3>
              <p className="text-sm text-muted-foreground mb-1">Stipend Internship &amp; Placement</p>
              <p className="text-[11px] text-muted-foreground/60">Excellence badges &amp; placement support</p>
            </div>
          </Card>
        </div>

        {/* Benefits row */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-4 sm:p-5 text-center hover:border-primary/30 transition-all group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow mb-3">
                <FileTextIcon className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Offer Letter</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Official offer letter upon enrollment</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-4 sm:p-5 text-center hover:border-primary/30 transition-all group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/70 shadow-[0_10px_40px_-10px_oklch(0.7_0.18_180/0.3)] mb-3">
                <AwardIcon className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Certificate</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Internship completion certificate</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-4 sm:p-5 text-center hover:border-primary/30 transition-all group">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-warning to-warning/70 shadow-[0_10px_40px_-10px_oklch(0.78_0.16_75/0.3)] mb-3">
                <StarIcon className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Excellence Badges</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Top 10 performers in each domain earn excellence badges</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-4 sm:p-5 text-center hover:border-primary/30 transition-all group">
            <div className="absolute inset-0 bg-gradient-to-br from-success/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-success to-success/70 shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.3)] mb-3">
                <ClockIcon className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">6 Weeks</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">30 days live training + 15 days live industry project</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border max-w-xl">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-4">
            <SparklesIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Ready to Start Your Internship?</h3>
          <p className="text-sm text-muted-foreground mb-5">
            Choose your domain, fill the application form, and get started within 24 hours. Top performers get stipend-based internships &amp; placement support.
          </p>
          <a
            href="https://forms.gle/g4XNghvJEH8V79fG9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button size="lg" className="bg-gradient-primary shadow-glow border-0">
              Apply Now — ₹499 <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </Card>
      </section>
    </div>
  );
}
