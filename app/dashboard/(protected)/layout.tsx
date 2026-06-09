import { requireAdmin } from '@/lib/auth/require-admin'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const adminUser = await requireAdmin()

  return (
    <div className="min-h-screen bg-[#120d0a] text-stone-100">
      <header className="border-b border-amber-100/15 bg-[#1b130f]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-200/70">
              Line Coffee
            </p>
            <p className="text-lg font-semibold">Admin</p>
          </div>
          <div className="text-right text-sm">
            <p className="font-medium text-stone-100">{adminUser.full_name}</p>
            <p className="text-stone-400">{adminUser.email}</p>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
    </div>
  )
}
