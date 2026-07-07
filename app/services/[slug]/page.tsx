import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { services, getServiceBySlug } from "@/lib/data/services"
import { PageShell } from "@/components/page-shell"
import { ServicePageLayout } from "@/components/service-page-layout"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/seo"

const serviceSeo: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "erp-solutions": {
    title: "ERP Solutions & MoLedger Mauritius",
    description:
      "MoLedger ERP implementation in Mauritius — accounting, inventory, HR, payroll, CRM, and business automation for growing companies.",
    keywords: ["ERP Mauritius", "MoLedger ERP", "business automation", "accounting software"],
  },
  "whatsapp-automation": {
    title: "WhatsApp Business Automation Mauritius",
    description:
      "WhatsApp chatbots, automated replies, appointment confirmations, and ERP integration for businesses in Mauritius.",
    keywords: ["WhatsApp automation Mauritius", "WhatsApp Business API", "chatbot development"],
  },
  "pos-retail": {
    title: "POS & Retail Management Systems",
    description:
      "Point of sale and retail management software in Mauritius — sales, inventory, multi-branch, and real-time reporting.",
    keywords: ["POS system Mauritius", "retail software", "supermarket POS", "restaurant POS"],
  },
  "branding-digital": {
    title: "Branding & Digital Presence",
    description:
      "Logo design, corporate websites, landing pages, and digital marketing assets for businesses in Mauritius.",
    keywords: ["web design Mauritius", "logo design", "corporate website development"],
  },
  "booking-reservation": {
    title: "Booking & Reservation Systems",
    description:
      "Online booking software for hotels, clinics, salons, and service businesses in Mauritius with reminders and payments.",
    keywords: ["booking system Mauritius", "appointment software", "reservation platform"],
  },
  "custom-software": {
    title: "Custom Software & Mobile App Development",
    description:
      "Custom web apps, Android & iOS development, and API integrations for businesses in Mauritius and the region.",
    keywords: ["custom software Mauritius", "mobile app development", "web application development"],
  },
  "e-commerce": {
    title: "E-Commerce Development Mauritius",
    description:
      "Online store development with payment gateways, delivery integration, inventory sync, and mobile commerce in Mauritius.",
    keywords: ["e-commerce Mauritius", "online store development", "Shopify alternative Mauritius"],
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }

  const seo = serviceSeo[slug]
  return pageMetadata({
    title: seo?.title ?? service.title,
    description: seo?.description ?? service.shortDescription,
    path: `/services/${slug}`,
    keywords: seo?.keywords ?? [],
  })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const seo = serviceSeo[slug]
  const title = seo?.title ?? service.title

  return (
    <PageShell>
      <JsonLd
        data={[
          serviceJsonLd({
            title,
            description: seo?.description ?? service.shortDescription,
            slug,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: title, url: `${SITE_URL}/services/${slug}` },
          ]),
        ]}
      />
      <ServicePageLayout service={service} />
    </PageShell>
  )
}
