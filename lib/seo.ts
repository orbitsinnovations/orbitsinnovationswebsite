import type { Metadata } from "next"
import { SOCIAL } from "@/lib/contact"
import { services } from "@/lib/data/services"

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbitsinnovations.com"
export const SITE_NAME = "Orbits Innovations"
export const SITE_TAGLINE = "Innovate. Automate. Elevate."

export const DEFAULT_KEYWORDS = [
  "Orbits Innovations",
  "digital transformation Mauritius",
  "ERP software Mauritius",
  "MoLedger ERP",
  "WhatsApp business automation",
  "POS system Mauritius",
  "e-commerce development Mauritius",
  "booking system software",
  "custom software development",
  "business automation",
  "IT company Mauritius",
]

export const HOME_SEO = {
  title: "ERP, POS & Business Automation Mauritius",
  description:
    "Orbits Innovations delivers ERP (MoLedger), WhatsApp automation, POS, e-commerce, booking systems & custom software in Mauritius. Book a consultation.",
  keywords: DEFAULT_KEYWORDS,
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${HOME_SEO.title} | ${SITE_NAME}`,
    template: "%s | Orbits Innovations",
  },
  description: HOME_SEO.description,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${HOME_SEO.title} | ${SITE_NAME}`,
    description: HOME_SEO.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Digital transformation & business automation in Mauritius`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOME_SEO.title} | ${SITE_NAME}`,
    description: HOME_SEO.description,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/orbitsinnovationslogolight.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/icon", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
}

export function pageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/opengraph-image",
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = `${title} | Orbits Innovations`
  const mergedKeywords = [...new Set([...keywords, ...DEFAULT_KEYWORDS.slice(0, 5)])]

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/orbitsinnovationslogolight.png`,
    slogan: SITE_TAGLINE,
    description: HOME_SEO.description,
    email: "orbitsinnovations@gmail.com",
    telephone: "+23057833020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MU",
      addressLocality: "Mauritius",
    },
    areaServed: [
      { "@type": "Country", name: "Mauritius" },
      { "@type": "Place", name: "Indian Ocean" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+230-57833020",
      contactType: "customer service",
      email: "orbitsinnovations@gmail.com",
      availableLanguage: ["English", "French"],
      areaServed: "MU",
    },
    knowsAbout: [
      "ERP software",
      "WhatsApp Business automation",
      "Point of sale systems",
      "E-commerce development",
      "Custom software development",
    ],
  }
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/orbitsinnovationslogolight.png`,
    url: SITE_URL,
    telephone: "+23057833020",
    email: "orbitsinnovations@gmail.com",
    description: HOME_SEO.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "MU",
      addressLocality: "Mauritius",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.3484,
      longitude: 57.5522,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.tiktok],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: HOME_SEO.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  }
}

export function serviceJsonLd(service: {
  title: string
  description: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: { "@type": "Country", name: "Mauritius" },
    serviceType: service.title,
  }
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
}

export function getAllPublicPaths(): string[] {
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/services",
  ]
  const servicePaths = services.map((s) => `/services/${s.slug}`)
  return [...staticPaths, ...servicePaths]
}
