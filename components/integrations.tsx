import {
  MessageCircle,
  CreditCard,
  Truck,
  Calculator,
  ScanLine,
  Globe,
  Users,
  Smartphone,
} from "lucide-react"

const integrations = [
  { icon: MessageCircle, label: "WhatsApp Business" },
  { icon: CreditCard, label: "Payment Gateways" },
  { icon: Truck, label: "Delivery & Logistics" },
  { icon: Calculator, label: "Accounting" },
  { icon: ScanLine, label: "POS Hardware" },
  { icon: Globe, label: "E-Commerce" },
  { icon: Users, label: "CRM & Leads" },
  { icon: Smartphone, label: "Mobile Apps" },
]

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Connected Ecosystem
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Everything talks to everything
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We integrate the tools and channels your business already runs on.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {integrations.map((it) => (
            <div
              key={it.label}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
