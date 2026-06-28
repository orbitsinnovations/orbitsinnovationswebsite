import { ScrollReveal } from "@/components/scroll-reveal"

export function BeforeAfterBranding() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Before & After
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
              See the transformation
            </h3>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="bg-muted px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Before
              </div>
              <div className="flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                <div className="h-12 w-12 rounded-lg bg-gray-300" />
                <p className="mt-4 font-heading text-lg font-bold text-gray-400">Generic Brand</p>
                <p className="mt-2 text-center text-xs text-gray-400">
                  Outdated logo, inconsistent colors, no web presence
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-hidden rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/10">
              <div className="bg-primary px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                After
              </div>
              <div className="flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-accent to-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <span className="font-heading text-lg font-bold">O</span>
                </div>
                <p className="mt-4 font-heading text-lg font-bold text-foreground">Professional Brand</p>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Modern identity, cohesive design, professional website
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
