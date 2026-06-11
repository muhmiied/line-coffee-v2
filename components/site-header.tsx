'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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

function LogoMark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D6A373]/40 bg-[radial-gradient(circle_at_50%_30%,rgba(214,163,115,0.3),rgba(27,20,15,0.9))] shadow-[0_0_18px_rgba(182,136,94,0.22)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D6A373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight text-[#F5E6D8]">LINE</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[#D6A373]/80">Coffee</span>
      </span>
    </span>
  )
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {announcementVisible && (
        <div className="relative flex items-center justify-center bg-[#2A1A0E] px-10 py-2.5 text-center text-xs font-medium text-[#D6A373]">
          <span dir="rtl" className="font-arabic">شحن مجاني على الطلبات فوق ٢٠٠ جنيه داخل القاهرة والجيزة</span>
          <button
            type="button"
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Close announcement"
            className="absolute right-4 flex h-6 w-6 items-center justify-center text-[#D6A373]/60 transition-colors hover:text-[#D6A373]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      <div className={`relative border-b transition-all duration-300 ${scrolled ? 'lc-glass border-[#B6885E]/20 shadow-[0_14px_42px_rgba(0,0,0,0.42)]' : 'border-transparent bg-[#0B0806]/40 backdrop-blur-sm'}`}>
        <div className="lc-header-sweep pointer-events-none" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" />

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-6">
          <Link href="/" aria-label="Line Coffee Home" className="shrink-0 rounded-lg transition-opacity duration-200 hover:opacity-90">
            <LogoMark />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative text-sm font-medium transition-colors duration-200 ${active ? 'text-[#FFDCC2]' : 'text-[#F5E6D8]/70 hover:text-[#FFDCC2]'}`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#FFDCC2]/90 via-[#D6A373]/72 to-[#B6885E]/42 shadow-[0_0_12px_rgba(214,163,115,0.34)] transition-transform duration-300 ${active ? 'scale-x-100' : 'origin-left scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button type="button" className="hidden items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-semibold text-[#F5E6D8]/70 transition-colors hover:text-[#FFDCC2] md:flex" aria-label="Switch language">
              EN <ChevronDownIcon />
            </button>
            <button type="button" aria-label="Search" className="flex h-11 w-11 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]">
              <SearchIcon />
            </button>
            <button type="button" aria-label="Cart" className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]">
              <CartIcon />
              <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#D6A373] text-[9px] font-bold text-[#1B140F]">2</span>
            </button>
            <Link href="/account" aria-label="Account" className="hidden h-11 w-11 items-center justify-center rounded-full text-[#F5E6D8]/65 transition-colors hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2] md:flex">
              <UserIcon />
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="ml-1 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-[#B6885E]/24 bg-[#1B140F]/62 p-2.5 transition-colors hover:bg-[#1B140F]/80 md:hidden"
            >
              <span className={`block h-px w-5 origin-center bg-[#FFDCC2]/80 transition-all duration-200 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-[#FFDCC2]/60 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px origin-center bg-[#FFDCC2]/60 transition-all duration-200 ${mobileOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-[14px]'}`} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-[#B6885E]/18 bg-[#120D09]/96 px-5 pb-5 pt-3 backdrop-blur-lg md:hidden">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ href, label }) => {
                const active = isActive(pathname, href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex min-h-[48px] items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-colors duration-150 ${active ? 'bg-[#522500]/28 text-[#FFDCC2]' : 'text-[#F5E6D8]/70 hover:bg-[#1B140F]/80 hover:text-[#FFDCC2]'}`}
                    >
                      {active && <span aria-hidden="true" className="h-4 w-0.5 shrink-0 rounded-full bg-gradient-to-b from-[#D6A373] to-[#B6885E]" />}
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
