'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
]

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function PublicHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      {announcementVisible && (
        <div className="relative flex items-center justify-center bg-[#2A1A0E] px-10 py-2.5 text-center text-xs font-medium text-[#D6A373]">
          <span>🚀 شحن مجاني على الطلبات فوق 200 جنيه داخل القاهرة والجيزة</span>
          <button
            type="button"
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Close announcement"
            className="absolute right-4 text-[#D6A373]/60 transition-colors hover:text-[#D6A373]"
          >
            <XIcon />
          </button>
        </div>
      )}

      {/* Main nav */}
      <div className="lc-glass border-b border-[#B6885E]/20 shadow-[0_14px_42px_rgba(0,0,0,0.42)]">
        {/* Shine sweep */}
        <div className="lc-header-sweep pointer-events-none" aria-hidden="true" />
        {/* Top gold line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" />
        {/* Bottom shimmer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B6885E]/24 to-transparent" />

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A373]/45 rounded-lg"
            aria-label="Line Coffee Home"
          >
            <img
              src="/brand-assets/logo/line-coffee-logo-full-white.svg"
              alt="Line Coffee"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden flex-1 items-center justify-center gap-7 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A373]/35 ${
                    active
                      ? 'text-[#FFDCC2]'
                      : 'text-[#F5E6D8]/70 hover:text-[#FFDCC2]'
                  }`}
                >
                  {label}
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

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <button
              type="button"
              className="hidden items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-semibold text-[#F5E6D8]/70 transition-colors hover:text-[#FFDCC2] md:flex"
              aria-label="Switch language"
            >
              EN
              <ChevronDownIcon />
            </button>

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]"
            >
              <SearchIcon />
            </button>

            {/* Wishlist */}
            <button
              type="button"
              aria-label="Wishlist"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2] md:flex"
            >
              <HeartIcon />
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Cart"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]"
            >
              <CartIcon />
            </button>

            {/* Account */}
            <Link
              href="/account"
              aria-label="Account"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2] md:flex"
            >
              <UserIcon />
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[#B6885E]/24 bg-[#1B140F]/62 p-2.5 shadow-[inset_0_1px_0_rgba(245,230,216,0.08)] transition-colors hover:bg-[#1B140F]/80 md:hidden"
            >
              <span className={`block h-px w-5 origin-center bg-[#FFDCC2]/80 transition-all duration-200 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-[#FFDCC2]/60 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px origin-center bg-[#FFDCC2]/60 transition-all duration-200 ${mobileOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-[14px]'}`} />
            </button>
          </div>
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
      </div>
    </header>
  )
}
