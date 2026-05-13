'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero.jpg"
          alt="Interior sofisticado do Alma Negra Bistrô"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-base/40 to-base" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-xs tracking-[0.4em] uppercase mb-6"
        >
          São Paulo — Est. 2018
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-[9rem] text-cream leading-none mb-6 italic"
        >
          Alma Negra
          <br />
          <span className="text-gold not-italic">Bistrô</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/60 text-lg md:text-xl font-light max-w-md mb-12 font-display italic"
        >
          Onde o sabor encontra a escuridão perfeita
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={() => scrollTo('cardapio')}>
            Ver Cardápio
          </Button>
          <Button variant="ghost" size="lg" onClick={() => scrollTo('reservas')}>
            Fazer Reserva
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo('conceito')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream/40 hover:text-gold transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
