import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { RESTAURANT } from '@/lib/constants'

const navLinks = [
  { href: '#conceito', label: 'Conceito' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#reservas', label: 'Reservas' },
  { href: '#localizacao', label: 'Localização' },
]

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl text-cream italic mb-4">Alma Negra Bistrô</h3>
            <p className="text-cream/50 text-sm leading-relaxed">
              Onde o sabor encontra a escuridão perfeita. Alta gastronomia autoral em São Paulo.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-cream/30 mb-5">Navegação</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
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
            <p className="text-xs tracking-widest uppercase text-cream/30 mb-5">Redes Sociais</p>
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
            © {new Date().getFullYear()} Alma Negra Bistrô. Todos os direitos reservados.
          </p>
          <p className="text-cream/15 text-xs">
            Desenvolvido por <span className="text-gold/50">Portfólio Web</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
