"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { OrbitLogo } from "@/components/orbit-logo"
import { mainNavLinks, serviceLinks } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
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
    setServicesOpen(false)
  }, [pathname])

  const contactHref = isHome ? "#contact" : "/contact"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Orbits Innovations home">
          <OrbitLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="nav-link inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </Link>

            <div
              className={cn(
                "absolute left-0 top-full pt-2 transition-all duration-200",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0",
              )}
            >
              <div className="w-72 rounded-2xl border border-border bg-background p-2 shadow-xl">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="mt-1 block rounded-xl border-t border-border px-3 py-2.5 text-sm font-semibold text-primary hover:bg-accent"
                >
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          {mainNavLinks.slice(1).map((link) => (
            <Link
              key={link.href}
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={contactHref}
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-foreground")}
          >
            Talk to us
          </Link>
          <Link href={contactHref} className={cn(buttonVariants({ size: "lg" }), "group")}>
            Get a Free Consultation
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn(
            "fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] origin-top overflow-y-auto border-b border-border bg-background px-4 pb-8 pt-2 shadow-xl transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <nav className="flex flex-col">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between border-b border-border/70 py-4 text-base font-medium text-foreground"
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-primary transition-transform",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>
            {servicesOpen && (
              <div className="border-b border-border/70 py-2 pl-4">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            {mainNavLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border-b border-border/70 py-4 text-base font-medium text-foreground"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            ))}
          </nav>
          <Link href={contactHref} className={cn(buttonVariants({ size: "lg" }), "mt-6 w-full")}>
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </header>
  )
}
