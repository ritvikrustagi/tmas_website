'use client'

import React from 'react'
import { X, Download, ExternalLink, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

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
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-16 rounded-lg shadow-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: book.coverGradient }}
                >
                  {book.title.split(' ').slice(1, 3).join(' ')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {book.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">by {book.author}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${book.badgeColor} border-0`}>
                      {book.badge}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
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
            </div>

            {/* Content */}
            <div className="flex h-[calc(90vh-200px)]">
              {/* Preview Panel */}
              <div className="flex-1 p-6 overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  <Eye className="w-5 h-5 inline mr-2" />
                  Preview: {currentPreview.title}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 font-mono text-sm">
                  {currentPreview.content.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${
                        line.startsWith('•') ? 'ml-4 text-blue-600 dark:text-blue-400' :
                        line.startsWith('Example') || line.startsWith('Practice') ? 'font-bold text-gray-900 dark:text-gray-100 mt-4' :
                        line.includes('≡') || line.includes('=') ? 'ml-4 text-green-600 dark:text-green-400' :
                        'text-gray-700 dark:text-gray-300'
                      } ${line === '' ? 'h-2' : ''}`}
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What&apos;s included:</h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• {book.problems} practice problems with solutions</li>
                    <li>• Comprehensive theory and examples</li>
                    <li>• Exam-style questions and strategies</li>
                    <li>• Regular updates and improvements</li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-80 border-l border-gray-200 dark:border-gray-700 p-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Book Details</h4>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Pages:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{book.pages}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Problems:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{book.problems}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">File Size:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{book.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Format:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">PDF</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Price:</span>
                    <span className="ml-2 font-bold text-green-600 dark:text-green-400">Free</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    onClick={handleViewPDF}
                    className="w-full bg-primary-gradient text-white hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Full PDF
                  </Button>
                  
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
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
