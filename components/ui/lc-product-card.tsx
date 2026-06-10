import Link from 'next/link'
import Image from 'next/image'

export type LcProductCardProps = {
  slug: string
  name: string
  description?: string | null
  imageUrl?: string | null
  imageAlt?: string
  categoryName?: string | null
  price?: string | null
}

export default function LcProductCard({
  slug,
  name,
  description,
  imageUrl,
  imageAlt,
  categoryName,
  price,
}: LcProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden lc-glass-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(82,37,0,0.35)]"
    >
      {/* Conditional image slot */}
      {imageUrl ? (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a0d04]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Warm gradient overlay for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ) : (
        /* Placeholder when no image — keeps consistent card height */
        <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#1a0d04] to-[#0d0703] flex items-center justify-center">
          <span className="text-4xl opacity-30">☕</span>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col gap-2 p-4">
        {categoryName && (
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#FFDCC2]/50">
            {categoryName}
          </span>
        )}
        <h3 className="font-heading text-base font-semibold leading-snug text-white group-hover:text-[#FFDCC2] transition-colors duration-200">
          {name}
        </h3>
        {description && (
          <p className="text-xs leading-relaxed text-white/45 line-clamp-2">
            {description}
          </p>
        )}
        {price && (
          <p className="mt-1 text-sm font-medium text-[#FFDCC2]">{price}</p>
        )}
      </div>
    </Link>
  )
}
