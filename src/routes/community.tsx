import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UsersIcon, MessageCircleIcon, UserCheckIcon,
  ArrowRightIcon, SparklesIcon, CheckIcon,
  MessageSquareIcon, VideoIcon, FileTextIcon,
  GraduationCapIcon, TrophyIcon, BookOpenIcon, TargetIcon,
  CalendarDaysIcon, StarIcon, ShieldCheckIcon, RocketIcon,
} from "@/components/icons";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — MAANG Learn X" },
      { name: "description", content: "Join the MAANG Learn X community. Connect with fellow aspirants, join study groups, and get 1:1 mentorship from industry mentors." },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <section className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <UsersIcon className="h-3 w-3 text-primary" />
          Learn together. Grow together.
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Join the <span className="text-gradient">Community</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with thousands of MAANG aspirants, participate in study groups, and get personalized mentorship from industry experts.
        </p>
      </section>

      {/* Main Cards */}
      <div className="grid gap-6 lg:grid-cols-2 mb-14">
        {/* Community Card */}
        <Card className="group relative overflow-hidden bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                <MessageCircleIcon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">Community</h2>
                <p className="text-sm text-muted-foreground">Learn alongside fellow aspirants</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Join a thriving community of MAANG aspirants from around the world. Discuss problems, share resources, participate in mock interviews, and stay motivated together on your journey to cracking top tech companies.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: MessageSquareIcon, label: "Discussion Forums", desc: "Topic-wise Q&A threads" },
                { icon: UsersIcon, label: "Study Groups", desc: "Small group learning" },
                { icon: VideoIcon, label: "Mock Interviews", desc: "Practice with peers" },
                { icon: FileTextIcon, label: "Resource Sharing", desc: "Curated materials" },
              ].map((feature) => {
                const FIcon = feature.icon;
                return (
                  <div key={feature.label} className="rounded-xl border border-border bg-background/40 p-3.5">
                    <FIcon className="h-5 w-5 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-0.5">{feature.label}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {[
                  "bg-primary",
                  "bg-accent",
                  "bg-success",
                  "bg-warning",
                  "bg-destructive",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${color} border-2 border-card flex items-center justify-center text-[10px] font-bold text-primary-foreground`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">2,500+</span> active members
              </span>
            </div>

            <Button asChild className="w-full bg-gradient-primary shadow-glow border-0">
              <a href="https://chat.whatsapp.com/JkRpw04SvAk1ImTrjGTgyW" target="_blank" rel="noopener noreferrer">
                Join Community <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>

        {/* 1:1 Mentorship Card */}
        <Card className="group relative overflow-hidden bg-card/60 backdrop-blur border-border hover:border-accent/50 transition-all hover:shadow-[0_10px_40px_-10px_oklch(0.7_0.18_180/0.4)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary shadow-[0_10px_40px_-10px_oklch(0.7_0.18_180/0.4)]">
                <UserCheckIcon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold group-hover:text-accent transition-colors">1:1 Mentorship</h2>
                <p className="text-sm text-muted-foreground">Personal guidance from industry experts</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Get personalized guidance from industry mentors working at top tech companies like Google, Amazon, Microsoft, and Meta. From resume reviews to mock interviews and career advice — your mentor has been where you want to go.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: GraduationCapIcon, label: "Industry Mentors", desc: "MAANG professionals" },
                { icon: FileTextIcon, label: "Resume Reviews", desc: "Expert feedback" },
                { icon: VideoIcon, label: "Mock Interviews", desc: "Real interview simulation" },
                { icon: TargetIcon, label: "Career Guidance", desc: "Personalized roadmap" },
              ].map((feature) => {
                const FIcon = feature.icon;
                return (
                  <div key={feature.label} className="rounded-xl border border-border bg-background/40 p-3.5">
                    <FIcon className="h-5 w-5 text-accent mb-2" />
                    <h4 className="font-semibold text-sm mb-0.5">{feature.label}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className="h-4 w-4 text-warning fill-warning" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from 500+ reviews
              </span>
            </div>

            <Button className="w-full bg-gradient-to-r from-accent to-primary border-0 shadow-[0_10px_40px_-10px_oklch(0.7_0.18_180/0.3)]">
              Find a Mentor <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* How Mentorship Works */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How 1:1 Mentorship Works</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">A simple, structured process to get you interview-ready with expert guidance.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              icon: BookOpenIcon,
              title: "Book a Session",
              description: "Browse mentor profiles and book a session that fits your schedule and goals.",
              color: "text-primary",
            },
            {
              step: "02",
              icon: CalendarDaysIcon,
              title: "Get Matched",
              description: "We match you with the right mentor based on your target company and role.",
              color: "text-accent",
            },
            {
              step: "03",
              icon: RocketIcon,
              title: "Start Learning",
              description: "Attend live 1:1 sessions covering DSA, System Design, behavioral, and more.",
              color: "text-success",
            },
            {
              step: "04",
              icon: TrophyIcon,
              title: "Land the Offer",
              description: "Follow your personalized plan and crack your dream MAANG interview.",
              color: "text-warning",
            },
          ].map((item) => {
            const SIcon = item.icon;
            return (
              <Card key={item.step} className="p-6 bg-card/60 backdrop-blur border-border hover:border-primary/30 transition-all text-center">
                <div className={`text-xs font-bold uppercase tracking-widest ${item.color} mb-3`}>
                  Step {item.step}
                </div>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow mb-4`}>
                  <SIcon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Mentor Profiles */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Meet Our Mentors</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">Learn from engineers and hiring managers at top tech companies.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Arjun S.",
              role: "SDE-3 at Google",
              specialty: "DSA & System Design",
              experience: "8+ years",
              sessions: "200+ sessions",
            },
            {
              name: "Priya M.",
              role: "Senior Engineer at Amazon",
              specialty: "Behavioral & LP",
              experience: "6+ years",
              sessions: "150+ sessions",
            },
            {
              name: "Rahul K.",
              role: "Staff Engineer at Microsoft",
              specialty: "System Design & LLD",
              experience: "10+ years",
              sessions: "300+ sessions",
            },
          ].map((mentor) => (
            <Card key={mentor.name} className="p-6 bg-card/60 backdrop-blur border-border hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow text-lg font-bold text-primary-foreground">
                  {mentor.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheckIcon className="h-3.5 w-3.5 text-primary" />
                  <span>Specialty: <span className="text-foreground">{mentor.specialty}</span></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckIcon className="h-3.5 w-3.5 text-success" />
                  <span>Experience: <span className="text-foreground">{mentor.experience}</span></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <StarIcon className="h-3.5 w-3.5 text-warning fill-warning" />
                  <span>{mentor.sessions} completed</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="inline-block p-8 bg-card/60 backdrop-blur border-border">
          <h3 className="text-xl font-bold mb-2">Start your MAANG journey today</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md">
            Join the community, find a mentor, and get the structured preparation you need to crack your dream company.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0">
              <Link to="/">
                Explore Tracks <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/roadmaps">View Roadmaps</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
