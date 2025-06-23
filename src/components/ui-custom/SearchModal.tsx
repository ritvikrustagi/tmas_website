'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, X, BookOpen, HelpCircle, Users, Briefcase } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { useRouter } from 'next/navigation'

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'book' | 'faq' | 'section'
  href: string
  icon: React.ReactNode
}

const searchData: SearchResult[] = [
  // Books
  { id: 'calc-ab', title: 'ACE AP Calculus AB', description: 'Comprehensive coverage of AP Calculus AB topics', type: 'book', href: '/books', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'calc-bc', title: 'ACE AP Calculus BC', description: 'Advanced calculus including series and parametric equations', type: 'book', href: '/books', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'physics-1', title: 'ACE AP Physics 1', description: 'Fundamental physics concepts and problem-solving', type: 'book', href: '/books', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'physics-c', title: 'ACE AP Physics C: Mechanics', description: 'Calculus-based mechanics', type: 'book', href: '/books', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'amc-guide', title: 'ACE The AMC 10/12', description: 'Competition math strategies and practice problems', type: 'book', href: '/books', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'amc-formulas', title: 'AMC 10/12 Key Strategies and Formulas', description: 'Quick reference guide for AMC competitions', type: 'book', href: '/books', icon: <BookOpen className="w-4 h-4" /> },
  
  // FAQ
  { id: 'faq-free', title: 'Are the books really free?', description: 'Yes! All books are completely free to download', type: 'faq', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'faq-updates', title: 'How often are books updated?', description: 'Regular updates to reflect latest standards', type: 'faq', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'faq-discord', title: 'How to join Discord community?', description: 'Click the Join Discord button to access our server', type: 'faq', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'faq-tutoring', title: 'Do you offer tutoring?', description: 'Yes! Personalized tutoring sessions available', type: 'faq', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'faq-contribute', title: 'How can I contribute?', description: 'Join our team as tutor, developer, or content creator', type: 'faq', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  
  // Sections
  { id: 'community', title: 'Discord Community', description: 'Join 500+ students in our Discord server', type: 'section', href: '/community', icon: <Users className="w-4 h-4" /> },
  { id: 'opportunities', title: 'Join Our Team', description: 'Opportunities for tutors, developers, and creators', type: 'section', href: '/opportunities', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'testimonials', title: 'Success Stories', description: 'Read testimonials from successful students', type: 'section', href: '/testimonials', icon: <Users className="w-4 h-4" /> },
]

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filteredResults.slice(0, 8))
    setSelectedIndex(0)
  }, [query])
  const handleResultClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
    setQuery('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      handleResultClick(results[selectedIndex].href)
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'book': return 'bg-blue-100 text-blue-700'
      case 'faq': return 'bg-green-100 text-green-700'
      case 'section': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="hidden md:flex items-center gap-2 text-gray-500 border-gray-300 hover:border-gray-400 min-w-[200px] justify-start"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="ml-auto text-xs bg-gray-100 px-1.5 py-0.5 rounded">⌘K</kbd>
      </Button>

      {/* Mobile Search Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="sm"
        className="md:hidden"
      >
        <Search className="w-5 h-5" />
      </Button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-gray-200">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search books, FAQs, and more..."
                  className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                />
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-2">
                    {results.map((result, index) => (                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result.href)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          index === selectedIndex 
                            ? theme === 'dark' 
                              ? 'bg-blue-900' 
                              : 'bg-blue-100' 
                            : ''
                        }`}
                        style={{
                          backgroundColor: index === selectedIndex 
                            ? (theme === 'dark' ? '#1e3a8a' : '#dbeafe')
                            : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (index !== selectedIndex) {
                            e.currentTarget.style.backgroundColor = theme === 'dark' ? '#111827' : '#f3f4f6'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (index !== selectedIndex) {
                            e.currentTarget.style.backgroundColor = 'transparent'
                          }
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{result.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(result.type)}`}>
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : query.trim() !== '' ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                    <p>No results found for &quot;{query}&quot;</p>
                    <p className="text-sm mt-1">Try different keywords or browse our sections</p>
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                    <p>Search for books, FAQs, and more</p>
                    <p className="text-sm mt-1">Start typing to see results</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-3 text-xs text-gray-500 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-gray-100 px-1.5 py-0.5 rounded">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-gray-100 px-1.5 py-0.5 rounded">↵</kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-gray-100 px-1.5 py-0.5 rounded">esc</kbd>
                    Close
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
