import Header from '@/components/sections/Header'
import Community from '@/components/sections/Community'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <Community />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
