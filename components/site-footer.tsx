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
  { href: '/products/category/cappuccino', label: 'Cappuccino' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Shop All' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

function FooterLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6A373]/40 bg-[radial-gradient(circle_at_50%_30%,rgba(214,163,115,0.3),rgba(27,20,15,0.9))]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D6A373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight text-[#F5E6D8]">LINE</span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#D6A373]/80">Coffee</span>
      </span>
    </span>
  )
}

export default function SiteFooter() {
  return (
    <footer className="lc-footer-canvas relative overflow-hidden">
      <div className="h-px lc-gold-divider" />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" aria-label="Line Coffee Home" className="inline-block transition-opacity duration-200 hover:opacity-85">
              <FooterLogo />
            </Link>
            <p dir="rtl" className="font-arabic mt-5 max-w-[20rem] text-sm leading-relaxed text-[#B79B85]">
              قهوة فاخرة محمّصة بعناية — تركي، اسبريسو، مزيج متميز، والمزيد. إرث عائلي منذ 2015.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Line Coffee on Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/24 text-[#B79B85] transition-all hover:border-[#D6A373]/48 hover:bg-[#FFDCC2]/8 hover:text-[#F5E6D8]">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Line Coffee on Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/24 text-[#B79B85] transition-all hover:border-[#D6A373]/48 hover:bg-[#FFDCC2]/8 hover:text-[#F5E6D8]">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">Categories</h3>
            <ul className="flex flex-col gap-3" role="list">
              {CATEGORY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#B79B85] transition-colors duration-150 hover:text-[#F5E6D8]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">Company</h3>
            <ul className="flex flex-col gap-3" role="list">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#B79B85] transition-colors duration-150 hover:text-[#F5E6D8]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">Contact</h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-[#B79B85]">
              <span className="flex items-start gap-2"><MapPinIcon /> Cairo, Egypt</span>
              <a href="tel:+201000000000" className="flex items-center gap-2 transition-colors duration-150 hover:text-[#F5E6D8]"><PhoneIcon /> +20 100 000 0000</a>
              <a href="mailto:hello@linecoffee.com" className="flex items-center gap-2 transition-colors duration-150 hover:text-[#F5E6D8]"><MailIcon /> hello@linecoffee.com</a>
            </address>
          </div>
        </div>

        <div className="mt-12 lc-warm-divider" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-[#B79B85]/50 sm:text-left">© 2026 Line Coffee. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <Link href="/privacy" className="text-xs text-[#B79B85]/50 transition-colors duration-150 hover:text-[#B79B85]">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-[#B79B85]/50 transition-colors duration-150 hover:text-[#B79B85]">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
