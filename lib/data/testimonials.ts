export type Testimonial = {
  id: string
  name: string
  business: string
  industry: string
  rating: number
  review: string
  serviceSlug: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    business: "Island Retail Group",
    industry: "Retail",
    rating: 5,
    review:
      "Orbits implemented MoLedger ERP across our three branches. Inventory, accounting, and sales are now fully connected. We cut manual reporting time by 70%.",
    serviceSlug: "erp-solutions",
  },
  {
    id: "2",
    name: "Dr. Anya Patel",
    business: "Wellness Medical Clinic",
    industry: "Healthcare",
    rating: 5,
    review:
      "WhatsApp automation handles appointment confirmations and follow-ups automatically. Our front desk team can focus on patients instead of phone calls.",
    serviceSlug: "whatsapp-automation",
  },
  {
    id: "3",
    name: "Marc Laurent",
    business: "La Mer Restaurant",
    industry: "Hospitality",
    rating: 5,
    review:
      "The POS system is fast, reliable, and gives us real-time sales data across our dining and takeaway operations. Staff training was smooth and quick.",
    serviceSlug: "pos-retail",
  },
  {
    id: "4",
    name: "Sophie Williams",
    business: "Coastal Guest House",
    industry: "Hospitality",
    rating: 5,
    review:
      "Our online booking platform reduced no-shows and doubled direct reservations. Guests love the seamless booking experience.",
    serviceSlug: "booking-reservation",
  },
  {
    id: "5",
    name: "David Chen",
    business: "NovaTech Solutions",
    industry: "Technology",
    rating: 5,
    review:
      "Orbits redesigned our brand identity and built a professional corporate website. Our online presence now matches the quality of our services.",
    serviceSlug: "branding-digital",
  },
  {
    id: "6",
    name: "Fatima Hassan",
    business: "StyleHub Boutique",
    industry: "E-Commerce",
    rating: 5,
    review:
      "Our e-commerce store launched in weeks with payment gateway, delivery integration, and mobile shopping. Sales grew 45% in the first quarter.",
    serviceSlug: "e-commerce",
  },
  {
    id: "7",
    name: "James Morrison",
    business: "LogiTrack Ltd",
    industry: "Logistics",
    rating: 5,
    review:
      "The custom internal management platform replaced five disconnected spreadsheets. Our operations team finally has one source of truth.",
    serviceSlug: "custom-software",
  },
  {
    id: "8",
    name: "Priya Singh",
    business: "Glow Salon & Spa",
    industry: "Beauty",
    rating: 5,
    review:
      "Automated booking reminders and WhatsApp confirmations reduced missed appointments significantly. Our clients appreciate the convenience.",
    serviceSlug: "booking-reservation",
  },
]
