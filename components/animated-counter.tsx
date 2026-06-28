"use client"

import { useEffect, useRef, useState } from "react"

function parseStatValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/)
  if (!match) return { num: 0, prefix: "", suffix: value }
  return { num: parseInt(match[2], 10), prefix: match[1], suffix: match[3] }
}

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(value)
  const [started, setStarted] = useState(false)
  const { num, prefix, suffix } = parseStatValue(value)

  useEffect(() => {
    const el = ref.current
    if (!el || num === 0) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [num, started])

  useEffect(() => {
    if (!started || num === 0) return

    const duration = 1500
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${prefix}${Math.round(num * eased)}${suffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [started, num, prefix, suffix])

  return (
    <div ref={ref} className="bg-card px-6 py-10 text-center">
      <div className="font-heading text-4xl font-bold text-primary lg:text-5xl">{display}</div>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  )
}
