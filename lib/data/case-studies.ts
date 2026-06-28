export type CaseStudy = {
  id: string
  title: string
  industry: string
  serviceSlug: string
  challenge: string
  solution: string
  results: string[]
  benefits: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "erp-retail",
    title: "ERP Implementation for Island Retail Group",
    industry: "Retail",
    serviceSlug: "erp-solutions",
    challenge:
      "Three retail branches managed inventory, sales, and accounting in separate spreadsheets, causing stock discrepancies and delayed financial reporting.",
    solution:
      "Deployed MoLedger ERP with centralized inventory, integrated POS, automated accounting, and real-time dashboards across all branches.",
    results: [
      "70% reduction in manual reporting time",
      "Real-time stock visibility across 3 branches",
      "Unified financial reporting within 30 days",
    ],
    benefits: [
      "Eliminated stock-outs and over-ordering",
      "Faster month-end closing",
      "Data-driven purchasing decisions",
    ],
  },
  {
    id: "whatsapp-clinic",
    title: "WhatsApp Automation for Wellness Medical Clinic",
    industry: "Healthcare",
    serviceSlug: "whatsapp-automation",
    challenge:
      "Front desk staff spent hours on phone calls for appointment confirmations, reminders, and patient inquiries.",
    solution:
      "Built WhatsApp chatbot with automated replies, appointment confirmations, reminder sequences, and CRM integration.",
    results: [
      "60% fewer manual phone calls",
      "Automated 500+ monthly appointment reminders",
      "Patient satisfaction scores improved",
    ],
    benefits: [
      "Staff focus on in-person patient care",
      "Reduced no-show rate",
      "24/7 automated patient communication",
    ],
  },
  {
    id: "pos-restaurant",
    title: "POS Deployment for La Mer Restaurant",
    industry: "Hospitality",
    serviceSlug: "pos-retail",
    challenge:
      "Manual order tracking and cash register reconciliation caused errors during peak dining hours.",
    solution:
      "Implemented multi-terminal POS with kitchen display, inventory tracking, employee access control, and daily sales analytics.",
    results: [
      "Order processing 40% faster",
      "Zero cash reconciliation discrepancies",
      "Real-time menu and inventory updates",
    ],
    benefits: [
      "Smoother peak-hour operations",
      "Accurate daily revenue reporting",
      "Better food cost management",
    ],
  },
  {
    id: "booking-hotel",
    title: "Booking Platform for Coastal Guest House",
    industry: "Hospitality",
    serviceSlug: "booking-reservation",
    challenge:
      "Over-reliance on third-party booking platforms with high commission fees and limited guest data ownership.",
    solution:
      "Custom booking system with online reservations, calendar management, automated reminders, and payment integration.",
    results: [
      "Direct bookings doubled in 6 months",
      "Commission costs reduced by 35%",
      "Complete guest database ownership",
    ],
    benefits: [
      "Higher profit margins per booking",
      "Personalized guest communication",
      "Streamlined check-in process",
    ],
  },
  {
    id: "branding-business",
    title: "Corporate Website for NovaTech Solutions",
    industry: "Technology",
    serviceSlug: "branding-digital",
    challenge:
      "Outdated brand identity and no professional web presence limited credibility with enterprise clients.",
    solution:
      "Complete brand refresh with logo design, corporate website, landing pages, and social media setup.",
    results: [
      "300% increase in website traffic",
      "Professional brand across all channels",
      "Higher lead conversion from web",
    ],
    benefits: [
      "Stronger market credibility",
      "Consistent brand messaging",
      "Improved client trust",
    ],
  },
  {
    id: "custom-software",
    title: "Internal Platform for LogiTrack Ltd",
    industry: "Logistics",
    serviceSlug: "custom-software",
    challenge:
      "Operations team used five disconnected spreadsheets for fleet tracking, deliveries, and client billing.",
    solution:
      "Built custom internal management platform with fleet tracking, delivery scheduling, client portal, and API integrations.",
    results: [
      "Single platform replaced 5 tools",
      "Delivery tracking in real time",
      "Billing cycle reduced by 50%",
    ],
    benefits: [
      "Unified operational visibility",
      "Reduced human error",
      "Scalable for business growth",
    ],
  },
  {
    id: "ecommerce-retailer",
    title: "E-Commerce Platform for StyleHub Boutique",
    industry: "E-Commerce",
    serviceSlug: "e-commerce",
    challenge:
      "No online sales channel and manual inventory management limited growth beyond the physical store.",
    solution:
      "Full e-commerce store with product management, payment gateway, delivery integration, and mobile commerce.",
    results: [
      "45% sales growth in first quarter",
      "500+ products listed online",
      "Mobile orders account for 60% of sales",
    ],
    benefits: [
      "Expanded market reach",
      "Automated order processing",
      "Integrated online and offline inventory",
    ],
  },
]
