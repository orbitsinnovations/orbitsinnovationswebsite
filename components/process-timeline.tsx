"use client"

import { useState } from "react"
import { processSteps } from "@/lib/data/process"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export function ProcessTimeline({
  className,
  embedded = false,
}: {
  className?: string
  embedded?: boolean
}) {
  const [active, setActive] = useState(0)

  return (
    <section
      id={embedded ? undefined : "process"}
      className={cn("scroll-mt-24 bg-secondary py-20 lg:py-28", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                How We Work
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Our consultation & delivery process
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                From your first consultation to ongoing support — a clear, proven path to
                digital transformation.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className={cn(!embedded && "mt-14")}>
          {/* Horizontal step indicators — desktop */}
          <ScrollReveal>
            <div className="hidden lg:block">
              <div className="relative">
                <div
                  className="absolute left-0 right-0 top-5 h-px bg-border"
                  aria-hidden="true"
                />
                <div className="relative flex justify-between gap-2">
                  {processSteps.map((step, i) => (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "group flex min-w-0 flex-1 flex-col items-center gap-2 transition-all",
                        active === i ? "opacity-100" : "opacity-50 hover:opacity-80",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 font-heading text-sm font-bold transition-colors",
                          active === i
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-muted-foreground group-hover:border-primary/50",
                        )}
                      >
                        {step.step}
                      </span>
                      <span className="max-w-[88px] text-center text-[11px] font-medium leading-tight text-foreground">
                        {step.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Active step detail */}
          <ScrollReveal className="mt-10">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary font-heading text-lg font-bold text-primary-foreground">
                  {processSteps[active].step}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {processSteps[active].title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {processSteps[active].description}
                  </p>
                </div>
              </div>

              {/* Horizontal scroll on tablet / mobile */}
              <div className="mt-8 lg:hidden">
                <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {processSteps.map((step, i) => (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-left transition-colors",
                        active === i
                          ? "border-primary/40 bg-accent"
                          : "border-border bg-background hover:bg-muted",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                          active === i
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {step.step}
                      </span>
                      <span className="whitespace-nowrap text-xs font-medium text-foreground">
                        {step.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 hidden h-1 overflow-hidden rounded-full bg-muted lg:block">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
