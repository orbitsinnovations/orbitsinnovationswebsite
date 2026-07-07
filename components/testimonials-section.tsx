import { Star } from "lucide-react"
import Link from "next/link"
import { testimonials } from "@/lib/data/testimonials"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export function TestimonialsSection({
  filterSlug,
  limit = 3,
  className,
}: {
  filterSlug?: string
  limit?: number
  className?: string
}) {
  const items = (filterSlug
    ? testimonials.filter((t) => t.serviceSlug === filterSlug)
    : testimonials
  ).slice(0, limit)

  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by businesses
            </h2>
            {!filterSlug && (
              <Link
                href="/testimonials"
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
              >
                View all →
              </Link>
            )}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
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
