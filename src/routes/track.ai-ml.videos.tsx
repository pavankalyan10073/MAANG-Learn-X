import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, PlayIcon, YoutubeIcon,
  SparklesIcon, ClockIcon, FilmIcon, ListVideoIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/ai-ml/videos")({
  head: () => ({
    meta: [
      { title: "AI & ML Video Full Course — MAANG Learn X" },
      { name: "description", content: "Complete AI & ML video courses — Machine Learning, Deep Learning, NLP, LLMs, RAG, LangChain and more." },
    ],
  }),
  component: AiMlVideosPage,
});

function getYoutubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([^?&\s]+)/);
  return m ? m[1] : null;
}
function isPlaylist(url) {
  return url.includes("playlist?list=") || url.includes("&list=");
}
function getYoutubeThumb(url) {
  const id = getYoutubeId(url);
  if (!id) return null;
  return "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
}

const videoGroups = [
  {
    label: "Machine Learning — Fundamentals",
    icon: "🤖",
    color: "from-blue-500 to-cyan-600",
    items: [
      { title: "Machine Learning Tutorial Python — codebasics", url: "https://youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&si=BHNFdebkN9ll7Tzh", desc: "Complete ML tutorial in Python — regression, classification, clustering, SVM, decision trees, random forests and model evaluation", isPlaylist: true },
      { title: "Machine Learning Course for Beginners", url: "https://youtu.be/NWONeJKn6kc?si=qDHqG1efdN3pXoHS", desc: "Full ML course from scratch — supervised and unsupervised learning, feature engineering, model selection and evaluation metrics", isPlaylist: false },
      { title: "StatQuest with Josh Starmer — ML Playlist", url: "https://www.youtube.com/@statquest", desc: "StatQuest ML series — clear explanations of linear regression, logistic regression, decision trees, SVM, PCA and neural networks", isPlaylist: true },
      { title: "Intro to Machine Learning — Kaggle", url: "https://www.kaggle.com/learn/intro-to-machine-learning", desc: "Hands-on ML course — decision trees, random forests, model validation and submitting to Kaggle competitions", isPlaylist: false },
    ],
  },
  {
    label: "Deep Learning & Neural Networks",
    icon: "🧠",
    color: "from-purple-500 to-violet-600",
    items: [
      { title: "Neural Networks Zero to Hero — Andrej Karpathy", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", desc: "Complete neural networks course — backpropagation, transformers, GPT and building language models from scratch", isPlaylist: true },
      { title: "DeepLearning.AI TensorFlow in Practice", url: "https://www.coursera.org/specializations/tensorflow-in-practice", desc: "TensorFlow specialization — CNNs, NLP, time series, transfer learning and production deployment with TensorFlow", isPlaylist: false },
      { title: "Practical Deep Learning for Coders — fast.ai", url: "https://course.fast.ai/", desc: "Free practical deep learning — computer vision, NLP, tabular data and collaborative filtering with PyTorch", isPlaylist: false },
      { title: "PyTorch Tutorials — Official", url: "https://pytorch.org/tutorials/", desc: "Official PyTorch tutorials — tensors, autograd, CNNs, RNNs, transfer learning and distributed training", isPlaylist: false },
    ],
  },
  {
    label: "Natural Language Processing (NLP)",
    icon: "💬",
    color: "from-green-500 to-emerald-600",
    items: [
      { title: "NLP Tutorial Python — codebasics", url: "https://youtube.com/playlist?list=PLeo1K3hjS3uuvuAXhYjV2lMEShq2UYSwX&si=vmHd0gJu6ARcI-CN", desc: "Complete NLP tutorial — tokenization, stemming, lemmatization, bag of words, TF-IDF, word2vec and text classification", isPlaylist: true },
      { title: "The Illustrated Transformer — Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", desc: "Visual guide to the Transformer architecture — attention, self-attention, multi-head attention and positional encoding", isPlaylist: false },
      { title: "RAG from Scratch — LangChain", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x", desc: "Build RAG systems from scratch — document loading, chunking, embeddings, vector stores, retrieval and generation", isPlaylist: true },
    ],
  },
  {
    label: "Generative AI & Large Language Models (LLMs)",
    icon: "✨",
    color: "from-orange-500 to-red-600",
    items: [
      { title: "Generative AI from Basic to Advance — Sunny Savita", url: "https://youtube.com/playlist?list=PLQxDHpeGU14AIu52l2OlIJs9z94yTFR_t&si=DRTpF9iFTJMwS0e9", desc: "Complete generative AI course — LLMs, prompt engineering, fine-tuning, RAG, LangChain, Hugging Face and production deployment", isPlaylist: true },
      { title: "Artificial Intelligence Full Course (2025) — Intellipaat", url: "https://youtu.be/9tbaiFIm0HU?si=sRYAQ4PoA-_qRXD1", desc: "Full AI course — search algorithms, knowledge representation, machine learning, neural networks, computer vision and NLP", isPlaylist: false },
      { title: "Generative AI Full Course — Gemini, OpenAI, Llama, LangChain", url: "https://youtu.be/mEsleV16qdo?si=Jo4Xwj51hVio_aat", desc: "Comprehensive generative AI course — Gemini Pro, OpenAI API, Llama, LangChain, Pinecone, vector databases and real-world projects", isPlaylist: false },
      { title: "LangChain Crash Course — Tutorial", url: "https://youtu.be/3ZApYgVgvRo?si=daGZozEKvfhhitDP", desc: "LangChain crash course — chains, agents, memory, document loaders, vector stores and building AI-powered applications", isPlaylist: false },
      { title: "Complete RAG Crash Course With LangChain In 2 Hours", url: "https://youtu.be/o126p1QN_RI?si=eaWKai_J5AdvMV-_", desc: "End-to-end RAG system — document ingestion, embedding, vector database, retrieval, prompt engineering and response generation", isPlaylist: false },
    ],
  },
  {
    label: "AI Certifications & Structured Paths",
    icon: "🎓",
    color: "from-pink-500 to-rose-600",
    items: [
      { title: "Machine Learning by Andrew Ng — Coursera (Free Audit)", url: "https://www.coursera.org/specializations/machine-learning-introduction", desc: "Andrew Ng's legendary ML course — supervised learning, unsupervised learning, best practices and real-world case studies" },
      { title: "Deep Learning Specialization — Andrew Ng (Free Audit)", url: "https://www.coursera.org/specializations/deep-learning", desc: "Deep Learning specialization — neural networks, CNNs, RNNs, LSTM, regularization, optimization and ML project strategy" },
      { title: "Udacity Intro to Machine Learning Nanodegree", url: "https://www.udacity.com/course/intro-to-machine-learning-nanodegree--nd229", desc: "Hands-on ML nanodegree — supervised learning, unsupervised learning, deep learning, model evaluation and deployment" },
      { title: "Google Cloud Professional ML Engineer Certification", url: "https://cloud.google.com/learn/certification/machine-learning-engineer", desc: "Google Cloud ML certification — framing, architecting, automating, ML pipelines, model monitoring and production ML systems" },
    ],
  },
];

const stats = [
  { icon: FilmIcon, value: "15+", label: "Courses" },
  { icon: ClockIcon, value: "100+", label: "Hours" },
  { icon: SparklesIcon, value: "5", label: "Topics" },
];

function PlaylistThumb({ group }) {
  return (
    <div className={"relative w-full h-44 sm:h-48 bg-gradient-to-br " + group.color + " flex items-center justify-center overflow-hidden"}>
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-3 left-3 w-20 h-20 border-2 border-white rounded-xl rotate-12" />
        <div className="absolute bottom-3 right-3 w-24 h-24 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-lg -rotate-6" />
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-white rounded-md rotate-45" />
        <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-white/50 rounded-2xl rotate-12" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-28 h-20 sm:w-36 sm:h-24">
          <div className="absolute top-1 left-1 w-full h-full rounded-lg bg-white/10 border border-white/10 -rotate-6 scale-95" />
          <div className="absolute top-0.5 left-0.5 w-full h-full rounded-lg bg-white/15 border border-white/15 -rotate-3 scale-[0.97]" />
          <div className="relative w-full h-full rounded-lg bg-white/20 border border-white/25 flex flex-col items-center justify-center backdrop-blur-sm shadow-lg">
            <ListVideoIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-1" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">Playlist</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

function VideoThumb({ thumb, group, video }) {
  if (thumb) {
    return (
      <img src={thumb} alt={video.title} className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover/vid:scale-105" />
    );
  }
  return <PlaylistThumb group={group} />;
}

function AiMlVideosPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/ai-ml-sections/video-courses.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px] font-semibold tracking-wider">VIDEO COURSES</Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px] font-semibold tracking-wider">YOUTUBE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">AI & ML <span className="text-gradient">Video Full Course</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Complete video lectures for AI & ML — Machine Learning, Deep Learning, NLP, LLMs, Generative AI, LangChain, RAG and MLOps with hands-on projects.</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm">
              {stats.map((s) => {
                const SI = s.icon;
                return (
                  <div key={s.label} className="rounded-xl border border-border bg-background/40 px-3 py-2.5 text-center">
                    <SI className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {videoGroups.map((group, gIdx) => (
        <section key={gIdx} className="mb-10 last:mb-0">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">{group.icon}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{group.label}</h2>
              <p className="text-xs text-muted-foreground">{group.items.length} {group.items.length === 1 ? "course" : "courses"}</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((video) => {
              const thumb = getYoutubeThumb(video.url);
              return (
                <a key={video.url} href={video.url} target="_blank" rel="noopener noreferrer" className="group/vid">
                  <Card className="overflow-hidden bg-card/60 backdrop-blur border-border hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_oklch(0.6_0.22_230/0.3)] h-full">
                    <div className="relative overflow-hidden">
                      <VideoThumb thumb={thumb} group={group} video={video} />
                      <div className="absolute inset-0 bg-black/0 group-hover/vid:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg opacity-0 group-hover/vid:opacity-100 transition-all duration-300 scale-50 group-hover/vid:scale-100">
                          <PlayIcon className="h-6 w-6 text-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-black/70 backdrop-blur-sm text-white border-0 text-[10px] font-medium">YouTube</Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        {video.isPlaylist ? (
                          <Badge className="bg-blue-600/80 backdrop-blur-sm text-white border-0 text-[10px] font-medium flex items-center gap-1">
                            <ListVideoIcon className="h-2.5 w-2.5" /> Playlist
                          </Badge>
                        ) : (
                          <Badge className="bg-red-600/80 backdrop-blur-sm text-white border-0 text-[10px] font-medium">Video</Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/vid:text-primary transition-colors flex-1">{video.title}</h3>{wishlistIds.has(video.url) ? (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); removeFromWishlist(video.url); }} className="shrink-0 p-1 rounded-md hover:bg-amber-500/10 transition-colors mt-0.5" title="Remove from Wishlist">
                              <BookmarkFilledIcon className="h-3.5 w-3.5 text-amber-400" />
                            </button>
                          ) : (
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToWishlist(video.url, video.title); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title="Add to Wishlist">
                              <BookmarkPlusIcon className="h-3.5 w-3.5 text-muted-foreground hover:text-amber-400" />
                            </button>
                          )}</div>
                      {video.desc && (<p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">{video.desc}</p>)}
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <YoutubeIcon className="h-3 w-3 text-red-400" />
                        <span>{video.isPlaylist ? "Open Playlist" : "Watch Video"}</span>
                        <ExternalLinkIcon className="h-3 w-3 ml-auto opacity-0 group-hover/vid:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
