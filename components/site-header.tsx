"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Search, ShoppingBag, User, Coffee, X, Menu } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/shop", label: "المنتجات" },
  { href: "/about", label: "قصتنا" },
  { href: "/contact", label: "تواصل معنا" },
]

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

function LogoMark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D6A373]/40 bg-[radial-gradient(circle_at_50%_30%,rgba(214,163,115,0.3),rgba(27,20,15,0.9))] shadow-[0_0_18px_-4px_rgba(182,136,94,0.4)]">
        <Coffee className="h-[18px] w-[18px] text-[#D6A373]" strokeWidth={1.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-bold tracking-tight text-[#F5E6D8]">
          لاين
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[#D6A373]/80">
          COFFEE
        </span>
      </span>
    </span>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {announcementVisible && (
        <div className="relative flex items-center justify-center bg-[#2A1A0E] px-10 py-2.5 text-center text-xs font-medium text-[#D6A373]">
          <span>شحن مجاني على الطلبات فوق ٢٠٠ جنيه داخل القاهرة والجيزة</span>
          <button
            type="button"
            onClick={() => setAnnouncementVisible(false)}
            aria-label="إغلاق الإعلان"
            className="absolute left-4 flex h-6 w-6 items-center justify-center text-[#D6A373]/60 transition-colors hover:text-[#D6A373]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div
        className={`relative border-b transition-all duration-300 ${
          scrolled
            ? "nav-glass shadow-[0_14px_42px_-12px_rgba(0,0,0,0.6)]"
            : "border-transparent bg-[#0B0806]/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-6">
          <Link
            href="/"
            aria-label="الصفحة الرئيسية - لاين كوفي"
            className="shrink-0 rounded-lg transition-opacity duration-200 hover:opacity-90"
          >
            <LogoMark />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-8 md:flex"
            aria-label="التنقل الرئيسي"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#D6A373]"
                      : "text-[#F5E6D8]/70 hover:text-[#D6A373]"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-l from-[#D6A373] via-[#B6885E] to-transparent transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "origin-right scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="بحث"
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#D6A373]/10 hover:text-[#D6A373]"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              aria-label="السلة"
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#D6A373]/10 hover:text-[#D6A373]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute left-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#D6A373] text-[9px] font-bold text-[#1B140F]">
                2
              </span>
            </button>
            <Link
              href="/account"
              aria-label="الحساب"
              className="hidden h-11 w-11 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#D6A373]/10 hover:text-[#D6A373] md:flex"
            >
              <User className="h-[18px] w-[18px]" />
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="mr-1 flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/24 bg-[#1B140F]/62 transition-colors hover:bg-[#1B140F]/80 md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-[#D6A373]" />
              ) : (
                <Menu className="h-5 w-5 text-[#D6A373]" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            aria-label="قائمة التنقل للموبايل"
            className="border-t border-[#B6885E]/18 bg-[#120D09]/96 px-5 pb-5 pt-3 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ href, label }) => {
                const active = isActive(pathname, href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex min-h-[48px] items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-colors duration-150 ${
                        active
                          ? "bg-[#2A1A0E]/60 text-[#D6A373]"
                          : "text-[#F5E6D8]/70 hover:bg-[#1B140F]/80 hover:text-[#D6A373]"
                      }`}
                    >
                      {active && (
                        <span
                          aria-hidden="true"
                          className="h-4 w-0.5 shrink-0 rounded-full bg-gradient-to-b from-[#D6A373] to-[#B6885E]"
                        />
                      )}
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
