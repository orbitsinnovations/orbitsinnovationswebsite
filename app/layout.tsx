import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Space_Grotesk } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Orbits Innovations — Innovate. Automate. Elevate.',
    template: '%s | Orbits Innovations',
  },
  description:
    'Orbits Innovations is a professional digital transformation company. ERP, WhatsApp automation, POS, e-commerce, booking systems, branding, and custom software.',
  keywords: [
    'ERP',
    'business automation',
    'WhatsApp automation',
    'POS systems',
    'e-commerce',
    'digital transformation',
    'Mauritius',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${spaceGrotesk.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
