import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon,
  HeartIcon,
} from "@/components/icons";
import { useFavorites } from "@/hooks/use-favorites";

export const Route = createFileRoute("/track/math/practice")({
  head: () => ({
    meta: [
      { title: "Maths for Engineering Interview Prep Q&A — MAANG Learn X" },
      { name: "description", content: "Curated Maths for Engineering interview questions, practice problems and Q&A for exams and interviews." },
    ],
  }),
  component: MathPracticePage,
});

const practiceGroups = [
  {
    label: "Statistics & Probability — Practice Questions",
    icon: "📊",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "Statistics Practice Problems — Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", tag: "Interactive Practice", desc: "Interactive statistics exercises — distributions, sampling, hypothesis testing and confidence intervals with instant feedback", stars: 5, thumbEmoji: "📊" },
      { title: "Probability Problems — Brilliant.org", url: "https://brilliant.org/courses/probability/", tag: "Problem Solving", desc: "Guided probability problems — conditional probability, Bayes theorem, random variables and expected value", stars: 5, thumbEmoji: "🎲" },
      { title: "GfG Probability & Statistics Questions", url: "https://www.geeksforgeeks.org/probability-and-statistics-questions/", tag: "Interview Q&A", desc: "Curated probability and statistics interview questions with detailed solutions — for tech interviews and exams", stars: 4, thumbEmoji: "💡" },
      { title: "StatQuest Practice — Quiz Yourself", url: "https://statquest.org/", tag: "Self Assessment", desc: "Test your statistics knowledge — practice problems covering regression, hypothesis testing, PCA and more", stars: 4, thumbEmoji: "🧪" },
    ],
  },
  {
    label: "Linear Algebra — Practice Questions",
    icon: "🔢",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-purple-600 to-violet-700",
    items: [
      { title: "Linear Algebra Exercises — MIT 18.06", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/exams/", tag: "Exam Papers", desc: "MIT linear algebra exam papers with solutions — matrix operations, eigenvalues, SVD and least squares", stars: 5, thumbEmoji: "📝" },
      { title: "Linear Algebra Problems — Paul's Online Notes", url: "https://tutorial.math.lamar.edu/Problems/LinAlg/LinAlg.aspx", tag: "Problem Sets", desc: "Comprehensive linear algebra problem sets with solutions — systems of equations, vector spaces, transformations and diagonalization", stars: 5, thumbEmoji: "🔢" },
      { title: "Matrix Operations Practice — Symbolab", url: "https://www.symbolab.com/practice/matrix-operations-practice", tag: "Interactive", desc: "Interactive matrix operations practice — multiplication, determinants, inverses, eigenvalues and eigenvectors", stars: 4, thumbEmoji: "🧮" },
      { title: "GfG Linear Algebra Questions", url: "https://www.geeksforgeeks.org/engineering-mathematics/linear-algebra-questions/", tag: "Interview Q&A", desc: "Linear algebra interview questions with solutions — matrices, determinants, vector spaces and linear transformations", stars: 4, thumbEmoji: "💡" },
    ],
  },
  {
    label: "Calculus & Optimization — Practice Questions",
    icon: "∫",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "Calculus Practice — Khan Academy", url: "https://www.khanacademy.org/math/calculus-1", tag: "Interactive Practice", desc: "Interactive calculus exercises — limits, derivatives, integrals and applications with step-by-step feedback", stars: 5, thumbEmoji: "∫" },
      { title: "Paul's Online Math Notes — Practice Problems", url: "https://tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx", tag: "Problem Sets", desc: "Extensive calculus problem sets with full solutions — derivatives, integrals, sequences and series", stars: 5, thumbEmoji: "📝" },
      { title: "Optimization Problems — MIT 6.079", url: "https://ocw.mit.edu/courses/6-079j-introduction-to-convex-optimization-spring-2008/pages/exercises/", tag: "Convex Optimization", desc: "Convex optimization exercises — gradient descent, Lagrange duality, KDT conditions and constrained optimization", stars: 4, thumbEmoji: "📈" },
      { title: "GfG Engineering Maths Questions", url: "https://www.geeksforgeeks.org/engineering-mathematics/", tag: "Interview Q&A", desc: "Engineering mathematics interview questions — calculus, differential equations and numerical methods", stars: 4, thumbEmoji: "💡" },
    ],
  },
  {
    label: "Discrete Math — Practice Questions",
    icon: "🔗",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    thumbBg: "from-emerald-600 to-teal-700",
    items: [
      { title: "Discrete Math Exercises — MIT 6.042J", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/pages/exams/", tag: "Exam Papers", desc: "MIT discrete math exam papers with solutions — proofs, induction, graph theory, counting and number theory", stars: 5, thumbEmoji: "📝" },
      { title: "Combinatorics Practice — Brilliant.org", url: "https://brilliant.org/courses/combinatorics/", tag: "Problem Solving", desc: "Interactive combinatorics problems — permutations, combinations, pigeonhole principle and generating functions", stars: 5, thumbEmoji: "🔗" },
      { title: "Graph Theory Problems — GfG", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", tag: "Algorithm Practice", desc: "Graph theory problems and algorithms — BFS, DFS, shortest paths, MST and network flow with implementations", stars: 4, thumbEmoji: "🌐" },
      { title: "GfG Discrete Math Questions", url: "https://www.geeksforgeeks.org/engineering-mathematics/discrete-mathematics-questions/", tag: "Interview Q&A", desc: "Discrete mathematics interview questions — logic, set theory, combinatorics and graph theory", stars: 4, thumbEmoji: "💡" },
    ],
  },
  {
    label: "Important Questions & Exam Prep",
    icon: "🎯",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Engineering Maths — Gate Exam Questions", url: "https://www.geeksforgeeks.org/engineering-mathematics/gate-cs-mathematics/", tag: "GATE Prep", desc: "GATE engineering mathematics questions — linear algebra, calculus, probability, discrete math and numerical methods", stars: 5, thumbEmoji: "🎯" },
      { title: "Mathematics for ML — Practice Book", url: "https://mml-book.github.io/book/mml-book.pdf", tag: "Practice Book", desc: "Mathematics for machine learning practice — worked examples and exercises for every concept", stars: 5, thumbEmoji: "📕" },
      { title: "3Blue1Brown — Practice Exercises", url: "https://www.3blue1brown.com/", tag: "Visual Practice", desc: "Visual practice exercises for linear algebra, calculus and neural networks — build intuition through interactive problems", stars: 4, thumbEmoji: "🎨" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "18", label: "Resources" },
  { icon: TargetIcon, value: "500+", label: "Problems" },
  { icon: TrophyIcon, value: "5", label: "Topics" },
];

function MathPracticePage() {
  const { favIds, toggle: toggleFav } = useFavorites();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "math" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Maths Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/math-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Maths for Engineering <span className="text-gradient">Interview Prep Q&A</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Curated practice questions, interview Q&A and problem sets for Engineering Mathematics. Statistics, Linear Algebra, Calculus, Discrete Math and Probability — from MIT, Stanford and top platforms.</p>
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
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/prac:text-primary transition-colors flex-1">{practice.title}</h3><button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(practice.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(practice.url) ? "Remove from Favorites" : "Add to Favorites"}><HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(practice.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} /></button></div>
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
