import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaContact } from "@/components/cta-contact"

export const metadata: Metadata = {
  title: "Testimonials — Orbits Innovations",
  description:
    "Read what our clients say about our ERP, WhatsApp automation, POS, booking, branding, and custom software solutions.",
}

export default function TestimonialsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              What our clients say
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Trusted by businesses across retail, healthcare, hospitality, and technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialsSection />
      <CtaContact />
    </PageShell>
  )
}
