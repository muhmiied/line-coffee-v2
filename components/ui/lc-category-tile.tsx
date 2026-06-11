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

export default function LcCategoryTile({
  slug,
  name,
  description,
  imageUrl,
  imageAlt,
  productCount,
}: LcCategoryTileProps) {
  return (
    <Link
      href={`/products/category/${slug}`}
      className="group relative flex min-h-[12.5rem] flex-col justify-end overflow-hidden rounded-[14px] border border-[#FFDCC2]/12 bg-[#170a04]/72 shadow-[0_16px_52px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,220,194,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFDCC2]/30 hover:shadow-[0_22px_62px_rgba(82,37,0,0.36),inset_0_1px_0_rgba(255,220,194,0.12)]"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt ?? name}
          fill
          className="object-cover opacity-45 transition-opacity duration-300 group-hover:opacity-60"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      )}

      {!imageUrl && (
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_18%,rgba(255,220,194,0.14),transparent_7rem),radial-gradient(circle_at_76%_72%,rgba(182,136,94,0.18),transparent_8rem),linear-gradient(145deg,rgba(82,37,0,0.48),rgba(8,3,0,0.18))]" />
          <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-[#FFDCC2]/14 bg-[#FFDCC2]/4 shadow-[0_0_36px_rgba(182,136,94,0.14)]" />
          <div className="absolute right-8 top-8 h-8 w-8 rounded-full border border-[#FFDCC2]/10" />
          <div className="absolute left-5 top-6 h-7 w-4 rotate-[-24deg] rounded-full border border-[#FFDCC2]/12 bg-[#2d1509]/58" />
          <div className="absolute left-12 top-12 h-6 w-3 rotate-[28deg] rounded-full border border-[#FFDCC2]/10 bg-[#3a1a0a]/50" />
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,3,0,0.04)_0%,rgba(8,3,0,0.30)_42%,rgba(8,3,0,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(255,220,194,0.10),transparent_10rem)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFDCC2]/20 to-transparent" />

      <div className="relative z-10 w-full p-4">
        <div className="mb-2.5 h-px w-6 rounded-full bg-[#FFDCC2]/42 transition-all duration-200 group-hover:w-10 group-hover:bg-[#FFDCC2]/72" />

        <p className="font-heading text-base font-semibold leading-snug text-[#fff4ec] transition-colors duration-200 group-hover:text-[#FFDCC2]">
          {name}
        </p>

        {description && (
          <p className="mt-1 line-clamp-1 text-xs leading-snug text-[#f8dfce]/52">
            {description}
          </p>
        )}

        {productCount !== undefined && !description && (
          <p className="mt-0.5 text-xs text-[#f8dfce]/48">
            {productCount} {productCount === 1 ? 'product' : 'products'}
          </p>
        )}

        <p className="mt-2 text-xs font-semibold tracking-[0.08em] text-[#d6a373]/70 transition-colors duration-200 group-hover:text-[#FFDCC2]">
          Explore
        </p>
      </div>
    </Link>
  )
}
