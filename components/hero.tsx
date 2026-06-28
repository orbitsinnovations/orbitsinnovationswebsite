import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Zap, Headset, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { OrbitMark } from "@/components/orbit-logo"
import { OrbitalBackground } from "@/components/orbital-background"
import { cn } from "@/lib/utils"

const badges = [
  { icon: ShieldCheck, label: "100% Tailored Solutions" },
  { icon: Zap, label: "Fast Deployment" },
  { icon: Headset, label: "Dedicated Support" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <OrbitalBackground />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Copy */}
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Innovate. Automate. Elevate.
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            All Your Business Solutions in One Place
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            We help businesses innovate, automate, and elevate through ERP
            systems, WhatsApp automation, POS solutions, e-commerce platforms,
            booking systems, and custom software.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group w-full sm:w-auto")}>
              Get a Free Consultation
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
            >
              Explore Services
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <b.icon className="h-4 w-4 text-primary" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual with animated orbits */}
        <div className="reveal relative mx-auto w-full max-w-xl" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-square">
            {/* Orbit rings */}
            <div className="absolute inset-0 animate-orbit-slow rounded-full border border-dashed border-primary/25">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_var(--accent)]" />
            </div>
            <div className="absolute inset-[12%] animate-orbit-rev rounded-full border border-border">
              <span className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--lime)]" />
            </div>

            {/* Dashboard image */}
            <div className="absolute inset-[16%] flex items-center justify-center">
              <div className="animate-float img-zoom overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/10">
                <Image
                  src="/dashboard-mockup.png"
                  alt="Orbits Innovations business management dashboard showing analytics and KPIs"
                  width={720}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -left-2 top-10 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:-left-4">
              <OrbitMark className="h-6 w-6 text-foreground" />
              <span className="text-xs font-semibold text-foreground">ERP Synced</span>
            </div>
            <div className="absolute -right-1 bottom-12 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:-right-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold text-foreground">Automated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
