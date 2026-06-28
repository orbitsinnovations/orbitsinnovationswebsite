import {
  Boxes,
  MessageCircle,
  Store,
  Palette,
  CalendarCheck,
  Code2,
  ShoppingCart,
  Calculator,
  Package,
  Users,
  UserCheck,
  Wallet,
  FolderKanban,
  Contact,
  Puzzle,
  Workflow,
  BarChart3,
  Bot,
  Bell,
  Target,
  Link2,
  CreditCard,
  ScanLine,
  Building2,
  Paintbrush,
  Globe,
  Share2,
  PenTool,
  Calendar,
  Clock,
  Smartphone,
  Monitor,
  Layers,
  Truck,
  ShoppingBag,
  Cloud,
  Shield,
  Database,
  type LucideIcon,
} from "lucide-react"

export type ServiceFeature = {
  icon: LucideIcon
  title: string
  description: string
}

export type ServiceDetail = {
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  heroDescription: string
  heroImage?: string
  heroImageAlt?: string
  overview: string
  challenges: string[]
  solution: string
  features: ServiceFeature[]
  benefits: { title: string; description: string }[]
  industries: string[]
  process: { step: string; description: string }[]
  technologies: string[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
  showWorkflow?: boolean
  showDevLifecycle?: boolean
  showBeforeAfter?: boolean
}

export const services: ServiceDetail[] = [
  {
    slug: "erp-solutions",
    icon: Boxes,
    title: "ERP Solutions & Business Automation",
    shortDescription:
      "Manage accounting, inventory, HR, payroll, CRM, projects, and custom modules from one connected system.",
    heroDescription:
      "Streamline your entire business with MoLedger ERP — from finance and inventory to HR, CRM, and custom workflow automation.",
    heroImage: "/dashboard-mockup.png",
    heroImageAlt: "MoLedger ERP dashboard with business analytics and KPIs",
    overview:
      "Orbits Innovations delivers comprehensive ERP implementation and business automation powered by MoLedger. We connect every department — accounting, inventory, sales, HR, and more — into one unified platform that eliminates silos and drives efficiency.",
    challenges: [
      "Disconnected systems causing data duplication and errors",
      "Manual processes slowing down operations and reporting",
      "No real-time visibility into inventory, finances, or performance",
      "Difficulty scaling operations across multiple branches",
      "Time-consuming payroll, HR, and compliance tasks",
    ],
    solution:
      "We implement and customize MoLedger ERP to match your exact workflows — integrating accounting, inventory, sales, purchasing, HR, payroll, CRM, and project management with automated workflows and real-time analytics.",
    features: [
      { icon: Boxes, title: "MoLedger ERP Implementation", description: "Full deployment of MoLedger ERP tailored to your business structure and processes." },
      { icon: Puzzle, title: "ERP Customization", description: "Custom modules, fields, and workflows built around your unique requirements." },
      { icon: Calculator, title: "Accounting & Finance", description: "General ledger, invoicing, expenses, tax reporting, and financial dashboards." },
      { icon: Package, title: "Inventory & Stock Control", description: "Real-time stock tracking, reorder alerts, and multi-location inventory management." },
      { icon: ShoppingCart, title: "Sales & Purchasing", description: "Quotes, orders, purchase management, and supplier tracking in one system." },
      { icon: Users, title: "Human Resource Management", description: "Employee records, leave management, attendance, and organizational structure." },
      { icon: Wallet, title: "Payroll Processing", description: "Automated salary calculations, deductions, payslips, and compliance reporting." },
      { icon: FolderKanban, title: "Project Management", description: "Task tracking, timelines, resource allocation, and project profitability." },
      { icon: Contact, title: "Customer Relationship Management", description: "Lead tracking, customer history, follow-ups, and sales pipeline management." },
      { icon: Layers, title: "Custom ERP Modules", description: "Purpose-built modules for industry-specific workflows and requirements." },
      { icon: Workflow, title: "Workflow Automation", description: "Automated approvals, notifications, and business process triggers." },
      { icon: Globe, title: "Business Process Digitalization", description: "Transform paper-based and manual processes into digital workflows." },
      { icon: BarChart3, title: "Reporting & Analytics", description: "Custom dashboards, KPI tracking, and exportable business intelligence reports." },
    ],
    benefits: [
      { title: "Unified Operations", description: "One platform for every department — no more switching between disconnected tools." },
      { title: "Real-Time Insights", description: "Live dashboards and reports for faster, data-driven decision making." },
      { title: "Reduced Manual Work", description: "Automate repetitive tasks across finance, HR, inventory, and sales." },
      { title: "Scalable Growth", description: "Add branches, users, and modules as your business expands." },
      { title: "Cost Efficiency", description: "Lower operational costs through automation and process optimization." },
      { title: "Compliance Ready", description: "Built-in controls for financial reporting, payroll, and audit trails." },
    ],
    industries: ["Retail", "Manufacturing", "Distribution", "Services", "Hospitality", "Healthcare", "Construction", "Professional Services"],
    process: [
      { step: "Discovery", description: "Map current processes, pain points, and business goals." },
      { step: "System Design", description: "Configure MoLedger modules and workflows for your operations." },
      { step: "Data Migration", description: "Securely transfer existing data into the new ERP system." },
      { step: "Customization", description: "Build custom modules, reports, and automation rules." },
      { step: "Testing & Training", description: "Validate every workflow and train your team hands-on." },
      { step: "Go-Live & Support", description: "Launch with dedicated support and ongoing optimization." },
    ],
    technologies: ["MoLedger ERP", "Cloud Hosting", "API Integrations", "PostgreSQL", "REST APIs", "Role-Based Access Control"],
    faqs: [
      { q: "What is MoLedger ERP?", a: "MoLedger is our flagship ERP platform designed for small to medium businesses. It covers accounting, inventory, HR, CRM, and more in one connected system." },
      { q: "Can MoLedger be customized for our industry?", a: "Yes. We build custom modules, workflows, and reports tailored to your specific industry and operational requirements." },
      { q: "How long does ERP implementation take?", a: "Typical implementations range from 4–12 weeks depending on scope, customization, and data migration needs." },
      { q: "Can ERP integrate with our existing POS or e-commerce?", a: "Absolutely. MoLedger connects with POS systems, e-commerce platforms, WhatsApp automation, and third-party APIs." },
      { q: "Do you provide training and ongoing support?", a: "Yes. We include hands-on training during deployment and offer ongoing support, updates, and system optimization." },
    ],
    relatedSlugs: ["pos-retail", "whatsapp-automation", "custom-software"],
  },
  {
    slug: "whatsapp-automation",
    icon: MessageCircle,
    title: "WhatsApp Business Automation & Integrations",
    shortDescription:
      "Automate replies, notifications, customer support, lead generation, and system integrations through WhatsApp.",
    heroDescription:
      "Turn WhatsApp into your most powerful business channel with intelligent chatbots, automated workflows, and seamless system integrations.",
    heroImage: "/whatsapp-automation.png",
    heroImageAlt: "WhatsApp business automation with automated customer replies",
    overview:
      "Reach customers where they already are. Our WhatsApp Business automation solutions handle customer support, appointment confirmations, order notifications, and lead generation — all integrated with your ERP, CRM, and booking systems.",
    challenges: [
      "Slow response times leading to lost customers and leads",
      "Staff overwhelmed with repetitive WhatsApp inquiries",
      "No integration between WhatsApp and business systems",
      "Missed appointments and order updates due to manual communication",
      "Inability to scale customer communication as business grows",
    ],
    solution:
      "We build intelligent WhatsApp automation with chatbots, automated reply flows, CRM and ERP integration, and API connections — creating seamless customer journeys from first contact to post-purchase follow-up.",
    features: [
      { icon: Bot, title: "WhatsApp Chatbots", description: "AI-powered chatbots that handle inquiries, FAQs, and customer routing 24/7." },
      { icon: MessageCircle, title: "Automated Replies", description: "Instant responses to common questions, business hours, and service information." },
      { icon: Users, title: "Customer Support Automation", description: "Ticket creation, escalation rules, and support team handoff workflows." },
      { icon: CalendarCheck, title: "Appointment Confirmations", description: "Automated booking confirmations, reminders, and rescheduling via WhatsApp." },
      { icon: Bell, title: "Order Notifications", description: "Real-time order status, shipping updates, and delivery confirmations." },
      { icon: Target, title: "Lead Generation", description: "Capture and qualify leads through interactive WhatsApp conversations." },
      { icon: Contact, title: "CRM Integration", description: "Sync conversations, contacts, and lead data with your CRM system." },
      { icon: Boxes, title: "ERP Integration", description: "Connect order data, inventory, and customer records with your ERP." },
      { icon: Link2, title: "API Integrations", description: "Custom API connections to booking systems, payment gateways, and more." },
    ],
    benefits: [
      { title: "24/7 Availability", description: "Automated responses and chatbots serve customers around the clock." },
      { title: "Faster Response Times", description: "Instant replies improve customer satisfaction and conversion rates." },
      { title: "Reduced Workload", description: "Free your team from repetitive messaging tasks." },
      { title: "Higher Engagement", description: "WhatsApp's 98% open rate outperforms email and SMS." },
      { title: "Connected Systems", description: "WhatsApp data flows into your ERP, CRM, and booking platforms." },
      { title: "Scalable Communication", description: "Handle thousands of conversations without adding staff." },
    ],
    industries: ["Healthcare", "Retail", "Hospitality", "E-Commerce", "Services", "Education", "Real Estate", "Professional Services"],
    process: [
      { step: "Channel Setup", description: "Configure WhatsApp Business API and verify your business account." },
      { step: "Flow Design", description: "Map customer journeys, reply flows, and automation triggers." },
      { step: "Bot Development", description: "Build chatbots, automated replies, and interactive menus." },
      { step: "Integration", description: "Connect with ERP, CRM, booking, and payment systems." },
      { step: "Testing", description: "Test every conversation flow and edge case thoroughly." },
      { step: "Launch & Monitor", description: "Go live with analytics dashboards and ongoing optimization." },
    ],
    technologies: ["WhatsApp Business API", "Node.js", "Webhooks", "REST APIs", "CRM Connectors", "Cloud Infrastructure"],
    faqs: [
      { q: "Do I need WhatsApp Business API?", a: "For automation at scale, yes. We handle the entire API setup, verification, and configuration for you." },
      { q: "Can chatbots hand off to a human agent?", a: "Yes. Our bots intelligently route complex queries to your support team with full conversation context." },
      { q: "Can WhatsApp connect to our ERP or booking system?", a: "Absolutely. We integrate WhatsApp with ERP, CRM, booking platforms, and custom APIs for seamless data flow." },
      { q: "How quickly can automation be deployed?", a: "Basic automation can go live in 1–2 weeks. Complex integrations with ERP and CRM typically take 3–6 weeks." },
    ],
    relatedSlugs: ["erp-solutions", "booking-reservation", "e-commerce"],
    showWorkflow: true,
  },
  {
    slug: "pos-retail",
    icon: Store,
    title: "POS & Retail Management Systems",
    shortDescription:
      "Manage sales, inventory, customers, staff, branches, and real-time reports from one powerful POS platform.",
    heroDescription:
      "Modern point-of-sale and retail management built for speed, accuracy, and growth — from single stores to multi-branch operations.",
    heroImage: "/dashboard-mockup.png",
    heroImageAlt: "POS and retail management dashboard with sales analytics",
    overview:
      "Our POS and retail management systems give you complete control over sales, inventory, customers, and staff — with real-time reporting, multi-branch support, and seamless integration with ERP and e-commerce.",
    challenges: [
      "Slow checkout processes during peak hours",
      "Inventory discrepancies between physical stock and records",
      "No visibility across multiple store locations",
      "Manual end-of-day reconciliation and reporting",
      "Limited customer data and loyalty tracking",
    ],
    solution:
      "We deploy modern POS systems with barcode scanning, receipt printing, multi-branch management, employee access control, and real-time analytics — fully integrated with your inventory and accounting systems.",
    features: [
      { icon: CreditCard, title: "Sales Management", description: "Fast checkout, multiple payment methods, discounts, and returns processing." },
      { icon: Package, title: "Inventory Tracking", description: "Real-time stock levels, low-stock alerts, and automatic reorder triggers." },
      { icon: Building2, title: "Multi-Branch Management", description: "Centralized control with branch-specific inventory, pricing, and reporting." },
      { icon: Users, title: "Customer Database", description: "Customer profiles, purchase history, loyalty programs, and targeted promotions." },
      { icon: UserCheck, title: "Employee Access Control", description: "Role-based permissions, shift tracking, and sales performance by staff." },
      { icon: BarChart3, title: "Reporting Dashboard", description: "Daily, weekly, and monthly sales reports with visual analytics." },
      { icon: BarChart3, title: "Analytics", description: "Product performance, peak hours, profit margins, and trend analysis." },
      { icon: ScanLine, title: "Receipt Printing", description: "Thermal receipt printing with customizable templates and branding." },
      { icon: ScanLine, title: "Barcode Support", description: "Barcode scanning for fast product lookup and inventory management." },
    ],
    benefits: [
      { title: "Faster Checkout", description: "Streamlined POS interface reduces wait times and improves customer experience." },
      { title: "Accurate Inventory", description: "Real-time stock tracking eliminates discrepancies and stock-outs." },
      { title: "Multi-Location Control", description: "Manage all branches from one dashboard with centralized reporting." },
      { title: "Staff Accountability", description: "Track sales by employee, manage shifts, and control access levels." },
      { title: "Customer Insights", description: "Build customer profiles and drive repeat business with loyalty tools." },
      { title: "Integrated Operations", description: "POS data syncs with ERP, accounting, and e-commerce automatically." },
    ],
    industries: ["Retail Stores", "Supermarkets", "Restaurants", "Cafés", "Pharmacies", "Service Businesses"],
    process: [
      { step: "Store Assessment", description: "Evaluate checkout flow, hardware needs, and integration requirements." },
      { step: "System Configuration", description: "Set up products, pricing, tax rules, and payment methods." },
      { step: "Hardware Setup", description: "Install terminals, receipt printers, barcode scanners, and cash drawers." },
      { step: "Integration", description: "Connect POS with ERP, inventory, and accounting systems." },
      { step: "Staff Training", description: "Hands-on training for cashiers, managers, and administrators." },
      { step: "Go-Live & Support", description: "Launch with on-site support and ongoing maintenance." },
    ],
    technologies: ["Cloud POS", "Barcode Scanners", "Thermal Printers", "Payment Terminals", "ERP Sync", "Real-Time APIs"],
    faqs: [
      { q: "Does the POS work offline?", a: "Yes. Our POS systems support offline mode with automatic sync when connectivity is restored." },
      { q: "Can I manage multiple branches?", a: "Absolutely. Multi-branch management with centralized inventory, pricing, and reporting is a core feature." },
      { q: "What payment methods are supported?", a: "Cash, card, mobile payments, and integrated payment gateways. We configure based on your needs." },
      { q: "Does POS integrate with ERP?", a: "Yes. Sales, inventory, and customer data sync automatically with MoLedger ERP and other systems." },
    ],
    relatedSlugs: ["erp-solutions", "e-commerce", "custom-software"],
  },
  {
    slug: "branding-digital",
    icon: Palette,
    title: "Branding & Digital Presence Solutions",
    shortDescription:
      "Build trust with professional logos, business profiles, websites, landing pages, social media setup, and content.",
    heroDescription:
      "Establish a professional brand identity and powerful digital presence that builds trust and drives business growth.",
    overview:
      "Your brand is your first impression. We create cohesive brand identities, corporate websites, landing pages, and digital marketing assets that position your business as a credible, modern leader in your industry.",
    challenges: [
      "Inconsistent or outdated brand identity across channels",
      "No professional website limiting online credibility",
      "Weak social media presence and engagement",
      "Generic marketing materials that don't stand out",
      "Difficulty converting website visitors into leads",
    ],
    solution:
      "From logo design to full corporate websites and social media setup, we build a complete digital presence that reflects your values, resonates with your audience, and converts visitors into customers.",
    features: [
      { icon: Paintbrush, title: "Logo Design", description: "Memorable, scalable logos that capture your brand essence." },
      { icon: Palette, title: "Brand Identity", description: "Color palettes, typography, brand guidelines, and visual consistency." },
      { icon: Globe, title: "Corporate Websites", description: "Professional, responsive websites built for performance and SEO." },
      { icon: Monitor, title: "Landing Pages", description: "High-converting landing pages for campaigns, products, and services." },
      { icon: Building2, title: "Business Profiles", description: "Google Business, directory listings, and professional online profiles." },
      { icon: Share2, title: "Social Media Setup", description: "Profile optimization, content templates, and posting strategy." },
      { icon: PenTool, title: "Digital Marketing Assets", description: "Banners, social graphics, email templates, and ad creatives." },
      { icon: Layers, title: "Content Design", description: "Infographics, presentations, brochures, and marketing collateral." },
    ],
    benefits: [
      { title: "Professional Credibility", description: "A polished brand builds trust with clients, partners, and investors." },
      { title: "Consistent Identity", description: "Unified visuals across website, social media, and marketing materials." },
      { title: "Higher Conversions", description: "Optimized landing pages and websites turn visitors into leads." },
      { title: "SEO Visibility", description: "Search-engine-friendly websites that attract organic traffic." },
      { title: "Social Engagement", description: "Professional social profiles that grow your audience and engagement." },
      { title: "Competitive Edge", description: "Stand out from competitors with a distinctive, modern brand." },
    ],
    industries: ["Startups", "SMEs", "Professional Services", "Retail", "Hospitality", "Healthcare", "Technology", "E-Commerce"],
    process: [
      { step: "Brand Discovery", description: "Understand your values, audience, competitors, and market positioning." },
      { step: "Concept Design", description: "Create logo concepts, color schemes, and visual direction." },
      { step: "Brand Guidelines", description: "Document typography, colors, usage rules, and brand voice." },
      { step: "Digital Build", description: "Develop website, landing pages, and social media profiles." },
      { step: "Content Creation", description: "Design marketing assets, graphics, and promotional materials." },
      { step: "Launch & Optimize", description: "Go live with SEO setup, analytics, and ongoing improvements." },
    ],
    technologies: ["Next.js", "Figma", "SEO Tools", "Google Analytics", "Responsive Design", "CMS Platforms"],
    faqs: [
      { q: "Do you provide brand guidelines?", a: "Yes. Every branding project includes comprehensive guidelines covering logo usage, colors, typography, and tone of voice." },
      { q: "Can you redesign an existing website?", a: "Absolutely. We audit your current site, refresh the design, and improve performance, SEO, and conversions." },
      { q: "Do you manage social media content?", a: "We set up profiles, create templates, and can provide ongoing content design and strategy support." },
      { q: "How long does a branding project take?", a: "Logo and identity projects take 2–4 weeks. Full website and digital presence packages typically take 4–8 weeks." },
    ],
    relatedSlugs: ["e-commerce", "custom-software", "whatsapp-automation"],
    showBeforeAfter: true,
  },
  {
    slug: "booking-reservation",
    icon: CalendarCheck,
    title: "Booking & Reservation Systems",
    shortDescription:
      "Simplify appointments, bookings, customer records, notifications, payments, and reporting.",
    heroDescription:
      "Smart booking and reservation systems that reduce no-shows, streamline scheduling, and deliver a seamless customer experience.",
    overview:
      "Whether you run a hotel, clinic, salon, or consultancy, our booking systems handle online reservations, calendar management, automated reminders, and payment processing — integrated with WhatsApp and your business systems.",
    challenges: [
      "Double bookings and scheduling conflicts",
      "High no-show rates without automated reminders",
      "Phone-based booking consuming staff time",
      "No online booking option for customers",
      "Disconnected customer records across channels",
    ],
    solution:
      "We build custom booking platforms with online scheduling, real-time availability, automated WhatsApp and email reminders, customer records, payment integration, and comprehensive reporting.",
    features: [
      { icon: Globe, title: "Online Booking", description: "Customer-facing booking portal with real-time availability and instant confirmation." },
      { icon: Calendar, title: "Calendar Management", description: "Staff calendars, resource scheduling, and conflict prevention." },
      { icon: Bell, title: "Automated Reminders", description: "WhatsApp, SMS, and email reminders to reduce no-shows." },
      { icon: Users, title: "Customer Records", description: "Complete booking history, preferences, and contact information." },
      { icon: CreditCard, title: "Payment Integration", description: "Online deposits, full payments, and refund processing." },
      { icon: BarChart3, title: "Reports & Analytics", description: "Booking trends, revenue reports, and utilization analytics." },
    ],
    benefits: [
      { title: "Reduced No-Shows", description: "Automated reminders significantly decrease missed appointments." },
      { title: "24/7 Booking", description: "Customers book anytime without staff involvement." },
      { title: "Staff Efficiency", description: "Eliminate phone tag and manual scheduling tasks." },
      { title: "Revenue Growth", description: "Fill empty slots and maximize resource utilization." },
      { title: "Customer Convenience", description: "Easy online booking improves customer satisfaction." },
      { title: "Data Insights", description: "Analytics reveal peak times, popular services, and trends." },
    ],
    industries: ["Hotels", "Guest Houses", "Medical Clinics", "Salons", "Consultants", "Educational Institutions", "Service Providers"],
    process: [
      { step: "Requirements Mapping", description: "Define booking rules, services, staff schedules, and payment flows." },
      { step: "UI Design", description: "Design intuitive booking interfaces for customers and staff." },
      { step: "Development", description: "Build booking engine, calendar, notifications, and payment modules." },
      { step: "Integration", description: "Connect with WhatsApp, CRM, ERP, and payment gateways." },
      { step: "Testing", description: "Validate booking flows, reminders, and edge cases." },
      { step: "Launch & Training", description: "Deploy with staff training and ongoing support." },
    ],
    technologies: ["React", "Calendar APIs", "Payment Gateways", "WhatsApp API", "Cloud Hosting", "PostgreSQL"],
    faqs: [
      { q: "Can customers book online 24/7?", a: "Yes. Our booking portals are available around the clock with real-time availability." },
      { q: "Do you send automated reminders?", a: "Yes. We configure WhatsApp, SMS, and email reminders at intervals you choose." },
      { q: "Can the system handle multiple staff or rooms?", a: "Absolutely. Multi-resource scheduling with individual calendars and availability is supported." },
      { q: "Does booking integrate with WhatsApp?", a: "Yes. Confirmations, reminders, and rescheduling can all happen through WhatsApp automation." },
    ],
    relatedSlugs: ["whatsapp-automation", "custom-software", "branding-digital"],
  },
  {
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software & Mobile Application Development",
    shortDescription:
      "Build secure, scalable web apps, customer portals, internal platforms, Android apps, iOS apps, and integrations.",
    heroDescription:
      "Purpose-built software and mobile applications designed around your business — secure, scalable, and ready for the future.",
    overview:
      "When off-the-shelf solutions don't fit, we build custom software from the ground up. From internal management platforms and customer portals to Android and iOS apps, every solution is engineered for your specific workflows and growth plans.",
    challenges: [
      "Off-the-shelf software doesn't match unique workflows",
      "Multiple disconnected tools creating data silos",
      "No mobile access for field teams or customers",
      "Legacy systems limiting growth and innovation",
      "Security and compliance requirements not met by generic tools",
    ],
    solution:
      "Our development team delivers custom business management systems, web applications, mobile apps, and API integrations — following a proven lifecycle from discovery through deployment and ongoing support.",
    features: [
      { icon: Monitor, title: "Business Management Systems", description: "Custom platforms for operations, finance, HR, and project management." },
      { icon: Layers, title: "Internal Management Platforms", description: "Centralized tools for team collaboration, workflows, and reporting." },
      { icon: Users, title: "Customer Portals", description: "Self-service portals for orders, accounts, support, and document access." },
      { icon: Globe, title: "Web Applications", description: "Responsive, secure web apps built with modern frameworks." },
      { icon: Smartphone, title: "Android Apps", description: "Native and cross-platform Android applications." },
      { icon: Smartphone, title: "iOS Apps", description: "Native and cross-platform iOS applications." },
      { icon: Link2, title: "API Integrations", description: "Connect systems, third-party services, and data sources." },
      { icon: Puzzle, title: "System Integrations", description: "Bridge ERP, CRM, payment, and legacy systems seamlessly." },
    ],
    benefits: [
      { title: "Perfect Fit", description: "Software built exactly for your workflows — no compromises." },
      { title: "Scalable Architecture", description: "Systems designed to grow with your user base and feature needs." },
      { title: "Mobile Ready", description: "Access your business tools from anywhere on any device." },
      { title: "Secure by Design", description: "Enterprise-grade security, authentication, and data protection." },
      { title: "Full Ownership", description: "You own the code, data, and intellectual property." },
      { title: "Ongoing Evolution", description: "Continuous updates, new features, and dedicated support." },
    ],
    industries: ["Logistics", "Healthcare", "Education", "Finance", "Manufacturing", "Professional Services", "Retail", "Technology"],
    process: [
      { step: "Discovery", description: "Deep dive into requirements, users, and technical constraints." },
      { step: "Planning", description: "Architecture design, technology selection, and project roadmap." },
      { step: "Design", description: "UI/UX design, wireframes, and interactive prototypes." },
      { step: "Development", description: "Agile development with regular demos and feedback cycles." },
      { step: "Testing", description: "QA testing, security audits, and performance optimization." },
      { step: "Deployment", description: "Production launch with monitoring and rollback plans." },
      { step: "Support", description: "Ongoing maintenance, updates, and feature development." },
    ],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "REST APIs", "Cloud Infrastructure", "Docker"],
    faqs: [
      { q: "How is custom software different from ERP?", a: "ERP covers standard business modules. Custom software is built for unique workflows that off-the-shelf products can't address." },
      { q: "Do you build both web and mobile apps?", a: "Yes. We develop responsive web apps, native Android and iOS apps, and cross-platform solutions." },
      { q: "What is the typical development timeline?", a: "MVPs launch in 6–10 weeks. Full platforms typically take 3–6 months depending on complexity." },
      { q: "Do we own the source code?", a: "Yes. You receive full ownership of the codebase, documentation, and deployment infrastructure." },
    ],
    relatedSlugs: ["erp-solutions", "e-commerce", "whatsapp-automation"],
    showDevLifecycle: true,
  },
  {
    slug: "e-commerce",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    shortDescription:
      "Launch online stores with product management, payment gateways, delivery integration, accounts, and mobile shopping.",
    heroDescription:
      "Launch and grow your online store with a complete e-commerce platform — from product catalog to payment, delivery, and analytics.",
    heroImage: "/dashboard-mockup.png",
    heroImageAlt: "E-commerce dashboard with online store analytics",
    overview:
      "We build complete e-commerce solutions that help businesses sell online with confidence. From store design and product management to payment gateways, delivery integration, and mobile commerce — everything you need to succeed online.",
    challenges: [
      "No online sales channel limiting market reach",
      "Complex setup of payments, shipping, and inventory",
      "Poor mobile shopping experience losing customers",
      "Disconnected online and offline inventory",
      "Limited analytics on customer behavior and sales trends",
    ],
    solution:
      "Our e-commerce platforms include online store development, product and inventory management, payment gateway integration, delivery logistics, customer accounts, mobile commerce, and analytics dashboards — fully integrated with your POS and ERP.",
    features: [
      { icon: Globe, title: "Online Store Development", description: "Beautiful, fast-loading online stores optimized for conversions." },
      { icon: ShoppingBag, title: "Product Management", description: "Catalog management, variants, categories, and bulk import tools." },
      { icon: Package, title: "Inventory Management", description: "Real-time stock sync across online and offline channels." },
      { icon: CreditCard, title: "Payment Gateway Integration", description: "Secure checkout with multiple payment methods and currencies." },
      { icon: Truck, title: "Delivery Integration", description: "Shipping rates, tracking, and logistics partner connections." },
      { icon: Users, title: "Customer Accounts", description: "Registration, order history, wishlists, and loyalty programs." },
      { icon: Smartphone, title: "Mobile Commerce", description: "Responsive design and mobile-optimized shopping experience." },
      { icon: BarChart3, title: "Analytics Dashboard", description: "Sales trends, customer insights, and conversion tracking." },
    ],
    benefits: [
      { title: "Expanded Reach", description: "Sell to customers anywhere, anytime through your online store." },
      { title: "Automated Operations", description: "Orders, payments, and inventory update automatically." },
      { title: "Mobile-First Shopping", description: "Capture mobile shoppers with optimized checkout flows." },
      { title: "Unified Inventory", description: "Online and offline stock synced in real time." },
      { title: "Customer Loyalty", description: "Accounts, wishlists, and loyalty programs drive repeat purchases." },
      { title: "Data-Driven Growth", description: "Analytics reveal top products, customer segments, and trends." },
    ],
    industries: ["Retail", "Fashion", "Electronics", "Food & Beverage", "Health & Beauty", "Home & Garden", "Services", "B2B"],
    process: [
      { step: "Store Planning", description: "Define product catalog, pricing, shipping, and payment strategy." },
      { step: "Design & UX", description: "Create store layout, product pages, and checkout flow." },
      { step: "Development", description: "Build store, admin panel, and customer account features." },
      { step: "Integration", description: "Connect payments, delivery, ERP, POS, and inventory systems." },
      { step: "Testing", description: "Test checkout, payments, mobile experience, and order flows." },
      { step: "Launch & Growth", description: "Go live with SEO, analytics, and marketing support." },
    ],
    technologies: ["Next.js", "Stripe", "PayPal", "Cloud Hosting", "CDN", "ERP Sync", "Mobile Responsive"],
    faqs: [
      { q: "Can the store sync with our physical inventory?", a: "Yes. Real-time inventory sync between your online store, POS, and ERP prevents overselling." },
      { q: "What payment methods can we accept?", a: "Credit/debit cards, mobile payments, bank transfers, and local payment gateways — configured for your market." },
      { q: "Is the store mobile-friendly?", a: "Absolutely. Every store is built mobile-first with optimized checkout for smartphones." },
      { q: "Can we manage products ourselves?", a: "Yes. The admin panel lets you add products, manage orders, and view analytics without technical knowledge." },
    ],
    relatedSlugs: ["pos-retail", "branding-digital", "whatsapp-automation"],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): ServiceDetail[] {
  return slugs.map((slug) => getServiceBySlug(slug)).filter(Boolean) as ServiceDetail[]
}
