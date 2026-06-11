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
      className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#FFDCC2]/12 bg-[linear-gradient(150deg,rgba(35,16,7,0.86),rgba(13,6,3,0.82)_58%,rgba(31,13,4,0.74))] shadow-[0_18px_58px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,220,194,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFDCC2]/28 hover:shadow-[0_24px_70px_rgba(82,37,0,0.38),inset_0_1px_0_rgba(255,220,194,0.13)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFDCC2]/22 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,220,194,0.08),transparent_15rem)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {imageUrl ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#160a04]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,3,0,0.06)_0%,rgba(8,3,0,0.10)_48%,rgba(8,3,0,0.72)_100%)]" />
        </div>
      ) : (
        <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_34%,rgba(182,136,94,0.18),transparent_10rem),linear-gradient(145deg,#251105,#0d0603)]">
          <div className="absolute h-36 w-36 rounded-full border border-[#FFDCC2]/12 bg-[#FFDCC2]/4 shadow-[0_0_54px_rgba(182,136,94,0.14),inset_0_0_24px_rgba(255,220,194,0.05)]" />
          <div className="absolute top-10 h-14 w-px rounded-full bg-gradient-to-t from-[#FFDCC2]/18 to-transparent" />
          <div className="absolute top-14 ml-12 h-10 w-px rounded-full bg-gradient-to-t from-[#FFDCC2]/14 to-transparent" />
          <div className="relative h-24 w-32">
            <div className="absolute left-3 top-7 h-14 w-20 rounded-b-[2rem] rounded-t-md border border-[#FFDCC2]/18 bg-[#160803] shadow-[inset_0_8px_16px_rgba(255,220,194,0.06)]" />
            <div className="absolute left-3 top-6 h-5 w-20 rounded-full border border-[#FFDCC2]/14 bg-[#090301]" />
            <div className="absolute left-[5.7rem] top-11 h-9 w-8 rounded-r-full border border-l-0 border-[#FFDCC2]/16" />
            <div className="absolute bottom-2 left-0 h-3 w-32 rounded-full border border-[#FFDCC2]/10 bg-[#FFDCC2]/4" />
          </div>
        </div>
      )}

      <div className="relative flex flex-1 flex-col gap-2 p-4">
        {categoryName && (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d6a373]/66">
            {categoryName}
          </span>
        )}

        <h3 className="font-heading text-lg font-semibold leading-snug text-[#fff4ec] transition-colors duration-200 group-hover:text-[#FFDCC2]">
          {name}
        </h3>

        {description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-[#f8dfce]/52">
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          {price ? (
            <p className="rounded-full border border-[#FFDCC2]/12 bg-[#FFDCC2]/8 px-3 py-1 text-sm font-semibold text-[#FFDCC2]">
              EGP {price}
            </p>
          ) : (
            <span className="text-xs text-[#f8dfce]/42">View details</span>
          )}
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d6a373]/72 transition-colors duration-200 group-hover:text-[#FFDCC2]">
            View
          </span>
        </div>
      </div>
    </Link>
  )
}
