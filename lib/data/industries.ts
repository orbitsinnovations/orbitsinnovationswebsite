import {
  Store,
  UtensilsCrossed,
  Building2,
  Stethoscope,
  Scissors,
  GraduationCap,
  Hotel,
  Factory,
  Briefcase,
  ShoppingBag,
  Pill,
  Coffee,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type Industry = {
  icon: LucideIcon
  name: string
  description: string
}

export const industries: Industry[] = [
  {
    icon: Store,
    name: "Retail & Supermarkets",
    description: "POS, inventory, and multi-branch management for modern retail operations.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Cafés",
    description: "Order management, kitchen workflows, and customer engagement solutions.",
  },
  {
    icon: Building2,
    name: "Growing Businesses",
    description: "ERP and automation to streamline operations as you scale.",
  },
  {
    icon: Stethoscope,
    name: "Medical Clinics",
    description: "Appointment booking, patient records, and automated reminders.",
  },
  {
    icon: Scissors,
    name: "Salons & Beauty",
    description: "Online booking, staff scheduling, and customer loyalty tools.",
  },
  {
    icon: Hotel,
    name: "Hotels & Guest Houses",
    description: "Reservation systems, guest management, and payment integration.",
  },
  {
    icon: GraduationCap,
    name: "Educational Institutions",
    description: "Enrollment, scheduling, and communication platforms.",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce Retailers",
    description: "Online stores with inventory sync, payments, and delivery.",
  },
  {
    icon: Pill,
    name: "Pharmacies",
    description: "Stock control, prescription tracking, and POS for healthcare retail.",
  },
  {
    icon: Coffee,
    name: "Service Businesses",
    description: "Booking, CRM, and automation for service-based companies.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Distribution",
    description: "Inventory, purchasing, and supply chain management.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Client portals, project management, and billing automation.",
  },
]
