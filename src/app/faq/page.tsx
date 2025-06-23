import Header from '@/components/sections/Header'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
