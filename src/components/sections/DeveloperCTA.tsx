'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/lib/language-context'

export function DeveloperCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()

  return (
    <section className="py-32 px-6 lg:px-12 bg-base-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-3xl" />
      </div>

      <div ref={ref} className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="gold">{t.developerCta.badge}</Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl lg:text-6xl text-cream italic leading-tight"
        >
          {t.developerCta.title1}
          <br />
          <span className="text-gold">{t.developerCta.title2}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-0.5 bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-cream/60 text-lg leading-relaxed max-w-xl"
        >
          {t.developerCta.disclaimer}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="mailto:D-Gothsublime@hotmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 border border-gold/40 text-cream/80 hover:border-gold hover:text-gold transition-all duration-300 text-sm tracking-widest uppercase font-body"
          >
            <Mail size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            E-mail
          </a>
          <a
            href="https://wa.me/5547991323089"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gold text-base hover:bg-gold-light transition-all duration-300 text-sm tracking-widest uppercase font-body font-medium"
          >
            <MessageCircle size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            WhatsApp
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-cream/25 text-xs tracking-wider"
        >
          D-Gothsublime@hotmail.com &nbsp;·&nbsp; (47) 99132-3089
        </motion.p>
      </div>
    </section>
  )
}
