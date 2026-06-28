import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { OrbitMark } from "@/components/orbit-logo"
import { cn } from "@/lib/utils"

const WHATSAPP = "+230 57833020"
const WHATSAPP_LINK = "https://wa.me/23057833020"
const EMAIL = "orbitsinnovations@gmail.com"

export function CtaContact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-background sm:px-12 lg:px-16 lg:py-20">
          {/* orbit accents */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-orbit-slow rounded-full border border-dashed border-background/15" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 animate-orbit-rev rounded-full border border-background/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <OrbitMark className="h-10 w-10 text-background" />
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Let&apos;s build the right digital solution for your business.
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-background/70">
                Innovate. Automate. Elevate. Tell us your goals and we&apos;ll
                map the systems to get you there.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "group w-full sm:w-auto")}
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  Chat on WhatsApp
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground sm:w-auto",
                  )}
                >
                  <Mail className="mr-1.5 h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-background/15 bg-background/5 p-5 transition-colors hover:bg-background/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-background/60">
                    WhatsApp / Phone
                  </span>
                  <span className="font-heading text-lg font-semibold">{WHATSAPP}</span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-background/15 bg-background/5 p-5 transition-colors hover:bg-background/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-background/60">
                    Email
                  </span>
                  <span className="font-heading text-lg font-semibold break-all">
                    {EMAIL}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
