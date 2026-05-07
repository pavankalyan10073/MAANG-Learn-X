import { createFileRoute, Link } from "@tanstack/react-router";
import { tracks } from "@/data/tracks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Trophy } from "lucide-react";

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
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <Sparkles className="h-3 w-3 text-primary" />
          One hub. Every MAANG topic. Topic-wise.
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Crack <span className="text-gradient">MAANG</span> the right way.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Curated resources, important questions, video solutions and an AI tutor across
          DSA, System Design, AI/ML, Aptitude, Core CS, Python, Math, MERN, DevOps and more.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0">
            <Link to="/track/$slug" params={{ slug: "dsa" }}>
              Start with DSA <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/tutor">Ask the AI Tutor</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Stat icon={Target} value={`${tracks.length}`} label="Tracks" />
          <Stat icon={Trophy} value={`${tracks.reduce((a, t) => a + t.topics.length, 0)}+`} label="Topics" />
          <Stat icon={Sparkles} value="AI" label="Tutor" />
        </div>
      </section>

      {/* Tracks grid */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pick your track</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.slug} to="/track/$slug" params={{ slug: t.slug }}>
                <Card className="group p-6 h-full bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-glow cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{t.tagline}</p>
                      <p className="text-xs text-muted-foreground mt-3">
                        {t.topics.length} topics · {t.topics.reduce((a, x) => a + x.resources.length, 0)} resources
                      </p>
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
