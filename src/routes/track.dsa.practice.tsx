import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/dsa/practice")({
  head: () => ({
    meta: [
      { title: "DSA Coding Practice Questions — MAANG Learn X" },
      { name: "description", content: "Curated coding sheets, interview questions, bootcamps and AI-powered courses." },
    ],
  }),
  component: DSAPracticePage,
});

const practiceGroups = [
  {
    label: "Must Do Coding Questions — MAANG",
    icon: "📋",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Must Do Coding Questions — MAANG", url: "https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/", tag: "MAANG (Highly Recommended)", desc: "Curated list of must-do questions for Amazon, Microsoft, Adobe & more", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "💼" },
      { title: "Striver A2Z DSA Course Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", tag: "Sheet (Strong Recommended )", desc: "The ultimate A2Z DSA sheet covering every topic systematically",  stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "📋" },
      { title: "NeetCode 150", url: "https://neetcode.io/roadmap", tag: "Sheet (Recommended)", desc: "The most popular 150 problems curated for coding interviews", stars: 4, gradient: "from-cyan-500/20 via-blue-500/10 to-transparent", thumbBg: "from-indigo-600 to-violet-700", thumbEmoji: "🗺" },
      { title: "Curious Freaks Coding Sheet (413)", url: "https://grindgram.in/career-tracks/curious-coding-sheet", tag: "Sheet (Highly Recommended)", desc: "Master 50 patterns to crack your dream SDE job — 413 curated problems", stars: 5, gradient: "from-indigo-500/20 via-violet-500/10 to-transparent", thumbBg: "from-indigo-600 to-violet-700", thumbEmoji: "📋" },
      { title: "Top 100 DSA Interview Qs — Topic-wise", url: "https://www.geeksforgeeks.org/dsa/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/", tag: "Interview (Highly Recommended)", desc: "Topic-wise 100 most asked DSA interview questions with solutions", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "🎯" },
      { title: "DSA Sheet by Love Babbar", url: "https://www.geeksforgeeks.org/dsa/dsa-sheet-by-love-babbar/", tag: "450 Interview Questions (Highly Recommended)", desc: "Top 450 Questions by Topic Wise by Love Babbar", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "🎯" },
      { title: "Top 100 DSA Interview Qs (LeetCode)", url: "https://leetcode.com/discuss/post/4258631/top-100-dsa-interview-questions-by-anony-jlgg/", tag: "Interview (Recommended)", desc: "Community-curated top 100 LeetCode questions for interview prep", stars: 3, gradient: "from-amber-500/20 via-yellow-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "💡" },
      { title: "LeetCode 75", url: "https://leetcode.com/studyplan/leetcode-75/", tag: "Study Plan (Higly Recommended)", desc: "75 essential LeetCode problems to ace your coding interview", stars: 4, gradient: "from-amber-500/20 via-orange-500/10 to-transparent", thumbBg: "from-amber-600 to-orange-700", thumbEmoji: "📝" },
      { title: "Top 100 Liked Problems", url: "https://leetcode.com/studyplan/top-100-liked/", tag: "Study Plan (Highly Recommended)", desc: "The most liked LeetCode problems — community favorites for practice", stars: 4, gradient: "from-amber-500/20 via-orange-500/10 to-transparent", thumbBg: "from-amber-600 to-orange-700", thumbEmoji: "❤️" },
      { title: "Codolio Company Wise Prep", url: "https://codolio.com/", tag: "Codolio (Highly Recommended)", desc: "Codolio Company Wise Prep", stars: 5, gradient: "from-amber-500/20 via-orange-500/10 to-transparent", thumbBg: "from-amber-600 to-orange-700", thumbEmoji: "❤️" },
      { title: "20 Essential DSA Patterns by Kushal Vijay (Recommended)", url: "https://codolio.com/question-tracker/sheet/20-essential-dsa-patterns-by-kushal", tag: "20 Essential DSA Patterns by Kushal Vijay (Recommended)", desc: "20 Essential DSA Patterns by Kushal Vijay - 180 Questions", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "💼" },
    ],
  },
  {
    label: "30 Days DSA Bootcamp (Unstop)",
    icon: "🚀",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "30 Days DSA Bootcamp", url: "https://unstop.com/practice/company-preparation/30-days-dsa-bootcamp/day-introduction-to-programming-37651/basics-of-programming-37652", tag: "Bootcamp", desc: "Intensive 30-day bootcamp with daily DSA problems and solutions", stars: 3, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "🚀" },
      { title: "GfG - 3741 Problems Sheet (Problem of the day)", url: "https://www.geeksforgeeks.org/explore?page=2&sortBy=submissions", tag: "Popular Problems - 3741", desc: "GfG List of 3741 Problems", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "🚀" },
      { title: "TUF - 190 Problems Sheet (Recommended)", url: "https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems", tag: "Popular Problems - 190", desc: "Strivers SDE Sheet - Top Coding Interview Problems 190 Problems", stars: 5, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "🚀" },
    ],
  },
  {
    label: "Python Core & DSA Course with AI",
    icon: "🤖",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-blue-600 to-indigo-700",
    items: [
      { title: "Python DSA Course with AI", url: "https://unstop.com/courses/python/python-dsa", tag: "Course", desc: "AI-powered Python DSA course with personalized learning path", stars: 3, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "🤖" },
      { title: "Python Basics with AI", url: "https://unstop.com/courses/python/python-basics", tag: "Course", desc: "Master Python fundamentals with AI-guided exercises", stars: 3, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "🐍" },
      { title: "Intermediate Python with AI", url: "https://unstop.com/courses/python/intermediate-coding-in-python-with-ai", tag: "Course", desc: "Level up your Python skills with intermediate concepts and AI support", stars: 2, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "⚡" },
      { title: "Ultimate Python Guide with AI", url: "https://unstop.com/courses/python/ultimate-python-guide", tag: "Course", desc: "The most comprehensive Python guide with AI-powered practice", stars: 3, gradient: "from-yellow-500/20 via-amber-500/10 to-transparent", thumbBg: "from-yellow-600 to-amber-700", thumbEmoji: "🏆" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "12", label: "Resources" },
  { icon: TargetIcon, value: "400+", label: "Problems" },
  { icon: TrophyIcon, value: "5", label: "Sheets" },
];

function DSAPracticePage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "dsa" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to DSA Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/dsa-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Coding <span className="text-gradient">Practice Questions</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Curated coding sheets, interview questions, bootcamps and AI-powered courses. Practice 400+ problems across all DSA topics to crack MAANG interviews.</p>
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
