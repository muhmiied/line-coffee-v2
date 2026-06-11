"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { LcButton } from "@/components/ui/lc-button"

export function HomeStory() {
  return (
    <section className="cinematic-section relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="premium-image-card relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/story-roastery.png"
              alt="حرفي التحميص في مقهى لاين"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0806] via-transparent to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="premium-section-kicker">قصتنا</span>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#F5E6D8] md:text-5xl">
              شغفٌ يبدأ من الحبة الأولى
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#B79B85]">
              <p>
                في لاين، نؤمن أن فنجان القهوة المثالي يبدأ من اختيار أجود الحبوب،
                وينتهي بلحظة تذوّق لا تُنسى. نختار محاصيلنا بعناية من أفضل المزارع
                حول العالم.
              </p>
              <p>
                يحمّص خبراؤنا كل دفعة بإتقان، ليخرجوا أعمق النكهات وأنقى العطور،
                حتى يصل إليك مذاقٌ يليق بلحظاتك الخاصة.
              </p>
            </div>
            <div className="mt-8">
              <LcButton href="/about" variant="outline">
                اقرأ المزيد عن لاين
              </LcButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
