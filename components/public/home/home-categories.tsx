import LcCategoryTile from '@/components/ui/lc-category-tile'
import LcSectionHeading from '@/components/ui/lc-section-heading'
import type { PublicCategory } from '@/lib/db/types'

type Props = {
  categories: PublicCategory[]
}

export default function HomeCategories({ categories }: Props) {
  if (categories.length === 0) return null

  return (
    <section className="relative -mt-10 overflow-hidden px-6 pb-24 pt-20">
      <div className="lc-coffee-texture pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-[#522500]/18 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#b6885e]/8 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <LcSectionHeading
          heading="Our Coffee Range"
          subheading="Explore the collection, from rich Turkish blends to specialty roasts."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <LcCategoryTile
              key={category.id}
              slug={category.slug}
              name={category.name_en}
              description={category.description_en}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
