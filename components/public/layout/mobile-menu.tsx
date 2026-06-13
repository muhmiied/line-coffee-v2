'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { X, ShoppingBag } from 'lucide-react'
import { LineCoffeeLogo } from './logo'
import type { NavLink } from './header'

type MobileMenuProps = {
  id: string
  links: NavLink[]
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ id, links, isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-lc-bg-deep/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel — slides in from start side (right in RTL) */}
          <motion.div
            key="panel"
            id={id}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.8 }}
            className="fixed inset-y-0 start-0 z-50 w-[82vw] max-w-xs bg-lc-surface border-e border-lc-border flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.6)]"
            role="dialog"
            aria-modal="true"
            aria-label="القائمة الرئيسية"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-lc-border">
              <Link href="/" onClick={onClose} className="text-white hover:opacity-80 transition-opacity">
                <LineCoffeeLogo />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full text-lc-cream-muted hover:text-lc-cream hover:bg-lc-surface-soft transition-all duration-200"
                aria-label="إغلاق القائمة"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4" aria-label="القائمة المحمولة">
              <ul className="space-y-0.5">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.04, duration: 0.22 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center px-4 py-3 rounded-lg text-lc-cream-muted text-sm hover:text-lc-cream hover:bg-lc-surface-soft transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="px-4 pb-8 pt-4 border-t border-lc-border">
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-lc-gold/10 border border-lc-gold/20 text-lc-gold hover:bg-lc-gold/20 transition-all duration-200"
              >
                <ShoppingBag className="w-4.5 h-4.5 shrink-0" />
                <span className="text-sm font-arabic">سلة التسوق</span>
                <span className="ms-auto w-5 h-5 rounded-full bg-lc-gold text-lc-bg text-[10px] font-bold flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
