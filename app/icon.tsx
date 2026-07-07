import { createRoundedLogoIcon } from "@/lib/favicon"

export const runtime = "nodejs"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default async function Icon() {
  return createRoundedLogoIcon(32, { logoScale: 0.82, borderRadius: 8 })
}
