'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { ProductWithVariants } from '@/lib/db/types'

const TYPE_GRADIENTS: Record<string, string> = {
  turkish_blend:   'linear-gradient(160deg, #3d1a00, #5c2800, #1a0c00)',
  espresso_blend:  'linear-gradient(160deg, #1a0e08, #2d1a0e, #0b0806)',
  easy_coffee:     'linear-gradient(160deg, #2a1508, #3d2010, #150a04)',
  flavor_coffee:   'linear-gradient(160deg, #3a1a04, #5a2a00, #1a0c00)',
  coffee_mix:      'linear-gradient(160deg, #1e1008, #2d1a10, #0d0806)',
  cappuccino:      'linear-gradient(160deg, #3d2518, #5a3820, #1e0e08)',
  hot_chocolate:   'linear-gradient(160deg, #2d1010, #3d1a1a, #120808)',
  standard:        'linear-gradient(160deg, #1b140f, #120d09, #0b0806)',
  custom_espresso: 'linear-gradient(160deg, #3a0a00, #5c1a00, #1a0800)',
  custom_flavor:   'linear-gradient(160deg, #3a1a04, #5c2a00, #1a0c00)',
}

function getLowestPrice(product: ProductWithVariants): number | null {
  if (!product.variants.length) return null
  return Math.min(...product.variants.map((v) => v.sale_price))
}

export function ProductCard({ product }: { product: ProductWithVariants }) {
  const price    = getLowestPrice(product)
  const gradient = TYPE_GRADIENTS[product.product_type] ?? TYPE_GRADIENTS.standard
  const name     = product.name_ar ?? product.name_en
  const altText  = product.image_alt_ar ?? product.image_alt_en ?? name

  return (
    <Link
      href={`/products/${product.slug}`}
      className="luxury-card group relative flex flex-col rounded-2xl overflow-hidden"
    >
      {/* ── Image area ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={altText}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
            style={{ filter: 'brightness(0.82) contrast(1.08) saturate(1.05)' }}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            style={{ background: gradient }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 0, transparent 50%)',
                backgroundSize: '7px 7px',
              }}
            />
          </div>
        )}

        {/* Cinematic bottom fade */}
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: 'linear-gradient(180deg, transparent 35%, rgba(11,8,6,0.85) 100%)',
            opacity: 0.72,
          }}
        />
        {/* Gold hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 35% at 50% 20%, rgba(182,136,94,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-display text-sm font-medium leading-snug mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-lc-gold"
          style={{ color: '#f5e6d8' }}
        >
          {name}
        </h3>

        {product.description_ar && (
          <p className="text-lc-cream-dim text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
            {product.description_ar}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-lc-border/50">
          {price !== null ? (
            <>
              <span className="text-lc-cream-dim text-[10px]">من</span>
              <span
                className="font-display text-base font-semibold"
                style={{ color: '#d6a373' }}
              >
                {price.toLocaleString('ar-EG')}
                <span className="text-xs font-normal text-lc-cream-dim ms-1">ج.م</span>
              </span>
            </>
          ) : (
            <span className="text-lc-cream-dim text-xs">تواصل للسعر</span>
          )}
        </div>
      </div>
    </Link>
  )
}
