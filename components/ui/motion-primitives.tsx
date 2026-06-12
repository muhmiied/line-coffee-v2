'use client'

import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1] as const

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.65, delay, ease: E }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: E }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({
  children,
  from = 'end',
  delay = 0,
  className,
}: {
  children: React.ReactNode
  from?: 'start' | 'end'
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'end' ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.7, delay, ease: E }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const staggerParent = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.11, delayChildren: delay ?? 0 },
  }),
}

const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-6% 0px' }}
      custom={delay}
      variants={staggerParent}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  )
}
