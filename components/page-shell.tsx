import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCta } from "@/components/floating-cta"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background dot-pattern">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatingCta />
    </div>
  )
}
