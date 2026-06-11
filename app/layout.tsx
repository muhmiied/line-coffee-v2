import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "لاين | قهوة فاخرة تليق بلحظاتك",
  description:
    "لاين كوفي — تجربة قهوة مصرية فاخرة. حبوب مختارة بعناية ومحمّصة بإتقان لتصل إليك بأنقى نكهة وأعمق عطر.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${playfair.variable} ${cairo.variable} bg-background`}
    >
      <body className="font-arabic antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
