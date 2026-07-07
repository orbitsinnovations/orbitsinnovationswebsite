import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { services } from "@/lib/data/services"
import { ScrollReveal } from "@/components/scroll-reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Core Services
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything your business needs
            </h2>
            <p className="mt-3 text-muted-foreground">
              Seven integrated solutions. Explore each in detail on its dedicated page.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const highlights = s.features.slice(0, 3).map((f) => f.title)
            return (
              <ScrollReveal key={s.slug} delay={i * 50}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 service-card-border">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {s.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-5 w-full group/btn",
                    )}
                  >
                    Learn More
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
