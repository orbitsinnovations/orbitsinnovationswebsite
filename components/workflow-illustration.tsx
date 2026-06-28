import { MessageCircle, ArrowRight, User, Bot, Bell, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  { icon: User, label: "Customer sends message", color: "bg-blue-500" },
  { icon: Bot, label: "Chatbot responds instantly", color: "bg-primary" },
  { icon: Bell, label: "Automated notification sent", color: "bg-lime" },
  { icon: CheckCircle2, label: "Action completed in ERP/CRM", color: "bg-emerald-500" },
]

export function WorkflowIllustration() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Automated Customer Journey
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
              From message to action — fully automated
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-border lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ${step.color} text-white shadow-lg transition-transform hover:scale-105`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground">{step.label}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-5 hidden h-5 w-5 text-muted-foreground lg:block" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mock chat interface */}
        <ScrollReveal className="mt-12">
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">Business Automation</span>
            </div>
            <div className="space-y-3 p-4">
              <div className="max-w-[80%] rounded-xl rounded-tl-none bg-muted px-3 py-2 text-sm text-foreground">
                Hi, I&apos;d like to book an appointment for tomorrow.
              </div>
              <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-none bg-[#DCF8C6] px-3 py-2 text-sm text-foreground">
                Hello! I can help with that. We have slots at 10:00 AM, 2:00 PM, and 4:30 PM. Which works for you?
              </div>
              <div className="max-w-[80%] rounded-xl rounded-tl-none bg-muted px-3 py-2 text-sm text-foreground">
                2:00 PM please.
              </div>
              <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-none bg-[#DCF8C6] px-3 py-2 text-sm text-foreground">
                ✅ Confirmed! Appointment booked for tomorrow at 2:00 PM. You&apos;ll receive a reminder 1 hour before.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
