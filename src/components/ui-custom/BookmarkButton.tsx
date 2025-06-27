'use client'

import React, { useState, useEffect } from 'react'
import { Bookmark } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface BookmarkData {
  bookId: number
  bookTitle: string
  pdfPath: string
  bookmarkedAt: string
}

interface BookmarkButtonProps {
  bookId: number
  bookTitle: string
  pdfPath: string
}

export default function BookmarkButton({ bookId, bookTitle, pdfPath }: BookmarkButtonProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Check if the page is already bookmarked on component mount
  useEffect(() => {
    const bookmarkedPages: BookmarkData[] = JSON.parse(localStorage.getItem('tmas_bookmarks') || '[]')
    const isAlreadyBookmarked = bookmarkedPages.some((bookmark: BookmarkData) => bookmark.bookId === bookId)
    setIsBookmarked(isAlreadyBookmarked)
  }, [bookId])

  const handleBookmark = () => {
    try {
      // Get existing bookmarks from localStorage
      const bookmarkedPages: BookmarkData[] = JSON.parse(localStorage.getItem('tmas_bookmarks') || '[]')
      
      if (isBookmarked) {
        // Remove bookmark
        const updatedBookmarks = bookmarkedPages.filter((bookmark: BookmarkData) => bookmark.bookId !== bookId)
        localStorage.setItem('tmas_bookmarks', JSON.stringify(updatedBookmarks))
        setIsBookmarked(false)
      } else {
        // Add bookmark
        const newBookmark: BookmarkData = {
          bookId,
          bookTitle,
          pdfPath,
          bookmarkedAt: new Date().toISOString()
        }
        const updatedBookmarks = [...bookmarkedPages, newBookmark]
        localStorage.setItem('tmas_bookmarks', JSON.stringify(updatedBookmarks))
        setIsBookmarked(true)
      }

      // Try to add to browser bookmarks if supported
      if ('bookmarks' in window && !isBookmarked) {
        // This is a fallback - most modern browsers don't allow programmatic bookmarking
        // due to security restrictions, but we can try
        try {
          // @ts-expect-error - bookmarks API might not be available
          window.bookmarks?.create({
            title: `TMAS Academy - ${bookTitle}`,
            url: pdfPath
          })
        } catch {
          // Browser doesn't support programmatic bookmarking, which is expected
          console.log('Browser bookmarking not supported')
        }
      }

      // Show user feedback
      const message = isBookmarked ? 'Bookmark removed!' : 'Bookmark added!'
      showNotification(message)
      
    } catch (error) {
      console.error('Error managing bookmark:', error)
      showNotification('Error managing bookmark. Please try again.')
    }
  }

  const showNotification = (message: string) => {
    // Create a simple notification
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${isBookmarked ? '#10b981' : '#3b82f6'};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    `
    
    document.body.appendChild(notification)
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0'
      notification.style.transform = 'translateY(-10px)'
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  return (
    <button
      onClick={handleBookmark}
      className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: isBookmarked 
          ? (isDark ? '#10b981' : '#34d399') 
          : (isDark ? '#374151' : '#f3f4f6'),
        borderColor: isDark ? '#4b5563' : '#e5e7eb',
        borderWidth: '2px',
        color: isBookmarked ? '#ffffff' : (isDark ? '#d1d5db' : '#6b7280'),
        boxShadow: isBookmarked 
          ? '0 4px 12px rgba(16, 185, 129, 0.3)' 
          : '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <Bookmark 
        className={`w-5 h-5 transition-all duration-300 ${isBookmarked ? 'fill-current' : ''}`}
      />
    </button>
  )
} 