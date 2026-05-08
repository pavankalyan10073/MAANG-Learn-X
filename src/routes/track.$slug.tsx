import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { trackBySlug, type Track } from "@/data/tracks";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useProgress } from "@/hooks/use-progress";
import { ExternalLinkIcon, ArrowLeftIcon, VideoIcon, BookOpenIcon, FileTextIcon, CodeIcon, GraduationCapIcon, LibraryIcon, MessageCircleIcon } from "@/components/icons";
import type { Resource } from "@/data/tracks";

export const Route = createFileRoute("/track/$slug")({
  loader: ({ params }) => {
    const t = trackBySlug(params.slug);
    if (!t) throw notFound();
    return { track: t };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.track;
    if (!t) return { meta: [{ title: "Track" }] };
    return {
      meta: [
        { title: `${t.title} — MAANG Learn X` },
        { name: "description", content: t.tagline },
        { property: "og:title", content: `${t.title} — MAANG Learn X` },
        { property: "og:description", content: t.tagline },
      ],
    };
  },
  component: TrackPage,
  notFoundComponent: () => (
    <div className="p-12 text-center">
      <h1 className="text-2xl font-bold">Track not found</h1>
      <Button asChild className="mt-4"><Link to="/">Go home</Link></Button>
    </div>
  ),
});

const typeIcon: Record<Resource["type"], React.ComponentType<{ className?: string }>> = {
  video: VideoIcon,
  article: FileTextIcon,
  practice: CodeIcon,
  docs: BookOpenIcon,
  course: GraduationCapIcon,
  book: LibraryIcon,
};

function TrackPage() {
  const { track } = Route.useLoaderData() as { track: Track };
  const { doneIds, toggle, isLoggedIn } = useProgress();
  const Icon = track.icon;

  const totalResources = track.topics.reduce((a, t) => a + t.resources.length, 0);
  const doneCount = track.topics.reduce(
    (a, t) => a + t.resources.filter((r) => doneIds.has(r.id)).length,
    0
  );
  const pct = totalResources ? Math.round((doneCount / totalResources) * 100) : 0;

  return (
    <div className="px-6 py-8 md:px-12 max-w-6xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/"><ArrowLeftIcon className="h-4 w-4 mr-1" /> All tracks</Link>
      </Button>

      <div className="flex items-start gap-5 mb-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold">{track.title}</h1>
          <p className="text-muted-foreground mt-1">{track.tagline}</p>
          {isLoggedIn && (
            <div className="mt-4 flex items-center gap-3">
              <div className="h-2 flex-1 max-w-xs rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-primary transition-all" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-xs text-muted-foreground">{doneCount}/{totalResources} · {pct}%</span>
            </div>
          )}
        </div>
        <Button asChild variant="outline" size="sm">
          <Link to="/tutor" search={{ topic: track.title }}>
            <MessageCircleIcon className="h-4 w-4 mr-1" /> Ask AI
          </Link>
        </Button>
      </div>

      {!isLoggedIn && (
        <Card className="mb-6 p-4 bg-card/60 backdrop-blur border-primary/30">
          <p className="text-sm text-muted-foreground">
            <Link to="/auth" className="text-primary hover:underline font-medium">Sign in</Link> to track your progress and check off resources.
          </p>
        </Card>
      )}

      <Accordion type="multiple" defaultValue={[track.topics[0]?.id]} className="space-y-3">
        {track.topics.map((topic) => (
          <AccordionItem
            key={topic.id}
            value={topic.id}
            className="border border-border rounded-xl bg-card/60 backdrop-blur px-4 data-[state=open]:shadow-card"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="text-left">
                <div className="font-semibold">{topic.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{topic.summary}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Resources</h4>
                <div className="space-y-2">
                  {topic.resources.map((res) => {
                    const TypeIcon = typeIcon[res.type];
                    const done = doneIds.has(res.id);
                    return (
                      <div
                        key={res.id}
                        className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2 hover:border-primary/40 transition-colors"
                      >
                        <Checkbox
                          checked={done}
                          onCheckedChange={() => toggle(res.id)}
                          disabled={!isLoggedIn}
                        />
                        <TypeIcon className="h-4 w-4 text-primary shrink-0" />
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-sm hover:text-primary ${done ? "line-through text-muted-foreground" : ""}`}
                        >
                          {res.title}
                          {res.source && <span className="text-muted-foreground"> · {res.source}</span>}
                        </a>
                        <Badge variant="secondary" className="text-[10px] uppercase">{res.type}</Badge>
                        <ExternalLinkIcon className="h-3 w-3 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
