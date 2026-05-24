import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon, ExternalLinkIcon, PlayIcon, YoutubeIcon,
  SparklesIcon, ClockIcon, FilmIcon, ListVideoIcon,
} from "@/components/icons";

export const Route = createFileRoute("/track/git-linux/videos")({
  head: () => ({
    meta: [
      { title: "Git, GitHub & Linux Video Full Course — MAANG Learn X" },
      { name: "description", content: "Complete Git, GitHub & Linux video courses and playlists from top educators. Version control, shell commands and workflows." },
    ],
  }),
  component: GitLinuxVideosPage,
});

function getYoutubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([^?&\s]+)/);
  return m ? m[1] : null;
}
function isPlaylist(url: string) {
  return url.includes("playlist?list=") || url.includes("&list=");
}
function getYoutubeThumb(url: string) {
  const id = getYoutubeId(url);
  if (!id) return null;
  return "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
}

const videoGroups = [
  {
    label: "Git & GitHub — Full Courses & Playlists",
    icon: "🎬",
    color: "from-orange-500 to-amber-600",
    items: [
      { title: "Master Git & Github Series", url: "https://youtube.com/playlist?list=PLbtI3_MArDOlJ4036mWiUKaQToUS8MZVu&si=bsTWJ_f1ZxBCnY8l", desc: "Complete Git & GitHub playlist from basics to advanced workflows", isPlaylist: true },
      { title: "Git & GitHub by freeCodeCamp", url: "https://youtu.be/mAFoROnOfHs?si=X0jVGlreLiuKt1vb", desc: "Full Git & GitHub course covering all essential concepts for beginners to pro" },
      { title: "1 Hour Basics to Pro — Git & GitHub", url: "https://www.youtube.com/watch?v=2w-M4z-iQpk", desc: "Quick crash course from basics to pro-level Git & GitHub in just 1 hour", isPlaylist: false },
      { title: "GitHub in Telugu | Complete Git & GitHub in 1 Hour", url: "https://youtu.be/KBOCCssL5B4?si=dwnq-e1LtOb99SR6", desc: "Complete Git & GitHub tutorial in Telugu — A to Z coverage" },
      { title: "Master Git Today Course with AI Support", url: "https://unstop.com/courses/software-tools/master-git-today", desc: "AI-powered interactive Git course with hands-on practice and personalized learning" },
      { title: "GitHub Workflow Mastery Course with AI Support", url: "https://unstop.com/courses/software-tools/github-workflow-mastery", desc: "Master GitHub workflows — PRs, CI/CD, code review and collaboration with AI support", isPlaylist: true },
    ],
  },
  {
    label: "Linux & Shell — Full Courses",
    icon: "🐧",
    color: "from-green-500 to-emerald-600",
    items: [
      { title: "Complete Linux Course — CodeWithHarry", url: "https://youtu.be/_tCY-c-sPZc?si=SrNFEFtuCoIFhSB_", desc: "Complete Linux tutorial — from installation to advanced shell commands and system administration" },
    ],
  },
];

const stats = [
  { icon: FilmIcon, value: "8", label: "Videos" },
  { icon: ClockIcon, value: "20+", label: "Hours" },
  { icon: SparklesIcon, value: "4", label: "Educators" },
];

function PlaylistThumb({ group }: { group: typeof videoGroups[number] }) {
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

function VideoThumb({ thumb, group, video }: { thumb: string | null; group: typeof videoGroups[number]; video: (typeof videoGroups)[number]["items"][number] }) {
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

function GitLinuxVideosPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/track/$slug" params={{ slug: "git-linux" }}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Git, GitHub & Linux Track
        </Link>
      </Button>

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/tracks/git-linux-sections/video-courses.png')] bg-cover bg-center opacity-[0.07]" />
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px] font-semibold tracking-wider">VIDEO COURSES</Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px] font-semibold tracking-wider">YOUTUBE</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Git, GitHub & Linux <span className="text-gradient">Video Full Course</span></h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6">Complete video lectures for Git, GitHub & Linux — version control, branching, rebasing, shell commands, file permissions and system administration.</p>
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
