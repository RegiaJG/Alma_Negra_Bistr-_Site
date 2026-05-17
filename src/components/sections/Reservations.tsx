'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { useLanguage } from '@/lib/language-context'

const timeSlots = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

export function ReservationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    setLoading(false)

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError(true)
    }
  }

  return (
    <section id="reservas" className="py-32 bg-base-light/20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">{t.reservations.badge}</Badge>
          <h2 className="font-display text-5xl lg:text-6xl text-cream italic mb-4">
            {t.reservations.title}
          </h2>
          <p className="text-cream/50 text-sm">{t.reservations.subtitle}</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 border border-gold/30 bg-gold/5"
          >
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
            <h3 className="font-display text-3xl text-cream italic mb-3">{t.reservations.sent}</h3>
            <p className="text-cream/60">{t.reservations.sentMsg(form.name)}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <Input
              label={t.reservations.fieldName}
              id="name"
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              label={t.reservations.fieldEmail}
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              label={t.reservations.fieldPhone}
              id="phone"
              type="tel"
              placeholder="(11) 00000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Input
              label={t.reservations.fieldGuests}
              id="guests"
              type="number"
              min="1"
              max="20"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            />
            <Input
              label={t.reservations.fieldDate}
              id="date"
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="time"
                className="text-xs font-medium tracking-widest uppercase text-cream/50"
              >
                {t.reservations.fieldTime}
              </label>
              <select
                id="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
                className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors duration-300 font-body"
              >
                <option value="" className="bg-base">{t.reservations.selectDefault}</option>
                {timeSlots.map((ts) => (
                  <option key={ts} value={ts} className="bg-base">{ts}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <Textarea
                label={t.reservations.fieldNotes}
                id="notes"
                rows={3}
                placeholder={t.reservations.notesPlaceholder}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2 flex flex-col items-center gap-4 pt-4">
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? t.reservations.loading : t.reservations.submit}
              </Button>
              {error && (
                <p className="text-wine text-sm text-center">{t.reservations.error}</p>
              )}
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
