import Header from '@/components/sections/Header'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
