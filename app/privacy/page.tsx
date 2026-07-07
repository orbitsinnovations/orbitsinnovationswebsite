import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CONTACT, getEmailLinkPlain, getWhatsAppLinkPlain } from "@/lib/contact"
import { pageMetadata } from "@/lib/seo"

const LAST_UPDATED = "7 July 2026"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Orbits Innovations — how we collect, use, and protect your personal information in Mauritius.",
  path: "/privacy",
})

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <section>
        <h2 className="font-heading text-lg font-semibold text-foreground">{title}</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </section>
    </ScrollReveal>
  )
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Orbits Innovations (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at
            orbitsinnovations.com and provides digital transformation services including ERP systems,
            business automation, software development, and related consulting. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our
            website or engage our services.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-10">
          <LegalSection title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Contact information</strong> — name, email address,
                phone number, WhatsApp number, company name, and job title when you contact us or request
                a consultation.
              </li>
              <li>
                <strong className="text-foreground">Business information</strong> — details about your
                business, project requirements, and operational needs that you voluntarily provide during
                consultations or project engagements.
              </li>
              <li>
                <strong className="text-foreground">Communication records</strong> — messages sent via
                email, WhatsApp, contact forms, or other channels when you interact with us.
              </li>
              <li>
                <strong className="text-foreground">Technical data</strong> — IP address, browser type,
                device information, pages visited, and usage data collected automatically through cookies
                and analytics tools when you browse our website.
              </li>
              <li>
                <strong className="text-foreground">Payment and billing information</strong> — where
                applicable, invoicing details and payment records related to services we provide. We do
                not store full credit card numbers on our servers.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="2. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and provide consultations</li>
              <li>Deliver, configure, and support our products and services</li>
              <li>Prepare proposals, agreements, and project documentation</li>
              <li>Send service-related communications, updates, and support responses</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and enforce our agreements</li>
              <li>Protect against fraud, abuse, and security incidents</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </LegalSection>

          <LegalSection title="3. Legal Basis for Processing">
            <p>We process personal data based on:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your consent when you contact us or subscribe to communications</li>
              <li>Performance of a contract when you engage our services</li>
              <li>Legitimate interests in operating and improving our business</li>
              <li>Compliance with applicable laws and regulations in Mauritius and other relevant jurisdictions</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Sharing of Information">
            <p>We may share information with:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Service providers</strong> — hosting providers,
                analytics platforms, payment processors, and communication tools that assist us in
                operating our business, subject to confidentiality obligations.
              </li>
              <li>
                <strong className="text-foreground">Integration partners</strong> — third-party platforms
                (e.g. WhatsApp Business API, payment gateways, cloud providers) when required to deliver
                solutions you have requested.
              </li>
              <li>
                <strong className="text-foreground">Legal authorities</strong> — when required by law,
                court order, or to protect our rights and safety.
              </li>
            </ul>
            <p>We require third parties to handle data securely and only for specified purposes.</p>
          </LegalSection>

          <LegalSection title="5. Data Retention">
            <p>
              We retain personal information only as long as necessary to fulfil the purposes described
              in this policy, including to satisfy legal, accounting, or reporting requirements.
              Consultation enquiries are typically retained for up to 24 months unless a business
              relationship is established. Client project data is retained according to contractual
              terms and applicable law.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Security">
            <p>
              We implement appropriate technical and organisational measures to protect your information
              against unauthorised access, alteration, disclosure, or destruction. These include access
              controls, secure hosting environments, and encrypted communications where applicable.
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </LegalSection>

          <LegalSection title="7. Cookies and Analytics">
            <p>
              Our website may use cookies and similar technologies to analyse traffic and improve user
              experience. You can control cookies through your browser settings. Disabling cookies may
              affect certain website functionality. We may use services such as Vercel Analytics to
              understand how visitors use our site in aggregate form.
            </p>
          </LegalSection>

          <LegalSection title="8. Your Rights">
            <p>Depending on applicable law, you may have the right to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data, subject to legal retention requirements</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent where processing is consent-based</li>
              <li>Lodge a complaint with a relevant data protection authority</li>
            </ul>
            <p>
              To exercise these rights, contact us using the details below. We will respond within a
              reasonable timeframe.
            </p>
          </LegalSection>

          <LegalSection title="9. International Transfers">
            <p>
              Your information may be processed or stored in Mauritius or in countries where our service
              providers operate. Where data is transferred internationally, we take steps to ensure
              appropriate safeguards are in place consistent with applicable data protection standards.
            </p>
          </LegalSection>

          <LegalSection title="10. Children&apos;s Privacy">
            <p>
              Our services are directed at businesses and professionals. We do not knowingly collect
              personal information from individuals under 18 years of age. If you believe we have
              collected such information, please contact us so we can delete it promptly.
            </p>
          </LegalSection>

          <LegalSection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the
              top of this page will reflect any changes. Material changes will be communicated where
              appropriate. Continued use of our website or services after changes constitutes acceptance
              of the updated policy.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <p>For privacy-related questions or requests, contact:</p>
            <p>
              <strong className="text-foreground">Orbits Innovations</strong>
              <br />
              Email:{" "}
              <a href={getEmailLinkPlain()} className="text-primary hover:underline">
                {CONTACT.email}
              </a>
              <br />
              WhatsApp / Phone:{" "}
              <a href={getWhatsAppLinkPlain()} className="text-primary hover:underline">
                {CONTACT.phone}
              </a>
              <br />
              Location: Mauritius
            </p>
          </LegalSection>
        </div>

        <ScrollReveal className="mt-12 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
          Please also review our{" "}
          <Link href="/terms" className="font-medium text-primary hover:underline">
            Terms & Conditions
          </Link>
          .
        </ScrollReveal>
      </article>
    </PageShell>
  )
}
