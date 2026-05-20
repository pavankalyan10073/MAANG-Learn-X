import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BrainIcon, CheckIcon, BookOpenIcon, TargetIcon, RocketIcon,
  GraduationCapIcon, BriefcaseIcon, SparklesIcon, Code2Icon,
  ArrowRightIcon, LayersIcon, ExternalLinkIcon,
} from "@/components/icons";

export const Route = createFileRoute("/roadmap/ai-engineer")({
  head: () => ({
    meta: [
      { title: "AI Engineer Roadmap — MAANG Learn X" },
      { name: "description", content: "Complete AI Engineer / Generative AI Engineer roadmap for 2026. Python + ML + Deep Learning + LLMs + RAG + Agents + Full Stack AI." },
    ],
  }),
  component: AIEngineerRoadmapPage,
});

const phases = [
  {
    label: " 3 MONTH",
    title: "Beginner → Intermediate",
    goal: "Build strong AI foundations + basic AI projects.",
    accent: "text-primary",
    months: [
      {
        emoji: "📅",
        title: "MONTH 1 — Python + Math + ML Basics",
        learn: [
          { icon: "🐍", text: "Python — Syntax, Functions, OOPs, File Handling, APIs" },
          { icon: "📊", text: "Math for AI — Statistics, Probability, Linear Algebra basics" },
          { icon: "📦", text: "Python Libraries — NumPy, Pandas, Matplotlib" },
        ],
        resources: [
          { label: "Python Full Course - freeCodeCamp", icon: Code2Icon, url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
          { label: "StatQuest", icon: BrainIcon, url: "https://www.youtube.com/@statquest" },
          { label: "Kaggle Learn", icon: BookOpenIcon, url: "https://www.kaggle.com/learn" },
        ],
        projects: ["Student Data Analyzer", "CSV Dashboard", "Basic Chatbot"],
      },
      {
        emoji: "📅",
        title: "MONTH 2 — Machine Learning + Data Science",
        learn: [
          { icon: "🤖", text: "Machine Learning — Linear Regression, Logistic Regression, Decision Trees, Random Forest, Clustering" },
          { icon: "📊", text: "Data Science — EDA, Data Cleaning, Feature Engineering" },
          { icon: "📈", text: "Visualization — Seaborn, Plotly" },
        ],
        resources: [
          { label: "Andrew Ng ML Course", icon: GraduationCapIcon, url: "https://www.coursera.org/learn/machine-learning" },
          { label: "Practical ML - Krish Naik", icon: BrainIcon, url: "https://www.youtube.com/@krishnaik06" },
        ],
        projects: ["House Price Predictor", "Resume Classifier", "Movie Recommendation System"],
      },
      {
        emoji: "📅",
        title: "MONTH 3 — Deep Learning + Gen AI Intro",
        learn: [
          { icon: "🧠", text: "Deep Learning — Neural Networks, CNN, RNN" },
          { icon: "🤖", text: "Gen AI Basics — LLM Concepts, Prompt Engineering, OpenAI API, Hugging Face" },
        ],
        resources: [
          { label: "DeepLearning.AI", icon: GraduationCapIcon, url: "https://www.deeplearning.ai" },
          { label: "Hugging Face Course", icon: BrainIcon, url: "https://huggingface.co/learn" },
        ],
        projects: ["AI Resume Analyzer", "AI PDF Chatbot", "AI Image Caption Generator"],
      },
    ],
    result: ["✅ Python Strong", "✅ ML Basics", "✅ Deep Learning Intro", "✅ Gen AI Basics", "✅ 3–5 AI Projects"],
    opportunities: ["AI Internships", "Freelancing", "Beginner AI roles"],
  },
  {
    label: " 6 MONTH",
    title: "Intermediate → Industry Ready",
    goal: "Become job/internship ready AI Engineer.",
    accent: "text-accent",
    months: [
      {
        emoji: "📅",
        title: "MONTH 4 — LLMs + RAG Systems",
        learn: [
          { icon: "🤖", text: "LLM Stack — Transformers, Embeddings, Vector DBs" },
          { icon: "🧠", text: "RAG — LangChain, Pinecone/FAISS, Retrieval Pipelines" },
        ],
        resources: [
          { label: "LangChain Docs", icon: BookOpenIcon, url: "https://python.langchain.com" },
          { label: "OpenAI Docs", icon: Code2Icon, url: "https://platform.openai.com/docs" },
        ],
        projects: ["AI Research Assistant", "RAG PDF Chatbot", "AI Notes Generator"],
      },
      {
        emoji: "📅",
        title: "MONTH 5 — Agentic AI + AI Deployment",
        learn: [
          { icon: "🤖", text: "Agentic AI — AI Agents, Multi-Agent Systems, Memory, Tool Calling" },
          { icon: "☁", text: "Deployment — Streamlit, Vercel, Docker basics" },
        ],
        resources: [
          { label: "CrewAI Docs", icon: BrainIcon, url: "https://docs.crewai.com" },
          { label: "Streamlit Docs", icon: Code2Icon, url: "https://streamlit.io" },
        ],
        projects: ["Multi-Agent AI Assistant", "AI Coding Assistant", "AI Career Mentor"],
      },
      {
        emoji: "📅",
        title: "MONTH 6 — Portfolio + System Design + Resume",
        learn: [
          { icon: "🏗", text: "AI System Design — AI Architecture, Scaling AI apps, APIs" },
          { icon: "💼", text: "Career Prep — Resume, LinkedIn, GitHub Optimization" },
        ],
        resources: [
          { label: "System Design Primer", icon: LayersIcon, url: "https://github.com/donnemartin/system-design-primer" },
          { label: "ByteByteGo", icon: BookOpenIcon, url: "https://bytebytego.com" },
        ],
        projects: ["AI SaaS Platform", "AI Interview Assistant", "AI Learning Platform"],
      },
    ],
    result: ["✅ Internship Ready", "✅ Freelance Ready", "✅ AI Product Ready", "✅ Strong Portfolio", "✅ Real AI Projects"],
    opportunities: ["₹10–20 LPA internships/jobs", "Startup AI roles", "Remote projects"],
  },
  {
    label: " 1 YEAR",
    title: "Advanced → High Paying AI Engineer",
    goal: "Become top-tier AI Engineer for FAANG, AI startups, Remote US jobs.",
    accent: "text-success",
    months: [
      {
        emoji: "📅",
        title: "MONTHS 7–9 — Advanced AI Engineering",
        learn: [
          { icon: "🧠", text: "Advanced Topics — Fine Tuning, LoRA, Quantization, AI Optimization, GPU Training" },
          { icon: "☁", text: "MLOps — ML Pipelines, CI/CD for AI, Monitoring" },
        ],
        resources: [
          { label: "Hugging Face", icon: BrainIcon, url: "https://huggingface.co" },
          { label: "MLOps Specialization", icon: GraduationCapIcon, url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" },
        ],
        projects: ["Custom Fine-Tuned LLM", "AI SaaS Product", "Enterprise RAG System"],
      },
      {
        emoji: "📅",
        title: "MONTHS 10–12 — FAANG-Level Preparation",
        learn: [
          { icon: "💻", text: "DSA — LeetCode Medium/Hard" },
          { icon: "🏗", text: "System Design — AI System Design, Distributed Systems" },
          { icon: "☁", text: "Cloud — AWS, Kubernetes, Docker" },
        ],
        resources: [
          { label: "Striver A2Z DSA", icon: Code2Icon, url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
          { label: "AWS Skill Builder", icon: SparklesIcon, url: "https://aws.amazon.com/training/digital" },
        ],
        projects: ["AI SaaS", "Multi-Agent Platform", "AI Code Assistant", "AI Resume Analyzer", "Enterprise RAG Chatbot"],
      },
    ],
    result: ["✅ FAANG Ready", "✅ AI Product Engineer", "✅ ₹30–50+ LPA Potential", "✅ Remote Global Jobs"],
    opportunities: ["FAANG AI roles", "AI Startup opportunities", "Remote US jobs"],
  },
];

const mustMaster = ["Python", "Machine Learning", "LLMs", "RAG", "LangChain", "AI Agents", "APIs", "Cloud Deployment", "System Design"];

function AIEngineerRoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <BrainIcon className="h-3 w-3 text-primary" />
          Role-Based Roadmap
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          AI Engineer / Generative AI <span className="text-gradient">Engineer</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
          Python + ML + Deep Learning + LLMs + RAG + Agents + Full Stack AI
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {["FAANG-level AI roles", "Gen AI Engineer roles", "AI Startups", "Remote AI jobs", "High-paying AI internships"].map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] font-medium">{tag}</Badge>
          ))}
        </div>
      </section>

      <div className="space-y-8">
        {phases.map((phase) => (
          <Card key={phase.label} className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6 md:p-8">
            <div className="mb-6">
              <div className={`text-xs font-bold uppercase tracking-[0.15em] ${phase.accent} mb-1`}>{phase.label}</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">{phase.title}</h2>
              <p className="text-sm text-muted-foreground">{phase.goal}</p>
            </div>

            <div className="space-y-6">
              {phase.months.map((month) => (
                <div key={month.title} className="rounded-xl border border-border bg-background/40 p-4 sm:p-5">
                  <h3 className="font-bold text-sm sm:text-base mb-3">{month.emoji} {month.title}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">✅ Learn</h4>
                      <ul className="space-y-1.5">
                        {month.learn.map((item) => (
                          <li key={item.text} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="shrink-0">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">📚 Resources</h4>
                      <ul className="space-y-1.5">
                        {month.resources.map((res) => {
                          const ResIcon = res.icon;
                          return (
                            <li key={res.label}>
                              <a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group">
                                <ResIcon className="h-3 w-3 shrink-0 mt-0.5 text-primary" />
                                <span className="group-hover:underline">{res.label}</span>
                                <ExternalLinkIcon className="h-2.5 w-2.5 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">🛠 Build</h4>
                      <ul className="space-y-1.5">
                        {month.projects.map((proj) => (
                          <li key={proj} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckIcon className="h-3 w-3 shrink-0 mt-0.5 text-success" />
                            <span>{proj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-success/20 bg-success/[0.06] p-4 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-success mb-2"> RESULT</h4>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-3">
                {phase.result.map((r) => (
                  <p key={r} className="text-xs text-muted-foreground">{r}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.opportunities.map((opp) => (
                  <Badge key={opp} variant="outline" className="text-[10px] font-medium text-success border-success/30">{opp}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-10 mb-8">
        <Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-warning/[0.06] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1"> MOST IMPORTANT SKILLS FOR HIGH PAY</h3>
            <p className="text-xs text-muted-foreground mb-4">MUST MASTER:</p>
            <div className="flex flex-wrap gap-2">
              {mustMaster.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="text-center">
        <Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become an AI Engineer?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md">
            Start with the 3-month roadmap and build your way up to FAANG-level AI roles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0">
              <Link to="/track/$slug" params={{ slug: "ai-ml" }}>
                Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/roadmaps">View All Roadmaps</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
