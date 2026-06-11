import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-[#B6885E]/20 lc-glass shadow-[0_14px_42px_rgba(0,0,0,0.42)]">
      <div className="lc-header-sweep" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B6885E]/24 to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 rounded-lg transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A373]/45"
          aria-label="Line Coffee Home"
        >
          <img
            src="/brand-assets/logo/line-coffee-logo-full-white.svg"
            alt="Line Coffee"
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative text-sm font-medium text-[#F5E6D8]/72 transition-colors duration-200 hover:text-[#FFDCC2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A373]/35"
            >
              {label}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#FFDCC2]/90 via-[#D6A373]/72 to-[#B6885E]/42 shadow-[0_0_12px_rgba(214,163,115,0.34)] transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div
          aria-hidden="true"
          className="flex h-10 w-10 flex-col justify-center gap-[5px] rounded-full border border-[#B6885E]/24 bg-[#1B140F]/62 p-2.5 shadow-[inset_0_1px_0_rgba(245,230,216,0.08)] md:hidden"
        >
          <span className="block h-px w-5 bg-[#FFDCC2]/72" />
          <span className="block h-px w-5 bg-[#FFDCC2]/54" />
          <span className="block h-px w-[14px] bg-[#FFDCC2]/54" />
        </div>
      </div>
    </header>
  )
}
