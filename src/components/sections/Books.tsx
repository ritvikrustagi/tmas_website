'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ExternalLink, Download, Eye, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'
import BookPreviewModal from '@/components/ui-custom/BookPreviewModal'

// Book slugs for routing
export const bookSlugs: { [key: number]: string } = {
  1: 'ap-calculus-ab',
  2: 'ap-calculus-bc', 
  3: 'ap-physics-1',
  4: 'ap-physics-c',
  5: 'amc-10-12',
  6: 'amc-formulas',
  7: 'ap-biology',
  8: 'ap-statistics',
  9: 'ap-chemistry',
  10: 'ap-computer-science'
}

interface BooksProps {
  showAll?: boolean
}

export const books = [
  {
    id: 6,
    title: 'AMC 10/12 Key Strategies and Formulas',
    author: 'Ritvik Rustagi',
    description: 'Quick reference guide with essential formulas, strategies, and tips for AMC competitions.',
    coverGradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
    pdfPath: '/books/AMC 10_12 Key Strategies and Formulas.pdf',
    badge: 'Quick Reference',
    badgeColor: 'bg-amber-100 text-amber-700',
    problems: '50+',
    pages: '25+',
    size: '2.4 MB'
  },
  {
    id: 5,
    title: 'ACE The AMC 10/12',
    author: 'Ritvik Rustagi',
    description: 'Competition math strategies, problem-solving techniques, and practice problems for AMC success.',
    coverGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    pdfPath: '/books/ACE The AMC 10_12!.pdf',
    badge: 'Competition',
    badgeColor: 'bg-amber-100 text-amber-700',
    problems: '300+',
    pages: '350+',
    size: '37 MB'
  },
  {
    id: 1,
    title: 'ACE AP Calculus AB',
    author: 'Ritvik Rustagi',
    description: 'Comprehensive coverage of AP Calculus AB topics with detailed explanations and practice problems.',
    coverGradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    pdfPath: '/books/ACE_AP_Calculus_AB_by_RitvikRustagi.pdf',
    badge: 'Popular',
    badgeColor: 'bg-blue-100 text-blue-700',
    problems: '150+',
    pages: '280+',
    size: '29 MB'
  },
  {
    id: 2,
    title: 'ACE AP Calculus BC',
    author: 'Ritvik Rustagi',
    description: 'Master advanced calculus topics including series, parametric equations, and polar coordinates.',
    coverGradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    pdfPath: '/books/ACE_AP_Calculus_BC_by_RitvikRustagi.pdf',
    badge: 'Advanced',
    badgeColor: 'bg-blue-100 text-blue-700',
    problems: '200+',
    pages: '300+',
    size: '31 MB'
  },
  {
    id: 3,
    title: 'ACE AP Physics 1',
    author: 'Ritvik Rustagi',
    description: 'Fundamental physics concepts, problem-solving strategies, and exam preparation techniques.',
    coverGradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    pdfPath: '/books/ACE_AP_Physics_1_by_RitvikRustagi.pdf',
    badge: 'Essential',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    problems: '180+',
    pages: '270+',
    size: '28 MB'
  },
  {
    id: 4,
    title: 'ACE AP Physics C: Mechanics',
    author: 'Ritvik Rustagi',
    description: 'Calculus-based mechanics covering kinematics, dynamics, energy, and momentum.',
    coverGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    pdfPath: '/books/ACE_AP_Physics_C_Mech_by_RitvikRustagi.pdf',
    badge: 'Advanced',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    problems: '160+',
    pages: '300+',
    size: '31 MB'
  },
  {
    id: 9,
    title: 'ACE AP Chemistry',
    author: 'Aditya Baisakh',
    description: 'Thorough review of AP Chemistry topics, including practice problems and exam strategies.',
    coverGradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    pdfPath: '/books/ACE_AP_Chemistry_TMAS_Academy.pdf',
    badge: 'Comprehensive',
    badgeColor: 'bg-pink-100 text-pink-700',
    problems: '100+',
    pages: '400+',
    size: '38 MB'
  },
  {
    id: 10,
    title: 'ACE AP Computer Science Principles',
    author: 'Ipsaan Sedhai, Aviva Iykehan',
    description: 'Best AP Computer Science Principles study guide with clear explanations and exam-focused practice.',
    coverGradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    pdfPath: '/books/Free_AP_Computer_Science_Principles_Review_Book.pdf',
    badge: 'Essential',
    badgeColor: 'bg-blue-100 text-blue-700',
    problems: '100+',
    pages: '100+',
    size: '27 MB'
  },
  {
    id: 8,
    title: 'ACE AP Statistics Review Book',
    author: 'Gulshan Bhalrhu, Caden Wang',
    description: 'Best AP Statistics study guide with comprehensive coverage of statistical concepts and exam preparation.',
    coverGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    pdfPath: '/books/Free_AP_Statistics_Review_Book.pdf',
    badge: 'Essential',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    problems: '100+',
    pages: '200+',
    size: '32 MB'
  },
  {
    id: 7,
    title: 'ACE AP Biology',
    author: 'Aditya Baisakh, Amaan Shafi, Abby Trinh',
    description: 'Comprehensive coverage of AP Biology topics with detailed explanations and practice problems.',
    coverGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    pdfPath: '/books/ACE_AP_Biology_Book.pdf',
    badge: 'New',
    badgeColor: 'bg-purple-100 text-purple-700',
    problems: '100+',
    pages: '300+',
    size: '35 MB'
  }
]

