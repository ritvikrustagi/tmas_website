'use client'

import React from 'react'
import { Download, ExternalLink, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'

interface BookPreviewContentProps {
  book: {
    id: number
    title: string
    author: string
    description: string
    coverGradient: string
    coverImage: string
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
        "Practice Problems:",
        "1. lim(x→0) sin(x)/x",
        "2. lim(x→∞) (3x² + 2x)/(x² - 1)",
        "3. lim(x→1) (x³ - 1)/(x - 1)"
      ]
    },
    2: { // Calculus BC
      title: "Unit 9: Parametric, Polar, and Vector-Valued Functions",
      content: [
        "9.1 Defining and Differentiating Parametric Equations",
        "• Understanding parametric equations as functions of time",
        "• First derivatives: dy/dx = (dy/dt) / (dx/dt)",
        "",
        "9.2 Second Derivatives of Parametric Equations",
        "• Chain rule application: d²y/dx² = d/dt(dy/dx) ÷ dx/dt",
        "",
        "9.3 Finding Arc Lengths of Curves Given by Parametric Equations",
        "• Using arc length formula: ∫ √[(dx/dt)² + (dy/dt)²] dt",
        "",
        "9.4 Derivatives of Vector-Valued Functions",
        "• Velocity and acceleration vectors",
        "• Component-wise differentiation of vector functions",
        "",
        "Practice Problems:",
        "1. Given x = t² + 1 and y = ln(t), find dy/dx.",
        "2. Determine d²y/dx² for x = sin(t), y = t².",
        "3. Find the arc length of the curve x = t, y = t² from t = 0 to t = 2.",
        "4. Given r(t) = ⟨cos(t), sin(t), t⟩, find the velocity and acceleration vectors."
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
    4: {
      // Physics
      title: "Chapter 1: Kinematics",
      content: [
        "1.0 Scalars and Vectors",
        "• Scalars: magnitude only (e.g., distance, speed)",
        "• Vectors: magnitude and direction (e.g., displacement, velocity)",
        "",
        "1.1 Scalar Quantities in Depth",
        "• Distance (d): total length of path traveled",
        "• Speed (s): rate of change of distance, s = d / t",
        "",
        "1.2 Vector Quantities in Depth",
        "• Displacement (Δx): change in position, includes direction",
        "• Velocity (v): displacement over time, v = Δx / t",
        "• Acceleration (a): change in velocity over time, a = Δv / t",
        "",
        "Key Concepts:",
        "• Distinction between scalar and vector quantities",
        "• Kinematic variables and their definitions",
        "• Using directionality in motion analysis"
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
        "1.1 Structure of Water and Hydrogen Bonding",
        "• Polarity and hydrogen bonding",
        "• Cohesion, adhesion, and surface tension",
        "",
        "1.2 Elements of Life",
        "• Essential elements (CHNOPS)",
        "• Carbon’s ability to form large, complex molecules",
        "",
        "1.3 Introduction to Biological Macromolecules",
        "• Monomers and polymers",
        "• Dehydration synthesis and hydrolysis",
        "",
        "1.4 Properties of Biological Macromolecules",
        "• Structure and function of carbohydrates, lipids, and proteins",
        "",
        "1.5 Structure and Function of Biological Macromolecules",
        "• R-group properties and protein folding",
        "",
        "1.6 Nucleic Acids",
        "• DNA and RNA structure",
        "• Nucleotide components and base pairing rules",
        "",
        "Key Concepts:",
        "• Hydrogen bonding in water",
        "• Macromolecule structure-function relationships",
        "• Polymer formation and breakdown",
        "• Information storage in nucleic acids"
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
    9: {
      // Chemistry
      title: "Unit 1: Atomic Structure and Properties",
      content: [
        "1.1 Moles and Molar Mass",
        "• Using Avogadro’s number and molar mass to convert between particles and grams",
        "• Mole concept in chemical calculations",
        "",
        "1.2 Mass Spectrometry of Elements",
        "• Interpretation of mass spectra",
        "• Determining isotopic composition and average atomic mass",
        "",
        "1.3 Elemental Composition of Pure Substances",
        "• Empirical and molecular formulas",
        "• Using percent composition in analysis",
        "",
        "Key Concepts:",
        "• Mole conversions",
        "• Mass spectrometry and isotopes",
        "• Empirical vs. molecular formulas"
      ]
    },
    10: {
        // APCSA
        title: "Unit 3: Algorithms and Programming",
        content: [
          "3.1 Data Types",
          "• int, double, boolean, and String",
          "",
          "3.2 Boolean Values",
          "• true/false logic and expressions",
          "",
          "3.3 Logic Gates",
          "• AND, OR, NOT operations in programming",
          "",
          "3.4 Strings",
          "• String methods and concatenation",
          "",
          "3.5 Evaluating Conditionals",
          "• if, else if, else statements",
          "",
          "Key Concepts:",
          "• Control flow with conditionals and loops",
          "• Logical and comparison operators",
          "• Algorithm design and efficiency"
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
          <div className="w-12 h-16 rounded-lg shadow-lg overflow-hidden relative">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover"
            />
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
