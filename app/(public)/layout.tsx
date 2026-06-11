import { Playfair_Display, Cairo } from 'next/font/google'
import PublicHeader from '@/components/public/public-header'
import PublicFooter from '@/components/public/public-footer'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${playfair.variable} ${cairo.variable}`}>
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  )
}
