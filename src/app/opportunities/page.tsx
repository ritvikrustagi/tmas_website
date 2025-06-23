import Header from '@/components/sections/Header'
import Opportunities from '@/components/sections/Opportunities'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <Opportunities />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
