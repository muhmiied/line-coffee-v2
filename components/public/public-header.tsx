import Link from 'next/link'

export default function PublicHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-amber-100/10 bg-white dark:bg-[#0d0a08]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900 dark:text-amber-200/80"
        >
          Line Coffee
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Home{' '}
            <span className="text-zinc-400 dark:text-zinc-600">/ الرئيسية</span>
          </Link>
          <Link
            href="/products"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Products{' '}
            <span className="text-zinc-400 dark:text-zinc-600">/ المنتجات</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
