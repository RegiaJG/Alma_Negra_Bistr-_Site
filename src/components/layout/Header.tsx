'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'
import { Button } from '@/components/ui/Button'

type Lang = 'pt' | 'en'

const nav = {
  pt: [
    { href: '#conceito', label: 'Conceito' },
    { href: '#cardapio', label: 'Cardápio' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#localizacao', label: 'Localização' },
  ],
  en: [
    { href: '#conceito', label: 'Concept' },
    { href: '#cardapio', label: 'Menu' },
    { href: '#galeria', label: 'Gallery' },
    { href: '#localizacao', label: 'Location' },
  ],
}

const cta = { pt: 'Reservar Mesa', en: 'Book a Table' }

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('pt')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') setLang(saved)
  }, [])

  const toggleLang = () => {
    const next: Lang = lang === 'pt' ? 'en' : 'pt'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const handleReserve = () => {
    document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = nav[lang]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-base/95 backdrop-blur-md border-b border-cream/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl text-cream tracking-wider italic">
            Alma Negra
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleLang} className="font-body text-xs tracking-widest">
              <span className={lang === 'pt' ? 'text-gold' : 'text-cream/30'}>PT</span>
              <span className="text-cream/20 mx-1">|</span>
              <span className={lang === 'en' ? 'text-gold' : 'text-cream/30'}>EN</span>
            </button>
            <Button variant="outline" size="sm" onClick={handleReserve}>
              {cta[lang]}
            </Button>
          </div>

          <button
            className="lg:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        ctaLabel={cta[lang]}
        lang={lang}
        onToggleLang={toggleLang}
      />
    </>
  )
}
