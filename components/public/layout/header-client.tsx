'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { MobileMenu } from './mobile-menu'
import type { NavLink } from './header'

type HeaderClientProps = {
  links: NavLink[]
}

export function HeaderClient({ links }: HeaderClientProps) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={[
          'fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-300 ease-in-out',
          scrolled
            ? 'bg-lc-bg/95 backdrop-blur-md border-b border-lc-border/60 shadow-[0_1px_24px_rgba(0,0,0,0.6)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Line Coffee — الصفحة الرئيسية"
          >
            <span className="font-display text-lc-cream text-[10px] tracking-[0.3em] uppercase transition-colors duration-200 group-hover:text-lc-gold-light">
              Line
            </span>
            <span className="font-display text-lc-gold text-lg tracking-[0.18em] uppercase font-semibold transition-colors duration-200 group-hover:text-lc-gold-light">
              Coffee
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="التنقل الرئيسي"
          >
            {links.map((link) =>
              link.disabled ? (
                <span
                  key={link.label}
                  className="text-lc-cream-dim text-sm font-arabic cursor-not-allowed select-none"
                  aria-disabled="true"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="relative text-lc-cream-muted text-sm font-arabic transition-colors duration-200 hover:text-lc-cream group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 start-0 h-px w-0 bg-lc-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-full text-lc-cream-muted transition-all duration-200 hover:text-lc-cream hover:bg-lc-surface"
              aria-label="سلة التسوق"
            >
              <ShoppingBag className="w-5 h-5" />
              <span
                className="absolute top-1.5 end-1.5 w-[18px] h-[18px] rounded-full bg-lc-gold text-lc-bg text-[10px] font-bold flex items-center justify-center leading-none"
                aria-hidden="true"
              >
                0
              </span>
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 group"
              onClick={() => setMenuOpen(true)}
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="h-px w-5 bg-lc-cream-muted transition-colors duration-200 group-hover:bg-lc-gold" />
              <span className="h-px w-3.5 bg-lc-cream-muted transition-colors duration-200 group-hover:bg-lc-gold" />
              <span className="h-px w-4 bg-lc-cream-muted transition-colors duration-200 group-hover:bg-lc-gold" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        id="mobile-menu"
        links={links}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
