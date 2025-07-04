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
  { href: '/testimonials', label: 'Success Stories' },
  { href: '/community', label: 'Community' },
  { href: '/opportunities', label: 'Join Us' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const { theme } = useTheme()
  const pathname = usePathname()

  const handleMouseEnter = (href: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setHoveredDropdown(href)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredDropdown(null)
    }, 150) // 150ms delay before closing
    setDropdownTimeout(timeout)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    const handleResize = () => {
      // Close mobile menu on desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
        setMobileDropdownOpen(null)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setMobileDropdownOpen(null)
        setHoveredDropdown(null)
        if (dropdownTimeout) {
          clearTimeout(dropdownTimeout)
          setDropdownTimeout(null)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    handleScroll() // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  return (
    <>
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => {
            setIsMenuOpen(false)
            setMobileDropdownOpen(null)
          }}
        />
      )}
      
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
                    onMouseEnter={() => handleMouseEnter(item.href)}
                    onMouseLeave={handleMouseLeave}
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
                        className="absolute top-full left-1/2 transform -translate-x-1/2 z-[60]"
                        onMouseEnter={() => handleMouseEnter(item.href)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div className="h-2 w-full" />
                        <div 
                          className="w-80 rounded-xl shadow-lg border py-2"
                          style={{
                            minWidth: '320px',
                            maxHeight: '400px',
                            backgroundColor: theme === 'dark' ? 'rgb(31, 41, 55)' : 'rgb(255, 255, 255)',
                            borderColor: theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(229, 231, 235)',
                            color: theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(17, 24, 39)',
                          }}
                        >
                          <div 
                            className="px-4 py-2 border-b"
                            style={{
                              borderColor: theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)',
                            }}
                          >
                            <h3 
                              className="text-sm font-semibold"
                              style={{
                                color: theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(17, 24, 39)',
                              }}
                            >
                              All Free Books
                            </h3>
                          </div>
                          <div className="max-h-80 overflow-y-auto">
                            {bookDropdownItems.map((book) => (
                              <Link
                                key={book.href}
                                href={book.href}
                                className="block px-4 py-3 text-sm transition-colors duration-150 hover:bg-opacity-50"
                                style={{
                                  color: theme === 'dark' ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)',
                                  backgroundColor: 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(249, 250, 251, 0.8)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                                onClick={() => setHoveredDropdown(null)}
                              >
                                {book.label}
                              </Link>
                            ))}
                          </div>
                          <div 
                            className="px-4 pt-1 border-t"
                            style={{
                              borderColor: theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)',
                            }}
                          >
                            <Link
                              href="/books"
                              className="text-sm font-medium transition-colors duration-150"
                              style={{
                                color: theme === 'dark' ? 'rgb(96, 165, 250)' : 'rgb(37, 99, 235)',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = theme === 'dark' ? 'rgb(147, 197, 253)' : 'rgb(29, 78, 216)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = theme === 'dark' ? 'rgb(96, 165, 250)' : 'rgb(37, 99, 235)';
                              }}
                              onClick={() => setHoveredDropdown(null)}
                            >
                              View All Books →
                            </Link>
                          </div>
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
            {/* Close button for mobile menu */}
            <div className="flex justify-end mb-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                onClick={() => {
                  setIsMenuOpen(false)
                  setMobileDropdownOpen(null)
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="max-h-80 overflow-y-auto pr-2">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => {
                              setIsMenuOpen(false)
                              setMobileDropdownOpen(null)
                            }}
                            className={`flex-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-left ${
                              pathname === item.href
                                ? 'font-semibold bg-black/8 dark:bg-white/10'
                                : ''
                            }`}
                            style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                          >
                            {item.label}
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                            style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                            onClick={() => setMobileDropdownOpen(
                              mobileDropdownOpen === item.href ? null : item.href
                            )}
                            aria-label={`Toggle ${item.label} dropdown`}
                          >
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform duration-200 ${
                                mobileDropdownOpen === item.href ? 'rotate-180' : ''
                              }`} 
                            />
                          </Button>
                        </div>
                        
                        {/* Mobile dropdown for books */}
                        {mobileDropdownOpen === item.href && (
                          <div className="ml-4 mt-2 space-y-1 max-h-48 overflow-y-auto border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                            {bookDropdownItems.map((book) => (
                              <Link
                                key={book.href}
                                href={book.href}
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setMobileDropdownOpen(null)
                                }}
                                className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors duration-150 hover:text-gray-900 dark:hover:text-gray-200"
                              >
                                {book.label}
                              </Link>
                            ))}
                            
                            {/* Collapse dropdown button */}
                            <div className="pt-2 border-t border-gray-100 dark:border-gray-600">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-left px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg"
                                onClick={() => setMobileDropdownOpen(null)}
                              >
                                ← Collapse Books
                              </Button>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setMobileDropdownOpen(null)
                        }}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-left ${
                          pathname === item.href
                            ? 'font-semibold bg-black/8 dark:bg-white/10'
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
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  )
} 