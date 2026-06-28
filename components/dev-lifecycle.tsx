import { Search, ClipboardList, Paintbrush, Code2, TestTube, Rocket, Headset } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const lifecycle = [
  { icon: Search, title: "Discovery", description: "Understand requirements and goals" },
  { icon: ClipboardList, title: "Planning", description: "Architecture and roadmap" },
  { icon: Paintbrush, title: "Design", description: "UI/UX and prototypes" },
  { icon: Code2, title: "Development", description: "Agile build with demos" },
  { icon: TestTube, title: "Testing", description: "QA and security audits" },
  { icon: Rocket, title: "Deployment", description: "Production launch" },
  { icon: Headset, title: "Support", description: "Ongoing maintenance" },
]

export function DevLifecycle() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Development Lifecycle
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
              From idea to production — and beyond
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-px" />
          <div className="space-y-8">
            {lifecycle.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 80}>
                <div
                  className={`relative flex items-center gap-6 lg:gap-0 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                    <h4 className="font-heading text-base font-semibold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="hidden flex-1 lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
