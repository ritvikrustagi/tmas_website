import { Metadata } from 'next'
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
import CompetitiveAdvantage from '@/components/ui-custom/CompetitiveAdvantage'

export const metadata: Metadata = {
  title: 'TMAS Academy - Free AP Books & Math Competition Prep | Download Now',
  description: 'Download FREE AP STEM and competitive math study guides! 500+ students used our materials with several students achieving 5s on AP exams and success in contests like the AMC 10/12 and AIME. AP Calculus, Physics, Chemistry, Biology, Statistics, and more!',
  keywords: 'free AP books, AP Calculus prep, AP Physics study guide, AMC 10 practice, AIME qualification, math competition prep, free educational resources',
  openGraph: {
    title: 'TMAS Academy - Free AP Books & Math Competition Prep',
    description: 'Download free, comprehensive study guides for AP exams and math competitions. Join thousands of successful students.',
    url: 'https://tmasacademy.com',
    type: 'website',
    images: [
      {
        url: 'https://tmasacademy.com/og-homepage.png',
        width: 1200,
        height: 630,
        alt: 'TMAS Academy - Free Educational Resources'
      }
    ]
  },
  alternates: {
    canonical: 'https://tmasacademy.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <CompetitiveAdvantage />
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <Hero />
        <AboutMission />
        <Books showAll={false} />
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
