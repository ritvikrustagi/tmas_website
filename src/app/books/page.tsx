import Header from '@/components/sections/Header'
import Books from '@/components/sections/Books'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'

export default function BooksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <Books />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
