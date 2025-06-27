'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import SearchModal from '@/components/ui-custom/SearchModal'
import DarkModeToggle from '@/components/ui-custom/DarkModeToggle'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/books', label: 'Free Books' },
  { href: '/testimonials', label: 'Success Stories' },
  { href: '/community', label: 'Community' },
  { href: '/opportunities', label: 'Join Us' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position    return () => window.removeEventListener('scroll', handleScroll)
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
        className={`glass-effect w-full overflow-hidden rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-300 ${
          isScrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}
      >
        <div className="flex items-center justify-between">          {/* Logo */}
          <div className="logo">
            <Image 
              src="/header_banner.png" 
              alt="TMAS Academy"
              width={100}
              height={25}
              className="transition-all duration-300"
            />
          </div>          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${
                  pathname === item.href
                    ? 'font-semibold bg-black/8 shadow-sm dark:bg-white/10'
                    : ''
                }`}
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
              >
                {item.label}
              </Link>
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
        </div>        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium text-left transition-all duration-200 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 ${
                    pathname === item.href
                      ? 'font-semibold bg-black/8 dark:bg-white/10'
                      : ''
                  }`}
                  style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 