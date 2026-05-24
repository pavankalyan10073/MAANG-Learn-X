import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, PlayIcon, YoutubeIcon,
  SparklesIcon, ClockIcon, FilmIcon, ListVideoIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/core-cs/videos")({
  head: () => ({
    meta: [
      { title: "Core CS Video Full Course — MAANG Learn X" },
      { name: "description", content: "Complete video courses for OS, DBMS, Computer Networks and OOPs — curated playlists from top educators." },
    ],
  }),
  component: CoreCSVideosPage,
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
    label: "Operating System",
    icon: "🖥️",
    color: "from-blue-500 to-cyan-600",
    items: [
      { title: "Operating Systems — Neso Academy (Playlist 1)", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", desc: "Complete OS course — CPU scheduling, process synchronization, deadlock, memory management and file systems", isPlaylist: true },
      { title: "Operating Systems — Playlist 2", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p", desc: "OS full course covering processes, threads, scheduling algorithms, semaphores and virtual memory", isPlaylist: true },
      { title: "Operating Systems — Playlist 3", url: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD", desc: "In-depth OS lectures — system structure, kernel, I/O, paging, file allocation and disk management", isPlaylist: true },
    ],
  },
  {
    label: "Database Management System",
    icon: "🗄️",
    color: "from-orange-500 to-red-600",
    items: [
      { title: "DBMS Full Course — Neso Academy (Playlist 1)", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjCGkYv9z0yQzp6Z2fBQxZq", desc: "Complete DBMS course — ER model, relational algebra, normalization, transactions, indexing and SQL", isPlaylist: true },
      { title: "DBMS — Playlist 2", url: "https://www.youtube.com/playlist?list=PLmXKhU9FNesTpQNP_O1W4sVQzLZqXmP6B", desc: "DBMS lectures covering schema design, keys, anomalies, ACID properties, B/B+ trees and file structures", isPlaylist: true },
      { title: "SQL Full Course — Apna College", url: "https://youtu.be/hlGoQC332VM?si=MR_QOiKUaf0TZ-wi", desc: "Complete SQL course from basics to advanced — queries, joins, subqueries, normalization and real-world projects", isPlaylist: false },
      { title: "SQL Mastery: Basics to Advanced — Priya Bhatia", url: "https://youtube.com/playlist?list=PLcz9-JSejut-noXS7zEyDx34IJ46zGJaj&si=HI2e2oaFvlsN61tp", desc: "SQL mastery playlist — from fundamentals to advanced queries, optimization and interview preparation", isPlaylist: true },
    ],
  },
  {
    label: "Computer Networks",
    icon: "🌐",
    color: "from-green-500 to-emerald-600",
    items: [
      { title: "Computer Networks — Neso Academy (Playlist 1)", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", desc: "Complete CN course — OSI model, TCP/UDP, IPv4/IPv6, routing, congestion control, Ethernet and application layer protocols", isPlaylist: true },
      { title: "Computer Networks — Playlist 2", url: "https://www.youtube.com/playlist?list=PLmXKhU9FNesTpQNP_O1W4sVQzLZqXmP6B", desc: "In-depth networking lectures — data link layer, error/flow control, transport layer policies and network security", isPlaylist: true },
    ],
  },
  {
    label: "Object-Oriented Programming (OOPs)",
    icon: "🧩",
    color: "from-purple-500 to-violet-600",
    items: [
      { title: "OOPs using Python — Full Playlist", url: "https://youtube.com/playlist?list=PLJFpQTFWrkezwmVyQfK22_jycf9zYqGbY&si=f1ABrZxmrTCm6iCK", desc: "Complete OOPs in Python — objects, classes, inheritance, polymorphism, abstraction, encapsulation and exception handling", isPlaylist: true },
    ],
  },
];

const stats = [
  { icon: FilmIcon, value: "10+", label: "Playlists" },
  { icon: ClockIcon, value: "80+", label: "Hours" },
  { icon: SparklesIcon, value: "4", label: "Subjects" },
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
      <img
        src={thumb}
        alt={video.title}
        className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover/vid:scale-105"
      />
    );
  }
  return <PlaylistThumb group={group} />;
}

function CoreCSVideosPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "core-cs" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Core CS Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/core-cs-sections/video-courses.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px] font-semibold tracking-wider">VIDEO COURSES</Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px] font-semibold tracking-wider">YOUTUBE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Core CS <span className="text-gradient">Video Full Course</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Complete video lectures for Operating Systems, DBMS, Computer Networks and OOPs. Curated playlists from top educators covering all MAANG interview topics.</p>
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
