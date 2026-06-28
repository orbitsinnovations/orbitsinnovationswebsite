"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
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
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
