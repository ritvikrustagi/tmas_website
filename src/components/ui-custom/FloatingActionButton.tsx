'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, BookOpen, ChevronUp, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDiscordClick = () => {
    window.open('https://discord.com/invite/u8YhZcDF?utm_source=Discord%20Widget&utm_medium=Connect', '_blank')
    setIsOpen(false)
  }

  const handleBooksClick = () => {
    const booksSection = document.getElementById('books')
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {/* Discord Button */}
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Button
                onClick={handleDiscordClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl h-12 px-4 rounded-full flex items-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Join Discord</span>
              </Button>
            </motion.div>

            {/* Books Button */}
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                onClick={handleBooksClick}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl h-12 px-4 rounded-full flex items-center gap-2 group"
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Free Books</span>
              </Button>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleScrollToTop}
                variant="outline"
                className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 shadow-lg hover:shadow-xl h-12 px-4 rounded-full flex items-center gap-2 group"
              >
                <ChevronUp className="w-5 h-5" />
                <span className="font-medium">Back to Top</span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-600 hover:bg-gray-700 text-white' 
              : 'bg-primary-gradient text-white hover:shadow-2xl'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full mx-1"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  )
}
