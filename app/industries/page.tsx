import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { IndustriesSection } from "@/components/industries-section"
import { CtaContact } from "@/components/cta-contact"

export const metadata: Metadata = {
  title: "Industries — Orbits Innovations",
  description:
    "Digital transformation solutions for retail, hospitality, healthcare, education, e-commerce, and professional services.",
}

export default function IndustriesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Industries
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Solutions for every industry
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              We understand the unique challenges of your sector and deliver technology that fits.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <IndustriesSection />
      <CtaContact />
    </PageShell>
  )
}
