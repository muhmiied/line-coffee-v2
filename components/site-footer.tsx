import Link from "next/link"
import { Phone, Mail, MapPin, Coffee } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const CATEGORY_LINKS = [
  { href: "/shop?category=turkish", label: "قهوة تركي" },
  { href: "/shop?category=espresso", label: "إسبريسو" },
  { href: "/shop?category=easy", label: "قهوة سريعة" },
  { href: "/shop?category=flavored", label: "نكهات مميزة" },
  { href: "/shop?category=cappuccino", label: "كابتشينو" },
]

const COMPANY_LINKS = [
  { href: "/about", label: "من نحن" },
  { href: "/shop", label: "تسوّق الكل" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "الشروط والأحكام" },
]

function FooterLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6A373]/40 bg-[radial-gradient(circle_at_50%_30%,rgba(214,163,115,0.3),rgba(27,20,15,0.9))]">
        <Coffee className="h-5 w-5 text-[#D6A373]" strokeWidth={1.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-bold tracking-tight text-[#F5E6D8]">
          لاين
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#D6A373]/80">
          COFFEE
        </span>
      </span>
    </span>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0806]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link
              href="/"
              aria-label="الصفحة الرئيسية - لاين كوفي"
              className="inline-block transition-opacity duration-200 hover:opacity-85"
            >
              <FooterLogo />
            </Link>
            <p className="mt-5 max-w-[20rem] text-sm leading-relaxed text-[#B79B85]">
              قهوة فاخرة محمّصة بعناية — تركي، إسبريسو، خلطات مميزة، والمزيد. إرثٌ
              عائلي من الشغف بالقهوة الأصيلة.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لاين كوفي على إنستجرام"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/24 text-[#B79B85] transition-all hover:border-[#D6A373]/48 hover:bg-[#D6A373]/10 hover:text-[#F5E6D8]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لاين كوفي على فيسبوك"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/24 text-[#B79B85] transition-all hover:border-[#D6A373]/48 hover:bg-[#D6A373]/10 hover:text-[#F5E6D8]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              الفئات
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {CATEGORY_LINKS.map(({ href, label }) => (
                <li key={label}>
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

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              الشركة
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={label}>
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

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#D6A373]/75">
              تواصل
            </h3>
            <address className="flex flex-col gap-3 text-sm not-italic text-[#B79B85]">
              <span className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 translate-y-0.5" /> القاهرة، مصر
              </span>
              <a
                href="tel:+201000000000"
                className="flex items-center gap-2 transition-colors duration-150 hover:text-[#F5E6D8]"
                dir="ltr"
              >
                <Phone className="h-3.5 w-3.5" /> +20 100 000 0000
              </a>
              <a
                href="mailto:hello@linecoffee.com"
                className="flex items-center gap-2 transition-colors duration-150 hover:text-[#F5E6D8]"
                dir="ltr"
              >
                <Mail className="h-3.5 w-3.5" /> hello@linecoffee.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 h-px bg-[#B6885E]/12" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-[#B79B85]/50 sm:text-right">
            © 2026 لاين كوفي. جميع الحقوق محفوظة.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <Link
              href="/privacy"
              className="text-xs text-[#B79B85]/50 transition-colors duration-150 hover:text-[#B79B85]"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#B79B85]/50 transition-colors duration-150 hover:text-[#B79B85]"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
