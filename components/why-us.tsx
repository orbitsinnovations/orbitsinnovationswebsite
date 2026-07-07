import Image from "next/image"
import { Workflow, TrendingUp, ShieldCheck, Repeat } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const points = [
  { icon: Workflow, title: "Less manual work" },
  { icon: TrendingUp, title: "Real-time insights" },
  { icon: ShieldCheck, title: "Secure & reliable" },
  { icon: Repeat, title: "Built to scale" },
]

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-[#eef0f3] p-3 shadow-lg sm:p-4">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/dashboard-mockup.png"
                  alt="Business management dashboard — ERP and automation software by Orbits Innovations"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why businesses in Mauritius choose Orbits Innovations
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground lg:mx-0">
                Tailored ERP, automation, and software solutions that reduce manual work and connect
                every part of your operations.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{p.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
