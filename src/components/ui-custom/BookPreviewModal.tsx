'use client'

import React from 'react'
import { X, Download, ExternalLink, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'

interface BookPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  book: {
    id: number
    title: string
    author: string
    description: string
    coverGradient: string
    pdfPath: string
    badge: string
    badgeColor: string
    problems: string
    pages: string
    size: string
  }
}

export default function BookPreviewModal({ isOpen, onClose, book }: BookPreviewModalProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleViewPDF = () => {
    window.open(book.pdfPath, '_blank')
    onClose()
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = book.pdfPath
    link.download = book.title.replace(/[^a-z0-9]/gi, '_') + '.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    onClose()
  }

  // Mock preview content - in a real app, you'd generate actual PDF previews
  const previewContent = {
    1: { // Calculus AB
      title: "Chapter 1: Limits and Continuity",
      content: [
        "1.1 Introduction to Limits",
        "• Understanding the concept of limits",
        "• Graphical interpretation",
        "• One-sided limits",
        "",
        "1.2 Limit Laws and Calculations",
        "• Basic limit laws",
        "• Algebraic manipulation",
        "• Squeeze theorem",
        "",
        "Example 1.1: Find lim(x→2) (x² - 4)/(x - 2)",
        "Solution: Factor the numerator...",
        "",
        "Practice Problems:",
        "1. lim(x→0) sin(x)/x",
        "2. lim(x→∞) (3x² + 2x)/(x² - 1)",
        "3. lim(x→1) (x³ - 1)/(x - 1)"
      ]
    },
    2: { // Calculus BC
      title: "Chapter 1: Advanced Integration Techniques",
      content: [
        "1.1 Integration by Parts",
        "• Formula: ∫u dv = uv - ∫v du",
        "• Choosing u and dv",
        "• Repeated integration by parts",
        "",
        "1.2 Trigonometric Integrals",
        "• Powers of sine and cosine",
        "• Trigonometric substitution",
        "",
        "Example 1.1: ∫x e^x dx",
        "Let u = x, dv = e^x dx",
        "Then du = dx, v = e^x",
        "∫x e^x dx = x e^x - ∫e^x dx = x e^x - e^x + C",
        "",
        "Practice Problems:",
        "1. ∫x ln(x) dx",
        "2. ∫x² sin(x) dx",
        "3. ∫e^x cos(x) dx"
      ]
    },
    3: { // Physics 1
      title: "Chapter 1: Kinematics in One Dimension",
      content: [
        "1.1 Position, Velocity, and Acceleration",
        "• Position function: x(t)",
        "• Velocity: v(t) = dx/dt",
        "• Acceleration: a(t) = dv/dt",
        "",
        "1.2 Kinematic Equations",
        "• v = v₀ + at",
        "• x = x₀ + v₀t + ½at²",
        "• v² = v₀² + 2a(x - x₀)",
        "",
        "Example 1.1: A ball is thrown upward",
        "Initial velocity: v₀ = 20 m/s",
        "Acceleration: a = -9.8 m/s²",
        "Find maximum height and time to reach it",
        "",
        "Practice Problems:",
        "1. Free fall from 45m height",
        "2. Car acceleration from rest",
        "3. Two-body collision analysis"
      ]
    },
    5: { // AMC
      title: "Chapter 1: Number Theory Fundamentals",
      content: [
        "1.1 Divisibility and Prime Numbers",
        "• Divisibility rules",
        "• Prime factorization",
        "• GCD and LCM",
        "",
        "1.2 Modular Arithmetic",
        "• Congruence notation",
        "• Properties of modular arithmetic",
        "• Fermat's Little Theorem",
        "",
        "Example 1.1: Find the last digit of 7^100",
        "We need 7^100 (mod 10)",
        "7¹ ≡ 7 (mod 10)",
        "7² ≡ 49 ≡ 9 (mod 10)",
        "7³ ≡ 7×9 ≡ 63 ≡ 3 (mod 10)",
        "Pattern repeats every 4 powers",
        "",
        "Practice Problems:",
        "1. Last two digits of 3^50",
        "2. Find all solutions to x² ≡ 1 (mod 8)",
        "3. Chinese Remainder Theorem application"
      ]
    }
  }

  const currentPreview = previewContent[book.id as keyof typeof previewContent] || {
    title: "Preview Content",
    content: ["Content preview will be available soon.", "", "This book contains:", `• ${book.problems} practice problems`, `• ${book.pages} of comprehensive coverage`, "• Detailed step-by-step solutions", "• Aligned with latest standards"]
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >            {/* Header */}
            <div 
              className="flex items-center justify-between p-6 border-b shadow-lg"
              style={{
                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                borderBottomColor: isDark ? '#4b5563' : '#e5e7eb'
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-16 rounded-lg shadow-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: book.coverGradient }}
                >
                  {book.title.split(' ').slice(1, 3).join(' ')}
                </div>
                <div>
                  <h2 
                    className="text-xl font-bold"
                    style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                  >
                    {book.title}
                  </h2>
                  <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>by {book.author}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${book.badgeColor} border-0`}>
                      {book.badge}
                    </span>
                    <span 
                      className="text-xs"
                      style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                    >
                      {book.pages} pages • {book.size}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>            {/* Content */}
            <div className="flex flex-col md:flex-row h-[calc(90vh-200px)] md:h-[calc(90vh-200px)]">              {/* Preview Panel */}
              <div 
                className="flex-1 p-4 md:p-6 overflow-y-auto min-h-[300px] md:min-h-0"
                style={{ backgroundColor: isDark ? '#111827' : '#f9fafb' }}
              >
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  <Eye className="w-5 h-5 inline mr-2" />
                  Preview: {currentPreview.title}
                </h3>

                <div 
                  className="border rounded-lg p-6 font-mono text-sm"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    borderColor: isDark ? '#4b5563' : '#e5e7eb'
                  }}
                >
                  {currentPreview.content.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${line === '' ? 'h-2' : ''}`}
                      style={{
                        marginLeft: line.startsWith('•') || line.includes('≡') || line.includes('=') ? '16px' : '0',
                        fontWeight: line.startsWith('Example') || line.startsWith('Practice') ? 'bold' : 
                                   line.startsWith('•') || line.includes('≡') || line.includes('=') ? '500' : 'normal',
                        marginTop: line.startsWith('Example') || line.startsWith('Practice') ? '16px' : '0',
                        color: line.startsWith('•') ? (isDark ? '#93c5fd' : '#1d4ed8') :
                               line.startsWith('Example') || line.startsWith('Practice') ? (isDark ? '#ffffff' : '#1f2937') :
                               line.includes('≡') || line.includes('=') ? (isDark ? '#86efac' : '#16a34a') :
                               isDark ? '#e5e7eb' : '#374151'
                      }}
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>                
                <div 
                  className="mt-6 p-4 border rounded-lg"
                  style={{
                    backgroundColor: isDark ? '#1e3a8a' : '#dbeafe',
                    borderColor: isDark ? '#3b82f6' : '#93c5fd'
                  }}
                >
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: isDark ? '#dbeafe' : '#1e3a8a' }}
                  >
                    What&apos;s included:
                  </h4>
                  <ul 
                    className="text-sm space-y-1"
                    style={{ color: isDark ? '#dbeafe' : '#1e40af' }}
                  >
                    <li>• {book.problems} practice problems with solutions</li>
                    <li>• Comprehensive theory and examples</li>
                    <li>• Exam-style questions and strategies</li>
                    <li>• Regular updates and improvements</li>
                  </ul>
                </div>
              </div>              {/* Sidebar */}
              <div 
                className="w-full md:w-80 border-t md:border-t-0 md:border-l p-6"
                style={{
                  backgroundColor: isDark ? '#374151' : '#f3f4f6',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                <h4 
                  className="font-semibold mb-4"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Book Details
                </h4>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>Pages:</span>
                    <span 
                      className="ml-2 font-medium"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {book.pages}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>Problems:</span>
                    <span 
                      className="ml-2 font-medium"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {book.problems}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>File Size:</span>
                    <span 
                      className="ml-2 font-medium"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {book.size}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>Format:</span>
                    <span 
                      className="ml-2 font-medium"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      PDF
                    </span>
                  </div>
                  <div>
                    <span style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>Price:</span>
                    <span 
                      className="ml-2 font-bold"
                      style={{ color: isDark ? '#4ade80' : '#16a34a' }}
                    >
                      Free
                    </span>
                  </div>
                </div><div className="mt-8 space-y-3">
                  <Button
                    onClick={handleViewPDF}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Full PDF
                  </Button>
                    <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="w-full font-medium"
                    style={{
                      borderWidth: '2px',
                      borderColor: isDark ? '#4b5563' : '#d1d5db',
                      backgroundColor: 'transparent',
                      color: isDark ? '#ffffff' : '#1f2937'
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>                <div 
                  className="mt-6 p-4 border rounded-lg"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    borderColor: isDark ? '#4b5563' : '#e5e7eb'
                  }}
                >
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                  >
                    This book is part of TMAS Academy&apos;s free educational resources. 
                    You can download, print, and use it for personal study purposes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
