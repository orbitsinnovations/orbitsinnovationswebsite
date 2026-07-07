"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { OrbitLogo } from "@/components/orbit-logo"
import { mainNavLinks } from "@/lib/navigation"
import { getWhatsAppLink } from "@/lib/contact"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/20 bg-background/80 shadow-sm shadow-black/[0.04] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-background/50 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
            scrolled ? "h-14" : "h-16",
          )}
        >
          <Link href="/" className="shrink-0" aria-label="Orbits Innovations home">
            <OrbitLogo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "nav-link px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "group")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-foreground backdrop-blur-sm lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[min(300px,88vw)] flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <OrbitLogo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-2">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between border-b border-border/70 py-4 text-base font-medium text-foreground"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-5">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "w-full")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </aside>
    </>
  )
}
