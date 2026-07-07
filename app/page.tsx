import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { Hero } from "@/components/hero"
import { SectionDivider } from "@/components/section-divider"
import { WhyUs } from "@/components/why-us"
import { ProcessTimeline } from "@/components/process-timeline"
import { CtaContact } from "@/components/cta-contact"
import {
  HOME_SEO,
  organizationJsonLd,
  websiteJsonLd,
  localBusinessJsonLd,
  pageMetadata,
} from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: HOME_SEO.title,
  description: HOME_SEO.description,
  path: "/",
  keywords: HOME_SEO.keywords,
})

export default function Page() {
  return (
    <PageShell>
      <JsonLd
        data={[organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()]}
      />
      <Hero />
      <SectionDivider variant="line" />
      <WhyUs />
      <SectionDivider variant="dots" />
      <ProcessTimeline />
      <CtaContact />
    </PageShell>
  )
}
