import Image from 'next/image'
import Link from 'next/link'

export type LcProductCardProps = {
  slug: string
  name: string
  description?: string | null
  imageUrl?: string | null
  imageAlt?: string
  categoryName?: string | null
  price?: string | null
}

const PRODUCT_FALLBACK_ACCENTS = [
  'bg-[radial-gradient(circle_at_28%_24%,rgba(214,163,115,0.18),transparent_8rem),radial-gradient(circle_at_78%_72%,rgba(82,37,0,0.30),transparent_10rem),linear-gradient(145deg,#1B140F,#0B0806)]',
  'bg-[radial-gradient(circle_at_76%_22%,rgba(182,136,94,0.18),transparent_9rem),radial-gradient(circle_at_22%_78%,rgba(214,163,115,0.10),transparent_10rem),linear-gradient(145deg,#15100B,#0B0806)]',
  'bg-[radial-gradient(circle_at_52%_18%,rgba(214,163,115,0.14),transparent_10rem),radial-gradient(circle_at_68%_84%,rgba(82,37,0,0.34),transparent_11rem),linear-gradient(145deg,#1B140F,#120D09_48%,#0B0806)]',
] as const

export default function LcProductCard({
  slug,
  name,
  description,
  imageUrl,
  imageAlt,
  categoryName,
  price,
}: LcProductCardProps) {
  const fallbackAccent = PRODUCT_FALLBACK_ACCENTS[slug.length % PRODUCT_FALLBACK_ACCENTS.length]

  return (
    <Link
      href={`/products/${slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#B6885E]/20 bg-[linear-gradient(150deg,rgba(27,20,15,0.90),rgba(18,13,9,0.84)_58%,rgba(35,19,10,0.78))] shadow-[0_20px_62px_rgba(0,0,0,0.40),0_0_26px_rgba(82,37,0,0.14),inset_0_1px_0_rgba(245,230,216,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6A373]/42 hover:shadow-[0_26px_76px_rgba(82,37,0,0.40),0_0_30px_rgba(182,136,94,0.16),inset_0_1px_0_rgba(245,230,216,0.13)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,163,115,0.10),transparent_15rem)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {imageUrl ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#120D09]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,8,6,0.06)_0%,rgba(11,8,6,0.12)_48%,rgba(11,8,6,0.76)_100%)]" />
        </div>
      ) : (
        <div className={`relative aspect-[4/3] w-full overflow-hidden ${fallbackAccent}`}>
          <div className="absolute inset-4 rounded-xl border border-[#B6885E]/14" />
          <div className="absolute left-6 top-6 h-16 w-16 rounded-full border border-[#D6A373]/14 bg-[#FFDCC2]/4 shadow-[0_0_46px_rgba(214,163,115,0.12)]" />
          <div className="absolute bottom-8 left-6 right-10 h-px lc-gold-divider" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0B0806] via-[#0B0806]/76 to-transparent" />
          <div className="absolute bottom-7 right-6 h-20 w-14 rounded-[999px] border border-[#B6885E]/14 bg-[#120D09]/64" />
        </div>
      )}

      <div className="relative flex flex-1 flex-col gap-2 p-4">
        {categoryName && (
          <span className="text-xs font-semibold uppercase text-[#D6A373]/72">
            {categoryName}
          </span>
        )}

        <h3 className="font-heading text-lg font-semibold leading-snug text-[#F5E6D8] transition-colors duration-200 group-hover:text-[#FFDCC2]">
          {name}
        </h3>

        {description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-[#D6B79A]/64">
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          {price ? (
            <p className="rounded-full border border-[#B6885E]/22 bg-[#FFDCC2]/8 px-3 py-1 text-sm font-semibold text-[#FFDCC2] shadow-[inset_0_1px_0_rgba(245,230,216,0.08)]">
              EGP {price}
            </p>
          ) : (
            <span className="text-xs text-[#D6B79A]/56">View details</span>
          )}
          <span className="text-xs font-semibold uppercase text-[#D6A373]/78 transition-colors duration-200 group-hover:text-[#FFDCC2]">
            View
          </span>
        </div>
      </div>
    </Link>
  )
}
