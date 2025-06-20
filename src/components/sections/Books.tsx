'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ExternalLink, Download } from 'lucide-react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'

const books = [
  {
    id: 1,
    title: 'ACE AP Calculus AB',
    author: 'Ritvik Rustagi',
    description: 'Comprehensive coverage of AP Calculus AB topics with detailed explanations and practice problems.',
    coverGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    pdfPath: '/books/ACE_AP_Calculus_AB_by_RitvikRustagi.pdf',
    badge: 'Popular',
    problems: '150+',
    pages: '280+',
    size: '29 MB'
  },
  {
    id: 2,
    title: 'ACE AP Calculus BC',
    author: 'Ritvik Rustagi',
    description: 'Master advanced calculus topics including series, parametric equations, and polar coordinates.',
    coverGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    pdfPath: '/books/ACE_AP_Calculus_BC_by_RitvikRustagi.pdf',
    badge: 'Advanced',
    problems: '200+',
    pages: '300+',
    size: '31 MB'
  },
  {
    id: 3,
    title: 'ACE AP Physics 1',
    author: 'Ritvik Rustagi',
    description: 'Fundamental physics concepts, problem-solving strategies, and exam preparation techniques.',
    coverGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    pdfPath: '/books/ACE_AP_Physics_1_by_RitvikRustagi.pdf',
    badge: 'Essential',
    problems: '180+',
    pages: '270+',
    size: '28 MB'
  },
  {
    id: 4,
    title: 'ACE AP Physics C: Mechanics',
    author: 'Ritvik Rustagi',
    description: 'Calculus-based mechanics covering kinematics, dynamics, energy, and momentum.',
    coverGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    pdfPath: '/books/ACE_AP_Physics_C_Mech_by_RitvikRustagi.pdf',
    badge: 'Advanced',
    problems: '160+',
    pages: '300+',
    size: '31 MB'
  },
  {
    id: 5,
    title: 'ACE The AMC 10/12',
    author: 'Ritvik Rustagi',
    description: 'Competition math strategies, problem-solving techniques, and practice problems for AMC success.',
    coverGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    pdfPath: '/books/ACE The AMC 10_12!.pdf',
    badge: 'Competition',
    problems: '300+',
    pages: '350+',
    size: '37 MB'
  },
  {
    id: 6,
    title: 'AMC 10/12 Key Strategies and Formulas',
    author: 'Ritvik Rustagi',
    description: 'Quick reference guide with essential formulas, strategies, and tips for AMC competitions.',
    coverGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    pdfPath: '/books/AMC 10_12 Key Strategies and Formulas.pdf',
    badge: 'Quick Reference',
    problems: '50+',
    pages: '25+',
    size: '2.4 MB'
  }
]

export default function Books() {
  const handleViewBook = (pdfPath: string, bookTitle: string) => {
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

  return (
    <section id="books" className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            TMAS Academy's FREE Books
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dive into our collection of meticulously crafted books, designed to align with College Board standards 
            and provide concise, effective preparation. Each book is packed with problems and detailed solutions, 
            and regularly updated.
          </p>
        </AnimatedSection>

        {/* Books Grid with Staggered Animation */}
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
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
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {book.badge}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
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

              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-black text-black hover:bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors"
                  onClick={() => handleViewBook(book.pdfPath, book.title)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View PDF
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-gray-100"
                  onClick={() => handleDownloadBook(book.pdfPath, book.title)}
                >
                  <Download className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </StaggeredGrid>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <div className="glass-card p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Download All Books
            </h3>
            <p className="text-gray-700 mb-6 max-w-md">
              Get instant access to our complete collection of AP and competition prep books. 
              Always free, always updated.
            </p>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => {
                // Open all books in new tabs
                books.forEach(book => {
                  setTimeout(() => window.open(book.pdfPath, '_blank'), 100)
                })
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Collection
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 