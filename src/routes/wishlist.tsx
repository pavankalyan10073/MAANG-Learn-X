import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { tracks } from "@/data/tracks";
import { subPageResources } from "@/data/sub-page-resources";
import { useWishlist } from "@/hooks/use-wishlist";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookmarkPlusIcon, BookmarkFilledIcon, ExternalLinkIcon,
  PlayIcon, NotebookIcon, ClipboardListIcon,
  ShoppingBagIcon,
  CheckCircle2Icon,
} from "@/components/icons";
import type { Resource } from "@/data/tracks";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — MAANG Learn X" },
      { name: "description", content: "Your saved wishlist resources across all tracks. Quick access to courses, notes, and practice materials." },
    ],
  }),
  component: WishlistPage,
});

type WishItem = {
  id: string;
  title: string;
  url: string;
  type: Resource["type"];
  source?: string;
  trackTitle: string;
  trackSlug: string;
  topicTitle: string;
  sectionType: "video" | "notes" | "practice" | "topic";
  addedAt?: string;
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

/* ── Section color helpers ── */
function sectionAccent(st: "video" | "notes" | "practice") {
  const map = {
    video: {
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30 hover:border-blue-500/50",
      glow: "hover:shadow-[0_8px_30px_-8px_oklch(0.6_0.22_230/0.25)]",
      badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      check: "text-blue-400",
    },
    notes: {
      gradient: "from-emerald-500 to-green-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30 hover:border-emerald-500/50",
      glow: "hover:shadow-[0_8px_30px_-8px_oklch(0.65_0.18_155/0.25)]",
      badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
      check: "text-emerald-400",
    },
    practice: {
      gradient: "from-violet-500 to-purple-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30 hover:border-violet-500/50",
      glow: "hover:shadow-[0_8px_30px_-8px_oklch(0.6_0.22_290/0.25)]",
      badge: "bg-violet-500/15 text-violet-400 border-violet-500/30",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      check: "text-violet-400",
    },
  };
  return map[st];
}

function WishlistPage() {
  const { wishlistIds, wishlistMeta, removeFromWishlist, isLoggedIn, ready } = useWishlist();
  const [activeTab, setActiveTab] = useState<string>("all");

  const allItems = useMemo<WishItem[]>(() => {
    if (!wishlistIds.size) return [];
    const items: WishItem[] = [];

    for (const track of tracks) {
      for (const topic of track.topics) {
        for (const res of topic.resources) {
          if (wishlistIds.has(res.url)) {
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
              addedAt: wishlistMeta[res.url]?.created_at,
            });
          }
        }
      }
    }

    for (const sp of subPageResources) {
      if (wishlistIds.has(sp.url) && !items.some((i) => i.url === sp.url)) {
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
          addedAt: wishlistMeta[sp.url]?.created_at,
        });
      }
    }

    return items;
  }, [wishlistIds, wishlistMeta]);

  const videoItems = allItems.filter((f) => getSectionType(f) === "video");
  const notesItems = allItems.filter((f) => getSectionType(f) === "notes");
  const practiceItems = allItems.filter((f) => getSectionType(f) === "practice");

  const tabCounts = {
    all: allItems.length,
    video: videoItems.length,
    notes: notesItems.length,
    practice: practiceItems.length,
  };

  if (!isLoggedIn) {
    return (
      <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border mb-6">
            <BookmarkPlusIcon className="h-9 w-9 text-muted-foreground" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Sign in to save your Wishlist</h1>
          <p className="text-muted-foreground max-w-md mb-6">
            Log in to bookmark resources you want to learn later. Access them anytime across all tracks.
          </p>
          <Button asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (ready && allItems.length === 0) {
    return (
      <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
            <BookmarkFilledIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">My Wishlist</h1>
            <p className="text-xs text-muted-foreground">Save resources for quick access</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border mb-6">
            <ShoppingBagIcon className="h-9 w-9 text-muted-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Your wishlist is empty</h2>
          <p className="text-muted-foreground max-w-md mb-6">
            Browse any track and click the{" "}
            <BookmarkPlusIcon className="inline h-4 w-4 text-amber-400" />{" "}
            button on resources to save them here for quick access.
          </p>
          <Button asChild>
            <Link to="/">Explore Tracks</Link>
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { key: "video", label: "Video Courses", icon: PlayIcon, items: videoItems },
    { key: "notes", label: "Notes & Guides", icon: NotebookIcon, items: notesItems },
    { key: "practice", label: "Practice & Problems", icon: ClipboardListIcon, items: practiceItems },
  ].filter((s) => s.items.length > 0);

  const renderCard = (item: WishItem) => {
    const st = getSectionType(item);
    const accent = sectionAccent(st);
    return (
      <Card
        key={item.id}
        className={
          "relative overflow-hidden bg-card/60 backdrop-blur border " +
          accent.border +
          " transition-all duration-300 " +
          accent.glow +
          " h-full group/wish"
        }
      >
        <div className="p-4 sm:p-5 flex flex-col h-full">
          {/* Top row: badge + remove */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <Badge className={"text-[10px] font-semibold tracking-wider border " + accent.badge}>
              {st === "video" ? "VIDEO" : st === "practice" ? "PRACTICE" : "NOTES"}
            </Badge>
            <button
              onClick={() => removeFromWishlist(item.url)}
              className="shrink-0 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors group/btn"
              title="Remove from Wishlist"
            >
              <BookmarkFilledIcon className="h-4 w-4 text-amber-400 group-hover/btn:scale-90 transition-transform" />
            </button>
          </div>

          {/* Title */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2"
          >
            <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover/wish:text-primary transition-colors">
              {item.title}
            </h3>
          </a>

          {/* Type + Source */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="secondary" className="text-[10px]">{item.type}</Badge>
            {item.source && (
              <span className="text-[10px] text-muted-foreground">· {item.source}</span>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom: track breadcrumb + external link */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-3 border-t border-border/40">
            <Link
              to="/track/$slug"
              params={{ slug: item.trackSlug }}
              className="hover:text-primary transition-colors truncate font-medium"
            >
              {item.trackTitle}
            </Link>
            <span className="shrink-0 opacity-40">›</span>
            <span className="truncate flex-1">{item.topicTitle}</span>
            <ExternalLinkIcon className="h-3 w-3 shrink-0 opacity-0 group-hover/wish:opacity-100 transition-opacity" />
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
            <BookmarkFilledIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">My Wishlist</h1>
            <p className="text-xs text-muted-foreground">
              {allItems.length} saved resource{allItems.length !== 1 ? "s" : ""} across {sections.length} section{sections.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs gap-1.5 border-amber-500/30 text-amber-400">
            <CheckCircle2Icon className="h-3 w-3" />
            Synced
          </Badge>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 flex-wrap h-auto">
          <TabsTrigger value="all" className="text-xs sm:text-sm gap-1.5">
            All
            <span className="text-[10px] rounded-full bg-muted px-1.5 py-0.5">{tabCounts.all}</span>
          </TabsTrigger>
          {videoItems.length > 0 && (
            <TabsTrigger value="video" className="text-xs sm:text-sm gap-1.5">
              <PlayIcon className="h-3.5 w-3.5" />
              Videos
              <span className="text-[10px] rounded-full bg-muted px-1.5 py-0.5">{tabCounts.video}</span>
            </TabsTrigger>
          )}
          {notesItems.length > 0 && (
            <TabsTrigger value="notes" className="text-xs sm:text-sm gap-1.5">
              <NotebookIcon className="h-3.5 w-3.5" />
              Notes
              <span className="text-[10px] rounded-full bg-muted px-1.5 py-0.5">{tabCounts.notes}</span>
            </TabsTrigger>
          )}
          {practiceItems.length > 0 && (
            <TabsTrigger value="practice" className="text-xs sm:text-sm gap-1.5">
              <ClipboardListIcon className="h-3.5 w-3.5" />
              Practice
              <span className="text-[10px] rounded-full bg-muted px-1.5 py-0.5">{tabCounts.practice}</span>
            </TabsTrigger>
          )}
        </TabsList>

        {/* All tab */}
        <TabsContent value="all" className="mt-0 space-y-10">
          {sections.map((section) => {
            const SIcon = section.icon;
            const accent = sectionAccent(section.key as "video" | "notes" | "practice");
            return (
              <section key={section.key}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={"flex h-9 w-9 items-center justify-center rounded-lg " + accent.iconBg}>
                    <SIcon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">{section.label}</h2>
                    <p className="text-xs text-muted-foreground">
                      {section.items.length} resource{section.items.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map(renderCard)}
                </div>
              </section>
            );
          })}
        </TabsContent>

        {/* Individual section tabs */}
        {sections.map((section) => {
          const SIcon = section.icon;
          const accent = sectionAccent(section.key as "video" | "notes" | "practice");
          return (
            <TabsContent key={section.key} value={section.key} className="mt-0">
              <div className="flex items-center gap-3 mb-5">
                <div className={"flex h-9 w-9 items-center justify-center rounded-lg " + accent.iconBg}>
                  <SIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">{section.label}</h2>
                  <p className="text-xs text-muted-foreground">
                    {section.items.length} resource{section.items.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map(renderCard)}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
