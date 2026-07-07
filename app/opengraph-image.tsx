import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Orbits Innovations — Innovate. Automate. Elevate."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#4ade80",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            O
          </div>
          <span style={{ fontSize: "28px", fontWeight: 700, color: "#0f172a" }}>
            Orbits Innovations
          </span>
        </div>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: "800px",
          }}
        >
          Innovate. Automate. Elevate.
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#64748b",
            marginTop: "24px",
            maxWidth: "700px",
          }}
        >
          ERP · WhatsApp Automation · POS · E-Commerce · Custom Software
        </p>
      </div>
    ),
    { ...size },
  )
}
