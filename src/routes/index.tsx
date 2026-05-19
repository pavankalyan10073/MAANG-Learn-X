import { createFileRoute, Link } from "@tanstack/react-router";
import { tracks } from "@/data/tracks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, SparklesIcon, TargetIcon, TrophyIcon, BookOpenIcon } from "@/components/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAANG Learn X — Complete MAANG Interview Prep Hub" },
      { name: "description", content: "Master DSA, System Design, AI/ML, Aptitude and Core CS with curated topic-wise resources, video solutions and an AI tutor." },
    ],
  }),
  component: Index,
});

const trackGradients: Record<string, string> = {
  dsa: "from-blue-500/20 via-cyan-500/10 to-transparent",
  "system-design": "from-indigo-500/20 via-violet-500/10 to-transparent",
  "ai-ml": "from-violet-500/20 via-purple-500/10 to-transparent",
  "core-cs": "from-teal-500/20 via-emerald-500/10 to-transparent",
  aptitude: "from-amber-500/20 via-yellow-500/10 to-transparent",
  python: "from-yellow-500/20 via-orange-500/10 to-transparent",
  math: "from-pink-500/20 via-rose-500/10 to-transparent",
  fullstack: "from-green-500/20 via-lime-500/10 to-transparent",
  "git-linux": "from-orange-500/20 via-red-500/10 to-transparent",
  "data-science": "from-emerald-500/20 via-green-500/10 to-transparent",
  "cloud-devops": "from-sky-500/20 via-indigo-500/10 to-transparent",
};

const trackBadges: Record<string, string> = {
  dsa: "DSA",
  "system-design": "SYS DESIGN",
  "ai-ml": "AI & ML",
  "core-cs": "CORE CS",
  aptitude: "APTITUDE",
  python: "PYTHON",
  math: "MATHS",
  fullstack: "MERN",
  "git-linux": "GIT & LINUX",
  "data-science": "DATA SCI",
  "cloud-devops": "CLOUD & DEVOPS",
};

function Index() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <SparklesIcon className="h-3 w-3 text-primary" />
          One hub. Every MAANG topic. Topic-wise.
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Crack <span className="text-gradient">MAANG</span> the right way.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Curated resources, important questions, video solutions and an AI tutor across
          DSA, System Design, AI/ML, Aptitude, Core CS, Python, Math, MERN, DevOps and more.
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

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
          <Stat icon={TargetIcon} value={`${tracks.length}`} label="Tracks" />
          <Stat icon={TrophyIcon} value={`${tracks.reduce((a, t) => a + t.topics.length, 0)}+`} label="Topics" />
          <Stat icon={SparklesIcon} value="AI" label="Tutor" />
        </div>
      </section>

      {/* Track Cards */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pick your track</h2>
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => {
            const Icon = t.icon;
            const gradient = trackGradients[t.slug] || "from-primary/20 via-primary-glow/10 to-transparent";
            const badge = trackBadges[t.slug] || t.slug.toUpperCase();
            const totalResources = t.topics.reduce((a, x) => a + x.resources.length, 0);

            return (
              <Link key={t.slug} to="/track/$slug" params={{ slug: t.slug }}>
                <Card className="group relative overflow-hidden bg-card/60 backdrop-blur border-2 border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer h-full rounded-xl">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

                  <div className="relative z-10">
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-48 sm:h-52 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Badge overlay on image */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-border/50 text-[10px] font-semibold tracking-wider">
                          {badge}
                        </Badge>
                      </div>
                      {/* Track icon overlay */}
                      <div className="absolute top-3 right-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                          <Icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-5">
                      {/* Title */}
                      <h3 className="font-bold text-base sm:text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">{t.tagline}</p>

                      {/* Topics + Resources row */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <BookOpenIcon className="h-3 w-3" />
                        <span>{t.topics.length} topics · {totalResources} resources</span>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-border/40 pt-4">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-primary shadow-glow border-0 text-xs sm:text-sm font-semibold px-4 h-9"
                        >
                          Explore Now <ArrowRightIcon className="ml-2 h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon: Icon, value, label }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/50 backdrop-blur px-4 py-3">
      <Icon className="h-4 w-4 text-primary mx-auto mb-1" />
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
