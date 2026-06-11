"use client"

import { motion } from "framer-motion"
import { LcButton } from "@/components/ui/lc-button"
import { LcProductCard } from "@/components/ui/lc-product-card"
import { products } from "@/lib/data"

export function HomeFeaturedProducts() {
  return (
    <section className="cinematic-section relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#B6885E]/8 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="premium-section-kicker">اختيارات عملائنا</span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#F5E6D8] md:text-5xl">
              الأكثر مبيعاً
            </h2>
            <p className="mt-2 text-sm text-[#B79B85]">
              أكثر ما يحبّه عملاء لاين كوفي.
            </p>
          </div>
          <LcButton href="/shop" variant="outline" className="hidden shrink-0 sm:inline-flex">
            عرض الكل
          </LcButton>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <LcProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <LcButton href="/shop" variant="outline">
            عرض كل المنتجات
          </LcButton>
        </div>
      </div>
    </section>
  )
}
