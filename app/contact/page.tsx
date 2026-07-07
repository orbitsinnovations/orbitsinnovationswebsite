import type { Metadata } from "next"
import { MessageCircle, Mail } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProcessTimeline } from "@/components/process-timeline"
import { buttonVariants } from "@/components/ui/button"
import { CONTACT, getEmailLink, getWhatsAppLink } from "@/lib/contact"
import { pageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = pageMetadata({
  title: "Contact — Business Consultation",
  description:
    "Contact Orbits Innovations for a consultation on ERP, WhatsApp automation, POS, and custom software in Mauritius. WhatsApp +230 58355940.",
  path: "/contact",
  keywords: ["contact Orbits Innovations", "IT consultation Mauritius", "ERP quote Mauritius"],
})

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </span>
              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Consultation
              </h1>
              <p className="mt-4 text-muted-foreground">
                Tell us about your business — we&apos;ll recommend the right solution.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProcessTimeline embedded className="!bg-transparent py-12 lg:py-16" />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
              <h2 className="font-heading text-lg font-semibold text-foreground">Get in touch</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A message template will open — just fill in your details and send.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={getEmailLink()}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </div>
              <p className="mt-6 break-all text-xs text-muted-foreground">
                {CONTACT.phone} · {CONTACT.email}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  )
}
