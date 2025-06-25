import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import AboutMission from '@/components/sections/AboutMission'
import Books from '@/components/sections/Books'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Community from '@/components/sections/Community'
import Opportunities from '@/components/sections/Opportunities'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <Hero />
        <AboutMission />
        <Books />
        <Testimonials />
        <Community />
        <Opportunities />
        <FAQ />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
