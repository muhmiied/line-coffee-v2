'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Heart, ShoppingBag, User, Menu, X, Package } from 'lucide-react'
import { MobileMenu } from './mobile-menu'
import { LineCoffeeLogo } from './logo'
import type { NavLink } from './header'

const BAR_KEY = 'lc-bar-v1'
const E = [0.22, 1, 0.36, 1] as const

export function HeaderClient({ links }: { links: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [barVisible, setBarVisible] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      if (!sessionStorage.getItem(BAR_KEY)) setBarVisible(true)
    }, 0)
    return () => clearTimeout(id)
  }, [])

  function dismissBar() {
    sessionStorage.setItem(BAR_KEY, '1')
    setBarVisible(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
      <div className="fixed top-0 inset-x-0 z-50">

        {/* ── Announcement Bar ── */}
        <AnimatePresence>
          {barVisible && (
            <motion.div
              key="bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: E }}
              className="overflow-hidden"
            >
              <div className="lc-announcement-bar">
                <div className="relative flex items-center justify-center py-2.5 px-12">
                  <div className="flex items-center gap-2.5">
                    <Package className="w-3 h-3 shrink-0 text-lc-gold-light" strokeWidth={2} aria-hidden="true" />
                    <p className="lc-announcement-text">
                      توصيل مجاني على الطلبات فوق{' '}
                      <Link href="/products" className="text-lc-gold-light font-semibold hover:underline underline-offset-2">
                        200 ج
                      </Link>
                      {' '}— اطلب الآن وتوصيلك في اليوم التالي
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={dismissBar}
                    className="absolute top-1/2 -translate-y-1/2 end-4 text-lc-cream-dim hover:text-lc-cream transition-colors duration-200 opacity-60 hover:opacity-100"
                    aria-label="إغلاق الإشعار"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main Header ── */}
        <header className={`lc-header ${scrolled ? 'lc-header--scrolled' : ''}`}>
          {/* Mobile: 2-col | Desktop: [1fr auto 1fr] → Logo | Nav centered | Icons */}
          <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">

            {/* Col 1 — Logo (rightmost in RTL) */}
            <div className="flex justify-start">
              <Link
                href="/"
                aria-label="Line Coffee"
                className="text-white hover:opacity-85 transition-opacity duration-200"
              >
                <LineCoffeeLogo />
              </Link>
            </div>

            {/* Col 2 — Nav (centered, hidden on mobile → removed from grid flow) */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {links.map((link) => (
                <Link key={link.href + link.label} href={link.href} className="lc-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Col 3 (or Col 2 on mobile) — Icons (leftmost in RTL) */}
            <div className="flex justify-end items-center gap-0.5">
              <Link href="/search" aria-label="Search" className="lc-header-icon hidden sm:flex">
                <Search className="w-4.5 h-4.5" strokeWidth={1.5} />
              </Link>

              <Link href="/wishlist" aria-label="Wishlist" className="lc-header-icon hidden sm:flex">
                <Heart className="w-4.5 h-4.5" strokeWidth={1.5} />
              </Link>

              <Link href="/cart" aria-label="سلة التسوق" className="lc-header-icon relative">
                <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.5} />
                <span className="lc-cart-badge" aria-hidden="true">0</span>
              </Link>

              <Link href="/account" aria-label="Account" className="lc-header-icon hidden sm:flex">
                <User className="w-4.5 h-4.5" strokeWidth={1.5} />
              </Link>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="lc-header-icon lg:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="فتح القائمة"
                aria-haspopup="dialog"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <MobileMenu
        id="mobile-menu"
        links={links}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
