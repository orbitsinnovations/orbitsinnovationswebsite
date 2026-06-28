import type { Metadata } from "next"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { OrbitalBackground } from "@/components/orbital-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProcessTimeline } from "@/components/process-timeline"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP = "+230 57833020"
const WHATSAPP_LINK = "https://wa.me/23057833020"
const EMAIL = "orbitsinnovations@gmail.com"

export const metadata: Metadata = {
  title: "Contact Us — Orbits Innovations",
  description:
    "Get in touch with Orbits Innovations for a free consultation on ERP, WhatsApp automation, POS, e-commerce, and custom software.",
}

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <OrbitalBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contact Us
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build the right solution for your business
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us your goals and we&apos;ll map the systems to get you there. Free consultation,
              no obligation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="space-y-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      WhatsApp / Phone
                    </span>
                    <span className="font-heading text-xl font-semibold text-foreground">{WHATSAPP}</span>
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Email
                    </span>
                    <span className="font-heading text-xl font-semibold text-foreground">{EMAIL}</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Location
                    </span>
                    <span className="font-heading text-xl font-semibold text-foreground">Mauritius</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="font-heading text-xl font-bold text-foreground">Request a Consultation</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The fastest way to reach us is via WhatsApp or email. We typically respond within
                  24 hours.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: "lg" }), "w-full")}
                  >
                    <MessageCircle className="mr-1.5 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=Consultation Request`}
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
                  >
                    <Mail className="mr-1.5 h-4 w-4" />
                    Send an Email
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ProcessTimeline compact />
    </PageShell>
  )
}
