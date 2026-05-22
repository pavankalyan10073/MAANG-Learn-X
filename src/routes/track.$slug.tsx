import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { trackBySlug, type Track } from "@/data/tracks";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useProgress } from "@/hooks/use-progress";
import {
  ExternalLinkIcon, ArrowLeftIcon, VideoIcon, BookOpenIcon, FileTextIcon,
  CodeIcon, GraduationCapIcon, LibraryIcon, MessageCircleIcon, PlayIcon,
  NotebookIcon, ClipboardListIcon, ArrowRightIcon,
  LeetCodeIcon, GeeksForGeeksIcon, CodeforcesIcon,
} from "@/components/icons";
import type { Resource } from "@/data/tracks";

export const Route = createFileRoute("/track/$slug")({
  loader: ({ params }) => {
    const t = trackBySlug(params.slug);
    if (!t) throw notFound();
    return { slug: params.slug, title: t.title, tagline: t.tagline, topics: t.topics };
  },
  head: ({ loaderData }) => {
    const d = loaderData;
    if (!d) return { meta: [{ title: "Track" }] };
    return {
      meta: [
        { title: `${d.title} — MAANG Learn X` },
        { name: "description", content: d.tagline },
        { property: "og:title", content: `${d.title} — MAANG Learn X` },
        { property: "og:description", content: d.tagline },
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

/* ─── DSA section definitions ─── */
const dsaSections = [
  {
    id: "video-courses",
    title: "DSA Video Full Course",
    description: "Complete video lectures for DSA in Python, Java & C++. From beginner to advanced — curated playlists from top educators.",
    image: "/tracks/dsa-sections/video-courses.png",
    badge: "VIDEO COURSES",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHover: "hover:border-blue-500/40",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    icon: PlayIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_230/0.35)]",
    link: "/track/dsa/videos",
  },
  {
    id: "full-notes",
    title: "DSA Full Notes",
    description: "Comprehensive notes, roadmaps, PDFs and theory resources. Python-specific guides, pattern sheets and structured learning paths.",
    image: "/tracks/dsa-sections/full-notes.png",
    badge: "NOTES & GUIDES",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    icon: NotebookIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.35)]",
    link: "/track/dsa/notes",
  },
  {
    id: "practice-questions",
    title: "Coding Practice Questions",
    description: "Curated coding sheets, interview questions, bootcamps and AI-powered courses. Practice 400+ problems across all DSA topics.",
    image: "/tracks/dsa-sections/interview-prep.png",
    badge: "PRACTICE & INTERVIEW",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderHover: "hover:border-violet-500/40",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    icon: ClipboardListIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_290/0.35)]",
    link: "/track/dsa/practice",
  },
];

/* ─── Aptitude section definitions ─── */
const aptitudeSections = [
  {
    id: "apt-video-courses",
    title: "Aptitude Video Full Course",
    description: "Complete video lectures for aptitude — quantitative, logical reasoning and verbal ability. Curated playlists from top educators and structured guided paths.",
    image: "/tracks/aptitude-sections/video-courses.png",
    badge: "VIDEO COURSES",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHover: "hover:border-blue-500/40",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    icon: PlayIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_230/0.35)]",
    link: "/track/aptitude/videos",
  },
  {
    id: "apt-full-notes",
    title: "Aptitude Full Notes",
    description: "Comprehensive notes, cheat sheets, formulas and theory resources. 18-topic cheat sheet, GfG placement notes and topic-wise Q&A.",
    image: "/tracks/aptitude-sections/full-notes.png",
    badge: "NOTES & GUIDES",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    icon: NotebookIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.35)]",
    link: "/track/aptitude/notes",
  },
  {
    id: "apt-practice-questions",
    title: "Aptitude Interview Prep",
    description: "Topic-wise mock tests, practice questions and cheat sheets. Practice 500+ aptitude problems across quantitative, logical reasoning and verbal ability.",
    image: "/tracks/aptitude-sections/interview-prep.png",
    badge: "PRACTICE & INTERVIEW",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderHover: "hover:border-violet-500/40",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    icon: ClipboardListIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_290/0.35)]",
    link: "/track/aptitude/practice",
  },
];

