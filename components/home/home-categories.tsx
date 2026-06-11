"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { categories } from "@/lib/data"

export function HomeCategories() {
  return (
    <section className="cinematic-section relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#B6885E]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="premium-section-kicker">تصفّح حسب الفئة</span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-[#F5E6D8] md:text-5xl">
            تشكيلة <span className="text-gradient">لاين</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 4) * 0.08,
              }}
            >
              <Link
                href={`/shop?category=${category.slug}`}
                className="group relative flex min-h-[13rem] flex-col justify-end overflow-hidden rounded-2xl border border-[#B6885E]/16 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#D6A373]/45 hover:shadow-[0_24px_64px_-20px_rgba(182,136,94,0.45)]"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0806] via-[#0B0806]/45 to-transparent" />
                <div className="relative z-10 p-5">
                  <div className="mb-2 h-px w-6 rounded-full bg-[#D6A373]/70 transition-all duration-300 group-hover:w-10" />
                  <h3 className="font-serif text-lg font-bold text-[#F5E6D8] transition-colors group-hover:text-[#D6A373]">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-[#B79B85]">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
