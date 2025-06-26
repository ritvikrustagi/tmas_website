'use client'

import React from 'react'
import { Download, ExternalLink, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'

interface BookPreviewContentProps {
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

export default function BookPreviewContent({ book }: BookPreviewContentProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleViewPDF = () => {
    window.open(book.pdfPath, '_blank')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = book.pdfPath
    link.download = book.title.replace(/[^a-z0-9]/gi, '_') + '.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
    4: { // Physics C
      title: "Chapter 1: Advanced Mechanics",
      content: [
        "1.1 Lagrangian Mechanics",
        "• Generalized coordinates",
        "• Lagrangian formulation",
        "• Euler-Lagrange equations",
        "",
        "1.2 Conservation Laws",
        "• Energy conservation",
        "• Momentum conservation",
        "• Angular momentum",
        "",
        "Example 1.1: Simple pendulum analysis",
        "Using Lagrangian approach...",
        "",
        "Practice Problems:",
        "1. Double pendulum system",
        "2. Central force problems",
        "3. Rigid body rotation"
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
    },
    6: { // AMC Formulas
      title: "Essential Formulas and Strategies",
      content: [
        "1.1 Algebraic Identities",
        "• (a+b)² = a² + 2ab + b²",
        "• (a-b)² = a² - 2ab + b²",
        "• a³ + b³ = (a+b)(a² - ab + b²)",
        "",
        "1.2 Geometric Formulas",
        "• Triangle area: A = ½bh",
        "• Circle area: A = πr²",
        "• Sphere volume: V = (4/3)πr³",
        "",
        "Strategy Tips:",
        "1. Always check for special cases",
        "2. Use symmetry when possible",
        "3. Work backwards from answers"
      ]
    },
    7: { // Biology
      title: "Chapter 1: Cell Structure and Function",
      content: [
        "1.1 Prokaryotic vs Eukaryotic Cells",
        "• Cell membrane structure",
        "• Organelle functions",
        "• DNA organization",
        "",
        "1.2 Cellular Processes",
        "• Photosynthesis overview",
        "• Cellular respiration",
        "• Protein synthesis",
        "",
        "Key Concepts:",
        "• Membrane transport mechanisms",
        "• Enzyme kinetics",
        "• Cell cycle regulation"
      ]
    },
    8: { // Statistics
      title: "Chapter 1: Descriptive Statistics",
      content: [
        "1.1 Measures of Central Tendency",
        "• Mean, median, mode",
        "• Weighted averages",
        "• Outlier effects",
        "",
        "1.2 Measures of Variability",
        "• Range and IQR",
        "• Standard deviation",
        "• Variance calculations",
        "",
        "Practice Problems:",
        "1. Calculate summary statistics",
        "2. Box plot interpretation", 
        "3. Distribution shape analysis"
      ]
    },
    9: { // Chemistry
      title: "Chapter 1: Atomic Structure",
      content: [
        "1.1 Atomic Theory",
        "• Electron configuration",
        "• Periodic trends",
        "• Chemical bonding",
        "",
        "1.2 Molecular Structure",
        "• VSEPR theory",
        "• Hybridization",
        "• Intermolecular forces",
        "",
        "Key Reactions:",
        "• Acid-base reactions",
        "• Redox reactions",
        "• Equilibrium principles"
      ]
    },
    10: { // Computer Science
      title: "Chapter 1: Programming Fundamentals",
      content: [
        "1.1 Algorithm Design",
        "• Problem decomposition",
        "• Pseudocode writing",
        "• Algorithm efficiency",
        "",
        "1.2 Data Structures",
        "• Arrays and lists",
        "• Stacks and queues",
        "• Hash tables",
        "",
        "Programming Concepts:",
        "• Variables and data types",
        "• Control structures",
        "• Function design"
      ]
    }
  }

  const currentPreview = previewContent[book.id as keyof typeof previewContent] || {
    title: "Preview Content",
    content: ["Content preview will be available soon.", "", "This book contains:", `• ${book.problems} practice problems`, `• ${book.pages} of comprehensive coverage`, "• Detailed step-by-step solutions", "• Aligned with latest standards"]
  }

  return (
    <div className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl">
      {/* Header */}
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
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Preview Panel */}
        <div 
          className="flex-1 p-4 lg:p-6 overflow-y-auto"
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
                  fontWeight: line.startsWith('Example') || line.startsWith('Practice') || line.startsWith('Strategy') || line.startsWith('Key') ? 'bold' : 
                             line.startsWith('•') || line.includes('≡') || line.includes('=') ? '500' : 'normal',
                  marginTop: line.startsWith('Example') || line.startsWith('Practice') || line.startsWith('Strategy') || line.startsWith('Key') ? '16px' : '0',
                  color: line.startsWith('•') ? (isDark ? '#93c5fd' : '#1d4ed8') :
                         line.startsWith('Example') || line.startsWith('Practice') || line.startsWith('Strategy') || line.startsWith('Key') ? (isDark ? '#ffffff' : '#1f2937') :
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
        </div>

        {/* Sidebar */}
        <div 
          className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l p-6"
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
          </div>

          <div className="mt-8 space-y-3">
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
          </div>

          <div 
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
    </div>
  )
}
