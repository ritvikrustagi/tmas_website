'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import SearchModal from '@/components/ui-custom/SearchModal'
import DarkModeToggle from '@/components/ui-custom/DarkModeToggle'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Book data for dropdown menu
const bookDropdownItems = [
  { href: '/books/amc-10-12', label: 'ACE The AMC 10/12' },
  { href: '/books/amc-formulas', label: 'AMC 10/12 Key Strategies and Formulas' },
  { href: '/books/ap-calculus-ab', label: 'ACE AP Calculus AB' },
  { href: '/books/ap-calculus-bc', label: 'ACE AP Calculus BC' },
  { href: '/books/ap-physics-1', label: 'ACE AP Physics 1' },
  { href: '/books/ap-physics-c', label: 'ACE AP Physics C: Mechanics' },
  { href: '/books/ap-chemistry', label: 'ACE AP Chemistry' },
  { href: '/books/ap-computer-science', label: 'AP Computer Science Principles' },
  { href: '/books/ap-statistics', label: 'AP Statistics Review Book' },
  { href: '/books/ap-biology', label: 'ACE AP Biology' },
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/books', label: 'Free Books', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Success Stories' },
  { href: '/community', label: 'Community' },
  { href: '/opportunities', label: 'Join Us' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const { theme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'w-[95%] max-w-5xl' 
          : 'w-[90%] max-w-6xl'
      }`}
    >
      <div  
        className={`glass-effect w-full rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-300 ${
          isScrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Image 
              src="/header_banner.png" 
              alt="TMAS Academy"
              width={100}
              height={25}
              className="transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-between items-start mx-3">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredDropdown(item.href)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex flex-col items-center text-center w-[80px] sm:w-auto ${
                        pathname === item.href
                          ? 'font-semibold bg-black/8 shadow-sm dark:bg-white/10'
                          : ''
                      }`}
                      style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                    >
                      <span className="block text-center">{item.label}</span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {hoveredDropdown === item.href && (
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-[60]"
                        onMouseEnter={() => setHoveredDropdown(item.href)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                        style={{
                          minWidth: '320px',
                          maxHeight: '400px'
                        }}
                      >
                        <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">All Free Books</h3>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                          {bookDropdownItems.map((book) => (
                            <Link
                              key={book.href}
                              href={book.href}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                              onClick={() => setHoveredDropdown(null)}
                            >
                              {book.label}
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 pt-1 border-t border-gray-100 dark:border-gray-700">
                          <Link
                            href="/books"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                            onClick={() => setHoveredDropdown(null)}
                          >
                            View All Books →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex flex-col items-center text-center w-[80px] sm:w-auto ${
                      pathname === item.href
                        ? 'font-semibold bg-black/8 shadow-sm dark:bg-white/10'
                        : ''
                    }`}
                    style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Controls */}
          <div className="hidden xl:flex items-center gap-2">
            <SearchModal />
            <DarkModeToggle />
          </div>

          <div className="hidden lg:flex xl:hidden items-center gap-2">
            <SearchModal iconOnly />
            <DarkModeToggle />
          </div>       
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 ml-auto lg:hidden">
            <SearchModal iconOnly />
            <DarkModeToggle />
            <div className="md:hidden">
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex flex-col items-center text-center w-[80px] sm:w-auto ${
                      pathname === item.href
                        ? 'font-semibold bg-black/8 dark:bg-white/10'
                        : ''
                    }`}
                    style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile dropdown for books */}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {bookDropdownItems.map((book) => (
                        <Link
                          key={book.href}
                          href={book.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors duration-150"
                        >
                          {book.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 