'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  id: string
  label: string
  href: string
}

const sections: BreadcrumbItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about-mission', label: 'Our Mission', href: '#about-mission' },
  { id: 'books', label: 'Free Books', href: '#books' },
  { id: 'testimonials', label: 'Success Stories', href: '#testimonials' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'opportunities', label: 'Opportunities', href: '#opportunities' },
]

export default function Breadcrumbs() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 100)

      // Find the current section
      const currentScrollPosition = scrollPosition + 150

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (currentScrollPosition >= offsetTop && currentScrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentSection = sections.find(section => section.id === activeSection)
  const currentIndex = sections.findIndex(section => section.id === activeSection)

  if (!isVisible || !currentSection) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="glass-effect px-4 py-2 rounded-full border border-gray-200/50 shadow-lg">
        <nav className="flex items-center space-x-2 text-sm">
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="w-4 h-4" />
          </button>
          
          <ChevronRight className="w-3 h-3 text-gray-400" />
          
          {/* Previous section (if exists) */}
          {currentIndex > 0 && (
            <>
              <button
                onClick={() => handleNavClick(sections[currentIndex - 1].href)}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {sections[currentIndex - 1].label}
              </button>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </>
          )}
          
          {/* Current section */}
          <span className="text-blue-600 font-medium">
            {currentSection.label}
          </span>
          
          {/* Next section (if exists) */}
          {currentIndex < sections.length - 1 && (
            <>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <button
                onClick={() => handleNavClick(sections[currentIndex + 1].href)}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                {sections[currentIndex + 1].label}
              </button>
            </>
          )}
        </nav>
      </div>
    </motion.div>
  )
}
