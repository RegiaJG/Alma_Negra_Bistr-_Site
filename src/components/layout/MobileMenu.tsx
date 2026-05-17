'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  ctaLabel: string
  lang: 'pt' | 'en'
  onToggleLang: () => void
}

export function MobileMenu({ isOpen, onClose, links, ctaLabel, lang, onToggleLang }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleReserve = () => {
    onClose()
    setTimeout(
      () => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' }),
      400
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-50 bg-base flex flex-col p-8"
        >
          <div className="flex justify-between items-center mb-16">
            <span className="font-display text-2xl text-cream tracking-wider">Alma Negra</span>
            <div className="flex items-center gap-4">
              <button onClick={onToggleLang} className="font-body text-xs tracking-widest">
                <span className={lang === 'pt' ? 'text-gold' : 'text-cream/30'}>PT</span>
                <span className="text-cream/20 mx-1">|</span>
                <span className={lang === 'en' ? 'text-gold' : 'text-cream/30'}>EN</span>
              </button>
              <button
                onClick={onClose}
                className="text-cream hover:text-gold transition-colors"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-8 flex-1">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-display text-4xl text-cream/80 hover:text-gold transition-colors italic"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button variant="outline" size="lg" className="w-full" onClick={handleReserve}>
              {ctaLabel}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
