import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { caseStudies } from "@/lib/data/case-studies"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CtaContact } from "@/components/cta-contact"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Orbits Innovations",
  description:
    "Explore customer success stories: ERP implementations, WhatsApp automation, POS deployments, booking platforms, and more.",
}

export default function PortfolioPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Customer success stories
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Real businesses, real challenges, real results — see how we help companies transform
              their operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.id} delay={i * 80}>
                <article className="rounded-3xl border border-border bg-card p-8 lg:p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {cs.industry}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {cs.serviceSlug.replace(/-/g, " ")}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">{cs.title}</h2>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                        Client Challenge
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                        Our Solution
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">Results Achieved</h3>
                      <ul className="mt-3 space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">Business Benefits</h3>
                      <ul className="mt-3 space-y-2">
                        {cs.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </PageShell>
  )
}
