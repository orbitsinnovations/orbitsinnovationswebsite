export function OrbitalBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Soft gradient orbs */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-16 bottom-1/4 h-64 w-64 rounded-full bg-lime/5 blur-3xl" />

      {/* Dotted pattern overlay — denser in hero areas */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, oklch(0.65 0.16 134 / 0.12) 1.5px, transparent 1.5px)`,
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Radial fade so dots soften toward edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 30%, transparent 30%, var(--background) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Orbital accent rings */}
      <div className="absolute right-[10%] top-[15%] h-32 w-32 animate-orbit-slow rounded-full border border-dashed border-primary/10" />
      <div className="absolute left-[8%] bottom-[20%] h-20 w-20 animate-orbit-rev rounded-full border border-dashed border-primary/10" />
      <div className="absolute right-[25%] bottom-[30%] h-3 w-3 animate-float rounded-full bg-primary/20" />
      <div
        className="absolute left-[20%] top-[25%] h-2 w-2 animate-float rounded-full bg-lime/30"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
