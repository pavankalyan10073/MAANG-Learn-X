import { useState, useEffect, useCallback, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mentors, type Mentor } from "@/data/mentors";
import {
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  XIcon,
  MessageCircleIcon,
  SearchIcon,
} from "@/components/icons";

type MatchStep = "searching" | "found" | "payment" | "success";

interface MentorMatchingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onViewAllMentors: () => void;
}

export function MentorMatchingDialog({
  open,
  onOpenChange,
  onViewAllMentors,
}: MentorMatchingDialogProps) {
  const [step, setStep] = useState<MatchStep>("searching");
  const [matchedMentor, setMatchedMentor] = useState<Mentor | null>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [scanRotation, setScanRotation] = useState(0);
  const [pulseRing, setPulseRing] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [activeProfileIndex, setActiveProfileIndex] = useState(-1);
  const [shuffledMentors, setShuffledMentors] = useState<Mentor[]>([]);
  const animFrameRef = useRef<number>(0);
  const scanRef = useRef<number>(0);

  const reset = useCallback(() => {
    setStep("searching");
    setMatchedMentor(null);
    setProgress(0);
    setPhase(0);
    setScanRotation(0);
    setPulseRing(0);
    setShowParticles(false);
    setActiveProfileIndex(-1);
    setShuffledMentors([]);
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
      return;
    }

    setStep("searching");
    setProgress(0);
    setPhase(0);
    setShowParticles(false);
    setActiveProfileIndex(-1);

    const shuffled = [...mentors].sort(() => Math.random() - 0.5).slice(0, 8);
    setShuffledMentors(shuffled);

    // Smooth progress animation
    const totalDuration = 4200;
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(pct);

      if (pct < 25) setPhase(0);
      else if (pct < 50) setPhase(1);
      else if (pct < 75) setPhase(2);
      else setPhase(3);

      if (pct >= 100) clearInterval(progressInterval);
    }, 30);

    // Scan rotation
    const scanInterval = setInterval(() => {
      setScanRotation((prev) => (prev + 3) % 360);
    }, 16);

    // Pulse ring
    const pulseInterval = setInterval(() => {
      setPulseRing((prev) => (prev + 1) % 3);
    }, 600);

    // Show particles after delay
    const particleTimer = setTimeout(() => setShowParticles(true), 400);

    // Cycle through profile cards
    let profileIdx = 0;
    const profileInterval = setInterval(() => {
      setActiveProfileIndex(profileIdx);
      profileIdx++;
      if (profileIdx >= shuffled.length) {
        profileIdx = 0;
      }
    }, 500);

    // Final match
    const matchTimeout = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(scanInterval);
      clearInterval(pulseInterval);
      clearInterval(profileInterval);
      setProgress(100);
      const finalMentor = shuffled[Math.floor(Math.random() * shuffled.length)];
      setMatchedMentor(finalMentor);
      setStep("found");
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(scanInterval);
      clearInterval(pulseInterval);
      clearInterval(profileInterval);
      clearTimeout(particleTimer);
      clearTimeout(matchTimeout);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [open, reset]);

  const handleProceedToPayment = () => setStep("payment");
  const handlePayment = () => setStep("success");
  const handleSuccessClose = () => onOpenChange(false);
  const handleViewAll = () => {
    onOpenChange(false);
    onViewAllMentors();
  };

  const phaseLabels = [
    "Scanning mentor database...",
    "Analyzing expertise match...",
    "Evaluating availability...",
    "Finalizing best match...",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg w-[calc(100%-1.5rem)] bg-card border-border/50 p-0 overflow-hidden rounded-2xl shadow-[0_0_80px_-20px_oklch(0.72_0.18_255/0.3)]">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-20 rounded-full p-1.5 text-muted-foreground/60 hover:text-foreground hover:bg-accent/50 transition-all"
        >
          <XIcon className="h-4 w-4" />
        </button>

        {/* ===== SEARCHING STEP ===== */}
        {step === "searching" && (
          <div className="relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.04]" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `conic-gradient(from ${scanRotation}deg, transparent 0deg, oklch(0.72 0.18 255 / 0.06) 60deg, transparent 120deg)`,
              }}
            />

            <div className="relative z-10 px-6 sm:px-10 pt-10 pb-8 sm:pt-12 sm:pb-10">
              {/* Central radar animation */}
              <div className="relative mx-auto mb-8" style={{ width: 180, height: 180 }}>
                {/* Outer pulse rings */}
                {[0, 1, 2].map((ring) => (
                  <div
                    key={ring}
                    className="absolute inset-0 rounded-full border border-primary/10"
                    style={{
                      transform: `scale(${1 + (ring === pulseRing ? 0.15 : 0.08 * ring)})`,
                      opacity: ring === pulseRing ? 0.4 : 0.15 - ring * 0.03,
                      transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                    }}
                  />
                ))}

                {/* Radar sweep */}
                <div
                  className="absolute inset-4 rounded-full overflow-hidden"
                  style={{ transform: `rotate(${scanRotation}deg)` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `conic-gradient(from 0deg, oklch(0.72 0.18 255 / 0.12) 0deg, oklch(0.72 0.18 255 / 0.03) 30deg, transparent 60deg)`,
                    }}
                  />
                </div>

                {/* Inner glow ring */}
                <div className="absolute inset-8 rounded-full border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-accent/[0.05]" />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                      <SearchIcon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Orbiting particles */}
                {showParticles && (
                  <>
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const rad = ((angle + scanRotation * 0.5) * Math.PI) / 180;
                      const radius = 70 + (i % 2) * 12;
                      const x = Math.cos(rad) * radius;
                      const y = Math.sin(rad) * radius;
                      return (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: i % 2 === 0 ? 4 : 3,
                            height: i % 2 === 0 ? 4 : 3,
                            left: `calc(50% + ${x}px - 2px)`,
                            top: `calc(50% + ${y}px - 2px)`,
                            backgroundColor: i % 3 === 0
                              ? "oklch(0.72 0.18 255 / 0.6)"
                              : i % 3 === 1
                                ? "oklch(0.7 0.18 180 / 0.5)"
                                : "oklch(0.78 0.2 280 / 0.5)",
                            boxShadow: `0 0 6px ${i % 3 === 0 ? "oklch(0.72 0.18 255 / 0.4)" : i % 3 === 1 ? "oklch(0.7 0.18 180 / 0.3)" : "oklch(0.78 0.2 280 / 0.3)"}`,
                            transition: "left 0.05s linear, top 0.05s linear",
                          }}
                        />
                      );
                    })}
                  </>
                )}
              </div>

              {/* Title & subtitle */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-1.5 tracking-tight">
                  Finding Your Perfect Mentor
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  {phaseLabels[phase]}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-6 mx-auto max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
                    Progress
                  </span>
                  <span className="text-xs font-bold text-primary tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-background/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-100 ease-linear"
                    style={{
                      width: `${progress}%`,
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s linear infinite",
                    }}
                  />
                </div>
              </div>

              {/* Floating profile cards */}
              <div className="relative h-16 sm:h-20 overflow-hidden mx-auto max-w-xs">
                {shuffledMentors.map((mentor, i) => {
                  const isActive = i === activeProfileIndex;
                  const isPast = i < activeProfileIndex || (activeProfileIndex === -1 && false);
                  return (
                    <div
                      key={mentor.id}
                      className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                      style={{
                        opacity: isActive ? 1 : isPast ? 0 : 0.3,
                        transform: isActive
                          ? "translateY(0) scale(1)"
                          : isPast
                            ? "translateY(-20px) scale(0.9)"
                            : "translateY(20px) scale(0.9)",
                      }}
                    >
                      <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm px-4 py-2.5">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${mentor.color} text-xs font-bold text-primary-foreground`}
                        >
                          {mentor.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-semibold leading-tight">{mentor.name}</p>
                          <p className="text-[10px] text-muted-foreground">{mentor.company}</p>
                        </div>
                        {isActive && (
                          <div className="ml-2">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Phase indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {["Scan", "Analyze", "Match", "Done"].map((label, i) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        i <= phase
                          ? "bg-primary shadow-[0_0_6px_oklch(0.72_0.18_255/0.5)]"
                          : "bg-muted-foreground/20"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                        i <= phase ? "text-primary/80" : "text-muted-foreground/30"
                      }`}
                    >
                      {label}
                    </span>
                    {i < 3 && (
                      <div className={`h-px w-4 mx-1 transition-colors duration-300 ${i < phase ? "bg-primary/30" : "bg-muted-foreground/10"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== FOUND STEP ===== */}
        {step === "found" && matchedMentor && (
          <div className="relative overflow-hidden">
            {/* Success burst background */}
            <div className="absolute inset-0 bg-gradient-to-br from-success/[0.06] via-transparent to-primary/[0.04]" />

            <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center animate-fade-in-up">
              {/* Animated checkmark */}
              <div className="relative mx-auto mb-6" style={{ width: 80, height: 80 }}>
                <div className="absolute inset-0 rounded-full bg-success/15 animate-ping" style={{ animationDuration: "2s" }} />
                <div className="absolute inset-2 rounded-full bg-success/10 animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-success/70 shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.5)] mx-auto">
                  <CheckIcon className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight">
                Mentor Found!
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We've found the perfect mentor for you
              </p>

              {/* Mentor card */}
              <Card className="p-5 mb-6 bg-background/40 border-border/50 text-left overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${matchedMentor.color} shadow-glow text-xl font-bold text-primary-foreground ring-2 ring-border/50`}
                    >
                      {matchedMentor.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-lg leading-tight truncate">
                        {matchedMentor.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {matchedMentor.role} at {matchedMentor.company}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-card/60 border border-border/50 p-2.5">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Specialty</p>
                      <p className="text-xs font-semibold">{matchedMentor.specialty}</p>
                    </div>
                    <div className="rounded-xl bg-card/60 border border-border/50 p-2.5">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Experience</p>
                      <p className="text-xs font-semibold">{matchedMentor.experience}</p>
                    </div>
                    <div className="rounded-xl bg-card/60 border border-border/50 p-2.5">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Sessions</p>
                      <p className="text-xs font-semibold">{matchedMentor.sessions}</p>
                    </div>
                    <div className="rounded-xl bg-card/60 border border-border/50 p-2.5">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Rating</p>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-3 w-3 text-warning fill-warning" />
                        <p className="text-xs font-semibold">{matchedMentor.rating} ({matchedMentor.reviews})</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Button onClick={handleProceedToPayment} className="w-full bg-gradient-primary shadow-glow border-0 mb-3" size="lg">
                <SparklesIcon className="mr-2 h-4 w-4" />
                Proceed to Pay ₹49
              </Button>

              <Button onClick={handleViewAll} variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
                View All Mentors <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}

        {/* ===== PAYMENT STEP ===== */}
        {step === "payment" && matchedMentor && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" />
            <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center animate-fade-in-up">
              <div className="mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-primary shadow-glow" style={{ width: 72, height: 72 }}>
                <SparklesIcon className="h-9 w-9 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold mb-1 tracking-tight">Complete Your Booking</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Secure your 1:1 session with {matchedMentor.name}
              </p>

              <Card className="p-5 mb-6 bg-background/40 border-border/50 text-left overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${matchedMentor.color} shadow-glow text-lg font-bold text-primary-foreground`}>
                      {matchedMentor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{matchedMentor.name}</h4>
                      <p className="text-xs text-muted-foreground">{matchedMentor.role} at {matchedMentor.company}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-card/60 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">1:1 Mentorship Session</span>
                      <span className="text-sm font-semibold">₹49</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Platform Fee</span>
                      <span className="text-sm font-semibold text-success">Free</span>
                    </div>
                    <div className="border-t border-border/50 pt-2 mt-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Total</span>
                        <span className="text-xl font-bold text-primary">₹49</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Button onClick={handlePayment} className="w-full bg-gradient-primary shadow-glow border-0 mb-3" size="lg">
                Pay ₹49 & Start Learning
              </Button>

              <Button onClick={() => setStep("found")} variant="ghost" className="w-full text-muted-foreground hover:text-foreground text-sm">
                Go Back
              </Button>
            </div>
          </div>
        )}

        {/* ===== SUCCESS STEP ===== */}
        {step === "success" && matchedMentor && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-success/[0.08] via-transparent to-primary/[0.04]" />
            <div className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-12 pb-8 sm:pb-10 text-center animate-scale-in">
              <div className="relative mx-auto mb-6" style={{ width: 88, height: 88 }}>
                <div className="absolute inset-0 rounded-full bg-success/15 animate-ping" style={{ animationDuration: "2.5s" }} />
                <div className="absolute inset-2 rounded-full bg-success/10 animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-success/70 shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.5)] mx-auto">
                  <CheckIcon className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">Payment Successful! 🎉</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Your 1:1 session with <span className="font-semibold text-foreground">{matchedMentor.name}</span> has been booked.
              </p>

              <Card className="p-4 mb-6 bg-background/40 border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-success/[0.04] to-primary/[0.03]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${matchedMentor.color} text-sm font-bold text-primary-foreground`}>
                      {matchedMentor.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{matchedMentor.name}</p>
                      <p className="text-xs text-muted-foreground">{matchedMentor.role} at {matchedMentor.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MessageCircleIcon className="h-3.5 w-3.5 text-primary" />
                    <span>You'll receive a confirmation message shortly</span>
                  </div>
                </div>
              </Card>

              <Button onClick={handleSuccessClose} className="w-full bg-gradient-primary shadow-glow border-0" size="lg">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ===== CONNECT DIALOG (for /mentors page) ===== */

interface MentorConnectDialogProps {
  mentor: Mentor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MentorConnectDialog({ mentor, open, onOpenChange }: MentorConnectDialogProps) {
  const [step, setStep] = useState<"details" | "payment" | "success">("details");

  useEffect(() => {
    if (open) setStep("details");
  }, [open]);

  if (!mentor) return null;

  const handleProceed = () => setStep("payment");
  const handlePay = () => setStep("success");
  const handleClose = () => onOpenChange(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-[calc(100%-1.5rem)] bg-card border-border/50 p-0 overflow-hidden rounded-2xl shadow-[0_0_80px_-20px_oklch(0.72_0.18_255/0.3)]">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-muted-foreground/60 hover:text-foreground hover:bg-accent/50 transition-all"
        >
          <XIcon className="h-4 w-4" />
        </button>

        {step === "details" && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" />
            <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center animate-fade-in-up">
              <div className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${mentor.color} shadow-glow text-2xl font-bold text-primary-foreground ring-2 ring-border/50`}>
                {mentor.name.charAt(0)}
              </div>

              <h3 className="text-xl font-bold mb-0.5">{mentor.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">
                {mentor.role} at {mentor.company}
              </p>

              <Card className="p-4 mb-6 bg-background/40 border-border/50 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />
                <div className="relative z-10 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Specialty</p>
                    <p className="text-xs font-semibold">{mentor.specialty}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Experience</p>
                    <p className="text-xs font-semibold">{mentor.experience}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Sessions</p>
                    <p className="text-xs font-semibold">{mentor.sessions}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Rating</p>
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-3 w-3 text-warning fill-warning" />
                      <p className="text-xs font-semibold">{mentor.rating} ({mentor.reviews})</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Button onClick={handleProceed} className="w-full bg-gradient-primary shadow-glow border-0 mb-3" size="lg">
                <SparklesIcon className="mr-2 h-4 w-4" />
                Connect — ₹49
              </Button>

              <p className="text-[11px] text-muted-foreground/60">
                One-time payment for a 1:1 mentorship session
              </p>
            </div>
          </div>
        )}

        {step === "payment" && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" />
            <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center animate-fade-in-up">
              <div className="mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-primary shadow-glow" style={{ width: 72, height: 72 }}>
                <SparklesIcon className="h-9 w-9 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold mb-1">Complete Payment</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Book your session with {mentor.name}
              </p>

              <Card className="p-5 mb-6 bg-background/40 border-border/50 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${mentor.color} shadow-glow text-base font-bold text-primary-foreground`}>
                      {mentor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{mentor.name}</h4>
                      <p className="text-xs text-muted-foreground">{mentor.role} at {mentor.company}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-card/60 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">1:1 Mentorship Session</span>
                      <span className="text-sm font-semibold">₹49</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Platform Fee</span>
                      <span className="text-sm font-semibold text-success">Free</span>
                    </div>
                    <div className="border-t border-border/50 pt-2 mt-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Total</span>
                        <span className="text-xl font-bold text-primary">₹49</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Button onClick={handlePay} className="w-full bg-gradient-primary shadow-glow border-0 mb-3" size="lg">
                Pay ₹49 & Connect
              </Button>

              <Button onClick={() => setStep("details")} variant="ghost" className="w-full text-muted-foreground hover:text-foreground text-sm">
                Go Back
              </Button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-success/[0.08] via-transparent to-primary/[0.04]" />
            <div className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-12 pb-8 sm:pb-10 text-center animate-scale-in">
              <div className="relative mx-auto mb-6" style={{ width: 88, height: 88 }}>
                <div className="absolute inset-0 rounded-full bg-success/15 animate-ping" style={{ animationDuration: "2.5s" }} />
                <div className="absolute inset-2 rounded-full bg-success/10 animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-success/70 shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.5)] mx-auto">
                  <CheckIcon className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">Connected! 🎉</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Your session with <span className="font-semibold text-foreground">{mentor.name}</span> is confirmed.
              </p>

              <Card className="p-4 mb-6 bg-background/40 border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-success/[0.04] to-primary/[0.03]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${mentor.color} text-sm font-bold text-primary-foreground`}>
                      {mentor.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{mentor.name}</p>
                      <p className="text-xs text-muted-foreground">{mentor.role} at {mentor.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MessageCircleIcon className="h-3.5 w-3.5 text-primary" />
                    <span>You'll receive a confirmation message shortly</span>
                  </div>
                </div>
              </Card>

              <Button onClick={handleClose} className="w-full bg-gradient-primary shadow-glow border-0" size="lg">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
