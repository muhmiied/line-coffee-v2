"use client"

import { motion } from "framer-motion"
import { Coffee, Package, Truck, ShieldCheck } from "lucide-react"
import { features } from "@/lib/data"

const ICONS = [Coffee, Package, Truck, ShieldCheck]

export function HomeFeatures() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#B6885E]/12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className="flex flex-col items-center gap-4 bg-[#15100B]/60 px-8 py-10 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B6885E]/28 bg-[#1B140F] text-[#D6A373] shadow-[0_0_28px_-6px_rgba(182,136,94,0.35)]">
                  <Icon className="h-7 w-7" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-[#F5E6D8]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#B79B85]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="section-divider absolute inset-x-0 bottom-0" />
    </section>
  )
}
