export type Project = {
  id: string
  name: string
  industry: string
  description: string
  technologies: string[]
  image: string
  imageAlt: string
  href: string
}

export const featuredProjects: Project[] = [
  {
    id: "erp-dashboard",
    name: "MoLedger ERP Dashboard",
    industry: "Retail",
    description: "Unified accounting, inventory, and sales across multiple branches.",
    technologies: ["MoLedger ERP", "PostgreSQL", "Cloud"],
    image: "/dashboard-mockup.png",
    imageAlt: "ERP dashboard with analytics and KPIs",
    href: "/portfolio#erp-retail",
  },
  {
    id: "whatsapp-automation",
    name: "WhatsApp Business Automation",
    industry: "Healthcare",
    description: "Automated appointment confirmations and patient support.",
    technologies: ["WhatsApp API", "CRM", "Node.js"],
    image: "/whatsapp-automation.png",
    imageAlt: "WhatsApp automation chat interface",
    href: "/portfolio#whatsapp-clinic",
  },
  {
    id: "pos-system",
    name: "Restaurant POS System",
    industry: "Hospitality",
    description: "Multi-terminal POS with real-time inventory and reporting.",
    technologies: ["Cloud POS", "Payment Gateway", "ERP Sync"],
    image: "/dashboard-mockup.png",
    imageAlt: "POS system sales dashboard",
    href: "/portfolio#pos-restaurant",
  },
  {
    id: "booking-system",
    name: "Hotel Booking Platform",
    industry: "Hospitality",
    description: "Online reservations with automated reminders and payments.",
    technologies: ["React", "Payment API", "WhatsApp"],
    image: "/dashboard-mockup.png",
    imageAlt: "Booking system calendar interface",
    href: "/portfolio#booking-hotel",
  },
  {
    id: "mobile-app",
    name: "Business Management App",
    industry: "Logistics",
    description: "Custom mobile app for fleet tracking and delivery management.",
    technologies: ["React Native", "REST API", "Cloud"],
    image: "/dashboard-mockup.png",
    imageAlt: "Mobile application interface",
    href: "/portfolio#custom-software",
  },
  {
    id: "ecommerce-store",
    name: "E-Commerce Store",
    industry: "Fashion Retail",
    description: "Online store with inventory sync and mobile commerce.",
    technologies: ["Next.js", "Stripe", "ERP Sync"],
    image: "/dashboard-mockup.png",
    imageAlt: "E-commerce online store interface",
    href: "/portfolio#ecommerce-retailer",
  },
]
