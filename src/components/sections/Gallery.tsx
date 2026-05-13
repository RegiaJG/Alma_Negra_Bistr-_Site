'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { GALLERY_IMAGES } from '@/lib/constants'
import type { GalleryImage } from '@/types'

export function GalleryMasonry() {
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="galeria" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">Galeria</Badge>
          <h2 className="font-display text-5xl lg:text-6xl text-cream italic">
            Cada detalhe, uma obra
          </h2>
        </motion.div>

        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="break-inside-avoid cursor-pointer group overflow-hidden"
              onClick={() => setSelected(image)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={i % 2 === 0 ? 400 : 500}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-base/0 group-hover:bg-base/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-cream text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body">
                    Ampliar
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-base/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain max-h-[75vh]"
              />
              <p className="text-center text-cream/50 text-sm mt-4 tracking-wider font-body">
                {selected.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
