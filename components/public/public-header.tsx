'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function PublicHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 lc-glass border-b border-[#B6885E]/20 shadow-[0_14px_42px_rgba(0,0,0,0.42)]">
      {/* Slow CSS-only shine sweep */}
      <div className="lc-header-sweep pointer-events-none" aria-hidden="true" />
      {/* Subtle top gold line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" />
      {/* Subtle inner bottom shimmer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B6885E]/24 to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        {/* Logo — larger on desktop */}
        <Link
          href="/"
          className="shrink-0 rounded-lg transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A373]/45"
          aria-label="Line Coffee Home"
        >
          <img
            src="/brand-assets/logo/line-coffee-logo-full-white.svg"
            alt="Line Coffee"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(pathname, href)
            return (
              <Link
                key={href}
                href={href}
                className={`group relative text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A373]/35 ${
                  active
                    ? 'text-[#FFDCC2]'
                    : 'text-[#F5E6D8]/75 hover:text-[#FFDCC2]'
                }`}
              >
                {label}
                {/* Gold active / hover underline */}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#FFDCC2]/90 via-[#D6A373]/72 to-[#B6885E]/42 shadow-[0_0_12px_rgba(214,163,115,0.34)] transition-transform duration-200 ${
                    active
                      ? 'scale-x-100'
                      : 'origin-left scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen ? 'true' : 'false'}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[#B6885E]/24 bg-[#1B140F]/62 p-2.5 shadow-[inset_0_1px_0_rgba(245,230,216,0.08)] transition-colors duration-200 hover:bg-[#1B140F]/80 md:hidden"
        >
          <span
            className={`block h-px w-5 origin-center bg-[#FFDCC2]/80 transition-all duration-200 ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#FFDCC2]/60 transition-opacity duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px origin-center bg-[#FFDCC2]/60 transition-all duration-200 ${
              mobileOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-[14px]'
            }`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
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
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-colors duration-150 ${
                      active
                        ? 'bg-[#522500]/28 text-[#FFDCC2]'
                        : 'text-[#F5E6D8]/70 hover:bg-[#1B140F]/80 hover:text-[#FFDCC2]'
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
    </header>
  )
}
