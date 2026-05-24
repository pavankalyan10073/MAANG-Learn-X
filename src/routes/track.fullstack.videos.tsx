import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, PlayIcon, YoutubeIcon,
  SparklesIcon, ClockIcon, FilmIcon, ListVideoIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/fullstack/videos")({
  head: () => ({
    meta: [
      { title: "Full Stack Video Full Course — MAANG Learn X" },
      { name: "description", content: "Complete full stack video courses — HTML/CSS, JavaScript, React, Node.js, MongoDB and more." },
    ],
  }),
  component: FullstackVideosPage,
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
    label: "Full Stack Web Development — Complete Course",
    icon: "🚀",
    color: "from-blue-500 to-cyan-600",
    items: [
      { title: "Full Stack Web Development in 26 Hours | 2025", url: "https://youtu.be/b4hJWG8qjPU?si=jIG1Cnp72DD33ruW", desc: "Complete full stack web developer course in 26 hours with projects — HTML, CSS, JS, React, Node, MongoDB and deployment", isPlaylist: false },
    ],
  },
  {
    label: "HTML & CSS",
    icon: "🎨",
    color: "from-orange-500 to-red-600",
    items: [
      { title: "HTML & CSS Full Course — SuperSimpleDev", url: "https://www.youtube.com/watch?v=dX8396ZmSPk&t=11s", desc: "Complete HTML & CSS course from scratch — responsive design, flexbox, grid, animations and modern CSS techniques", isPlaylist: false },
      { title: "HTML & CSS — Apna College", url: "https://www.youtube.com/watch?v=HcOc7P5BMi4&t=1s", desc: "Full HTML and CSS course covering all concepts with hands-on examples and mini projects", isPlaylist: false },
      { title: "HTML & CSS Full Course — Bro Code", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc", desc: "Beginner-friendly HTML & CSS course — tags, forms, positioning, transitions, transforms and responsive layouts", isPlaylist: false },
    ],
  },
  {
    label: "JavaScript",
    icon: "⚡",
    color: "from-yellow-500 to-amber-600",
    items: [
      { title: "JavaScript Full Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg", desc: "Complete JavaScript course — variables, functions, DOM manipulation, async/await, APIs and modern ES6+ features", isPlaylist: false },
      { title: "JavaScript — Playlist", url: "https://youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&si=_swNn114OR8g2v0Z", desc: "Comprehensive JavaScript playlist from basics to advanced — closures, prototypes, promises and design patterns", isPlaylist: true },
      { title: "JavaScript Full Course — Mosh Hamedani", url: "https://www.youtube.com/watch?v=EerdGm-ehJQ", desc: "Complete JavaScript course — fundamentals, OOP, async programming, error handling and real-world projects", isPlaylist: false },
    ],
  },
  {
    label: "React & Next.js",
    icon: "⚛️",
    color: "from-cyan-500 to-blue-600",
    items: [
      { title: "React Tutorial for Beginners — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&si=CBRKU1_Fkp4-wZ3M", desc: "Complete React tutorial — components, props, state, hooks, routing, context API and project-based learning", isPlaylist: true },
      { title: "Learn React — Bob Ziroll (Scrimba)", url: "https://www.youtube.com/watch?v=x4rFhThSX04", desc: "Free React course — JSX, components, state management, effects, forms and building real-world applications", isPlaylist: false },
      { title: "Next.js — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG&si=Ny0UdBA1JODqH86e", desc: "Complete Next.js course — SSR, SSG, API routes, authentication, deployment and full stack Next.js projects", isPlaylist: true },
      { title: "Next.js Tutorial for Beginners — Dave Gray", url: "https://www.youtube.com/watch?v=aZZrEE_UsIk", desc: "Next.js full course — routing, data fetching, server components, middleware and deployment on Vercel", isPlaylist: false },
      { title: "Next.js Full Course — JavaScript Mastery", url: "https://www.youtube.com/watch?v=dImgZ_AH7uA", desc: "Next.js project-based course — build modern web apps with App Router, server actions and authentication", isPlaylist: false },
      { title: "Next.js Tutorial — Hitesh Choudhary", url: "https://youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&si=DcuqUYkILXaKSSgL", desc: "Next.js tutorial playlist — fundamentals, routing, data fetching, API integration and deployment strategies", isPlaylist: true },
    ],
  },
  {
    label: "Tailwind CSS",
    icon: "🎯",
    color: "from-teal-500 to-green-600",
    items: [
      { title: "Tailwind CSS — Official Channel", url: "https://www.youtube.com/@TailwindLabs", desc: "Official Tailwind CSS tutorials — utility-first CSS, responsive design, dark mode, animations and component libraries", isPlaylist: true },
      { title: "Tailwind CSS — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O&si=S2O1fBZvvmPXBnbI", desc: "Complete Tailwind CSS course — setup, utilities, responsive design, custom configurations and project building", isPlaylist: true },
    ],
  },
  {
    label: "Backend — Node.js & Express",
    icon: "🖧",
    color: "from-green-500 to-emerald-600",
    items: [
      { title: "Node.js Tutorial — Programming with Mosh", url: "https://www.youtube.com/watch?v=TlB_eWDSMt4", desc: "Node.js crash course — modules, file system, HTTP, Express, middleware, REST APIs and database integration", isPlaylist: false },
      { title: "Node.js — Thapa Technical", url: "https://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&si=GT4-JMvNZ32jmb6U", desc: "Complete Node.js playlist — NPM, Express, middleware, authentication, JWT and building REST APIs from scratch", isPlaylist: true },
    ],
  },
  {
    label: "Backend — Other Frameworks",
    icon: "🏗️",
    color: "from-purple-500 to-violet-600",
    items: [
      { title: "Django — Programming with Mosh", url: "https://www.youtube.com/watch?v=rHux0gMZ3Eg", desc: "Django crash course — models, views, templates, authentication, admin panel and deployment with Python", isPlaylist: false },
      { title: "Django — Corey Schafer", url: "https://www.youtube.com/watch?v=F5mRW0jo-U4&t=302s", desc: "Django tutorial series — URL routing, forms, class-based views, user authentication and PostgreSQL integration", isPlaylist: false },
      { title: "Spring Boot — Amigoscode", url: "https://www.youtube.com/watch?v=UgX5lgv4uVM", desc: "Spring Boot full course — REST APIs, JPA, Hibernate, security, microservices and deployment with Java", isPlaylist: false },
      { title: "Spring Boot — Mosh Hamedani", url: "https://www.youtube.com/watch?v=vtPkZShrvXQ", desc: "Spring Boot for beginners — dependency injection, Spring MVC, Spring Data JPA and building production APIs", isPlaylist: false },
      { title: "Laravel — The Codeholic", url: "https://www.youtube.com/watch?v=Ea1gVO53lDY", desc: "Laravel crash course — routing, Eloquent ORM, blade templates, authentication and building full stack PHP apps", isPlaylist: false },
      { title: "Laravel — Mosh Hamedani", url: "https://www.youtube.com/watch?v=ImtZ5yENzgE", desc: "Laravel complete course — MVC, migrations, seeders, relationships, API resources and deployment", isPlaylist: false },
    ],
  },
  {
    label: "Databases — MongoDB, MySQL, PostgreSQL",
    icon: "🗄️",
    color: "from-indigo-500 to-blue-600",
    items: [
      { title: "MongoDB — The Net Ninja", url: "https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&si=eDjwQllJX1aZbRPj", desc: "Complete MongoDB playlist — CRUD operations, aggregation, indexing, Mongoose ODM and database design patterns", isPlaylist: true },
      { title: "MySQL Tutorial — Programming with Mosh", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY", desc: "MySQL full course — SQL queries, joins, indexes, stored procedures, triggers and database design", isPlaylist: false },
      { title: "SQL Full Course — Apna College", url: "https://www.youtube.com/watch?v=hlGoQC332VM", desc: "SQL complete course — DDL, DML, joins, subqueries, normalization, transactions and real-world database projects", isPlaylist: false },
      { title: "PostgreSQL — FreeCodeCamp", url: "https://www.youtube.com/watch?v=qw--VYLpxG4", desc: "PostgreSQL full course — installation, queries, joins, views, functions, triggers and production deployment", isPlaylist: false },
    ],
  },
  {
    label: "Full Stack Projects",
    icon: "🏆",
    color: "from-pink-500 to-rose-600",
    items: [
      { title: "Full Stack Web Development Projects — CodingAddict", url: "https://youtube.com/playlist?list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN&si=6n-zba1OxHYDGPjs", desc: "Full stack project tutorials — MERN stack applications including e-commerce, social media, chat apps and more", isPlaylist: true },
      { title: "JavaScript30 — 30 Day Vanilla JS Challenge", url: "https://javascript30.com/", desc: "30 vanilla JavaScript projects — drum kit, clock, array methods, localStorage, fetch API and more beginner-friendly projects", isPlaylist: false },
      { title: "50 Frontend Projects — Sudeep Acharjee", url: "https://github.com/SudeepAcharjee/The-50-Front-end-Project", desc: "50 frontend project ideas with source code — calculators, quizzes, to-do apps, landing pages and interactive UIs", isPlaylist: false },
      { title: "JavaScript Projects — GreatStack", url: "https://www.youtube.com/watch?v=oFnIe-RpkE4", desc: "JavaScript project tutorials — build interactive apps with vanilla JS including weather app, quiz game and more", isPlaylist: false },
      { title: "Web Development Projects — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agXkRE0WxDt1vozo3hnmtR3&si=_swNn114OR8g2v0Z", desc: "Multiple web development projects — portfolio websites, calculators, games and full stack applications", isPlaylist: true },
    ],
  },
  {
    label: "Programming Languages — Java & Python",
    icon: "💻",
    color: "from-emerald-500 to-teal-600",
    items: [
      { title: "Java — Telusko", url: "https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=2kGHRIqYHw0sFw1T", desc: "Complete Java playlist — OOP, collections, multithreading, JDBC, servlets and Java full stack development", isPlaylist: true },
      { title: "Java — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&si=0D-jLOtbELksQilI", desc: "Java complete course — basics, OOP, data structures, Swing, JDBC and Android introduction", isPlaylist: true },
      { title: "Python — Corey Schafer", url: "https://youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU&si=9ING_XKiJKrSYDgR", desc: "Complete Python tutorials — basics, OOP, decorators, generators, web scraping, APIs and Django", isPlaylist: true },
      { title: "Python — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=uY9q2ceGXI6bmQI4", desc: "Python full course — fundamentals, OOP, file handling, modules and Python project development", isPlaylist: true },
      { title: "PHP — Laracasts", url: "https://youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&si=vR-N1u5eo8I4Odgj", desc: "PHP for beginners — variables, arrays, OOP, MySQL integration, Laravel basics and building dynamic websites", isPlaylist: true },
      { title: "PHP — CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR&si=mB8bTQhDOSxxsTMh", desc: "PHP complete course — syntax, forms, sessions, cookies, MySQL, REST APIs and CMS development", isPlaylist: true },
    ],
  },
];

const stats = [
  { icon: FilmIcon, value: "35+", label: "Videos" },
  { icon: ClockIcon, value: "100+", label: "Hours" },
  { icon: SparklesIcon, value: "10", label: "Topics" },
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

function FullstackVideosPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "fullstack" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Full Stack Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/fullstack-sections/video-courses.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px] font-semibold tracking-wider">VIDEO COURSES</Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px] font-semibold tracking-wider">YOUTUBE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Full Stack <span className="text-gradient">Video Full Course</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Complete video lectures for Full Stack Development — HTML/CSS, JavaScript, React, Node.js, MongoDB, MySQL, Django, Spring Boot and more with hands-on projects.</p>
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
                      <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/vid:text-primary transition-colors mb-1.5">{video.title}</h3>
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
