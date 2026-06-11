import Image from 'next/image'
import Link from 'next/link'

export type LcCategoryTileProps = {
  slug: string
  name: string
  description?: string | null
  imageUrl?: string | null
  imageAlt?: string
  productCount?: number
}

const CATEGORY_FALLBACK_ACCENTS = [
  'bg-[radial-gradient(circle_at_30%_20%,rgba(214,163,115,0.18),transparent_7rem),radial-gradient(circle_at_86%_76%,rgba(82,37,0,0.34),transparent_9rem),linear-gradient(145deg,rgba(27,20,15,0.92),rgba(11,8,6,0.82))]',
  'bg-[radial-gradient(circle_at_76%_22%,rgba(182,136,94,0.18),transparent_8rem),radial-gradient(circle_at_18%_82%,rgba(214,163,115,0.10),transparent_8rem),linear-gradient(145deg,rgba(21,16,11,0.92),rgba(11,8,6,0.84))]',
  'bg-[radial-gradient(circle_at_48%_16%,rgba(214,163,115,0.15),transparent_8rem),radial-gradient(circle_at_74%_86%,rgba(82,37,0,0.32),transparent_10rem),linear-gradient(145deg,rgba(27,20,15,0.88),rgba(18,13,9,0.72)_52%,rgba(11,8,6,0.84))]',
] as const

export default function LcCategoryTile({
  slug,
  name,
  description,
  imageUrl,
  imageAlt,
  productCount,
}: LcCategoryTileProps) {
  const fallbackAccent = CATEGORY_FALLBACK_ACCENTS[slug.length % CATEGORY_FALLBACK_ACCENTS.length]

  return (
    <Link
      href={`/products/category/${slug}`}
      className="group relative flex min-h-[12.75rem] flex-col justify-end overflow-hidden rounded-[14px] border border-[#B6885E]/20 bg-[linear-gradient(145deg,rgba(27,20,15,0.86),rgba(18,13,9,0.78)_52%,rgba(11,8,6,0.72))] shadow-[0_18px_56px_rgba(0,0,0,0.38),0_0_26px_rgba(82,37,0,0.14),inset_0_1px_0_rgba(245,230,216,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6A373]/42 hover:shadow-[0_24px_66px_rgba(82,37,0,0.38),0_0_28px_rgba(182,136,94,0.16),inset_0_1px_0_rgba(245,230,216,0.12)]"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt ?? name}
          fill
          className="object-cover opacity-42 transition-opacity duration-300 group-hover:opacity-56"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      )}

      {!imageUrl && (
        <div aria-hidden="true" className={`absolute inset-0 ${fallbackAccent}`}>
          <div className="absolute inset-4 rounded-xl border border-[#B6885E]/12" />
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-[#D6A373]/14 bg-[#FFDCC2]/4 shadow-[0_0_42px_rgba(214,163,115,0.12)]" />
          <div className="absolute left-5 top-7 h-px w-20 lc-gold-divider" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0B0806] via-[#0B0806]/72 to-transparent" />
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,8,6,0.08)_0%,rgba(11,8,6,0.34)_42%,rgba(11,8,6,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(214,163,115,0.12),transparent_10rem)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px lc-gold-divider" />

      <div className="relative z-10 w-full p-4">
        <div className="mb-2.5 h-px w-6 rounded-full bg-[#D6A373]/62 transition-all duration-200 group-hover:w-10 group-hover:bg-[#FFDCC2]/82" />

        <p className="font-heading text-base font-semibold leading-snug text-[#F5E6D8] transition-colors duration-200 group-hover:text-[#FFDCC2]">
          {name}
        </p>

        {description && (
          <p className="mt-1 line-clamp-1 text-xs leading-snug text-[#D6B79A]/66">
            {description}
          </p>
        )}

        {productCount !== undefined && !description && (
          <p className="mt-0.5 text-xs text-[#D6B79A]/58">
            {productCount} {productCount === 1 ? 'product' : 'products'}
          </p>
        )}

        <p className="mt-2 text-xs font-semibold text-[#D6A373]/78 transition-colors duration-200 group-hover:text-[#FFDCC2]">
          Explore
        </p>
      </div>
    </Link>
  )
}
