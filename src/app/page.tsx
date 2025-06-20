import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import AboutMission from '@/components/sections/AboutMission'
import Books from '@/components/sections/Books'
import Community from '@/components/sections/Community'
import Opportunities from '@/components/sections/Opportunities'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <AboutMission />
        <Books />
        <Community />
        <Opportunities />
      </main>
      <Footer />
    </div>
  )
}
