import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/aptitude/practice")({
  head: () => ({
    meta: [
      { title: "Aptitude Interview Prep — MAANG Learn X" },
      { name: "description", content: "Topic-wise aptitude mock tests, practice questions and interview preparation resources." },
    ],
  }),
  component: AptitudePracticePage,
});

const practiceGroups = [
  {
    label: "Topic Wise Mock Test Preparation",
    icon: "📝",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "FacePrep — Online Aptitude Tests", url: "https://www.faceprep.in/tests/", tag: "Mock Tests", desc: "Topic-wise online aptitude mock tests — quantitative, logical reasoning and verbal ability with instant scoring", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "📝" },
      { title: "CareerRide — Online Aptitude Test", url: "https://www.careerride.com/online-aptitude-test.aspx", tag: "Mock Tests", desc: "Practice aptitude tests online — timed mock tests with solutions for placement and competitive exam preparation", stars: 4, gradient: "from-cyan-500/20 via-blue-500/10 to-transparent", thumbBg: "from-cyan-600 to-blue-700", thumbEmoji: "⏱️" },
    ],
  },
  {
    label: "Aptitude Cheat Sheet & Quick Prep",
    icon: "⚡",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "Aptitude Cheat Sheet — 18 Topics (GrindGram)", url: "https://grindgram.in/career-tracks/aptitude-cheatsheet?utm_source=sp_auto_dm&utm_referrer=sp_auto_dm", tag: "Cheat Sheet", desc: "Crack Aptitude like a Pro — 18 essential topics with formulas, shortcuts and quick reference for last-minute revision", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "⚡" },
    ],
  },
  {
    label: "Aptitude Questions & Answers",
    icon: "🎯",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    thumbBg: "from-blue-600 to-indigo-700",
    items: [
      { title: "Aptitude Q&A — GeeksforGeeks", url: "https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/", tag: "Practice Q&A", desc: "Topic-wise aptitude questions with detailed answers — numbers, percentages, time-speed-distance, P&C and more", stars: 5, gradient: "from-indigo-500/20 via-violet-500/10 to-transparent", thumbBg: "from-indigo-600 to-violet-700", thumbEmoji: "🎯" },
      { title: "Aptitude for Placements — GeeksforGeeks", url: "https://www.geeksforgeeks.org/aptitude/aptitude-for-placements/", tag: "Practice Guide", desc: "Complete placement aptitude guide with practice problems — quantitative, logical reasoning and verbal ability", stars: 4, gradient: "from-teal-500/20 via-green-500/10 to-transparent", thumbBg: "from-teal-600 to-green-700", thumbEmoji: "📖" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "5", label: "Resources" },
  { icon: TargetIcon, value: "500+", label: "Questions" },
  { icon: TrophyIcon, value: "2", label: "Mock Tests" },
];

function AptitudePracticePage() {
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "aptitude" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Aptitude Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/aptitude-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Aptitude <span className="text-gradient">Interview Prep</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Topic-wise mock tests, practice questions and cheat sheets. Practice 500+ aptitude problems across quantitative, logical reasoning and verbal ability to crack placement exams.</p>
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
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/prac:text-primary transition-colors flex-1">{practice.title}</h3>{wishlistIds.has(practice.url) ? (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); removeFromWishlist(practice.url); }} className="shrink-0 p-1 rounded-md hover:bg-amber-500/10 transition-colors mt-0.5" title="Remove from Wishlist">
                              <BookmarkFilledIcon className="h-3.5 w-3.5 text-amber-400" />
                            </button>
                          ) : (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToWishlist(practice.url, practice.title); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title="Add to Wishlist">
                              <BookmarkPlusIcon className="h-3.5 w-3.5 text-muted-foreground hover:text-amber-400" />
                            </button>
                          )}</div>
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
