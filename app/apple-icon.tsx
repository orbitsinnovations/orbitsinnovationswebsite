import { createRoundedLogoIcon } from "@/lib/favicon"

export const runtime = "nodejs"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  return createRoundedLogoIcon(180, { logoScale: 0.72, borderRadius: 36 })
}
