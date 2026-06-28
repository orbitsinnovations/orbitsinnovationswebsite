"use client"

import { useEffect, useState } from "react"
import { MessageCircle, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col gap-2 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <a
        href="https://wa.me/23057833020"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-transform hover:scale-105"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}
