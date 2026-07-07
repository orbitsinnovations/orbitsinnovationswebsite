export function SectionDivider({ variant = "wave" }: { variant?: "wave" | "line" | "dots" }) {
  if (variant === "line") {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className="flex justify-center py-2" aria-hidden="true">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-primary/30"
              style={{ opacity: 1 - i * 0.25 }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-8 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-x-0 bottom-0 h-8 w-full text-secondary"
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,16 C360,32 720,0 1080,16 C1260,24 1380,28 1440,16 L1440,32 L0,32 Z" />
      </svg>
    </div>
  )
}
