import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, BookOpenIcon,
  NotebookIcon, SparklesIcon, MapIcon, LibraryIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/ai-ml/notes")({
  head: () => ({
    meta: [
      { title: "AI & ML Full Notes — MAANG Learn X" },
      { name: "description", content: "Comprehensive AI & ML notes — ML, DL, NLP, LLMs, RAG, LangChain, Computer Vision and MLOps guides." },
    ],
  }),
  component: AiMlNotesPage,
});

const noteGroups = [
  {
    label: "AI & ML — All-in-One Roadmap",
    icon: "🗺️",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Machine Learning 5-Level Roadmap", url: "https://docs.google.com/document/u/0/d/1-mUmS8cOwY5XFuh7mIeD6oLeOT4rWKIYdRyI3WEYiH8/mobilebasic", tag: "Roadmap", desc: "Complete ML roadmap — Level 1: Math Basics → Level 2: Core Algorithms → Level 3: Feature Engineering → Level 4: Deep Learning → Level 5: MLOps", thumbIcon: "🗺️" },
    ],
  },
  {
    label: "Machine Learning Foundations",
    icon: "🤖",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "Machine Learning Tutorial Notes — GeeksforGeeks", url: "https://www.geeksforgeeks.org/machine-learning/machine-learning/", tag: "ML Notes", desc: "Complete ML notes — supervised learning, unsupervised learning, regression, classification, clustering, SVM, ensemble methods and evaluation metrics", thumbIcon: "🤖" },
      { title: "Learn Intro to Machine Learning — Kaggle", url: "https://www.kaggle.com/learn/intro-to-machine-learning", tag: "Tutorial", desc: "Hands-on ML tutorial — decision trees, random forests, model validation, overfitting, underfitting and data leakage", thumbIcon: "📝" },
      { title: "Learn Intermediate Machine Learning — Kaggle", url: "https://www.kaggle.com/learn/intermediate-machine-learning", tag: "Tutorial", desc: "Intermediate ML — handling missing values, categorical variables, pipelines, cross-validation, XGBoost and data leakage", thumbIcon: "📊" },
      { title: "Learn Feature Engineering — Kaggle", url: "https://www.kaggle.com/learn/feature-engineering", tag: "Tutorial", desc: "Feature engineering techniques — mutual information, creating features, clustering, PCA and target encoding", thumbIcon: "⚙️" },
      { title: "Machine Learning — Google for Developers", url: "https://developers.google.com/machine-learning", tag: "Guide", desc: "Google's ML guide — framing, understanding data, model training, evaluation, regularization and production ML", thumbIcon: "🔬" },
      { title: "XGBoost Documentation", url: "https://xgboost.readthedocs.io/en/stable/", tag: "Docs", desc: "XGBoost official docs — gradient boosting, hyperparameters, regularization, tree methods and distributed training", thumbIcon: "🌳" },
    ],
  },
  {
    label: "Deep Learning",
    icon: "🧠",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-purple-600 to-violet-700",
    items: [
      { title: "Deep Learning Tutorial — GeeksforGeeks", url: "https://www.geeksforgeeks.org/deep-learning/deep-learning-tutorial/", tag: "DL Notes", desc: "Complete deep learning notes — perceptron, backpropagation, CNNs, RNNs, LSTM, autoencoders, GANs and transfer learning", thumbIcon: "🧠" },
      { title: "TensorFlow Tutorials — Official", url: "https://www.tensorflow.org/tutorials", tag: "Tutorial", desc: "Official TensorFlow tutorials — image classification, text, audio, transfer learning, reinforcement learning and production", thumbIcon: "📘" },
    ],
  },
  {
    label: "Natural Language Processing (NLP) & Computer Vision",
    icon: "💬",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "NLP Tutorial — GeeksforGeeks", url: "https://www.geeksforgeeks.org/nlp/natural-language-processing-nlp-tutorial/", tag: "NLP Notes", desc: "Complete NLP tutorial — tokenization, stemming, lemmatization, POS tagging, NER, sentiment analysis, text classification and word embeddings", thumbIcon: "💬" },
      { title: "Computer Vision Tutorial — GeeksforGeeks", url: "https://www.geeksforgeeks.org/computer-vision/computer-vision/", tag: "CV Notes", desc: "Computer vision guide — image processing, feature detection, object detection, segmentation, CNNs and popular architectures (ResNet, YOLO)", thumbIcon: "👁️" },
    ],
  },
  {
    label: "Generative AI, LLMs & RAG",
    icon: "✨",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "Artificial Intelligence Tutorial — GeeksforGeeks", url: "https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligence/", tag: "AI Notes", desc: "Complete AI tutorial — search algorithms, knowledge representation, game playing, expert systems, ML, DL and NLP fundamentals", thumbIcon: "🤖" },
      { title: "What is Generative AI — GeeksforGeeks", url: "https://www.geeksforgeeks.org/artificial-intelligence/what-is-generative-ai/", tag: "Guide", desc: "Generative AI explained — LLMs, diffusion models, GANs, VAEs, prompt engineering, fine-tuning and real-world applications", thumbIcon: "✨" },
      { title: "LangChain Documentation", url: "https://python.langchain.com/docs/introduction/", tag: "Docs", desc: "Official LangChain docs — chains, agents, memory, document loaders, vector stores, RAG pipelines and LLM integration", thumbIcon: "🔗" },
      { title: "OpenAI Cookbook", url: "https://cookbook.openai.com/", tag: "Guide", desc: "OpenAI cookbook — embeddings, fine-tuning, function calling, RAG, chat completions, image generation and code interpretation", thumbIcon: "📖" },
      { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", tag: "Guide", desc: "Comprehensive prompt engineering — basic prompts, few-shot, chain-of-thought, ReAct, auto-prompting and LLM safety", thumbIcon: "💡" },
      { title: "RAG from Scratch — LangChain Documentation", url: "https://python.langchain.com/docs/tutorials/rag/", tag: "Tutorial", desc: "Build RAG systems — indexing, retrieval, generation, evaluation, advanced RAG techniques and production deployment", thumbIcon: "🔍" },
    ],
  },
  {
    label: "MLOps & Real-World ML",
    icon: "🚀",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-teal-600 to-cyan-700",
    items: [
      { title: "Made With ML — Anyscale", url: "https://madewithml.com/", tag: "MLOps", desc: "End-to-end MLOps — data → model → deployment → monitoring, CI/CD for ML, feature stores and model versioning", thumbIcon: "🚀" },
      { title: "The Full Stack — ML Deployment", url: "https://fullstackdeeplearning.com/", tag: "MLOps", desc: "Full stack deep learning — infrastructure, experimentation, data management, deployment and monitoring in production", thumbIcon: "🏗️" },
      { title: "Streamlit Documentation", url: "https://docs.streamlit.io/", tag: "Docs", desc: "Streamlit docs — build ML web apps, dashboards, data visualizations and deploy ML models with interactive UIs", thumbIcon: "🎨" },
    ],
  },
];

const stats = [
  { icon: NotebookIcon, value: "20+", label: "Resources" },
  { icon: MapIcon, value: "6", label: "Categories" },
  { icon: LibraryIcon, value: "1", label: "Roadmap" },
];

function AiMlNotesPage() {
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "ai-ml" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to AI & ML Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/ai-ml-sections/full-notes.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-semibold tracking-wider">NOTES & GUIDES</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">AI & ML <span className="text-gradient">Full Notes</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Comprehensive notes for AI & ML — Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, LLMs, RAG, LangChain and MLOps.</p>
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
