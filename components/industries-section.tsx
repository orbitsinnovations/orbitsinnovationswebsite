import { industries } from "@/lib/data/industries"
import { ScrollReveal } from "@/components/scroll-reveal"

export function IndustriesSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? industries.slice(0, 8) : industries

  return (
    <section id="industries" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Industries We Serve
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Digital solutions tailored to your industry
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              From retail and hospitality to healthcare and professional services — we understand
              your sector&apos;s unique challenges.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 50}>
              <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">{ind.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{ind.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
