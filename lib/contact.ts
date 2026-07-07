export const CONTACT = {
  email: "orbitsinnovations@gmail.com",
  phone: "+230 58355940",
  phoneRaw: "23058355940",
  whatsAppNumber: "23058355940",
} as const

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61591298948228",
  instagram: "https://www.instagram.com/orbitsinnovations/",
  tiktok: "https://www.tiktok.com/@orbitsinnovations",
} as const

export const SOCIAL_PROFILES = [
  { label: "Facebook", href: SOCIAL.facebook },
  { label: "Instagram", href: SOCIAL.instagram },
  { label: "TikTok", href: SOCIAL.tiktok },
] as const

export const EMAIL_SUBJECT = "Consultation Request — Orbits Innovations"

export const EMAIL_BODY = `Hello Orbits Innovations Team,

I would like to request a consultation regarding your digital transformation services.

Full Name:
Business Name:
Phone / WhatsApp:
Service Required: (ERP / WhatsApp Automation / POS / E-Commerce / Booking / Custom Software / Other)

Project Details:
(Please describe your current setup and what you would like to achieve)


Preferred contact method: (WhatsApp / Email / Phone)

Thank you,
[Your Name]`

export const WHATSAPP_MESSAGE = `Hello Orbits Innovations,

I would like to request a consultation.

Thank you!`

/** Build a mailto: link with pre-filled subject and body */
export function getEmailLink(options?: {
  subject?: string
  body?: string
}): string {
  const subject = encodeURIComponent(options?.subject ?? EMAIL_SUBJECT)
  const body = encodeURIComponent(options?.body ?? EMAIL_BODY)
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
}

/** Build a WhatsApp wa.me link with pre-filled message */
export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? WHATSAPP_MESSAGE)
  return `https://wa.me/${CONTACT.whatsAppNumber}?text=${text}`
}

/** Plain mailto without template (for footer text links) */
export function getEmailLinkPlain(): string {
  return `mailto:${CONTACT.email}`
}

/** Plain WhatsApp without template */
export function getWhatsAppLinkPlain(): string {
  return `https://wa.me/${CONTACT.whatsAppNumber}`
}
