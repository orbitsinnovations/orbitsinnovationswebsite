"use client"

import { useState } from "react"
import { processSteps } from "@/lib/data/process"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0)

  return (
    <section className={cn("py-20 lg:py-28", compact ? "" : "bg-secondary")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How We Work
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              A proven process from consultation to ongoing support
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14">
          {/* Step indicators */}
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            {processSteps.map((step, i) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "group flex flex-col items-center gap-2 transition-all",
                  active === i ? "scale-105" : "opacity-60 hover:opacity-100",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 font-heading text-sm font-bold transition-colors",
                    active === i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground group-hover:border-primary/50",
                  )}
                >
                  {step.step}
                </span>
                <span className="max-w-[90px] text-center text-xs font-medium text-foreground">
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <ScrollReveal className="mt-10">
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary font-heading text-lg font-bold text-primary-foreground">
                  {processSteps[active].step}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {processSteps[active].title}
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                    {processSteps[active].description}
                  </p>
                </div>
              </div>

              {/* Mobile step list */}
              <div className="mt-8 grid gap-2 lg:hidden">
                {processSteps.map((step, i) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors",
                      active === i ? "bg-accent" : "hover:bg-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                        active === i
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {step.step}
                    </span>
                    <span className="text-sm font-medium text-foreground">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-8 hidden h-1 overflow-hidden rounded-full bg-muted lg:block">
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
