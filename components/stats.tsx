import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  { value: "7+", label: "Core solution areas" },
  { value: "24/7", label: "Automation that never sleeps" },
  { value: "100%", label: "Tailored to your workflow" },
  { value: "1", label: "Connected platform" },
]

export function Stats() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
            {stats.map((s) => (
              <AnimatedCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