/* ─── System Design section definitions ─── */
const sdSections = [
  {
    id: "sd-video-courses",
    title: "System Design Video Full Course",
    description: "Complete video lectures for System Design — HLD fundamentals, scaling, caching, load balancing, distributed systems and real-world case studies.",
    image: "/tracks/system-design-sections/video-courses.png",
    badge: "VIDEO COURSES",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHover: "hover:border-blue-500/40",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    icon: PlayIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_230/0.35)]",
    link: "/track/system-design/videos",
  },
  {
    id: "sd-full-notes",
    title: "System Design Full Notes",
    description: "Comprehensive notes, PDF books, LLD guides and theory resources. Alex Xu's insider guide, HelloInterview LLD series and curated interview Q&A.",
    image: "/tracks/system-design-sections/full-notes.png",
    badge: "NOTES & GUIDES",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    icon: NotebookIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.35)]",
    link: "/track/system-design/notes",
  },
  {
    id: "sd-practice-questions",
    title: "System Design Interview Prep",
    description: "Curated system design interview questions, LLD practice problems and real-world case studies. Practice designing scalable systems for MAANG.",
    image: "/tracks/system-design-sections/interview-prep.png",
    badge: "PRACTICE & INTERVIEW",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderHover: "hover:border-violet-500/40",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    icon: ClipboardListIcon,
    glowColor: "shadow-[0_10px_40px_-10px_oklch(0.6_0.22_290/0.35)]",
    link: "/track/system-design/practice",
  },
];

