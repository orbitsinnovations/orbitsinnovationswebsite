import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { services, getServiceBySlug } from "@/lib/data/services"
import { PageShell } from "@/components/page-shell"
import { ServicePageLayout } from "@/components/service-page-layout"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }

  return {
    title: service.title,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <PageShell>
      <ServicePageLayout service={service} />
    </PageShell>
  )
}
