import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AboutSection } from "@/components/about-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { CtaContact } from "@/components/cta-contact"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "About Us — Digital Transformation Company",
  description:
    "Learn about Orbits Innovations — Mauritius digital transformation partner for ERP, WhatsApp automation, POS, e-commerce, and custom software.",
  path: "/about",
  keywords: ["about Orbits Innovations", "IT company Mauritius", "digital transformation partner"],
})

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
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Your digital transformation partner in Mauritius
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Orbits Innovations helps businesses automate operations, improve efficiency, and
              accelerate growth through integrated technology solutions.
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
