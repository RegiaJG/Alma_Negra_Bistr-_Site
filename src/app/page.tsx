import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Concept } from '@/components/sections/Concept'
import { MenuSection } from '@/components/sections/Menu'
import { GalleryMasonry } from '@/components/sections/Gallery'
import { ReservationForm } from '@/components/sections/Reservations'
import { Location } from '@/components/sections/Location'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Concept />
      <MenuSection />
      <GalleryMasonry />
      <ReservationForm />
      <Location />
      <Footer />
    </main>
  )
}
