"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/data"

export function LcProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="luxury-panel group overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0806] via-transparent to-transparent opacity-60" />
        {product.badge && (
          <span className="absolute right-4 top-4 rounded-full bg-gradient-to-br from-[#A8744E] via-[#D6A373] to-[#B6885E] px-3 py-1 text-xs font-semibold text-[#0B0806]">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs text-[#B79B85]">{product.category}</p>
        <h3 className="mt-1 font-serif text-lg font-bold text-[#F5E6D8]">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < product.rating
                  ? "h-3.5 w-3.5 fill-[#D6A373] text-[#D6A373]"
                  : "h-3.5 w-3.5 text-[#4a3a2c]"
              }
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-bold text-[#D6A373]">
              {product.price} ج.م
            </span>
            {product.oldPrice && (
              <span className="text-sm text-[#B79B85] line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
          <button
            aria-label={`أضف ${product.name} إلى السلة`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B6885E]/12 text-[#D6A373] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#A8744E] hover:to-[#B6885E] hover:text-[#0B0806]"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
