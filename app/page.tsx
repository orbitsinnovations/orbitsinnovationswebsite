import { PageShell } from "@/components/page-shell"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { IndustriesSection } from "@/components/industries-section"
import { WhyUs } from "@/components/why-us"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Integrations } from "@/components/integrations"
import { Faq } from "@/components/faq"
import { CtaContact } from "@/components/cta-contact"

export default function Page() {
  return (
    <PageShell>
      <Hero />
      <AboutSection />
      <Services />
      <Stats />
      <IndustriesSection compact />
      <WhyUs />
      <CaseStudiesSection limit={3} />
      <ProcessTimeline compact />
      <TestimonialsSection limit={6} />
      <Integrations />
      <Faq />
      <CtaContact />
    </PageShell>
  )
}
