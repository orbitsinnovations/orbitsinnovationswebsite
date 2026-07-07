import { industries } from "@/lib/data/industries"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function IndustriesSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? industries.slice(0, 6) : industries

  return (
    <section id="industries" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Industries We Serve
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for your sector
              </h2>
            </div>
            {compact && (
              <Link href="/industries" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 40}>
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">{ind.name}</h3>
                  {!compact && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{ind.description}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
