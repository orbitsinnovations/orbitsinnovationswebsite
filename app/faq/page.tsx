import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaContact } from "@/components/cta-contact"
import { generalFaqs } from "@/lib/data/faq"
import { faqJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Business Software & Automation",
  description:
    "Answers about Orbits Innovations ERP (MoLedger), WhatsApp automation, POS, e-commerce, booking systems, and custom software in Mauritius.",
  path: "/faq",
  keywords: [
    "ERP FAQ Mauritius",
    "WhatsApp automation questions",
    "POS software help",
    "MoLedger ERP",
  ],
})

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLd data={faqJsonLd(generalFaqs)} />
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                FAQ
              </span>
              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Frequently asked questions
              </h1>
              <p className="mt-4 text-muted-foreground">
                Common questions about our digital transformation services in Mauritius.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FaqAccordion items={generalFaqs} />
          </ScrollReveal>
        </div>
      </section>

      <CtaContact />
    </PageShell>
  )
}
