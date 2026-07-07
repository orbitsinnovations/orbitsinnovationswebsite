import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CtaBannerProps = {
  id?: string
  title?: string
  description?: string
  compact?: boolean
}

export function CtaBanner({
  id,
  title = "Ready to transform your business?",
  description = "Get a consultation and discover the right digital solution.",
  compact = false,
}: CtaBannerProps) {
  return (
    <section id={id} className={cn("scroll-mt-20", compact ? "py-16 lg:py-20" : "py-24 lg:py-32")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-accent/60 to-accent px-6 py-10 text-center sm:px-12 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at center, oklch(0.65 0.16 134 / 0.08) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group")}>
                Get a Consultation
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