export default function Books({ showAll = true }: BooksProps) {
  const [previewBook, setPreviewBook] = useState<typeof books[0] | null>(null)
  const router = useRouter()

  // Display all books for infinite slider on homepage, or limit for books page
  const getDisplayBooks = () => {
    if (showAll) return books // Books page - show all in grid
    
    // Homepage - show all books in infinite slider
    return books
  }
  
  const displayBooks = getDisplayBooks()

  const handleViewBook = (pdfPath: string) => {
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank')
  }

  const handleDownloadBook = (pdfPath: string, bookTitle: string) => {
    // Create a download link
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = bookTitle.replace(/[^a-z0-9]/gi, '_') + '.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreviewBook = (book: typeof books[0]) => {
    const slug = bookSlugs[book.id]
    if (slug) {
      router.push(`/books/${slug}`)
    } else {
      // Fallback to modal if no slug
      setPreviewBook(book)
    }
  }

  return (
    <section id="books" className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            TMAS Academy&apos;s FREE Books
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dive into our collection of books, aligned with the standards of national exams, for APs and math competitions. Each book is packed with problems, detailed solutions, and every topic explained carefully to ensure you master it. 
          </p>
        </AnimatedSection>

        {/* Conditional rendering: Infinite slider for homepage, grid for books page */}
        {!showAll ? (
          /* Infinite Slider for Homepage */
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll" style={{ minWidth: '4500px' }}>
              {/* First set of books */}
              {displayBooks.map((book) => (
                <div key={`first-${book.id}`} className="flex-shrink-0 w-80 mx-4">
                  <Card className="glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-200 h-full">
                    <CardHeader>
                      {/* Book Cover Image */}
                      <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-4 border border-dashed border-gray-300 group-hover:border-gray-400 transition-colors overflow-hidden">
                        <div 
                          className="w-full h-full flex flex-col items-center justify-between p-4 text-white font-bold shadow-lg rounded-lg"
                          style={{
                            background: book.coverGradient,
                          }}
                        >
                          <div className="text-xs font-semibold opacity-80 tracking-wider">TMAS ACADEMY</div>
                          <div className="text-center flex-1 flex items-center">
                            <div className="text-lg font-bold leading-tight text-shadow-lg">
                              {book.title.replace('ACE ', '').split(' ').slice(0, 3).join(' ')}
                            </div>
                          </div>
                          <div className="text-xs opacity-90">{book.author.split(' ').slice(0, 2).join(' ')}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors">
                            {book.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 font-medium">
                            Author: {book.author}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className={`ml-2 text-xs ${book.badgeColor} border-0`}>
                          {book.badge}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {book.description}
                      </p>
                      
                      {/* Book Stats */}
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {book.pages} pages
                        </span>
                        <span>{book.problems} problems</span>
                        <span className="text-xs text-gray-500 col-span-2">Size: {book.size}</span>
                      </div>
                    </CardContent>

                    <CardFooter className="grid w-full grid-cols-[1fr_auto] gap-2 px-4 py-3">
                      <div className="grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full min-w-0 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/20"
                          onClick={() => handlePreviewBook(book)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full min-w-0 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                          onClick={() => handleViewBook(book.pdfPath)}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View PDF
                        </Button>
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="justify-self-end hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => handleDownloadBook(book.pdfPath, book.title)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
              
              {/* Duplicate set for seamless infinite scroll */}
              {displayBooks.map((book) => (
                <div key={`second-${book.id}`} className="flex-shrink-0 w-80 mx-4">
                  <Card className="glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-200 h-full">
                    <CardHeader>
                      {/* Book Cover Image */}
                      <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-4 border border-dashed border-gray-300 group-hover:border-gray-400 transition-colors overflow-hidden">
                        <div 
                          className="w-full h-full flex flex-col items-center justify-between p-4 text-white font-bold shadow-lg rounded-lg"
                          style={{
                            background: book.coverGradient,
                          }}
                        >
                          <div className="text-xs font-semibold opacity-80 tracking-wider">TMAS ACADEMY</div>
                          <div className="text-center flex-1 flex items-center">
                            <div className="text-lg font-bold leading-tight text-shadow-lg">
                              {book.title.replace('ACE ', '').split(' ').slice(0, 3).join(' ')}
                            </div>
                          </div>
                          <div className="text-xs opacity-90">{book.author.split(' ').slice(0, 2).join(' ')}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors">
                            {book.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 font-medium">
                            Author: {book.author}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className={`ml-2 text-xs ${book.badgeColor} border-0`}>
                          {book.badge}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {book.description}
                      </p>
                      
                      {/* Book Stats */}
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {book.pages} pages
                        </span>
                        <span>{book.problems} problems</span>
                        <span className="text-xs text-gray-500 col-span-2">Size: {book.size}</span>
                      </div>
                    </CardContent>

                    <CardFooter className="grid w-full grid-cols-[1fr_auto] gap-2 px-4 py-3">
                      <div className="grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full min-w-0 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/20"
                          onClick={() => handlePreviewBook(book)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full min-w-0 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                          onClick={() => handleViewBook(book.pdfPath)}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View PDF
                        </Button>
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="justify-self-end hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => handleDownloadBook(book.pdfPath, book.title)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Grid for Books Page */
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayBooks.map((book) => (
              <Card 
                key={book.id} 
                className="glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-200"
              >
                <CardHeader>
                  {/* Book Cover Image */}
                  <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-4 border border-dashed border-gray-300 group-hover:border-gray-400 transition-colors overflow-hidden">
                    <div 
                      className="w-full h-full flex flex-col items-center justify-between p-4 text-white font-bold shadow-lg rounded-lg"
                      style={{
                        background: book.coverGradient,
                      }}
                    >
                      <div className="text-xs font-semibold opacity-80 tracking-wider">TMAS ACADEMY</div>
                      <div className="text-center flex-1 flex items-center">
                        <div className="text-lg font-bold leading-tight text-shadow-lg">
                          {book.title.replace('ACE ', '').split(' ').slice(0, 3).join(' ')}
                        </div>
                      </div>
                      <div className="text-xs opacity-90">{book.author.split(' ').slice(0, 2).join(' ')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors">
                        {book.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 font-medium">
                        Author: {book.author}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className={`ml-2 text-xs ${book.badgeColor} border-0`}>
                      {book.badge}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {book.description}
                  </p>
                  
                  {/* Book Stats */}
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {book.pages} pages
                    </span>
                    <span>{book.problems} problems</span>
                    <span className="text-xs text-gray-500 col-span-2">Size: {book.size}</span>
                  </div>
                </CardContent>

                <CardFooter className="grid w-full grid-cols-[1fr_auto] gap-2 px-4 py-3">
                  <div className="grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full min-w-0 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/20"
                      onClick={() => handlePreviewBook(book)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full min-w-0 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                      onClick={() => handleViewBook(book.pdfPath)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View PDF
                    </Button>
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="justify-self-end hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => handleDownloadBook(book.pdfPath, book.title)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </StaggeredGrid>
        )}

        {/* View More Books Button - only show on homepage */}
        {!showAll && (
          <AnimatedSection className="text-center mt-12" delay={0.6}>
            <Link href="/books">
              <Button 
                size="lg" 
                className="bg-primary-gradient text-white xl px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-0"
              >
                View More Books
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        )}
      </div>

      {/* Book Preview Modal */}
      {previewBook && (
        <BookPreviewModal
          isOpen={!!previewBook}
          onClose={() => setPreviewBook(null)}
          book={previewBook}
        />
      )}
    </section>
  )
}