import { createFileRoute, Link } from "@tanstack/react-router";
import { tracks } from "@/data/tracks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparklesIcon, TargetIcon, TrophyIcon } from "@/components/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAANG Learn X — Complete MAANG Interview Prep Hub" },
      { name: "description", content: "Master DSA, System Design, AI/ML, Aptitude and Core CS with curated topic-wise resources, video solutions and an AI tutor." },
    ],
  }),
  component: Index,
});

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
            return (
              <Link key={t.slug} to="/track/$slug" params={{ slug: t.slug }}>
                <Card className="group relative overflow-hidden bg-card/60 backdrop-blur border-2 border-border/70 hover:border-primary/60 transition-all duration-300 hover:shadow-glow cursor-pointer h-full rounded-xl">
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-44 sm:h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Icon + Title overlay on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/90 backdrop-blur-sm shadow-glow">
                        <Icon className="h-4.5 w-4.5 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-white drop-shadow-lg leading-tight">
                        {t.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {t.tagline}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] text-muted-foreground/60 shrink-0">
                        {t.topics.length} topics · {t.topics.reduce((a, x) => a + x.resources.length, 0)} resources
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-primary shadow-glow border-0 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 h-auto shrink-0"
                      >
                        Explore <ArrowRightIcon className="ml-1.5 h-3 w-3" />
                      </Button>
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
