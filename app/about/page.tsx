import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AboutSection } from "@/components/about-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { CtaContact } from "@/components/cta-contact"

export const metadata: Metadata = {
  title: "About Us — Orbits Innovations",
  description:
    "Learn about Orbits Innovations — your partner in digital transformation, business automation, and custom technology solutions.",
}

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Innovate. Automate. Elevate.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Orbits Innovations is a professional digital transformation company helping
              businesses automate operations, improve efficiency, and accelerate growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <ProcessTimeline />
      <CtaContact />
    </PageShell>
  )
}
