import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

const LOGO_FILE = "orbitsinnovationslogolight.png"

async function getLogoDataUrl(): Promise<string> {
  const buffer = await readFile(join(process.cwd(), "public", LOGO_FILE))
  return `data:image/png;base64,${buffer.toString("base64")}`
}

/** Rounded favicon / app icon using the Orbits Innovations logo */
export async function createRoundedLogoIcon(
  size: number,
  options?: { logoScale?: number; borderRadius?: number },
) {
  const logoScale = options?.logoScale ?? 0.78
  const borderRadius = options?.borderRadius ?? Math.round(size * 0.22)
  const src = await getLogoDataUrl()
  const logoSize = Math.round(size * logoScale)

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius,
          border: `${Math.max(1, Math.round(size * 0.04))}px solid #e8eaed`,
        }}
      >
        <img
          src={src}
          width={logoSize}
          height={logoSize}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { width: size, height: size },
  )
}
