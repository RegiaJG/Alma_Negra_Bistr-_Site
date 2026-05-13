'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { RESTAURANT } from '@/lib/constants'

const contactItems = [
  {
    icon: MapPin,
    label: 'Endereço',
    content: RESTAURANT.address,
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Telefone',
    content: RESTAURANT.phone,
    href: `tel:${RESTAURANT.phone}`,
  },
  {
    icon: Mail,
    label: 'E-mail',
    content: RESTAURANT.email,
    href: `mailto:${RESTAURANT.email}`,
  },
]

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="localizacao" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="gold" className="mb-6">Como nos encontrar</Badge>
          <h2 className="font-display text-5xl text-cream italic mb-12">Venha nos visitar</h2>

          <div className="flex flex-col gap-8">
            {contactItems.map(({ icon: Icon, label, content, href }) => (
              <div key={label} className="flex gap-4">
                <Icon size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-cream font-medium mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-cream/60 hover:text-gold transition-colors">
                      {content}
                    </a>
                  ) : (
                    <p className="text-cream/60">{content}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              <Clock size={20} className="text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cream font-medium mb-2">Horários</p>
                <p className="text-cream/60">{RESTAURANT.hours.weekdays}</p>
                <p className="text-cream/60">{RESTAURANT.hours.weekend}</p>
                <p className="text-cream/40 text-sm mt-1">{RESTAURANT.hours.closed}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square bg-base-light border border-cream/10 flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin size={40} className="text-gold mx-auto mb-4" />
            <p className="text-cream/60 text-sm font-body">Jardins, São Paulo</p>
            <p className="text-cream/40 text-xs mt-1 font-body">Rua Oscar Freire, 1247</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
