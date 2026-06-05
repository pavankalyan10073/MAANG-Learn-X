import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, BookOpenIcon,
  NotebookIcon, SparklesIcon, MapIcon, LibraryIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/math/notes")({
  head: () => ({
    meta: [
      { title: "Maths for Engineering Full Notes — MAANG Learn X" },
      { name: "description", content: "Comprehensive Maths for Engineering notes, cheat sheets, PDFs and theory resources." },
    ],
  }),
  component: MathNotesPage,
});

const noteGroups = [
  {
    label: "Statistics & Probability Notes",
    icon: "📊",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "Statistics Notes — MIT OCW 18.05", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/lecture-notes/", tag: "Lecture Notes", desc: "Complete MIT lecture notes for probability and statistics — random variables, distributions, hypothesis testing and Bayesian inference", thumbIcon: "📊" },
      { title: "All of Statistics — Larry Wasserman (PDF)", url: "https://www.stat.cmu.edu/~larry/all-of-statistics/", tag: "PDF Book", desc: "Concise introduction to statistics for ML and data science — covers estimation, hypothesis testing, regression and bootstrap", thumbIcon: "📕" },
      { title: "Probability Cheat Sheet — Stanford CS229", url: "https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-probability", tag: "Cheat Sheet", desc: "Stanford CS229 probability cheat sheet — random variables, distributions, expectation, variance and maximum likelihood", thumbIcon: "📋" },
      { title: "StatQuest Notes & Summaries", url: "https://statquest.org/video-index/", tag: "Study Guide", desc: "Complete StatQuest video index with summaries — every statistics and ML concept explained simply", thumbIcon: "📝" },
    ],
  },
  {
    label: "Linear Algebra Notes",
    icon: "🔢",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-purple-600 to-violet-700",
    items: [
      { title: "Linear Algebra Cheat Sheet — Stanford CS229", url: "https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-linear-algebra", tag: "Cheat Sheet", desc: "Stanford CS229 linear algebra cheat sheet — vectors, matrices, determinants, eigenvalues, SVD and matrix calculus", thumbIcon: "📋" },
      { title: "MIT 18.06 Linear Algebra Lecture Notes — Gilbert Strang", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/lecture-notes/", tag: "Lecture Notes", desc: "Complete MIT linear algebra lecture notes by Gilbert Strang — LU, QR, SVD, projections and least squares", thumbIcon: "📖" },
      { title: "Linear Algebra Review — Stanford CS229", url: "http://cs229.stanford.edu/section/cs229-linalg.pdf", tag: "PDF Review", desc: "Concise linear algebra review for machine learning — matrix operations, eigenvalues and positive definite matrices", thumbIcon: "📄" },
      { title: "Immersive Linear Algebra — Interactive", url: "https://immersivemath.com/ila/index.html", tag: "Interactive Book", desc: "The first fully interactive linear algebra book — visual explanations of every concept with interactive figures", thumbIcon: "🔗" },
    ],
  },
  {
    label: "Calculus & Optimization Notes",
    icon: "∫",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "Calculus Cheat Sheet — Paul's Online Math Notes", url: "https://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_All.pdf", tag: "Cheat Sheet", desc: "Comprehensive calculus cheat sheet — derivatives, integrals, series, convergence tests and common formulas", thumbIcon: "📋" },
      { title: "Multivariable Calculus Notes — MIT 18.02", url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/", tag: "Lecture Notes", desc: "Complete MIT multivariable calculus — partial derivatives, gradients, Lagrange multipliers and multiple integrals", thumbIcon: "📖" },
      { title: "Matrix Calculus for Machine Learning — Terence Parr", url: "https://explained.ai/matrix-calculus/", tag: "Guide", desc: "Matrix calculus made easy — gradients, Jacobians, Hessians and chain rule for ML optimization", thumbIcon: "📝" },
      { title: "Convex Optimization — Boyd & Vandenberghe", url: "https://web.stanford.edu/~boyd/cvxbook/", tag: "PDF Book", desc: "The definitive convex optimization textbook — convex sets, functions, duality and algorithms", thumbIcon: "📕" },
    ],
  },
  {
    label: "Discrete Mathematics Notes",
    icon: "🔗",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    thumbBg: "from-emerald-600 to-teal-700",
    items: [
      { title: "Discrete Math Notes — MIT 6.042J", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/pages/readings/", tag: "Reading Notes", desc: "MIT Mathematics for Computer Science — proofs, induction, graph theory, counting and number theory", thumbIcon: "📖" },
      { title: "Discrete Math Cheat Sheet — CPSC 289", url: "https://www.cs.yale.edu/homes/aspnes/classes/202/notes.pdf", tag: "Cheat Sheet", desc: "Comprehensive discrete math reference — logic, proofs, combinatorics, graph theory and generating functions", thumbIcon: "📋" },
      { title: "Graph Theory Notes — Diestel (Free)", url: "https://diestel-graph-theory.com/basic.html", tag: "Free Book", desc: "Graph theory textbook — trees, connectivity, planar graphs, coloring and Ramsey theory", thumbIcon: "📕" },
    ],
  },
  {
    label: "Roadmaps & Study Guides",
    icon: "🗺",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Mathematics for Machine Learning — Roadmap", url: "https:// mml-book.github.io/", tag: "Book + Roadmap", desc: "Mathematics for machine learning — the complete study path covering linear algebra, calculus, probability and optimization", thumbIcon: "🗺" },
      { title: "Essence of Linear Algebra Summary — 3Blue1Brown", url: "https://www.3blue1brown.com/topics/linear-algebra", tag: "Visual Summary", desc: "Visual summaries of all linear algebra concepts from 3Blue1Brown — vectors, transformations, determinants and eigenvalues", thumbIcon: "🎨" },
    ],
  },
];

