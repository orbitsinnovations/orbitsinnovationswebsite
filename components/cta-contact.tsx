import { MessageCircle, Mail } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { CONTACT, getEmailLink, getWhatsAppLink } from "@/lib/contact"
import { cn } from "@/lib/utils"

export function CtaContact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Book your business consultation
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground sm:text-base">
            Talk to our team about ERP, WhatsApp automation, POS, or custom software for your
            business in Mauritius.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={getEmailLink()}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              {CONTACT.phone}
            </a>
            {" · "}
            <a href={getEmailLink()} className="hover:text-foreground">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
