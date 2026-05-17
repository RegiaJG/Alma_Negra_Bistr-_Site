'use client'

import { Instagram, Facebook } from 'lucide-react'
import { RESTAURANT } from '@/lib/constants'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-cream/10 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl text-cream italic mb-4">Alma Negra Bistrô</h3>
            <p className="text-cream/50 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-cream/30 mb-5">{t.footer.navLabel}</p>
            <ul className="flex flex-col gap-3">
              {t.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-cream/30 mb-5">{t.footer.socialLabel}</p>
            <div className="flex gap-4 mb-6">
              <a
                href={RESTAURANT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={RESTAURANT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-cream/30 text-xs leading-relaxed">{RESTAURANT.address}</p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs">
            © {new Date().getFullYear()} Alma Negra Bistrô. {t.footer.rights}
          </p>
          <p className="text-cream/25 text-xs">
            {t.footer.credit} <span className="text-gold/60">Lucas Costa Nogueira</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
