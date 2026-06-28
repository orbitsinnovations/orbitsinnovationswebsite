import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { caseStudies } from "@/lib/data/case-studies"
import { ScrollReveal } from "@/components/scroll-reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CaseStudiesSection({ limit = 3 }: { limit?: number }) {
  const items = caseStudies.slice(0, limit)

  return (
    <section id="success-stories" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Customer Success Stories
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Real results for real businesses
              </h2>
            </div>
            <Link href="/portfolio" className={cn(buttonVariants({ variant: "outline" }), "group shrink-0")}>
              View all case studies
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((cs, i) => (
            <ScrollReveal key={cs.id} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <span className="inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {cs.industry}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-foreground">
                  {cs.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Challenge</p>
                    <p className="mt-1 text-muted-foreground">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Our Solution</p>
                    <p className="mt-1 text-muted-foreground">{cs.solution}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {cs.results.slice(0, 2).map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
