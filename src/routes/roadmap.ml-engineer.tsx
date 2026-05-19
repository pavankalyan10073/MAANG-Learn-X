import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, BookOpenIcon, Code2Icon, GraduationCapIcon, BrainIcon, LayersIcon, TargetIcon, SparklesIcon, DatabaseIcon, ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";

export const Route = createFileRoute("/roadmap/ml-engineer")({
  head: () => ({ meta: [{ title: "Machine Learning Engineer Roadmap — MAANG Learn X" }, { name: "description", content: "Complete Machine Learning Engineer roadmap for 2026." }] }),
  component: MLEngineerRoadmapPage,
});

const phases = [
  { label:" 3 MONTH",title:"Beginner → Intermediate",goal:"Build strong Python + ML + Data foundations.",accent:"text-primary",
    months:[
      {emoji:"📅",title:"MONTH 1 — Python + Math + Data Analysis",learn:[{icon:"🐍",text:"Python — Functions, OOP, APIs, File Handling"},{icon:"📊",text:"Math for ML — Statistics, Probability, Linear Algebra"},{icon:"📦",text:"Libraries — NumPy, Pandas, Matplotlib"}],resources:[{label:"Python Full Course - freeCodeCamp",icon:Code2Icon,url:"https://www.youtube.com/watch?v=rfscVS0vtbw"},{label:"StatQuest",icon:BrainIcon,url:"https://www.youtube.com/@statquest"},{label:"Kaggle Learn",icon:GraduationCapIcon,url:"https://www.kaggle.com/learn"}],projects:["Student Data Analyzer","Expense Prediction App","Data Visualization Dashboard"]},
      {emoji:"📅",title:"MONTH 2 — Machine Learning Fundamentals",learn:[{icon:"🤖",text:"ML Algorithms — Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN"},{icon:"📊",text:"Data Preprocessing — Cleaning, Feature Engineering, Scaling"}],resources:[{label:"Andrew Ng ML Course",icon:GraduationCapIcon,url:"https://www.coursera.org/learn/machine-learning"},{label:"Krish Naik",icon:BrainIcon,url:"https://www.youtube.com/@krishnaik06"}],projects:["House Price Predictor","Spam Classifier","Customer Churn Prediction"]},
      {emoji:"📅",title:"MONTH 3 — Deep Learning + NLP Basics",learn:[{icon:"🧠",text:"Deep Learning — Neural Networks, CNN, RNN"},{icon:"🗣",text:"NLP Basics — Tokenization, Embeddings, Text Classification"},{icon:"🔥",text:"Frameworks — TensorFlow OR PyTorch"}],resources:[{label:"DeepLearning.AI",icon:GraduationCapIcon,url:"https://www.deeplearning.ai"},{label:"PyTorch Docs",icon:Code2Icon,url:"https://pytorch.org/docs/stable/index.html"}],projects:["Image Classifier","Sentiment Analysis App","Handwritten Digit Recognizer"]},
    ],
    result:["✅ Python Strong","✅ ML Foundations","✅ DL Basics","✅ NLP Intro","✅ Beginner AI Projects"],
    opportunities:["ML Internship","AI Internship"],
  },
  { label:" 6 MONTH",title:"Intermediate → Industry Ready",goal:"Become job-ready ML Engineer.",accent:"text-accent",
    months:[
      {emoji:"📅",title:"MONTH 4 — Advanced Deep Learning + APIs",learn:[{icon:"🧠",text:"Advanced DL — Transfer Learning, Transformers Basics"},{icon:"🔗",text:"APIs — Flask/FastAPI, Model APIs"}],resources:[{label:"Hugging Face",icon:BrainIcon,url:"https://huggingface.co"},{label:"FastAPI Docs",icon:Code2Icon,url:"https://fastapi.tiangolo.com"}],projects:["AI API Service","Image Recognition API","NLP Web App"]},
      {emoji:"📅",title:"MONTH 5 — MLOps + Deployment",learn:[{icon:"☁",text:"MLOps — ML Pipelines, Experiment Tracking, Model Versioning"},{icon:"🚀",text:"Deployment — Streamlit, Docker Basics, Cloud Deployment"}],resources:[{label:"Streamlit Docs",icon:Code2Icon,url:"https://streamlit.io"}],projects:["ML Deployment Platform","AI Dashboard","Model Monitoring App"]},
      {emoji:"📅",title:"MONTH 6 — Real Projects + Portfolio + Resume",learn:[{icon:"💼",text:"Career Prep — Resume, LinkedIn, GitHub"},{icon:"🏗",text:"Real AI Systems — Recommendation Systems, Forecasting Models"}],resources:[{label:"Kaggle Competitions",icon:TargetIcon,url:"https://www.kaggle.com/competitions"}],projects:["AI Recommendation System","NLP Chatbot","ML Deployment App","AI Analytics Dashboard"]},
    ],
    result:["✅ ML Deployment Skills","✅ Deep Learning Projects","✅ Portfolio Ready","✅ API Integration Skills","✅ Industry-Ready ML Foundations"],
    opportunities:["₹10–25 LPA opportunities","ML Engineer roles","AI Product startups","Remote AI work"],
  },
  { label:" 1 YEAR",title:"Advanced → High Paying ML Engineer",goal:"Become advanced ML/AI Engineer.",accent:"text-success",
    months:[
      {emoji:"📅",title:"MONTHS 7–9 — Advanced AI Systems",learn:[{icon:"🤖",text:"Advanced AI — Transformers, LLM Basics, RAG Intro"},{icon:"☁",text:"Advanced MLOps — Kubernetes Basics, CI/CD for ML"}],resources:[{label:"Hugging Face",icon:BrainIcon,url:"https://huggingface.co"}],projects:["AI Assistant","Recommendation Engine","Enterprise ML Pipeline"]},
      {emoji:"📅",title:"MONTHS 10–12 — Production AI Engineering",learn:[{icon:"🏗",text:"Production Systems — Scalable AI APIs, Monitoring, Optimization"},{icon:"☁",text:"Cloud AI — AWS/GCP AI Services"}],resources:[{label:"AWS AI Services",icon:SparklesIcon,url:"https://aws.amazon.com/machine-learning/"}],projects:["Enterprise AI Platform","AI SaaS Product","NLP Application","ML Pipeline System","AI Deployment Dashboard"]},
    ],
    result:["✅ Production ML Engineer","✅ MLOps Expert","✅ Scalable AI Systems","✅ Enterprise Portfolio"],
    opportunities:["₹20–40+ LPA roles","Senior ML Engineer","ML Platform Engineer","AI Infrastructure roles"],
  },
];
const mustMaster=["Python","Machine Learning","Deep Learning","NLP","PyTorch/TensorFlow","APIs","MLOps","Deployment"];

function MLEngineerRoadmapPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur"><BrainIcon className="h-3 w-3 text-primary" />Role-Based Roadmap</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Machine Learning <span className="text-gradient">Engineer</span></h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Python + ML + Deep Learning + MLOps + Deployment + AI Systems</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">{["Machine Learning Engineer roles","AI Product Engineer roles","Applied AI roles","ML Platform Engineer roles"].map(t=><Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>)}</div>
      </section>
      <div className="space-y-8">{phases.map((phase)=>(
        <Card key={phase.label} className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6 md:p-8">
          <div className="mb-6"><div className={`text-xs font-bold uppercase tracking-[0.15em] ${phase.accent} mb-1`}>{phase.label}</div><h2 className="text-xl sm:text-2xl font-bold mb-1">{phase.title}</h2><p className="text-sm text-muted-foreground">{phase.goal}</p></div>
          <div className="space-y-6">{phase.months.map((m)=>(
            <div key={m.title} className="rounded-xl border border-border bg-background/40 p-4 sm:p-5">
              <h3 className="font-bold text-sm sm:text-base mb-3">{m.emoji} {m.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">✅ Learn</h4><ul className="space-y-1.5">{m.learn.map((i)=><li key={i.text} className="flex items-start gap-2 text-xs text-muted-foreground"><span className="shrink-0">{i.icon}</span><span>{i.text}</span></li>)}</ul></div>
                <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">📚 Resources</h4><ul className="space-y-1.5">{m.resources.map((r)=>{const RI=r.icon;return <li key={r.label}><a href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group"><RI className="h-3 w-3 shrink-0 mt-0.5 text-primary" /><span className="group-hover:underline">{r.label}</span><ExternalLinkIcon className="h-2.5 w-2.5 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>})}</ul></div>
                <div><h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">🛠 Build</h4><ul className="space-y-1.5">{m.projects.map((p)=><li key={p} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckIcon className="h-3 w-3 shrink-0 mt-0.5 text-success" /><span>{p}</span></li>)}</ul></div>
              </div>
            </div>
          ))}</div>
          <div className="mt-6 rounded-xl border border-success/20 bg-success/[0.06] p-4 sm:p-5"><h4 className="text-xs font-bold uppercase tracking-wider text-success mb-2"> RESULT</h4><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-3">{phase.result.map((r)=><p key={r} className="text-xs text-muted-foreground">{r}</p>)}</div><div className="flex flex-wrap gap-2">{phase.opportunities.map((o)=><Badge key={o} variant="outline" className="text-[10px] font-medium text-success border-success/30">{o}</Badge>)}</div></div>
        </Card>
      ))}</div>
      <section className="mt-10 mb-8"><Card className="relative overflow-hidden bg-card/60 backdrop-blur border-border p-5 sm:p-6"><div className="absolute inset-0 bg-gradient-to-r from-warning/[0.06] to-transparent pointer-events-none" /><div className="relative z-10"><h3 className="text-lg font-bold mb-1"> MOST IMPORTANT SKILLS FOR HIGH PAY</h3><p className="text-xs text-muted-foreground mb-4">MUST MASTER:</p><div className="flex flex-wrap gap-2">{mustMaster.map((s)=><span key={s} className="inline-flex items-center rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-semibold text-foreground">{s}</span>)}</div></div></Card></section>
      <section className="text-center"><Card className="inline-block p-6 sm:p-8 bg-card/60 backdrop-blur border-border"><h3 className="text-lg sm:text-xl font-bold mb-2">Ready to become an ML Engineer?</h3><p className="text-sm text-muted-foreground mb-5 max-w-md">Start with Python and ML fundamentals and build your way up to production-grade ML systems.</p><div className="flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg" className="bg-gradient-primary shadow-glow border-0"><Link to="/track/$slug" params={{slug:"ai-ml"}}>Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/roadmaps">View All Roadmaps</Link></Button></div></Card></section>
    </div>
  );
}
