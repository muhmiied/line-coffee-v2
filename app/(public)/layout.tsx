import { Header }         from '@/components/public/layout/header'
import { Footer }         from '@/components/public/layout/footer'
import { WhatsAppButton } from '@/components/public/layout/whatsapp-button'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
