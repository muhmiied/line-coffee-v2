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
    <header className="sticky top-0 z-50 lc-glass border-b border-[#FFDCC2]/10 shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 transition-opacity duration-200 hover:opacity-80"
          aria-label="Line Coffee — Home"
        >
          <img
            src="/brand-assets/logo/line-coffee-logo-full-white.svg"
            alt="Line Coffee"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative text-sm font-medium text-white/60 transition-colors duration-200 hover:text-[#FFDCC2]"
            >
              {label}
              {/* Beige underline accent on hover */}
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-[#FFDCC2]/55 transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger — visual placeholder, interactive menu is a future phase */}
        <div
          aria-hidden="true"
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
        >
          <span className="block h-px w-5 bg-white/55" />
          <span className="block h-px w-5 bg-white/55" />
          <span className="block h-px w-[14px] bg-white/55" />
        </div>
      </div>
    </header>
  )
}
