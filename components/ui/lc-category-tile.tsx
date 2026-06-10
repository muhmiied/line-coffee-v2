import Link from 'next/link'
import Image from 'next/image'

export type LcCategoryTileProps = {
  slug: string
  name: string
  imageUrl?: string | null
  imageAlt?: string
  productCount?: number
}

export default function LcCategoryTile({
  slug,
  name,
  imageUrl,
  imageAlt,
  productCount,
}: LcCategoryTileProps) {
  return (
    <Link
      href={`/products/category/${slug}`}
      className="group relative flex h-40 items-end overflow-hidden rounded-2xl lc-glass-warm border border-[#FFDCC2]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFDCC2]/25 hover:shadow-[0_8px_32px_rgba(82,37,0,0.35)]"
    >
      {/* Background image if available */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt ?? name}
          fill
          className="object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-55"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      )}

      {/* Gradient overlay ensures text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0800]/80 via-transparent to-transparent" />

      {/* Label */}
      <div className="relative z-10 w-full p-4">
        <p className="font-heading text-sm font-semibold text-white group-hover:text-[#FFDCC2] transition-colors duration-200">
          {name}
        </p>
        {productCount !== undefined && (
          <p className="mt-0.5 text-xs text-white/45">
            {productCount} {productCount === 1 ? 'product' : 'products'}
          </p>
        )}
      </div>
    </Link>
  )
}