function TrackPage() {
  const typeIcon: Record<Resource["type"], React.ComponentType<{ className?: string }>> = {
    video: VideoIcon,
    article: FileTextIcon,
    practice: CodeIcon,
    docs: BookOpenIcon,
    course: GraduationCapIcon,
    book: LibraryIcon,
  };

  const data = Route.useLoaderData();
  const trackFull = trackBySlug(data.slug);
  if (!trackFull) return null;
  const Icon = trackFull.icon;
  const { doneIds, toggle, isLoggedIn } = useProgress();

  const totalResources = data.topics.reduce((a, t) => a + t.resources.length, 0);
  const doneCount = data.topics.reduce(
    (a, t) => a + t.resources.filter((r) => doneIds.has(r.id)).length,
    0
  );
  const pct = totalResources ? Math.round((doneCount / totalResources) * 100) : 0;
  const pctStyle = { width: pct + "%" };

  const isDsa = data.slug === "dsa";
  const isSystemDesign = data.slug === "system-design";
  const isAptitude = data.slug === "aptitude";
  const activeSections = isDsa ? dsaSections : isSystemDesign ? sdSections : isAptitude ? aptitudeSections : [];
  const sectionTitle = isDsa ? "DSA Learning Paths" : isSystemDesign ? "System Design Learning Paths" : isAptitude ? "Aptitude Learning Paths" : "";
  const sectionSubtitle = isDsa
    ? "Choose your learning style — watch video courses, read structured notes, or dive into coding practice."
    : isSystemDesign
      ? "Choose your learning style — watch video courses, read structured notes, or practice interview questions."
      : isAptitude
        ? "Choose your learning style — watch video courses, read structured notes, or practice mock tests."
        : "";

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/"><ArrowLeftIcon className="h-4 w-4 mr-1" /> All tracks</Link>
      </Button>

      {/* Track Header */}
      <div className="flex items-start gap-5 mb-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
          <p className="text-muted-foreground mt-1">{data.tagline}</p>
          {isLoggedIn && (
            <div className="mt-4 flex items-center gap-3">
              <div className="h-2 flex-1 max-w-xs rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-primary transition-all" style={pctStyle} />
              </div>
              <span className="text-xs text-muted-foreground">{doneCount}/{totalResources} · {pct}%</span>
            </div>
          )}
        </div>
        <Button asChild variant="outline" size="sm">
          <Link to="/tutor" search={{ topic: data.title }}>
            <MessageCircleIcon className="h-4 w-4 mr-1" /> Ask AI
          </Link>
        </Button>
      </div>

      {/* ─── Coding Practice Platforms (only for dsa slug) ─── */}
      {isDsa && (
        <div className="flex items-center gap-2 mb-6 -mt-2">
          <span className="text-xs text-muted-foreground mr-1">Practice on:</span>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="group/platform inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-200">
            <LeetCodeIcon className="h-4 w-4 text-[#FFA116] group-hover/platform:scale-110 transition-transform" />
            <span>LeetCode</span>
          </a>
          <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="group/platform inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-200">
            <GeeksForGeeksIcon className="h-4 w-4 text-[#2F8D46] group-hover/platform:scale-110 transition-transform" />
            <span>GeeksForGeeks</span>
          </a>
          <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="group/platform inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200">
            <CodeforcesIcon className="h-4 w-4 text-[#1F8ACB] group-hover/platform:scale-110 transition-transform" />
            <span>Codeforces</span>
          </a>
        </div>
      )}

      {!isLoggedIn && (
        <Card className="mb-6 p-4 bg-card/60 backdrop-blur border-primary/30">
          <p className="text-sm text-muted-foreground">
            <Link to="/auth" className="text-primary hover:underline font-medium">Sign in</Link> to track your progress and check off resources.
          </p>
        </Card>
      )}

      {/* ─── Section Cards (for dsa, system-design and aptitude slugs) ─── */}
      {(isDsa || isSystemDesign || isAptitude) && (
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{sectionTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            {sectionSubtitle}
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {activeSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <Card
                  key={section.id}
                  className={`group relative overflow-hidden bg-card/60 backdrop-blur border-border ${section.borderHover} transition-all duration-300 hover:${section.glowColor}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-border/50 text-[10px] font-semibold tracking-wider">
                          {section.badge}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${section.iconBg} shadow-lg`}>
                          <SectionIcon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-base sm:text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {section.description}
                      </p>

                      <div className="border-t border-border/40 pt-4">
                        <Link to={section.link}>
                          <Button
                            size="sm"
                            className="w-full bg-gradient-primary shadow-glow border-0 text-xs sm:text-sm font-semibold px-4 h-9"
                          >
                            Explore Now <ArrowRightIcon className="ml-2 h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── Existing Topic Resources (preserved) ─── */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Topic-wise Resources</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          {isSystemDesign
            ? "Detailed resources organized by system design topic — fundamentals, scaling, case studies and LLD."
            : isAptitude
              ? "Detailed resources organized by aptitude topic — quantitative, logical reasoning and verbal ability."
              : "Detailed resources organized by DSA topic — arrays, trees, graphs, DP and more."}
        </p>

        <Accordion type="multiple" defaultValue={[data.topics[0]?.id]} className="space-y-3">
          {data.topics.map((topic) => (
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
                      const doneClass = done ? "line-through text-muted-foreground" : "";
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
                            className={"flex-1 text-sm hover:text-primary " + doneClass}
                          >
                            {res.title}
                            {res.source && <span className="text-muted-foreground"> · {res.source}</span>}
                          </a>
                          <Badge variant="secondary" className="text-[10px] uppercase">{res.type}</Badge>
                          <ExternalLinkIcon className="h-3 w-3 text-muted-foreground" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {topic.questions && topic.questions.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                      Important Interview Questions
                    </h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {topic.questions.map((q, i) => (
                        <a
                          key={i}
                          href={q.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 text-sm hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          <span className="text-primary">›</span>
                          <span className="flex-1">{q.q}</span>
                          <ExternalLinkIcon className="h-3 w-3 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
