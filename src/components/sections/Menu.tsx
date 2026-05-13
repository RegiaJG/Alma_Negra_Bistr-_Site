'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { MENU_ITEMS } from '@/lib/constants'
import type { MenuCategory, MenuItem } from '@/types'

const categories: { key: MenuCategory; label: string }[] = [
  { key: 'entradas', label: 'Entradas' },
  { key: 'pratos', label: 'Pratos Principais' },
  { key: 'sobremesas', label: 'Sobremesas' },
  { key: 'drinks', label: 'Drinks' },
]

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex gap-4 p-4 border border-cream/10 hover:border-gold/30 transition-colors duration-300 bg-base-light">
      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-cream italic">{item.name}</h3>
          <span className="text-gold font-display text-lg flex-shrink-0">{item.price}</span>
        </div>
        <p className="text-cream/50 text-sm leading-relaxed mt-1">{item.description}</p>
      </div>
    </div>
  )
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('pratos')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cardapio" className="py-32 bg-base-light/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">Cardápio</Badge>
          <h2 className="font-display text-5xl lg:text-6xl text-cream italic mb-4">
            Uma sinfonia de sabores
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300',
                activeCategory === cat.key
                  ? 'bg-gold text-base'
                  : 'border border-cream/20 text-cream/60 hover:border-gold/40 hover:text-cream'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            {MENU_ITEMS[activeCategory].map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Link href="/cardapio">
            <Button variant="outline" size="lg">
              Ver Cardápio Completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
