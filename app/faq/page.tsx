import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaContact } from "@/components/cta-contact"

const generalFaqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with retailers, service providers, startups, and growing companies that want to digitize operations — from single shops to multi-branch businesses.",
  },
  {
    q: "Can you tailor a system to our exact workflow?",
    a: "Yes. Every solution is built around your workflow, goals, and future expansion. We start with a free consultation to map your needs.",
  },
  {
    q: "Do your systems work together?",
    a: "Absolutely. ERP, POS, e-commerce, booking, and WhatsApp automation can all connect into one platform with shared data and reporting.",
  },
  {
    q: "Do you build mobile apps?",
    a: "We design and develop secure Android and iOS apps, customer portals, and internal platforms with the integrations you need.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through the contact section or WhatsApp. We'll discuss your goals and recommend the right digital solution.",
  },
  {
    q: "What is MoLedger ERP?",
    a: "MoLedger is our flagship ERP platform designed for small to medium businesses. It covers accounting, inventory, HR, CRM, and more in one connected system.",
  },
  {
    q: "How long does implementation take?",
    a: "Timelines vary by project. Basic automation can go live in 1–2 weeks. ERP implementations typically take 4–12 weeks. Custom software projects range from 6 weeks to several months.",
  },
  {
    q: "Do you provide training and ongoing support?",
    a: "Yes. We include hands-on training during deployment and offer ongoing support, updates, and system optimization.",
  },
  {
    q: "Can WhatsApp connect to our ERP or booking system?",
    a: "Absolutely. We integrate WhatsApp with ERP, CRM, booking platforms, and custom APIs for seamless data flow.",
  },
  {
    q: "Do we own the source code for custom software?",
    a: "Yes. You receive full ownership of the codebase, documentation, and deployment infrastructure.",
  },
]

export const metadata: Metadata = {
  title: "FAQ — Orbits Innovations",
  description:
    "Frequently asked questions about our ERP, WhatsApp automation, POS, e-commerce, booking, and custom software services.",
}

export default function FaqPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Questions, answered
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about working with Orbits Innovations.
            </p>
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
