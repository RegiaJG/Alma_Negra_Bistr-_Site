import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Providers } from '@/components/layout/Providers'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alma Negra Bistrô | Restaurante em São Paulo',
  description:
    'Onde o sabor encontra a escuridão perfeita. Alta gastronomia autoral com experiência única em São Paulo.',
  openGraph: {
    title: 'Alma Negra Bistrô',
    description: 'Onde o sabor encontra a escuridão perfeita.',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-base text-cream font-body antialiased"><Providers>{children}</Providers></body>
    </html>
  )
}
