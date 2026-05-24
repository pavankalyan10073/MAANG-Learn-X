import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/ai-ml/practice")({
  head: () => ({
    meta: [
      { title: "AI & ML Interview Prep — MAANG Learn X" },
      { name: "description", content: "AI & ML interview questions, project ideas and practice resources — ML, DL, NLP, LLMs and MLOps." },
    ],
  }),
  component: AiMlPracticePage,
});

const practiceGroups = [
  {
    label: "ML Interview Questions & Answers",
    icon: "🧠",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "Machine Learning Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/machine-learning/machine-learning-interview-questions/", tag: "Interview Q&A", desc: "Top ML interview questions with answers — bias-variance, overfitting, regularization, SVM, decision trees, ensembles and evaluation metrics", stars: 5, gradient: "from-blue-500/20 via-cyan-500/10 to-transparent", thumbBg: "from-blue-600 to-cyan-700", thumbEmoji: "🧠" },
      { title: "AI Interview Questions & Answers — GeeksforGeeks", url: "https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligenceai-interview-questions-and-answers/", tag: "Interview Q&A", desc: "Top AI interview questions — search algorithms, game theory, knowledge representation, ML algorithms, neural networks and NLP", stars: 5, gradient: "from-cyan-500/20 via-teal-500/10 to-transparent", thumbBg: "from-cyan-600 to-teal-700", thumbEmoji: "🤖" },
    ],
  },
  {
    label: "ML Projects & Competitions",
    icon: "🏗️",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-purple-600 to-violet-700",
    items: [
      { title: "100+ ML Projects with Source Code — GeeksforGeeks", url: "https://www.geeksforgeeks.org/machine-learning/machine-learning-projects/", tag: "Projects", desc: "Hands-on ML projects with source code — classification, regression, NLP, computer vision, recommendation systems and deep learning projects", stars: 5, gradient: "from-purple-500/20 via-violet-500/10 to-transparent", thumbBg: "from-purple-600 to-violet-700", thumbEmoji: "🏗️" },
      { title: "Kaggle Competitions & Datasets", url: "https://www.kaggle.com/competitions", tag: "Competitions", desc: "Real-world ML competitions — beginner to expert level challenges with datasets, kernels, leaderboards and prize pools", stars: 5, gradient: "from-indigo-500/20 via-blue-500/10 to-transparent", thumbBg: "from-indigo-600 to-blue-700", thumbEmoji: "🏆" },
      { title: "Kaggle Datasets", url: "https://www.kaggle.com/datasets", tag: "Datasets", desc: "Thousands of datasets for ML practice — tabular, image, text, audio, time series and geospatial data for all skill levels", stars: 4, gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent", thumbBg: "from-violet-600 to-fuchsia-700", thumbEmoji: "📊" },
    ],
  },
  {
    label: "LangChain & LLM Agent Practice",
    icon: "🤖",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "LangChain Docs — Build LLM Apps", url: "https://python.langchain.com/docs/introduction/", tag: "Docs", desc: "Build LLM applications — chains, agents, memory, document loaders, RAG pipelines, chat models and tool integration", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "🤖" },
      { title: "Microsoft AutoGen — Multi-Agent Framework", url: "https://microsoft.github.io/autogen/", tag: "Agent Framework", desc: "Build multi-agent AI systems — conversational agents, code execution, group chat, human-in-the-loop and custom agents", stars: 4, gradient: "from-emerald-500/20 via-teal-500/10 to-transparent", thumbBg: "from-emerald-600 to-teal-700", thumbEmoji: "🔧" },
      { title: "CrewAI — AI Agent Orchestration", url: "https://docs.crewai.com/", tag: "Agent Framework", desc: "CrewAI framework — role-based agent teams, task delegation, memory, tools and building production multi-agent applications", stars: 4, gradient: "from-teal-500/20 via-cyan-500/10 to-transparent", thumbBg: "from-teal-600 to-cyan-700", thumbEmoji: "👥" },
      { title: "LangGraph — Build Complex AI Agents", url: "https://langchain-ai.github.io/langgraph/", tag: "Agent Framework", desc: "LangGraph for stateful agents — cycles, branching, persistence, human-in-the-loop and building complex agent workflows", stars: 4, gradient: "from-cyan-500/20 via-blue-500/10 to-transparent", thumbBg: "from-cyan-600 to-blue-700", thumbEmoji: "🕸️" },
    ],
  },
  {
    label: "ML Math & Foundations Practice",
    icon: "📐",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Khan Academy — Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra", tag: "Math", desc: "Linear algebra fundamentals — vectors, matrices, transformations, eigenvalues, eigenvectors and matrix operations for ML", stars: 5, gradient: "from-amber-500/20 via-yellow-500/10 to-transparent", thumbBg: "from-amber-600 to-yellow-700", thumbEmoji: "📐" },
      { title: "Khan Academy — Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability", tag: "Math", desc: "Statistics and probability — distributions, hypothesis testing, Bayes theorem, regression and statistical inference for ML", stars: 5, gradient: "from-yellow-500/20 via-orange-500/10 to-transparent", thumbBg: "from-yellow-600 to-orange-700", thumbEmoji: "📈" },
      { title: "Data Science Math Skills — Coursera", url: "https://www.coursera.org/learn/datasciencemathskills", tag: "Math", desc: "Math for data science — algebra, calculus, probability, Bayes theorem and building mathematical intuition for ML", stars: 4, gradient: "from-orange-500/20 via-amber-500/10 to-transparent", thumbBg: "from-orange-600 to-amber-700", thumbEmoji: "🧮" },
      { title: "XGBoost Documentation — Practice Guide", url: "https://xgboost.readthedocs.io/en/stable/", tag: "Docs", desc: "XGBoost guide — gradient boosting, hyperparameters, regularization, feature importance and winning Kaggle competitions", stars: 4, gradient: "from-lime-500/20 via-green-500/10 to-transparent", thumbBg: "from-lime-600 to-green-700", thumbEmoji: "🌳" },
    ],
  },
  {
    label: "AWS ML Foundations — Udacity",
    icon: "☁️",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    thumbBg: "from-pink-600 to-rose-700",
    items: [
      { title: "AWS Machine Learning Foundations — Udacity", url: "https://www.udacity.com/course/aws-machine-learning-foundations--ud065", tag: "Course", desc: "AWS ML foundations — SageMaker, data engineering, model training, tuning, deployment and MLOps with AWS cloud services", stars: 4, gradient: "from-pink-500/20 via-rose-500/10 to-transparent", thumbBg: "from-pink-600 to-rose-700", thumbEmoji: "☁️" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "13", label: "Resources" },
  { icon: TargetIcon, value: "100+", label: "Projects" },
  { icon: TrophyIcon, value: "4", label: "Categories" },
];

function AiMlPracticePage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "ai-ml" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to AI & ML Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/ai-ml-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">AI & ML <span className="text-gradient">Interview Prep</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Interview questions, hands-on projects and LLM agent frameworks. Practice ML interview prep, build 100+ projects and master LangChain, RAG and multi-agent systems.</p>
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
