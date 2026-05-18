import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/sections/Footer'
import { Badge } from '@/components/ui/Badge'
import { MENU_ITEMS } from '@/lib/constants'
import type { MenuItem, MenuCategory } from '@/types'

export const metadata: Metadata = {
  title: 'Cardápio Completo | Alma Negra Bistrô',
  description:
    'Conheça nosso cardápio completo com entradas, pratos principais, sobremesas e drinks artesanais.',
}

const categoryLabels: Record<MenuCategory, string> = {
  entradas: 'Entradas',
  pratos: 'Pratos Principais',
  sobremesas: 'Sobremesas',
  drinks: 'Drinks',
}

function MenuItemFull({ item }: { item: MenuItem }) {
  return (
    <div className="group flex gap-6 p-6 border border-cream/10 hover:border-gold/30 transition-colors duration-300">
      <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="font-display text-2xl text-cream italic">{item.name}</h3>
          <span className="text-gold font-display text-xl flex-shrink-0">{item.price}</span>
        </div>
        <p className="text-cream/60 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export default function Cardapio() {
  const categories = Object.keys(MENU_ITEMS) as MenuCategory[]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-base pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cream/40 text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300 mb-14">
            <ArrowLeft size={12} /> Voltar ao início
          </Link>

          <div className="text-center mb-20">
            <Badge variant="gold" className="mb-4">Cardápio Completo</Badge>
            <h1 className="font-display text-6xl text-cream italic mb-4">Nossa Cozinha</h1>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          {categories.map((category) => (
            <section key={category} className="mb-16">
              <h2 className="font-display text-3xl text-gold italic mb-8 border-b border-cream/10 pb-4">
                {categoryLabels[category]}
              </h2>
              <div className="flex flex-col gap-4">
                {MENU_ITEMS[category].map((item) => (
                  <MenuItemFull key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}

          <div className="pt-8 border-t border-cream/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cream/40 text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300">
              <ArrowLeft size={12} /> Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
