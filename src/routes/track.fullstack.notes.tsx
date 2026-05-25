import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, BookOpenIcon,
  NotebookIcon, SparklesIcon, MapIcon, LibraryIcon,
  HeartIcon,
} from "@/components/icons";
import { useFavorites } from "@/hooks/use-favorites";

export const Route = createFileRoute("/track/fullstack/notes")({
  head: () => ({
    meta: [
      { title: "Full Stack Full Notes — MAANG Learn X" },
      { name: "description", content: "Comprehensive full stack notes — roadmaps, docs, guides for HTML/CSS, JS, React, Node, MongoDB and more." },
    ],
  }),
  component: FullstackNotesPage,
});

const noteGroups = [
  {
    label: "Full Stack Roadmaps",
    icon: "🗺️",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    thumbBg: "from-amber-600 to-yellow-700",
    items: [
      { title: "Full Stack Developer Roadmap — GeeksforGeeks", url: "https://www.geeksforgeeks.org/full-stack-developer-roadmap/", tag: "Roadmap", desc: "Complete roadmap for full stack developers — frontend, backend, databases, DevOps and deployment strategies", thumbIcon: "🗺️" },
      { title: "Frontend Developer Roadmap — GeeksforGeeks", url: "https://www.geeksforgeeks.org/frontend-developer-roadmap/", tag: "Roadmap", desc: "Detailed frontend roadmap — HTML, CSS, JavaScript, frameworks, testing and build tools step by step", thumbIcon: "🎨" },
      { title: "Backend Developer Roadmap — GeeksforGeeks", url: "https://www.geeksforgeeks.org/back-end-developer-roadmap/", tag: "Roadmap", desc: "Complete backend roadmap — programming languages, frameworks, databases, APIs, caching and deployment", thumbIcon: "⚙️" },
    ],
  },
  {
    label: "Frontend Documentation",
    icon: "🌐",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    thumbBg: "from-blue-600 to-cyan-700",
    items: [
      { title: "MDN Web Docs — Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn", tag: "Docs", desc: "The definitive web development resource — HTML, CSS, JavaScript, accessibility, web APIs and best practices", thumbIcon: "📖" },
      { title: "JavaScript.info — Modern JavaScript Tutorial", url: "https://javascript.info/", tag: "Tutorial", desc: "Comprehensive JavaScript guide — fundamentals, objects, async, DOM, events, network requests and advanced topics", thumbIcon: "⚡" },
      { title: "React Official Documentation", url: "https://react.dev/learn", tag: "Docs", desc: "Official React docs — components, hooks, state management, effects, context, refs and performance optimization", thumbIcon: "⚛️" },
      { title: "W3Schools React Tutorial", url: "https://www.w3schools.com/REACT/DEFAULT.ASP", tag: "Tutorial", desc: "Beginner-friendly React tutorial — JSX, components, props, state, hooks, router and forms with examples", thumbIcon: "🎓" },
      { title: "Next.js Official Documentation", url: "https://nextjs.org/", tag: "Docs", desc: "Official Next.js docs — App Router, server components, data fetching, API routes, middleware and deployment", thumbIcon: "▲" },
      { title: "Next.js — GeeksforGeeks", url: "https://www.geeksforgeeks.org/nextjs/", tag: "Guide", desc: "Next.js tutorial series — routing, SSR, SSG, API routes, authentication and full stack Next.js development", thumbIcon: "📝" },
      { title: "Tailwind CSS Documentation", url: "https://v2.tailwindcss.com/docs", tag: "Docs", desc: "Complete Tailwind CSS docs — utility classes, responsive design, dark mode, animations and custom configurations", thumbIcon: "🎯" },
      { title: "W3Schools JavaScript", url: "https://www.w3schools.com/js/default.asp", tag: "Tutorial", desc: "JavaScript tutorial — syntax, objects, functions, DOM, events, AJAX, JSON and modern ES6+ features", thumbIcon: "📚" },
    ],
  },
  {
    label: "Backend Documentation",
    icon: "⚙️",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    thumbBg: "from-green-600 to-emerald-700",
    items: [
      { title: "Node.js Official Documentation", url: "https://nodejs.org/en/docs", tag: "Docs", desc: "Official Node.js docs — modules, file system, HTTP, streams, events, buffers and child processes", thumbIcon: "🟢" },
      { title: "W3Schools Node.js", url: "https://www.w3schools.com/nodejs/", tag: "Tutorial", desc: "Node.js tutorial — NPM, Express, MySQL, MongoDB, file handling, authentication and REST API development", thumbIcon: "📚" },
      { title: "GeeksforGeeks Node.js", url: "https://www.geeksforgeeks.org/nodejs/", tag: "Guide", desc: "Complete Node.js guide — architecture, event loop, Express.js, middleware, JWT, file upload and deployment", thumbIcon: "📖" },
      { title: "Express.js Guide", url: "https://expressjs.com/en/guide/routing.html", tag: "Docs", desc: "Official Express.js guide — routing, middleware, template engines, database integration and error handling", thumbIcon: "🚂" },
      { title: "REST API Tutorial", url: "https://restfulapi.net/", tag: "Guide", desc: "Complete REST API tutorial — HTTP methods, status codes, authentication, versioning, documentation and best practices", thumbIcon: "🔗" },
      { title: "django Official Tutorial", url: "https://www.d3schools.com/django/", tag: "Tutorial", desc: "Django tutorial — models, views, templates, forms, admin, authentication and deployment with Python", thumbIcon: "🐍" },
      { title: "What is an API? — GeeksforGeeks", url: "https://www.geeksforgeeks.org/what-is-an-api/", tag: "Guide", desc: "API fundamentals — REST vs SOAP, HTTP methods, API design, authentication, rate limiting and documentation", thumbIcon: "💡" },
    ],
  },
  {
    label: "Database Resources",
    icon: "🗄️",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    thumbBg: "from-purple-600 to-violet-700",
    items: [
      { title: "MongoDB University — Free Courses", url: "https://learn.mongodb.com/", tag: "Course", desc: "Free MongoDB courses — CRUD, aggregation, indexing, schema design, Atlas, Compass and production best practices", thumbIcon: "🍃" },
      { title: "MySQL Tutorial", url: "https://www.mysqltutorial.org/", tag: "Tutorial", desc: "Complete MySQL tutorial — queries, joins, indexes, stored procedures, triggers, views and performance optimization", thumbIcon: "🐬" },
      { title: "Firebase Documentation", url: "https://firebase.google.com/docs", tag: "Docs", desc: "Official Firebase docs — Firestore, authentication, cloud functions, hosting, storage and real-time database", thumbIcon: "🔥" },
    ],
  },
  {
    label: "Free Certifications",
    icon: "🏅",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    thumbBg: "from-orange-600 to-red-700",
    items: [
      { title: "freeCodeCamp — Free Certifications", url: "https://www.freecodecamp.org/learn/", tag: "Certification", desc: "Free web development certifications — responsive web design, JavaScript, frontend libraries and full stack", thumbIcon: "🏅" },
      { title: "CS50's Web Programming — Harvard/edX", url: "https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript", tag: "Certification", desc: "Harvard's CS50 web programming — HTML, CSS, JavaScript, Python, Django, SQL, testing and deployment", thumbIcon: "🎓" },
      { title: "SoloLearn — Web Development", url: "https://www.sololearn.com/en/learn/courses/web-development", tag: "Certification", desc: "Free web development courses with certificates — HTML, CSS, JavaScript, React, PHP and MySQL fundamentals", thumbIcon: "📜" },
    ],
  },
];

const stats = [
  { icon: NotebookIcon, value: "20+", label: "Resources" },
  { icon: MapIcon, value: "5", label: "Categories" },
  { icon: LibraryIcon, value: "3", label: "Certifications" },
];

function FullstackNotesPage() {
  const { favIds, toggle: toggleFav } = useFavorites();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "fullstack" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Full Stack Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/fullstack-sections/full-notes.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-semibold tracking-wider">NOTES & GUIDES</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px] font-semibold tracking-wider">FREE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Full Stack <span className="text-gradient">Full Notes</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Comprehensive notes, roadmaps, documentation and guides. Frontend, backend, databases and free certifications for complete full stack mastery.</p>
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
                      <div className="flex items-start justify-between gap-2 mb-1.5"><h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/note:text-primary transition-colors flex-1">{note.title}</h3><button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(note.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(note.url) ? "Remove from Favorites" : "Add to Favorites"}><HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(note.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} /></button></div>
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
