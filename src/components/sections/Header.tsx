'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import SearchModal from '@/components/ui-custom/SearchModal'
import DarkModeToggle from '@/components/ui-custom/DarkModeToggle'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#testimonials', label: 'Success Stories' },
  { href: '#faq', label: 'FAQ' },
  { href: '#community', label: 'Community' },
  { href: '#opportunities', label: 'Join Us' },
]

const bookItems = [
  { href: '/books/amc', label: 'AMC' },
  { href: '/books/calculus-ab', label: 'Calculus AB' },
  { href: '/books/calculus-bc', label: 'Calculus BC' },
  { href: '/books/physics-1', label: 'Physics 1' },
  { href: '/books/physics-c', label: 'Physics C' },
  { href: '/books/chemistry', label: 'Chemistry' },
  { href: '/books/computer-science', label: 'Computer Science' },
  { href: '/books/statistics', label: 'Statistics' },
  { href: '/books/biology', label: 'Biology' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.books-dropdown')) {
        setIsBooksDropdownOpen(false)
      }
    }

    if (isBooksDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBooksDropdownOpen])

  const handleNavClick = (href: string) => {
    // Check if we're on the homepage or a book page
    const isHomepage = window.location.pathname === '/'
    
    if (isHomepage) {
      // On homepage, scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On book page, navigate to homepage with hash
      window.location.href = `/${href}`
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.location.href = '/'
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
          <div className="logo cursor-pointer" onClick={handleLogoClick}>
            <h1 className={`font-bold tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}
            style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
            >
              TMAS Academy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${
                  activeSection === item.href.substring(1)
                    ? 'font-semibold bg-black/8 shadow-sm dark:bg-white/10'
                    : ''
                }`}
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Free Books Dropdown */}
            <div className="relative books-dropdown">
              <button
                onClick={() => setIsBooksDropdownOpen(!isBooksDropdownOpen)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center gap-1 ${
                  isBooksDropdownOpen
                    ? 'font-semibold bg-black/8 shadow-sm dark:bg-white/10'
                    : ''
                }`}
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
              >
                Free Books
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isBooksDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isBooksDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {bookItems.map((book) => (
                    <Link
                      key={book.href}
                      href={book.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsBooksDropdownOpen(false)}
                    >
                      {book.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Search and Controls */}
          <div className="hidden md:flex items-center gap-2">
            <SearchModal />
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <SearchModal />
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 text-sm font-medium text-left transition-all duration-200 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 ${
                    activeSection === item.href.substring(1)
                      ? 'font-semibold bg-black/8 dark:bg-white/10'
                      : ''
                  }`}
                  style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Free Books Section */}
              <div className="px-4 py-3">
                <div className="text-sm font-medium mb-2" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>
                  Free Books
                </div>
                <div className="flex flex-col space-y-1 ml-4">
                  {bookItems.map((book) => (
                    <Link
                      key={book.href}
                      href={book.href}
                      className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {book.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 