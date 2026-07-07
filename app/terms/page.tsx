import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CONTACT, getEmailLinkPlain, getWhatsAppLinkPlain } from "@/lib/contact"
import { pageMetadata } from "@/lib/seo"

const LAST_UPDATED = "7 July 2026"

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Orbits Innovations digital transformation services, ERP, software development, and consulting in Mauritius.",
  path: "/terms",
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

export default function TermsPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            These Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Orbits
            Innovations website and the digital transformation services we provide, including ERP
            solutions, business automation, POS systems, e-commerce, booking platforms, branding,
            and custom software development. By accessing our website or engaging our services, you
            agree to be bound by these Terms.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-10">
          <LegalSection title="1. About Us">
            <p>
              Orbits Innovations (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a digital
              transformation company based in Mauritius. We provide technology consulting, software
              development, system implementation, and ongoing support services to businesses.
            </p>
          </LegalSection>

          <LegalSection title="2. Acceptance of Terms">
            <p>
              By using our website, contacting us, or entering into a service agreement, you confirm
              that you have read, understood, and agree to these Terms. If you do not agree, you must
              not use our website or services. If you are entering into an agreement on behalf of a
              business, you represent that you have authority to bind that organisation.
            </p>
          </LegalSection>

          <LegalSection title="3. Services">
            <p>
              We provide professional technology services tailored to each client&apos;s requirements.
              Specific deliverables, timelines, fees, and scope are defined in individual proposals,
              statements of work, or service agreements (&ldquo;Project Agreements&rdquo;). In the event of
              conflict between these Terms and a signed Project Agreement, the Project Agreement
              prevails for that project.
            </p>
            <p>Our services may include, but are not limited to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>ERP implementation and business automation (including MoLedger ERP)</li>
              <li>WhatsApp Business automation and integrations</li>
              <li>POS and retail management systems</li>
              <li>E-commerce and booking platform development</li>
              <li>Branding, websites, and digital presence solutions</li>
              <li>Custom software and mobile application development</li>
              <li>Training, deployment, and ongoing technical support</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Consultations and Proposals">
            <p>
              Initial consultations may be offered at our discretion. Consultations do
              not create a binding obligation to proceed with a project. Proposals and quotations are
              valid for the period stated therein and are subject to acceptance in writing or via
              confirmed payment of any required deposit.
            </p>
          </LegalSection>

          <LegalSection title="5. Client Responsibilities">
            <p>When engaging our services, you agree to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide accurate and complete information required for project delivery</li>
              <li>Designate a point of contact with authority to make project decisions</li>
              <li>Respond to requests for feedback, approvals, and materials within agreed timeframes</li>
              <li>Ensure you have rights to any content, data, or materials you supply to us</li>
              <li>Maintain appropriate backups of your data before migrations or deployments</li>
              <li>Use delivered systems in compliance with applicable laws and third-party platform terms</li>
            </ul>
            <p>
              Delays caused by late client feedback or unavailable resources may affect timelines and
              may incur additional charges.
            </p>
          </LegalSection>

          <LegalSection title="6. Fees and Payment">
            <p>
              Fees are as specified in your Project Agreement. Unless otherwise stated, invoices are
              payable within the period indicated on the invoice. We may require deposits or milestone
              payments before commencing or continuing work.
            </p>
            <p>
              Late payments may incur interest or suspension of services. All fees are exclusive of
              applicable taxes unless stated otherwise. You are responsible for any bank charges or
              currency conversion costs associated with your payment method.
            </p>
          </LegalSection>

          <LegalSection title="7. Intellectual Property">
            <p>
              <strong className="text-foreground">Our materials:</strong> We retain ownership of our
              pre-existing tools, frameworks, methodologies, templates, and general know-how used in
              delivering services.
            </p>
            <p>
              <strong className="text-foreground">Deliverables:</strong> Upon full payment of all
              applicable fees, ownership of custom deliverables specified in your Project Agreement
              transfers to you, unless otherwise agreed. Third-party software, licences, and
              open-source components remain subject to their respective licence terms.
            </p>
            <p>
              <strong className="text-foreground">Portfolio:</strong> Unless you request otherwise in
              writing, we may display non-confidential project descriptions or screenshots in our
              portfolio and marketing materials.
            </p>
          </LegalSection>

          <LegalSection title="8. Confidentiality">
            <p>
              Both parties agree to keep confidential any non-public business, technical, or financial
              information disclosed during the engagement. This obligation survives termination of the
              business relationship, except where disclosure is required by law or information becomes
              publicly available through no fault of the receiving party.
            </p>
          </LegalSection>

          <LegalSection title="9. Warranties and Disclaimers">
            <p>
              We warrant that services will be performed with reasonable skill and care consistent with
              industry standards. Except as expressly stated in a Project Agreement, services are
              provided &ldquo;as is&rdquo; without warranties of uninterrupted operation, fitness for a
              particular purpose, or error-free performance.
            </p>
            <p>
              We are not responsible for failures caused by third-party platforms, internet connectivity,
              hardware not supplied by us, or modifications made by you or third parties without our
              authorisation.
            </p>
          </LegalSection>

          <LegalSection title="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Orbits Innovations shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, including loss
              of profits, revenue, data, or business opportunities.
            </p>
            <p>
              Our total aggregate liability arising from or related to any project or these Terms shall
              not exceed the total fees paid by you to us for that project in the twelve (12) months
              preceding the claim, or the fees paid for the specific service giving rise to the claim,
              whichever is lower.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot be excluded or limited
              under applicable law.
            </p>
          </LegalSection>

          <LegalSection title="11. Support and Maintenance">
            <p>
              Post-deployment support, maintenance, and updates are provided according to the terms of
              your Project Agreement or a separate support plan. Unless otherwise agreed, support does
              not include changes in scope, new features, or issues arising from unauthorised
              modifications or third-party service outages.
            </p>
          </LegalSection>

          <LegalSection title="12. Termination">
            <p>
              Either party may terminate a Project Agreement according to its terms. We may suspend or
              terminate services immediately if you breach these Terms, fail to pay invoices, or engage
              in abusive or unlawful conduct toward our team.
            </p>
            <p>
              Upon termination, you remain liable for fees for work completed up to the termination
              date. Provisions relating to confidentiality, intellectual property, limitation of
              liability, and payment survive termination.
            </p>
          </LegalSection>

          <LegalSection title="13. Website Use">
            <p>When using our website, you agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to our systems or networks</li>
              <li>Transmit malware, spam, or harmful code</li>
              <li>Scrape, copy, or reproduce content without our written permission</li>
              <li>Misrepresent your identity or affiliation</li>
            </ul>
            <p>
              Website content is provided for general information only and does not constitute
              professional advice. We may modify or discontinue website content at any time without
              notice.
            </p>
          </LegalSection>

          <LegalSection title="14. Third-Party Services">
            <p>
              Our solutions may integrate with third-party services (e.g. WhatsApp, payment gateways,
              cloud providers). Your use of those services is governed by their respective terms and
              privacy policies. We are not responsible for third-party service availability, pricing
              changes, or policy updates.
            </p>
          </LegalSection>

          <LegalSection title="15. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of the Republic of Mauritius, without regard to
              conflict of law principles. Any dispute arising from these Terms or our services shall
              first be addressed through good-faith negotiation. If unresolved, disputes shall be
              submitted to the exclusive jurisdiction of the courts of Mauritius.
            </p>
          </LegalSection>

          <LegalSection title="16. Changes to These Terms">
            <p>
              We may revise these Terms at any time by posting an updated version on our website. The
              &ldquo;Last updated&rdquo; date will indicate when changes were made. Continued use of our website
              or services after changes constitutes acceptance of the revised Terms.
            </p>
          </LegalSection>

          <LegalSection title="17. Contact">
            <p>For questions regarding these Terms, contact:</p>
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
          <Link href="/privacy" className="font-medium text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </ScrollReveal>
      </article>
    </PageShell>
  )
}
