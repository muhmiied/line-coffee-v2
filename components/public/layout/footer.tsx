import Link from 'next/link'
import { getPublicCategories } from '@/lib/db/categories'
import type { PublicCategory } from '@/lib/db/types'

const EXPLORE_LINKS = [
  { href: '/products/category/make-your-espresso', label: 'اصنع إسبريسوك' },
  { href: '/products/category/make-your-flavor',   label: 'اصنع نكهتك'    },
  { href: '/about',                                 label: 'من نحن'         },
  { href: '/blog',                                  label: 'المدونة'        },
  { href: '/contact',                               label: 'تواصل معنا'     },
]

const LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'سياسة الخصوصية' },
  { href: '/terms-of-use',   label: 'الشروط والأحكام' },
  { href: '/return-policy',  label: 'سياسة الإرجاع'   },
]

const CATEGORY_FALLBACK = [
  'قهوة تركية',
  'إسبريسو',
  'قهوة سهلة',
  'قهوة بالنكهات',
  'كابتشينو',
]

export async function Footer() {
  let categories: PublicCategory[] = []
  try {
    categories = await getPublicCategories()
  } catch {
    categories = []
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-lc-bg-deep border-t border-lc-border mt-auto" aria-label="تذييل الصفحة">

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-5 group">
              <span className="font-display text-lc-cream text-[10px] tracking-[0.3em] uppercase transition-colors duration-200 group-hover:text-lc-gold-light">
                Line
              </span>
              <span className="font-display text-lc-gold text-xl tracking-[0.18em] uppercase font-semibold">
                Coffee
              </span>
            </Link>
            <p className="text-lc-cream-dim text-sm leading-relaxed mb-6 max-w-xs">
              خلطات قهوة فاخرة مصنوعة بعناية، لأجل اللحظة المثالية في كل كوب.
            </p>
            <div className="flex items-center gap-2.5">
              <SocialLink href="https://wa.me/201004761171" label="واتساب">
                <WhatsAppIcon />
              </SocialLink>
              <SocialLink href="https://instagram.com/linecoffee.eg" label="إنستغرام">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://facebook.com/linecoffee" label="فيسبوك">
                <FacebookIcon />
              </SocialLink>
            </div>
          </div>

          {/* Products */}
          <div>
            <FooterHeading>منتجاتنا</FooterHeading>
            <ul className="space-y-3">
              {categories.length > 0
                ? categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        href={`/products/category/${cat.slug}`}
                        className="text-lc-cream-dim text-sm hover:text-lc-gold transition-colors duration-200"
                      >
                        {cat.name_ar ?? cat.name_en}
                      </Link>
                    </li>
                  ))
                : CATEGORY_FALLBACK.map((name) => (
                    <li key={name}>
                      <Link
                        href="/products"
                        className="text-lc-cream-dim text-sm hover:text-lc-gold transition-colors duration-200"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <FooterHeading>استكشف</FooterHeading>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-lc-cream-dim text-sm hover:text-lc-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>تواصل معنا</FooterHeading>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 text-lc-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-lc-cream-dim text-xs mb-1">واتساب وأوردر</p>
                  <a
                    href="https://wa.me/201004761171"
                    className="text-lc-cream text-sm hover:text-lc-gold transition-colors duration-200"
                  >
                    0100 476 1171
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="w-4 h-4 text-lc-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-lc-cream-dim text-xs mb-1">ساعات العمل</p>
                  <p className="text-lc-cream text-sm">الأحد – الخميس، 9ص – 6م</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-lc-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-lc-cream-dim text-xs order-2 sm:order-1">
            © {year} Line Coffee. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-5 order-1 sm:order-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lc-cream-dim text-xs hover:text-lc-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Primitives ── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lc-cream text-xs font-semibold tracking-widest uppercase mb-5">
      {children}
    </h3>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-lc-surface border border-lc-border flex items-center justify-center text-lc-cream-dim hover:text-lc-gold hover:border-lc-gold/40 transition-all duration-200"
    >
      {children}
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
