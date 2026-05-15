import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mentors, type Mentor } from "@/data/mentors";
import { MentorConnectDialog } from "@/components/mentor-matching-dialog";
import {
  StarIcon,
  ArrowLeftIcon,
  UsersIcon,
  SearchIcon,
} from "@/components/icons";
import { useState } from "react";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — MAANG Learn X" },
      { name: "description", content: "Browse and connect with 15+ industry mentors from Google, Amazon, Microsoft, Meta, and more." },
    ],
  }),
  component: MentorsPage,
});

function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [connectOpen, setConnectOpen] = useState(false);

  const filteredMentors = mentors.filter((mentor) => {
    const q = searchQuery.toLowerCase();
    return (
      mentor.name.toLowerCase().includes(q) ||
      mentor.company.toLowerCase().includes(q) ||
      mentor.specialty.toLowerCase().includes(q) ||
      mentor.role.toLowerCase().includes(q)
    );
  });

  const handleConnect = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setConnectOpen(true);
  };

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <section className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
          <UsersIcon className="h-3 w-3 text-primary" />
          15+ Expert Mentors
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Our <span className="text-gradient">Mentors</span>
        </h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
          Learn directly from engineers and hiring managers at top tech companies.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, company, or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-card/60 backdrop-blur pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>
      </section>

      {/* Mentor Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {filteredMentors.map((mentor) => (
          <Card
            key={mentor.id}
            className="group relative overflow-hidden bg-card/60 backdrop-blur border-border hover:border-primary/40 transition-all hover:shadow-glow text-center p-4 sm:p-5 md:p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              {/* Avatar */}
              <div
                className={`mx-auto mb-3 flex h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20 items-center justify-center rounded-full ${mentor.color} shadow-glow text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground ring-2 ring-border group-hover:ring-primary/30 transition-all`}
              >
                {mentor.name.charAt(0)}
              </div>

              {/* Name */}
              <h3 className="font-bold text-xs sm:text-sm md:text-base mb-0.5 group-hover:text-primary transition-colors truncate">
                {mentor.name}
              </h3>

              {/* Role & Company */}
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 truncate leading-tight">
                {mentor.role} at {mentor.company}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-2.5">
                <StarIcon className="h-3 w-3 text-warning fill-warning" />
                <span className="text-[10px] sm:text-xs font-semibold">{mentor.rating}</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground">
                  ({mentor.reviews})
                </span>
              </div>

              {/* Specialty */}
              <div className="rounded-lg bg-background/40 border border-border px-2 py-1.5 mb-3">
                <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground truncate">
                  {mentor.specialty}
                </p>
              </div>

              {/* Connect Button */}
              <Button
                size="sm"
                onClick={() => handleConnect(mentor)}
                className="w-full bg-gradient-primary shadow-glow border-0 text-[10px] sm:text-xs md:text-sm"
              >
                Connect
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No mentors found matching &ldquo;{searchQuery}&rdquo;</p>
          <Button variant="ghost" className="mt-3" onClick={() => setSearchQuery("")}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Back to Community */}
      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link to="/community">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Community
          </Link>
        </Button>
      </div>

      {/* Connect Dialog */}
      <MentorConnectDialog
        mentor={selectedMentor}
        open={connectOpen}
        onOpenChange={setConnectOpen}
      />
    </div>
  );
}
