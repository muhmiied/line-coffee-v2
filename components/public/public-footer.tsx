import Link from 'next/link'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const CATEGORY_LINKS = [
  { href: '/products/category/turkish-blends', label: 'Turkish Blends' },
  { href: '/products/category/espresso-blends', label: 'Espresso Blends' },
  { href: '/products/category/easy-coffee', label: 'Easy Coffee' },
  { href: '/products/category/flavor-coffee', label: 'Flavor Coffee' },
  { href: '/products/category/coffee-mix', label: 'Coffee Mix' },
  { href: '/products/category/cappuccino', label: 'Cappuccino' },
  { href: '/products/category/hot-chocolate', label: 'Hot Chocolate' },
]

const MAKE_YOUR_PRODUCT_LINKS = [
  { href: '/products', label: 'Shop All Coffee' },
  { href: '/products/category/turkish-blends', label: 'Turkish Blends' },
  { href: '/products/category/espresso-blends', label: 'Espresso Blends' },
  { href: '/products/category/flavor-coffee', label: 'Flavor Coffee' },
  { href: '/products/category/cappuccino', label: 'Cappuccino Mix' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

export default function PublicFooter() {
  return (
    <footer className="lc-footer-canvas relative overflow-hidden">
      {/* Warm gold divider at top */}
      <div className="h-px lc-gold-divider" />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
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
            <p className="mt-4 max-w-[18rem] text-sm leading-relaxed text-[#B79B85]">
              قهوة بلاستيك مصنوعة بعناية — تركي، اسبريسو، مزيج متميز، والمزيد. إرث عائلي منذ 2015.
            </p>
            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Line Coffee on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B6885E]/24 text-[#B79B85] transition-all hover:border-[#D6A373]/48 hover:bg-[#FFDCC2]/8 hover:text-[#F5E6D8]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Line Coffee on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B6885E]/24 text-[#B79B85] transition-all hover:border-[#D6A373]/48 hover:bg-[#FFDCC2]/8 hover:text-[#F5E6D8]"
              >
                <FacebookIcon />
              </a>
            </div>
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

          {/* Make Your Product */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              Make Your Product
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {MAKE_YOUR_PRODUCT_LINKS.map(({ href, label }) => (
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
            <address className="not-italic flex flex-col gap-3 text-sm text-[#B79B85]">
              <span className="flex items-start gap-2">
                <MapPinIcon />
                Cairo, Egypt
              </span>
              <a
                href="tel:+201000000000"
                className="flex items-center gap-2 transition-colors duration-150 hover:text-[#F5E6D8]"
              >
                <PhoneIcon />
                +20 100 000 0000
              </a>
              <a
                href="mailto:hello@linecoffee.com"
                className="flex items-center gap-2 transition-colors duration-150 hover:text-[#F5E6D8]"
              >
                <MailIcon />
                hello@linecoffee.com
              </a>
            </address>
          </div>
        </div>

        {/* Warm divider */}
        <div className="mt-12 lc-warm-divider" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-[#B79B85]/50 sm:text-left">
            © 2025 Line Coffee. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <Link
              href="/privacy"
              className="text-xs text-[#B79B85]/50 transition-colors duration-150 hover:text-[#B79B85]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#B79B85]/50 transition-colors duration-150 hover:text-[#B79B85]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
