import { cn } from "@/lib/utils"

export function OrbitMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Orbits Innovations mark"
    >
      {/* Orbit ring with a gap at the top-right */}
      <path
        d="M32 6 A26 26 0 1 0 53.4 18.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Satellite dot */}
      <circle cx="49" cy="15" r="7" className="fill-[var(--lime)]" />
      {/* Leaf */}
      <path
        d="M24 40 C24 28 33 22 42 21 C42 33 35 40 24 40 Z"
        className="fill-[var(--orbit)]"
      />
    </svg>
  )
}

export function OrbitLogo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <OrbitMark className="h-9 w-9 text-foreground" />
      <span className={cn("flex flex-col leading-none", textClassName)}>
        <span className="font-heading text-lg font-bold tracking-[0.18em] text-foreground">
          ORBITS
        </span>
        <span className="text-[0.6rem] font-semibold tracking-[0.42em] text-primary">
          INNOVATIONS
        </span>
      </span>
    </span>
  )
}
