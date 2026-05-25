import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, PlayIcon, YoutubeIcon,
  SparklesIcon, ClockIcon, FilmIcon, ListVideoIcon, HeartIcon,
} from "@/components/icons";
import { useFavorites } from "@/hooks/use-favorites";

export const Route = createFileRoute("/track/dsa/videos")({
  head: () => ({
    meta: [
      { title: "DSA Video Full Course — MAANG Learn X" },
      { name: "description", content: "Complete DSA video courses in Python, Java & C++. Curated playlists from top educators." },
    ],
  }),
  component: DSAVideosPage,
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
    label: "Python",
    icon: "🐍",
    color: "from-yellow-500 to-amber-600",
    items: [
      { title: "DSA Patterns — Part 1 (UNQ Coder)", url: "https://youtube.com/playlist?list=PLi8IAB3zDlPPBbcI_sSqq5lyr_Io7IBZF&si=qHygK1G5Q5QLBNwb", desc: "Python Patterns: Triangle, Pyramid, Star, and More", isPlaylist: true },
      { title: "DSA Patterns — Part 2 (Padho with Pratyush)", url: "https://youtube.com/playlist?list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&si=EDpJTh888UhHEjCv", desc: "DSA Patterns 2025 | Crack FAANG in 3 Months", isPlaylist: true },
      { title: "DSA Patterns — Part 3", url: "https://youtu.be/pY_upt-U1LU?si=_SodH17UYrDDiKLt", desc: "Pattern-based problem solving approach" },
      { title: "DSA Patterns — Part 4", url: "https://youtu.be/xzstcj3Cuso?si=EntUR7L7P_YFWauz", desc: "Advanced pattern recognition techniques" },
      { title: "DSA Patterns — Part 5", url: "https://youtu.be/fX64q6sYom0?si=RrB_3G9_rLDTmsC9", desc: "Mastering complex DSA patterns" },
      { title: "DSA Patterns — Part 6", url: "https://youtu.be/lsOOs5J8ycw?si=oMWlN6hJJJBJf3PE", desc: "Final pattern mastery for interviews" },
    ],
  },
  {
    label: "Java (Kunal Kushwaha)",
    icon: "☕",
    color: "from-orange-500 to-red-600",
    items: [
      { title: "DSA Full Course — Kunal Kushwaha", url: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ", desc: "Complete Java + DSA bootcamp — 200+ videos", isPlaylist: true },
    ],
  },
  {
    label: "C++ (Striver)",
    icon: "⚡",
    color: "from-blue-500 to-indigo-600",
    items: [
      { title: "Striver A2Z DSA Sheet (C++)", url: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8mX2oK7Zh7h2dsEiH&si=tjhemGTcxhkJ3i8U", desc: "Complete A2Z DSA course with C++ implementation", isPlaylist: true },
      { title: "Recursion (Basics to Advanced) and Backtracking Series", url: "https://youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9", desc: "Recursion (Basics to Advanced) and Backtracking Series", isPlaylist: true },
    ],
  },
  {
    label: "Python",
    icon: "🐍",
    color: "from-yellow-500 to-amber-600",
    items: [
      { title: "DSA Full Course", url: "https://youtube.com/playlist?list=PLhR2IpV1b2FwWwviBHRrR118YAaSlyhTU&si=QsizANlgJrVZg-hJ", desc: "Complete DSA course — from basics to advanced", isPlaylist: true },
      { title: "Python Full Course (Telugu)", url: "https://youtu.be/SkdrCkyq-pY?si=rQB1wl5_m50xQyAF", desc: "Complete Python Course in Telugu — from basics to advanced" },
      { title: "Python Full Course & Libraries (Corey Schafer - 150)", url: "https://youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU&si=L8sPCu8oksSi5mvx", desc: "Python Tutorials", isPlaylist: true },
    ],
  },
  {
    label: "Dynamic Programming",
    icon: "⚡",
    color: "from-orange-500 to-red-600",
    items: [
      { title: "Dynamic Programming - NeetCode", url: "https://youtube.com/playlist?list=PLot-Xpze53lcvx_tjrr_m2lgD2NsRHlNO&si=wRSL6HVWWLTLAmz5", desc: "Complete Dynamic Programming course — from basics to advanced", isPlaylist: true },
      { title: "Dynamic Programming Playlist Interview Questions - TUF (57)", url: "https://youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&si=J2om-jOCass__qOn", desc: "Complete Dynamic Programming course - TUF", isPlaylist: true },
    ],
  },
];

const stats = [
  { icon: FilmIcon, value: "50+", label: "Videos" },
  { icon: ClockIcon, value: "100+", label: "Hours" },
  { icon: SparklesIcon, value: "3", label: "Languages" },
];

function PlaylistThumb({ group }) {
  return (
    <div className={"relative w-full h-44 sm:h-48 bg-gradient-to-br " + group.color + " flex items-center justify-center overflow-hidden"}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-3 left-3 w-20 h-20 border-2 border-white rounded-xl rotate-12" />
        <div className="absolute bottom-3 right-3 w-24 h-24 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-lg -rotate-6" />
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-white rounded-md rotate-45" />
        <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-white/50 rounded-2xl rotate-12" />
      </div>
      {/* Stacked video cards effect */}
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
      {/* Bottom gradient fade */}
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

function DSAVideosPage() {
  const { favIds, toggle: toggleFav } = useFavorites();
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "dsa" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to DSA Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/dsa-sections/video-courses.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px] font-semibold tracking-wider">VIDEO COURSES</Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px] font-semibold tracking-wider">YOUTUBE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">DSA <span className="text-gradient">Video Full Course</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Complete video lectures for DSA in Python, Java & C++. From beginner to advanced — curated playlists from top educators.</p>
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
              <h2 className="text-xl sm:text-2xl font-bold">{group.label} Video Lectures</h2>
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

                      {/* Hover play overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover/vid:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg opacity-0 group-hover/vid:opacity-100 transition-all duration-300 scale-50 group-hover/vid:scale-100">
                          <PlayIcon className="h-6 w-6 text-white ml-0.5" />
                        </div>
                      </div>

                      {/* Top-left badge */}
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-black/70 backdrop-blur-sm text-white border-0 text-[10px] font-medium">YouTube</Badge>
                      </div>

                      {/* Top-right badge */}
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
                       <div className="flex items-start justify-between gap-2 mb-1.5">
                         <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/vid:text-primary transition-colors flex-1">{video.title}</h3>
                         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFav(video.url); }} className="shrink-0 p-1 rounded-md hover:bg-muted/60 transition-colors mt-0.5" title={favIds.has(video.url) ? "Remove from Favorites" : "Add to Favorites"}>
                           <HeartIcon className={"h-3.5 w-3.5 transition-colors " + (favIds.has(video.url) ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-400")} />
                         </button>
                       </div>
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
