import type { Metadata } from 'next'
import { Cairo, Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Line Coffee',
    default: 'Line Coffee — قهوة بريميوم',
  },
  description: 'خلطات قهوة فاخرة مصنوعة بعناية، لأجل اللحظة المثالية في كل كوب.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${playfair.variable} ${cairo.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
