'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'
import BookPreviewContent from '@/components/ui-custom/BookPreviewContent'
import YouTubeVideoSection from '@/components/ui-custom/YouTubeVideoSection'
import AdditionalResources from '@/components/ui-custom/AdditionalResources'
import { books } from '@/components/sections/Books'

// Mapping of slugs to book IDs
const slugToBookId: { [key: string]: number } = {
  'ap-calculus-ab': 1,
  'calc-ab': 1,
  'ap-calculus-bc': 2,
  'calc-bc': 2,
  'ap-physics-1': 3,
  'physics-1': 3,
  'ap-physics-c': 4,
  'physics-c': 4,
  'amc-10-12': 5,
  'amc': 5,
  'amc-formulas': 6,
  'amc-strategies': 6,
  'ap-biology': 7,
  'ap-bio': 7,
  'biology': 7,
  'ap-statistics': 8,
  'ap-stats': 8,
  'statistics': 8,
  'ap-chemistry': 9,
  'ap-chem': 9,
  'chemistry': 9,
  'ap-computer-science': 10,
  'ap-cs': 10,
  'computer-science': 10,
  'cs-principles': 10
}

export default function BookPreviewPage() {
  const params = useParams()
  const router = useRouter()
  const [book, setBook] = useState<typeof books[0] | null>(null)

  useEffect(() => {
    const slug = params.slug as string
    const bookId = slugToBookId[slug]
    
    if (bookId) {
      const foundBook = books.find(b => b.id === bookId)
      if (foundBook) {
        setBook(foundBook)
      } else {
        // Book ID exists but book not found, redirect to books page
        router.replace('/books')
      }
    } else {
      // Invalid slug, redirect to books page
      router.replace('/books')
    }
  }, [params.slug, router])

  if (!book) {
    return (
      <div className="min-h-screen">
        <Header />
        <Breadcrumbs />
        <main className="pt-20 flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Loading...</h1>
            <p className="text-gray-600 dark:text-gray-400">Please wait while we load the book preview.</p>
          </div>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <main className="pt-20">
        <div className="container py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {book.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Complete learning resources with book preview and video lectures
            </p>
          </div>
          
          {/* Book Preview Content */}
          <BookPreviewContent book={book} />
          
          {/* YouTube Video Section */}
          <YouTubeVideoSection bookId={book.id} bookTitle={book.title} />
          
          {/* Additional Resources Section */}
          <AdditionalResources bookId={book.id} />
        </div>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
