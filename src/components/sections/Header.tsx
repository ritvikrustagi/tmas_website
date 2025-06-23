'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#books', label: 'Free Books' },
  { href: '#testimonials', label: 'Success Stories' },
  { href: '#faq', label: 'FAQ' },
  { href: '#community', label: 'Community' },
  { href: '#opportunities', label: 'Join Us' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1))
      const currentScrollPosition = scrollPosition + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (currentScrollPosition >= offsetTop && currentScrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
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
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'w-[95%] max-w-5xl' 
          : 'w-[90%] max-w-6xl'
      }`}
    >
      <div 
        className={`glass-effect rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-300 ${
          isScrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h1 className={`font-bold text-black tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>
              TMAS Academy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 hover:text-black ${
                  activeSection === item.href.substring(1)
                    ? 'text-black font-semibold bg-black/8 shadow-sm'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden rounded-full hover:bg-black/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 text-sm font-medium text-left transition-all duration-200 rounded-xl hover:bg-black/5 hover:text-black ${
                    activeSection === item.href.substring(1)
                      ? 'text-black font-semibold bg-black/8'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 