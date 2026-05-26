import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { tracks } from "@/data/tracks";
import { subPageResources } from "@/data/sub-page-resources";
import { useFavorites } from "@/hooks/use-favorites";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HeartIcon, ExternalLinkIcon, PlayIcon,
  NotebookIcon, ClipboardListIcon,
} from "@/components/icons";
import type { Resource } from "@/data/tracks";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Favorites \u2014 MAANG Learn X" },
      { name: "description", content: "Your saved favorite resources across all tracks." },
    ],
  }),
  component: FavoritesPage,
});

type FavItem = {
  id: string;
  title: string;
  url: string;
  type: Resource["type"];
  source?: string;
  trackTitle: string;
  trackSlug: string;
  topicTitle: string;
  sectionType: "video" | "notes" | "practice" | "topic";
};

function classifyType(type: Resource["type"]): "video" | "notes" | "practice" {
  if (type === "video" || type === "course") return "video";
  if (type === "practice") return "practice";
  return "notes";
}

function getSectionType(f: { type: Resource["type"]; sectionType: string }): "video" | "notes" | "practice" {
  if (f.sectionType === "video" || f.sectionType === "notes" || f.sectionType === "practice") {
    return f.sectionType;
  }
  return classifyType(f.type);
}

function sectionBorder(sectionType: "video" | "notes" | "practice"): string {
  if (sectionType === "video") return "hover:border-blue-500/40";
  if (sectionType === "practice") return "hover:border-violet-500/40";
  return "hover:border-emerald-500/40";
}

function sectionGlow(sectionType: "video" | "notes" | "practice"): string {
  if (sectionType === "video") return "hover:shadow-[0_10px_40px_-10px_oklch(0.6_0.22_230/0.3)]";
  if (sectionType === "practice") return "hover:shadow-[0_10px_40px_-10px_oklch(0.6_0.22_290/0.3)]";
  return "hover:shadow-[0_10px_40px_-10px_oklch(0.65_0.18_155/0.3)]";
}

function sectionIconBg(sectionType: "video" | "notes" | "practice"): string {
  if (sectionType === "video") return "bg-gradient-to-br from-blue-500 to-cyan-600";
  if (sectionType === "practice") return "bg-gradient-to-br from-violet-500 to-purple-600";
  return "bg-gradient-to-br from-emerald-500 to-green-600";
}

function sectionBadge(sectionType: "video" | "notes" | "practice"): string {
  if (sectionType === "video") return "VIDEO";
  if (sectionType === "practice") return "PRACTICE";
  return "NOTES";
}

function FavoritesPage() {
  const { favIds, toggle, isLoggedIn } = useFavorites();

  const allFavs = useMemo<FavItem[]>(() => {
    if (!favIds.size) return [];
    const items: FavItem[] = [];

    for (const track of tracks) {
      for (const topic of track.topics) {
        for (const res of topic.resources) {
          if (favIds.has(res.url)) {
            items.push({
              id: res.id,
              title: res.title,
              url: res.url,
              type: res.type,
              source: res.source,
              trackTitle: track.title,
              trackSlug: track.slug,
              topicTitle: topic.title,
              sectionType: "topic",
            });
          }
        }
      }
    }

    for (const sp of subPageResources) {
      if (favIds.has(sp.url) && !items.some((i) => i.url === sp.url)) {
        items.push({
          id: sp.id,
          title: sp.title,
          url: sp.url,
          type: sp.type,
          source: sp.source,
          trackTitle: sp.trackTitle,
          trackSlug: sp.trackSlug,
          topicTitle: sp.groupLabel,
          sectionType: sp.sectionType,
        });
      }
    }

    return items;
  }, [favIds]);

  const videoFavs = allFavs.filter((f) => getSectionType(f) === "video");
  const notesFavs = allFavs.filter((f) => getSectionType(f) === "notes");
  const practiceFavs = allFavs.filter((f) => getSectionType(f) === "practice");

  if (!isLoggedIn) {
    return (
      <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border mb-6">
            <HeartIcon className="h-9 w-9 text-muted-foreground" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Sign in to save Favorites</h1>
          <p className="text-muted-foreground max-w-md mb-6">Log in to bookmark your favorite resources and access them anytime across all tracks.</p>
          <Button asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (allFavs.length === 0) {
    return (
      <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg">
            <HeartIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Favorites</h1>
            <p className="text-xs text-muted-foreground">Your saved resources</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border mb-6">
            <HeartIcon className="h-9 w-9 text-muted-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">No favorites yet</h2>
          <p className="text-muted-foreground max-w-md mb-6">Browse any track and click the heart icon on resources to save them here for quick access.</p>
          <Button asChild>
            <Link to="/">Explore Tracks</Link>
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Video Courses", icon: PlayIcon, items: videoFavs, color: "video" as const },
    { label: "Notes & Guides", icon: NotebookIcon, items: notesFavs, color: "notes" as const },
    { label: "Practice & Problems", icon: ClipboardListIcon, items: practiceFavs, color: "practice" as const },
  ].filter((s) => s.items.length > 0);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg">
          <HeartIcon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Favorites</h1>
          <p className="text-xs text-muted-foreground">
            {allFavs.length} saved resource{allFavs.length !== 1 ? "s" : ""} across {sections.length} section{sections.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {sections.map((section) => {
        const SIcon = section.icon;
        return (
          <section key={section.label} className="mb-10 last:mb-0">
            <div className="flex items-center gap-3 mb-5">
              <div className={"flex h-9 w-9 items-center justify-center rounded-lg " + sectionIconBg(section.color)}>
                <SIcon className="h-4 w-4 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{section.label}</h2>
                <p className="text-xs text-muted-foreground">{section.items.length} resource{section.items.length !== 1 ? "s" : ""}</p>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((fav) => {
                const st = getSectionType(fav);
                return (
                  <Card
                    key={fav.id}
                    className={
                      "relative overflow-hidden bg-card/60 backdrop-blur border-border " +
                      sectionBorder(st) +
                      " transition-all duration-300 " +
                      sectionGlow(st) +
                      " h-full"
                    }
                  >
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <Badge className={"text-[10px] font-semibold tracking-wider " + sectionIconBg(st) + " text-white border-0"}>
                          {sectionBadge(st)}
                        </Badge>
                        <button
                          onClick={() => toggle(fav.url)}
                          className="shrink-0 p-1.5 rounded-md hover:bg-muted/60 transition-colors"
                          title="Remove from Favorites"
                        >
                          <HeartIcon className="h-4 w-4 text-rose-500 fill-rose-500" />
                        </button>
                      </div>

                      <a href={fav.url} target="_blank" rel="noopener noreferrer" className="block group/link">
                        <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/link:text-primary transition-colors mb-2">
                          {fav.title}
                        </h3>
                      </a>

                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-[10px]">{fav.type}</Badge>
                        {fav.source && <span className="text-[10px] text-muted-foreground">&middot; {fav.source}</span>}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-3 border-t border-border/40">
                        <Link to="/track/$slug" params={{ slug: fav.trackSlug }} className="hover:text-primary transition-colors truncate">
                          {fav.trackTitle}
                        </Link>
                        <span className="shrink-0">{">"}</span>
                        <span className="truncate">{fav.topicTitle}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
