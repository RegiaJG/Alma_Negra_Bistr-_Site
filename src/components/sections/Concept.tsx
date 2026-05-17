'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/lib/language-context'

export function Concept() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="conceito" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/chef.jpg"
              alt="Chef Philippe Arantes do Alma Negra Bistrô"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent" />
          </div>
          <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold/40 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold/40 pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 bg-base/80 backdrop-blur-sm p-4 border border-cream/10">
            <p className="font-display text-xl text-gold italic">Chef Philippe Arantes</p>
            <p className="text-cream/60 text-xs tracking-widest uppercase mt-1">{t.concept.chefCaption}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <Badge variant="gold">{t.concept.badge}</Badge>

          <h2 className="font-display text-5xl lg:text-6xl text-cream leading-tight italic">
            {t.concept.title}
          </h2>

          <div className="w-16 h-0.5 bg-gold" />

          <p className="text-cream/70 leading-relaxed text-lg">{t.concept.p1}</p>

          <p className="text-cream/60 leading-relaxed">{t.concept.p2}</p>

          <div className="grid grid-cols-3 gap-6 pt-4">
            {t.concept.stats.map((stat) => (
              <div key={stat.label} className="border-l border-gold/30 pl-4">
                <p className="font-display text-3xl text-gold italic">{stat.value}</p>
                <p className="text-cream/50 text-xs tracking-wider uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
