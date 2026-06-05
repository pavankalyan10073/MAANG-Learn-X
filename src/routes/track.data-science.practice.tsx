import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/data-science/practice")({
  head: () => ({
    meta: [
      { title: "Data Science & Analytics Interview Prep Q&A — MAANG Learn X" },
      { name: "description", content: "Curated Data Science & Analytics interview questions, practice problems, case studies and Q&A." },
    ],
  }),
  component: DSPracticePage,
});

const practiceGroups = [
  {
    label: "Python & Pandas — Practice",
    icon: "🐍",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    thumbBg: "from-yellow-600 to-amber-700",
    items: [
      { title: "Pandas Exercises — Practical Data Science", url: "https://github.com/guipsamora/pandas_exercises", tag: "Hands-on Practice", desc: "200+ Pandas exercises with solutions — filtering, grouping, merging, pivoting and time series analysis", stars: 5, thumbEmoji: "🐍" },
      { title: "Data Cleaning Practice — Kaggle", url: "https://www.kaggle.com/learn/data-cleaning", tag: "Kaggle Learn", desc: "Hands-on data cleaning exercises — handling missing values, inconsistent data and parsing dates interactively", stars: 5, thumbEmoji: "🧹" },
      { title: "Python for Data Science — HackerRank", url: "https://www.hackerrank.com/domains/python", tag: "Challenges", desc: "Python coding challenges — strings, data structures, libraries and algorithmic problem solving", stars: 4, thumbEmoji: "⚡" },
    ],
  },
  {
    label: "SQL — Practice Questions",
    icon: "🗄",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "LeetCode SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/", tag: "Study Plan", desc: "50 essential SQL problems for data science interviews — JOINs, window functions, subqueries and aggregations", stars: 5, thumbEmoji: "💡" },
      { title: "SQL Practice — StrataScratch", url: "https://www.stratascratch.com/", tag: "Interview Questions", desc: "Real data science SQL interview questions from FAANG companies — ranging from easy to hard with detailed solutions", stars: 5, thumbEmoji: "🎯" },
      { title: "Mode SQL Tutorial — Exercises", url: "https://mode.com/sql-tutorial/", tag: "Interactive", desc: "Interactive SQL exercises with real datasets — write queries, get instant feedback and learn analytical SQL patterns", stars: 4, thumbEmoji: "📝" },
    ],
  },
  {
    label: "Statistics & ML — Practice",
    icon: "📊",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    thumbBg: "from-emerald-600 to-teal-700",
    items: [
      { title: "Kaggle Learn — Intro to ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning", tag: "Kaggle Learn", desc: "Hands-on ML course — cross-validation, decision trees, random forests and model evaluation with real competitions", stars: 5, thumbEmoji: "🤖" },
      { title: "ML Interview Prep — Interview Query", url: "https://www.interviewquery.com/", tag: "Interview Prep", desc: "Data science interview questions — statistics, ML, SQL, A/B testing and case studies with model answers", stars: 5, thumbEmoji: "💼" },
      { title: "Scikit-learn — Applied ML Exercises", url: "https://scikit-learn.org/stable/auto_examples/index.html", tag: "Code Examples", desc: "Applied ML examples — classification, regression, clustering and preprocessing with scikit-learn on real datasets", stars: 4, thumbEmoji: "🧮" },
    ],
  },
  {
    label: "Case Studies & Competitions",
    icon: "🏆",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    thumbBg: "from-violet-600 to-purple-700",
    items: [
      { title: "Kaggle Competitions", url: "https://www.kaggle.com/competitions", tag: "Competitions", desc: "Real-world data science competitions — predict housing prices, classify images and solve business problems with real data", stars: 5, thumbEmoji: "🏆" },
      { title: "Google Data Analytics — Case Studies", url: "https://www.w3schools.com/statistics/statistics_interview_questions.php", tag: "Case Studies", desc: "Google-style data analytics case studies — ask, prepare, process, analyze, share and act methodology", stars: 4, thumbEmoji: "🔍" },
      { title: "DLeana — Data Science Interview Prep", url: "https://d-l.io/en/latest/", tag: "Q&A Repository", desc: "Curated data science interview questions — Python, SQL, ML, statistics and behavioral with detailed answers", stars: 4, thumbEmoji: "📝" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "11", label: "Resources" },
  { icon: TargetIcon, value: "300+", label: "Problems" },
  { icon: TrophyIcon, value: "4", label: "Topics" },
];

function DSPracticePage() {
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "data-science" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Data Science Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/data-science-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Data Science <span className="text-gradient">& Analytics Interview Prep Q&A</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Curated practice questions, interview Q&A, case studies and competitions. Python, SQL, Statistics, ML and real-world data science problems from top platforms.</p>
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
                  <div className={"absolute inset-0 bg-gradient-to-br " + group.gradient + " opacity-0 group-hover/prac:opacity-100 transition-opacity duration-500"} />
                  <div className="relative z-10">
                    <div className={"relative h-36 sm:h-40 bg-gradient-to-br " + group.thumbBg + " flex items-center justify-center overflow-hidden"}>
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
