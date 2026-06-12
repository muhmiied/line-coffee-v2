import { requireAdmin } from '@/lib/auth/require-admin'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await requireAdmin()

  return <main>{children}</main>
}
