import Image from "next/image"
import { Workflow, TrendingUp, ShieldCheck, Repeat } from "lucide-react"

const points = [
  {
    icon: Workflow,
    title: "Less manual work",
    text: "Automate repetitive tasks across teams and tools.",
  },
  {
    icon: TrendingUp,
    title: "Better operations",
    text: "Real-time data and reporting in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Built to trust",
    text: "Secure, reliable systems your team can rely on.",
  },
  {
    icon: Repeat,
    title: "Ready to scale",
    text: "Solutions that grow with your business.",
  },
]

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 h-24 w-24 animate-orbit-slow rounded-full border border-dashed border-primary/30" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/whatsapp-automation.png"
              alt="WhatsApp business automation chat interface with automated replies"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Orbits Innovations
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Practical digital solutions that help businesses grow with confidence
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We create systems that reduce manual work and improve operations —
            each one tailored to your workflow, goals, and future expansion.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
