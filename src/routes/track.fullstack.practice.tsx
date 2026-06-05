import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, CodeIcon, StarIcon,
  SparklesIcon, TrophyIcon, TargetIcon, ClipboardListIcon, BookmarkPlusIcon, BookmarkFilledIcon,
} from "@/components/icons";
import { useWishlist } from "@/hooks/use-wishlist";

export const Route = createFileRoute("/track/fullstack/practice")({
  head: () => ({
    meta: [
      { title: "Full Stack Interview Prep — MAANG Learn X" },
      { name: "description", content: "Full stack interview questions, project ideas and practice resources for frontend, backend and database development." },
    ],
  }),
  component: FullstackPracticePage,
});

const practiceGroups = [
  {
    label: "Full Stack Project Ideas",
    icon: "🏆",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Full Stack Project Ideas — WsCube Tech", url: "https://www.wscubetech.com/blog/full-stack-project-ideas/", tag: "Projects", desc: "Full stack project ideas with source code — e-commerce, social media, blog, chat app, portfolio and more MERN projects", stars: 5, gradient: "from-amber-500/20 via-yellow-500/10 to-transparent", thumbBg: "from-amber-600 to-yellow-700", thumbEmoji: "🏆" },
      { title: "Full Stack Projects — Fynd Academy", url: "https://www.fynd.academy/blog/full-stack-projects", tag: "Projects", desc: "Full stack project tutorials — Netflix clone, Spotify clone, Slack clone, Airbnb clone with React and Node.js", stars: 4, gradient: "from-orange-500/20 via-red-500/10 to-transparent", thumbBg: "from-orange-600 to-red-700", thumbEmoji: "🎬" },
      { title: "Web Development Projects — GeeksforGeeks", url: "https://www.geeksforgeeks.org/web-development-projects/", tag: "Projects", desc: "Web development projects for all levels — beginner, intermediate and advanced projects with source code and tutorials", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "🌐" },
    ],
  },
  {
    label: "Frontend Practice & Interview Prep",
    icon: "🎨",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "JavaScript30 — 30 Day Vanilla JS Challenge", url: "https://javascript30.com/", tag: "Practice", desc: "30 vanilla JavaScript projects — drum kit, array cardio, flex panels, local storage, fetch API and more hands-on exercises", stars: 5, gradient: "from-blue-500/20 via-cyan-500/10 to-transparent", thumbBg: "from-blue-600 to-cyan-700", thumbEmoji: "⚡" },
      { title: "50 Frontend Projects — Sudeep Acharjee", url: "https://github.com/SudeepAcharjee/The-50-Front-end-Project", tag: "Projects", desc: "50 frontend project ideas with source code — calculators, quizzes, to-do apps, landing pages, modals and interactive UIs", stars: 4, gradient: "from-cyan-500/20 via-teal-500/10 to-transparent", thumbBg: "from-cyan-600 to-teal-700", thumbEmoji: "🎨" },
    ],
  },
  {
    label: "Backend Practice & API Development",
    icon: "⚙️",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "Full Stack MERN Projects — CodingAddict", url: "https://youtube.com/playlist?list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN&si=6n-zba1OxHYDGPjs", tag: "Projects", desc: "Full stack MERN projects — e-commerce, social media platform, chat application, Netflix clone and full CRUD apps", stars: 5, gradient: "from-green-500/20 via-emerald-500/10 to-transparent", thumbBg: "from-green-600 to-emerald-700", thumbEmoji: "🖧" },
      { title: "Web Dev Projects — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agXkRE0WxDt1vozo3hnmtR3&si=7OXI4puYP6X51Afj", tag: "Projects", desc: "Multiple web development projects — portfolio sites, calculators, games, landing pages and full stack applications", stars: 4, gradient: "from-teal-500/20 via-blue-500/10 to-transparent", thumbBg: "from-teal-600 to-blue-700", thumbEmoji: "💻" },
    ],
  },
  {
    label: "Coding Interview Practice",
    icon: "🧠",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    thumbBg: "from-violet-600 to-purple-700",
    items: [
      { title: "Frontend Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/html/html-interview-questions/", tag: "Interview Q&A", desc: "HTML, CSS and JavaScript interview questions — DOM, closures, prototypes, event loop, promises, CSS layout and responsive design", stars: 5, gradient: "from-violet-500/20 via-purple-500/10 to-transparent", thumbBg: "from-violet-600 to-purple-700", thumbEmoji: "🧠" },
      { title: "React Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/react/react-interview-questions/", tag: "Interview Q&A", desc: "React interview questions — components, hooks, state management, lifecycle methods, context API and performance optimization", stars: 5, gradient: "from-indigo-500/20 via-violet-500/10 to-transparent", thumbBg: "from-indigo-600 to-violet-700", thumbEmoji: "⚛️" },
      { title: "Node.js Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/nodejs/nodejs-interview-questions/", tag: "Interview Q&A", desc: "Node.js interview questions — event loop, streams, buffers, Express middleware, JWT authentication and database integration", stars: 4, gradient: "from-blue-500/20 via-indigo-500/10 to-transparent", thumbBg: "from-blue-600 to-indigo-700", thumbEmoji: "🟢" },
      { title: "MongoDB Interview Questions — GeeksforGeeks", url: "https://www.geeksforgeeks.org/mongodb/mongodb-interview-questions/", tag: "Interview Q&A", desc: "MongoDB interview questions — CRUD operations, aggregation, indexing, schema design, replication and sharding concepts", stars: 4, gradient: "from-emerald-500/20 via-green-500/10 to-transparent", thumbBg: "from-emerald-600 to-green-700", thumbEmoji: "🍃" },
    ],
  },
  {
    label: "Free Certification Practice",
    icon: "🏅",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    thumbBg: "from-pink-600 to-rose-700",
    items: [
      { title: "freeCodeCamp — Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", tag: "Certification", desc: "Free responsive web design certification — HTML, CSS, accessibility, flexbox, grid, media queries and 5 practice projects", stars: 5, gradient: "from-pink-500/20 via-rose-500/10 to-transparent", thumbBg: "from-pink-600 to-rose-700", thumbEmoji: "🏅" },
      { title: "freeCodeCamp — JavaScript Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", tag: "Certification", desc: "JavaScript algorithms and data structures certification — ES6, regex, debugging, OOP, functional programming and algorithms", stars: 5, gradient: "from-rose-500/20 via-red-500/10 to-transparent", thumbBg: "from-rose-600 to-red-700", thumbEmoji: "📜" },
      { title: "freeCodeCamp — Frontend Libraries", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/", tag: "Certification", desc: "Frontend libraries certification — Bootstrap, jQuery, SASS, React, Redux and 5 React projects with testing", stars: 4, gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent", thumbBg: "from-fuchsia-600 to-pink-700", thumbEmoji: "🎓" },
    ],
  },
];

const stats = [
  { icon: ClipboardListIcon, value: "10+", label: "Resources" },
  { icon: TargetIcon, value: "50+", label: "Projects" },
  { icon: TrophyIcon, value: "3", label: "Certifications" },
];

function FullstackPracticePage() {
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "fullstack" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Full Stack Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/fullstack-sections/interview-prep.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px] font-semibold tracking-wider">PRACTICE & INTERVIEW</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Full Stack <span className="text-gradient">Interview Prep</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Full stack project ideas, interview questions and free certifications. Practice 50+ projects across frontend, backend and databases to ace your interviews.</p>
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
