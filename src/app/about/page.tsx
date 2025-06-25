'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              About the Owner
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* Ritvik's Profile Section */}
            <div className="text-center mb-16">
              <div className="flex flex-col items-center mb-8">
                {/* Profile Picture - Large Circle */}
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-white dark:border-gray-700">
                  <Image
                    src="/ritvik_photos/photo_1.avif"
                    alt="Ritvik Rustagi - Founder of TMAS Academy"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Bio Information */}
                <Card 
                  className="p-8 shadow-xl max-w-3xl w-full"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    borderColor: isDark ? '#4b5563' : '#e5e7eb'
                  }}
                >
                  <h2 
                    className="text-4xl font-bold mb-6 italic"
                    style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                  >
                    Ritvik Rustagi
                  </h2>
                  
                  <div className="prose prose-lg leading-relaxed space-y-4">
                    <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                      Ritvik Rustagi, born in 2007, is the founder of TMAS Academy. He is also the author of the prominent books called ACE The AMC 10/12, ACE AP Physics 1, ACE AP Calculus AB, ACE AP Calculus BC, and ACE AP Physics C: Mechanics.
                    </p>
                    
                    <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                      His goal with TMAS Academy is to educate people through comprehensive content. In addition, he graduated from Prospect High School and is going into CMU this fall. His hobbies include physics, math, coding, running, and listening to music.
                    </p>
                    
                    <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                      He started this program in 2021 due to his passion for competition math. His main reason for starting this journey was to help others including himself learn important topics in contest math. After that, he decided to dedicate time to AP content.
                    </p>
                  </div>

                  {/* LinkedIn Section */}
                  <div 
                    className="mt-8 pt-6"
                    style={{ borderTop: `1px solid ${isDark ? '#4b5563' : '#e5e7eb'}` }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <Linkedin className="w-8 h-8 text-blue-600" />
                      <Button 
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link 
                          href="https://linkedin.com/in/ritvik-rustagi" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          Connect on LinkedIn
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Call to Action */}
              <Card 
                className="p-8 shadow-xl max-w-2xl mx-auto mb-16"
                style={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Ready to Start Learning?
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                >
                  Explore our free educational resources and join thousands of students who have improved their understanding of mathematics and physics.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-3"
                  >
                    <Link href="/books">
                      View Free Books
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="font-semibold px-8 py-3"
                    style={{
                      borderWidth: '2px',
                      borderColor: isDark ? '#4b5563' : '#d1d5db',
                      backgroundColor: 'transparent',
                      color: isDark ? '#ffffff' : '#1f2937'
                    }}
                  >
                    <Link href="/community">
                      Join Community
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Team Sections */}
            <div className="space-y-16">
              {/* Board Advisors */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Board Advisors
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {/* Placeholder for board advisors */}
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: isDark ? '#4b5563' : '#e5e7eb' }}
                      >
                        <span 
                          className="text-lg font-bold"
                          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                        >
                          BA{index}
                        </span>
                      </div>
                      <p 
                        className="text-sm"
                        style={{ color: isDark ? '#d1d5db' : '#374151' }}
                      >
                        Advisor {index}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Published Authors */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Published Authors
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: isDark ? '#4b5563' : '#e5e7eb' }}
                      >
                        <span 
                          className="text-lg font-bold"
                          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                        >
                          PA{index}
                        </span>
                      </div>
                      <p 
                        className="text-sm"
                        style={{ color: isDark ? '#d1d5db' : '#374151' }}
                      >
                        Author {index}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Writing Interns */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Academic Writing Interns
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: isDark ? '#4b5563' : '#e5e7eb' }}
                      >
                        <span 
                          className="text-lg font-bold"
                          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                        >
                          AW{index}
                        </span>
                      </div>
                      <p 
                        className="text-sm"
                        style={{ color: isDark ? '#d1d5db' : '#374151' }}
                      >
                        Writer {index}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marketing Interns */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Marketing Interns
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: isDark ? '#4b5563' : '#e5e7eb' }}
                      >
                        <span 
                          className="text-lg font-bold"
                          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                        >
                          M{index}
                        </span>
                      </div>
                      <p 
                        className="text-sm"
                        style={{ color: isDark ? '#d1d5db' : '#374151' }}
                      >
                        Marketer {index}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Engineering Interns */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Software Engineering Interns
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {/* Dhairya - First Software Engineer */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/dhairya.jpg"
                        alt="Dhairya - Software Engineering Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Dhairya
                    </p>
                  </div>
                  
                  {/* Remaining placeholders */}
                  <div className="text-center">
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: isDark ? '#4b5563' : '#e5e7eb' }}
                    >
                      <span 
                        className="text-lg font-bold"
                        style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                      >
                        E
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Eric
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: isDark ? '#4b5563' : '#e5e7eb' }}
                    >
                      <span 
                        className="text-lg font-bold"
                        style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                      >
                        S
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Sarvesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  )
}
