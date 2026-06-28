import { Star } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export function TestimonialsSection({
  filterSlug,
  limit,
  className,
}: {
  filterSlug?: string
  limit?: number
  className?: string
}) {
  const items = (filterSlug
    ? testimonials.filter((t) => t.serviceSlug === filterSlug)
    : testimonials
  ).slice(0, limit ?? testimonials.length)

  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Trusted by businesses across industries
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.business} · {t.industry}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
