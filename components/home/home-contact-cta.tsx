"use client"

import { motion } from "framer-motion"
import { LcButton } from "@/components/ui/lc-button"

export function HomeContactCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B6885E]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-section-kicker">انضم إلينا</span>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#F5E6D8] md:text-5xl">
            ابدأ رحلتك مع لاين اليوم
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#B79B85]">
            اكتشف عالماً من النكهات الاستثنائية. اطلب الآن واستمتع بتجربة قهوة
            فاخرة تصل إلى باب منزلك.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <LcButton href="/shop">تسوّق الآن</LcButton>
            <LcButton href="/contact" variant="outline">
              تواصل معنا
            </LcButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
