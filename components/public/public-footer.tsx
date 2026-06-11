import Link from 'next/link'

const CATEGORY_LINKS = [
  { href: '/products/category/turkish-blends', label: 'Turkish Blends' },
  { href: '/products/category/espresso-blends', label: 'Espresso Blends' },
  { href: '/products/category/easy-coffee', label: 'Easy Coffee' },
  { href: '/products/category/flavor-coffee', label: 'Flavor Coffee' },
  { href: '/products/category/coffee-mix', label: 'Coffee Mix' },
  { href: '/products/category/cappuccino', label: 'Cappuccino' },
  { href: '/products/category/hot-chocolate', label: 'Hot Chocolate' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function PublicFooter() {
  return (
    <footer className="lc-footer-canvas relative overflow-hidden">
      {/* Warm gold divider at top */}
      <div className="h-px lc-gold-divider" />

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Line Coffee Home"
              className="inline-block transition-opacity duration-200 hover:opacity-85"
            >
              <img
                src="/brand-assets/logo/line-coffee-logo-full-white.svg"
                alt="Line Coffee"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-[#B79B85]">
              Premium coffee blends crafted with care — Turkish roasts, espresso, specialty mixes, and more. Family tradition since 2015.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              Categories
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {CATEGORY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#B79B85] transition-colors duration-150 hover:text-[#F5E6D8]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#B79B85] transition-colors duration-150 hover:text-[#F5E6D8]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2.5 text-sm text-[#B79B85]">
              <span>Cairo, Egypt</span>
              <a
                href="tel:+201000000000"
                className="transition-colors duration-150 hover:text-[#F5E6D8]"
              >
                +20 100 000 0000
              </a>
              <a
                href="mailto:hello@linecoffee.com"
                className="transition-colors duration-150 hover:text-[#F5E6D8]"
              >
                hello@linecoffee.com
              </a>
            </address>
          </div>
        </div>

        {/* Warm divider */}
        <div className="mt-12 lc-warm-divider" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-[#B79B85]/55 sm:text-left">
            © 2025 Line Coffee. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <Link
              href="/privacy"
              className="text-xs text-[#B79B85]/55 transition-colors duration-150 hover:text-[#B79B85]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#B79B85]/55 transition-colors duration-150 hover:text-[#B79B85]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
