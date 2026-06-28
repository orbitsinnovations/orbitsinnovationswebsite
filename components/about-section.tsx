import { ShieldCheck, Zap, Headset, Layers, Globe, Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const points = [
  {
    icon: ShieldCheck,
    title: "100% Tailored Solutions",
    text: "Every system is built around your workflow, goals, and future expansion.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    text: "Proven implementation processes get you up and running quickly.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    text: "Ongoing training, maintenance, and support as your business grows.",
  },
  {
    icon: Layers,
    title: "Integrated Ecosystem",
    text: "ERP, POS, WhatsApp, booking, and e-commerce — all connected.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    text: "End-to-end solutions from branding to custom software development.",
  },
  {
    icon: Award,
    title: "Proven Results",
    text: "Track record of successful implementations across diverse industries.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Orbits Innovations
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Your partner in digital transformation
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Orbits Innovations is a professional digital transformation company that helps
              businesses automate operations, improve efficiency, and accelerate growth. We deliver
              ERP systems, WhatsApp automation, POS solutions, e-commerce platforms, booking
              systems, branding, and custom software — all tailored to your unique needs.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From consultation to deployment and ongoing support, we guide you through every step
              of your digital journey. Our mission is simple: Innovate. Automate. Elevate.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
