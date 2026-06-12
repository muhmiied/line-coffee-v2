'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { ProductWithVariants } from '@/lib/db/types'
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion-primitives'
import { ProductCard } from '@/components/public/products/product-card'

export function BestSellersSectionClient({
  products,
}: {
  products: ProductWithVariants[]
}) {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0b0806' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 75% at 50% 50%, rgba(182,136,94,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading row */}
        <FadeUp className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="premium-section-kicker mb-5">الأكثر طلباً</p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: '#f5e6d8' }}
            >
              المنتجات{' '}
              <span className="text-gradient">المميزة</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="premium-button-outline px-6 py-2.5 rounded-full text-sm flex items-center gap-2 shrink-0"
          >
            عرض الكل
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </FadeUp>

        {products.length === 0 ? (
          <FadeUp>
            <div
              className="luxury-panel rounded-2xl py-20 text-center"
              style={{ color: '#a08060' }}
            >
              <p className="text-sm">سيتم إضافة المنتجات قريباً</p>
            </div>
          </FadeUp>
        ) : (
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
    </section>
  )
}
