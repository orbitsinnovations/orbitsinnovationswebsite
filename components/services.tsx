import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/data/services"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What We Build
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Complete technology for every part of your business
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              One partner, every system you need to run and scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 service-card-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={420}>
            <article className="flex h-full flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground transition-transform hover:scale-[1.02]">
              <div>
                <h3 className="font-heading text-lg font-semibold leading-snug">
                  Need something custom?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                  Every system is tailored to your workflow, goals, and future expansion.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
