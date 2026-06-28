import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import type { ServiceDetail } from "@/lib/data/services"
import { getRelatedServices } from "@/lib/data/services"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FaqAccordion } from "@/components/faq-accordion"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaContact } from "@/components/cta-contact"
import { WorkflowIllustration } from "@/components/workflow-illustration"
import { DevLifecycle } from "@/components/dev-lifecycle"
import { BeforeAfterBranding } from "@/components/before-after-branding"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ServicePageLayout({ service }: { service: ServiceDetail }) {
  const related = getRelatedServices(service.relatedSlugs)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
        <OrbitalBackground />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
              <service.icon className="h-6 w-6" />
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {service.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group")}>
                Request a Demo
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Free Consultation
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative">
              {service.heroImage ? (
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-foreground/10 transition-transform hover:scale-[1.02]">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt ?? service.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-border bg-gradient-to-br from-accent to-card shadow-2xl">
                  <service.icon className="h-24 w-24 text-primary/30" />
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Overview
            </span>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{service.overview}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenges & Solution */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-foreground">Business Challenges</h2>
              <ul className="mt-6 space-y-3">
                {service.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                    {c}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Solution</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{service.solution}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Key Features
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground">
                Everything you need, built in
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 50}>
                <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special sections */}
      {service.showWorkflow && <WorkflowIllustration />}
      {service.showDevLifecycle && <DevLifecycle />}
      {service.showBeforeAfter && <BeforeAfterBranding />}

      {/* Benefits */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Benefits
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground">
                Why businesses choose this solution
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Industries Served
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground">
                Built for your sector
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {service.industries.map((ind, i) => (
              <ScrollReveal key={ind} delay={i * 40}>
                <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent">
                  {ind}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Implementation Process
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground">
                How we deliver
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 60}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">{step.step}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Technologies Used
              </span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground">
                Frequently asked questions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <FaqAccordion items={service.faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection filterSlug={service.slug} limit={3} />

      {/* Related Services */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-foreground">
              Related Services
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((rel, i) => (
              <ScrollReveal key={rel.slug} delay={i * 80}>
                <Link
                  href={`/services/${rel.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <rel.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">{rel.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  )
}