const stats = [
  { icon: NotebookIcon, value: "18", label: "Resources" },
  { icon: MapIcon, value: "2", label: "Roadmaps" },
  { icon: LibraryIcon, value: "6", label: "Cheat Sheets" },
];

function MathNotesPage() {
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "math" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Maths Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/math-sections/full-notes.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-semibold tracking-wider">NOTES & GUIDES</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Maths for Engineering <span className="text-gradient">Full Notes</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Comprehensive notes, cheat sheets, PDFs and theory resources. Statistics, Linear Algebra, Calculus, Discrete Math and Probability — from MIT, Stanford and top educators.</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm">
              {stats.map((s) => {
                const SI = s.icon;
                return (
                  <div key={s.label} className="rounded-xl border border-border bg-background/40 px-3 py-2.5 text-center">
                    <SI className="h-4 w-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {noteGroups.map((group, gIdx) => (
        <section key={gIdx} className="mb-10 last:mb-0">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">{group.icon}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{group.label}</h2>
              <p className="text-xs text-muted-foreground">{group.items.length} {group.items.length === 1 ? "resource" : "resources"}</p>
            </div>
          </div>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((note) => (
              <a key={note.url} href={note.url} target="_blank" rel="noopener noreferrer" className="group/note">
                <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.3)] h-full">
                  <div className={"absolute inset-0 bg-gradient-to-br " + group.gradient + " opacity-0 group-hover/note:opacity-100 transition-opacity duration-500"} />
                  <div className="relative z-10">
                    <div className={"relative h-36 sm:h-40 bg-gradient-to-br " + group.thumbBg + " flex items-center justify-center overflow-hidden"}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-lg rotate-12" />
                        <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-xl -rotate-6" />
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-4xl sm:text-5xl mb-1">{note.thumbIcon}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{note.tag}</div>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover/note:opacity-100 transition-all duration-300 translate-x-2 group-hover/note:translate-x-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <ExternalLinkIcon className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-[10px]">{note.tag}</Badge>
                      </div>
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/note:text-primary transition-colors flex-1">{note.title}</h3>{wishlistIds.has(note.url) ? (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); removeFromWishlist(note.url); }} className="shrink-0 p-1 rounded-md hover:bg-amber-500/10 transition-colors mt-0.5" title="Remove from Wishlist">
                              <BookmarkFilledIcon className="h-3.5 w-3.5 text-amber-400" />
                            </button>
                          ) : (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToWishlist(note.url, note.title); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title="Add to Wishlist">
                              <BookmarkPlusIcon className="h-3.5 w-3.5 text-muted-foreground hover:text-amber-400" />
                            </button>
                          )}</div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">{note.desc}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <BookOpenIcon className="h-3 w-3 text-emerald-400" />
                        <span>Open Resource</span>
                        <ExternalLinkIcon className="h-3 w-3 ml-auto opacity-0 group-hover/note:opacity-100 transition-opacity" />
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
