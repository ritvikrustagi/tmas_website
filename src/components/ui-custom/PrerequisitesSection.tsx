'use client'

import React from 'react'
import { BookOpen, Target, Lightbulb } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface PrerequisitesSectionProps {
  bookId: number
}

export default function PrerequisitesSection({ bookId }: PrerequisitesSectionProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Prerequisites data for each AP subject
  const prerequisites = {
    1: { // AP Calculus AB
      title: "Prerequisites for AP Calculus AB",
      summary: "This comprehensive guide builds upon fundamental mathematical concepts to prepare you for the AP Calculus AB exam. The book assumes you have a solid foundation in algebra, geometry, and trigonometry, and will systematically develop your understanding of limits, derivatives, and integrals.",
      howToUse: "Use this book as your primary study resource alongside your AP course. Work through each chapter sequentially, complete all practice problems, and review the step-by-step solutions. Focus on understanding the underlying concepts rather than memorizing formulas.",
      prerequisites: [
        "Strong algebra skills (factoring, solving equations, function notation)",
        "Understanding of basic geometry and coordinate geometry",
        "Proficiency in trigonometry (sine, cosine, tangent, unit circle)",
        "Experience with function transformations and graphs",
        "Basic understanding of mathematical notation and symbols"
      ],
      studyTips: [
        "Practice problems daily to build fluency",
        "Create concept maps for each major topic",
        "Use graphing calculators to visualize concepts",
        "Review previous chapters regularly",
        "Focus on understanding the 'why' behind each concept"
      ]
    },
    2: { // AP Calculus BC
      title: "Prerequisites for AP Calculus BC",
      summary: "This advanced guide covers all Calculus AB content plus additional BC-specific topics like series, parametric equations, and polar coordinates. You should have mastered the fundamentals of calculus and be comfortable with the concepts covered in Calculus AB before diving into this material.",
      howToUse: "This book is designed for students who have completed or are concurrently taking Calculus AB. Use it to deepen your understanding and prepare for the more challenging BC exam. Pay special attention to the BC-specific chapters and practice the advanced problem-solving techniques.",
      prerequisites: [
        "Complete understanding of Calculus AB concepts",
        "Strong foundation in limits, derivatives, and integrals",
        "Comfort with algebraic manipulation and function analysis",
        "Experience with mathematical proofs and logical reasoning",
        "Proficiency in using technology for mathematical exploration"
      ],
      studyTips: [
        "Master AB content before tackling BC topics",
        "Practice series convergence tests extensively",
        "Work with parametric and polar equations regularly",
        "Use technology to explore complex functions",
        "Focus on understanding the connections between topics"
      ]
    },
    3: { // AP Physics 1
      title: "Prerequisites for AP Physics 1",
      summary: "This algebra-based physics course covers fundamental concepts in mechanics, waves, and electricity. The book assumes you have a strong foundation in algebra and basic trigonometry, and will develop your understanding of physical principles through conceptual reasoning and mathematical analysis.",
      howToUse: "Use this book to supplement your AP Physics 1 course. Read each chapter before class to prepare, work through all examples and practice problems, and use the conceptual explanations to build your understanding. Focus on developing your problem-solving skills and conceptual reasoning.",
      prerequisites: [
        "Strong algebra skills (solving equations, manipulating formulas)",
        "Basic trigonometry (sine, cosine, tangent)",
        "Understanding of scientific notation and units",
        "Experience with graphing and data analysis",
        "Basic understanding of scientific method and experimental design"
      ],
      studyTips: [
        "Draw diagrams for every problem",
        "Identify known and unknown quantities clearly",
        "Practice unit conversions and dimensional analysis",
        "Use free-body diagrams for force problems",
        "Connect mathematical solutions to physical meaning"
      ]
    },
    4: { // AP Physics C
      title: "Prerequisites for AP Physics C",
      summary: "This calculus-based physics course covers advanced mechanics and electricity & magnetism. The book assumes you have completed or are concurrently taking calculus, and will apply calculus concepts to solve complex physics problems. Strong mathematical skills are essential for success.",
      howToUse: "This book is designed for students with calculus background. Use it alongside your AP Physics C course to develop deep understanding of calculus-based physics. Practice deriving equations from fundamental principles and focus on the mathematical rigor required for the exam.",
      prerequisites: [
        "Strong calculus background (derivatives, integrals, differential equations)",
        "Complete understanding of algebra and trigonometry",
        "Experience with vector mathematics and coordinate systems",
        "Comfort with mathematical modeling and problem-solving",
        "Understanding of basic physics concepts from Physics 1"
      ],
      studyTips: [
        "Practice calculus applications to physics problems",
        "Derive equations from fundamental principles",
        "Use calculus to analyze motion and forces",
        "Practice with vector operations and coordinate transformations",
        "Focus on understanding the mathematical-physical connections"
      ]
    },
    5: { // AMC 10/12
      title: "Prerequisites for AMC 10/12",
      summary: "This comprehensive competition math guide covers advanced problem-solving strategies and techniques specifically designed for the AMC 10 and AMC 12 competitions. The book assumes you have a strong foundation in algebra, geometry, and trigonometry, and will develop your mathematical reasoning and creative problem-solving skills.",
      howToUse: "Use this book to prepare for AMC competitions. Work through problems systematically, practice time management, and focus on understanding multiple solution approaches. Complete timed practice tests to simulate real competition conditions and build your confidence.",
      prerequisites: [
        "Strong algebra skills (factoring, solving equations, function analysis)",
        "Complete understanding of geometry (angles, areas, volumes, transformations)",
        "Proficiency in trigonometry (sine, cosine, tangent, unit circle)",
        "Experience with number theory and counting principles",
        "Comfort with mathematical proofs and logical reasoning"
      ],
      studyTips: [
        "Practice problems under timed conditions regularly",
        "Learn multiple solution approaches for each problem type",
        "Focus on understanding the underlying mathematical concepts",
        "Review past AMC problems and solutions",
        "Develop efficient problem-solving strategies and shortcuts"
      ]
    },
    6: { // AMC 10/12 Key Strategies and Formulas
      title: "Prerequisites for AMC 10/12 Key Strategies and Formulas",
      summary: "This quick reference guide provides essential formulas, strategies, and tips for AMC competitions. The book serves as a comprehensive cheat sheet and study aid, assuming you have basic mathematical knowledge and want to optimize your competition performance.",
      howToUse: "Use this book as a quick reference during practice sessions and as a final review before competitions. Memorize key formulas and strategies, practice applying them to different problem types, and use the tips to improve your problem-solving efficiency.",
      prerequisites: [
        "Basic understanding of algebra, geometry, and trigonometry",
        "Familiarity with mathematical notation and symbols",
        "Experience with mathematical problem-solving",
        "Interest in competition mathematics",
        "Ability to memorize and apply formulas quickly"
      ],
      studyTips: [
        "Memorize essential formulas and their applications",
        "Practice applying strategies to various problem types",
        "Use this guide as a quick reference during practice",
        "Review formulas regularly to maintain retention",
        "Combine with full practice problems for best results"
      ]
    },
    7: { // AP Biology
      title: "Prerequisites for AP Biology",
      summary: "This comprehensive biology guide covers the fundamental principles of life science, from cellular processes to ecological systems. The book assumes you have a basic understanding of scientific inquiry and will develop your knowledge through detailed explanations, diagrams, and practice questions.",
      howToUse: "Use this book as your primary study resource for AP Biology. Read chapters before class to prepare, complete all practice questions, and use the diagrams and explanations to reinforce your understanding. Focus on connecting concepts across different biological systems.",
      prerequisites: [
        "Basic understanding of scientific method and experimental design",
        "Comfort with reading and interpreting scientific text",
        "Experience with basic chemistry concepts (atoms, molecules, reactions)",
        "Understanding of mathematical concepts (ratios, percentages, graphs)",
        "Ability to analyze and interpret data and graphs"
      ],
      studyTips: [
        "Create concept maps for major biological systems",
        "Practice drawing and labeling diagrams",
        "Connect molecular processes to organismal functions",
        "Use analogies to understand complex processes",
        "Review and connect concepts across chapters regularly"
      ]
    },
    8: { // AP Statistics
      title: "Prerequisites for AP Statistics",
      summary: "This comprehensive statistics guide covers descriptive statistics, probability, and inferential statistics. The book assumes you have strong algebra skills and will develop your understanding of statistical concepts through real-world applications and extensive practice with data analysis.",
      howToUse: "Use this book to build your statistical reasoning skills. Work through all examples and practice problems, use technology (calculators, software) for data analysis, and focus on understanding the logic behind statistical procedures. Practice interpreting results in context.",
      prerequisites: [
        "Strong algebra skills (solving equations, manipulating formulas)",
        "Understanding of basic mathematical concepts (fractions, decimals, percentages)",
        "Comfort with reading and interpreting graphs and charts",
        "Basic understanding of probability concepts",
        "Experience with using calculators and basic technology"
      ],
      studyTips: [
        "Practice with real data sets regularly",
        "Learn to use statistical software and calculators",
        "Focus on understanding statistical reasoning and interpretation",
        "Practice writing clear statistical conclusions",
        "Connect statistical concepts to real-world applications"
      ]
    },
    9: { // AP Chemistry
      title: "Prerequisites for AP Chemistry",
      summary: "This comprehensive chemistry guide covers atomic structure, molecular interactions, and chemical reactions. The book assumes you have a strong foundation in algebra and basic scientific concepts, and will develop your understanding through detailed explanations and extensive practice problems.",
      howToUse: "Use this book to supplement your AP Chemistry course. Read chapters before class, complete all practice problems, and use the step-by-step solutions to understand problem-solving strategies. Focus on understanding the underlying principles rather than memorizing facts.",
      prerequisites: [
        "Strong algebra skills (solving equations, manipulating formulas)",
        "Understanding of basic scientific concepts and units",
        "Comfort with mathematical calculations and unit conversions",
        "Basic understanding of atomic structure and periodic trends",
        "Experience with laboratory safety and experimental procedures"
      ],
      studyTips: [
        "Practice balancing chemical equations regularly",
        "Use dimensional analysis for all calculations",
        "Create concept maps for major chemical principles",
        "Practice with molecular models and diagrams",
        "Connect macroscopic observations to molecular explanations"
      ]
    },
    10: { // AP Computer Science Principles
      title: "Prerequisites for AP Computer Science Principles",
      summary: "This comprehensive guide introduces computational thinking and programming concepts. The book assumes no prior programming experience and will develop your understanding through hands-on activities, real-world applications, and practice with computational tools and languages.",
      howToUse: "Use this book to develop your computational thinking skills. Work through all programming exercises, complete the practice problems, and use the real-world examples to understand how computing impacts society. Focus on understanding the logic and problem-solving approaches.",
      prerequisites: [
        "Basic computer literacy and comfort with technology",
        "Strong logical thinking and problem-solving skills",
        "Understanding of basic mathematical concepts",
        "Ability to follow step-by-step instructions",
        "Interest in how technology works and impacts society"
      ],
      studyTips: [
        "Practice programming regularly with hands-on exercises",
        "Break down complex problems into smaller steps",
        "Use computational tools to explore and analyze data",
        "Connect programming concepts to real-world applications",
        "Collaborate with others on programming projects"
      ]
    }
  }

  const currentPrerequisites = prerequisites[bookId as keyof typeof prerequisites]

  if (!currentPrerequisites) {
    return null
  }

  return (
    <div 
      className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl p-8 mb-8"
      style={{
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        borderColor: isDark ? '#4b5563' : '#e5e7eb'
      }}
    >
      <div className="text-center mb-8">
        <h2 
          className="text-2xl font-bold mb-2"
          style={{ color: isDark ? '#ffffff' : '#1f2937' }}
        >
          {currentPrerequisites.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Summary and How to Use */}
        <div className="space-y-6">
          {/* Summary */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" style={{ color: isDark ? '#60a5fa' : '#2563eb' }} />
              <h3 
                className="text-lg font-semibold"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
              >
                Course Overview
              </h3>
            </div>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
            >
              {currentPrerequisites.summary}
            </p>
          </div>

          {/* How to Use */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6" style={{ color: isDark ? '#10b981' : '#059669' }} />
              <h3 
                className="text-lg font-semibold"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
              >
                How to Use This Book
              </h3>
            </div>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
            >
              {currentPrerequisites.howToUse}
            </p>
          </div>
        </div>

        {/* Prerequisites and Study Tips */}
        <div className="space-y-6">
          {/* Prerequisites */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6" style={{ color: isDark ? '#f59e0b' : '#d97706' }} />
              <h3 
                className="text-lg font-semibold"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
              >
                Prerequisites
              </h3>
            </div>
            <div className="space-y-2">
              {currentPrerequisites.prerequisites.map((prereq, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: isDark ? '#374151' : '#f9fafb',
                    borderColor: isDark ? '#4b5563' : '#e5e7eb'
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: isDark ? '#60a5fa' : '#2563eb' }}
                  />
                  <span 
                    className="text-sm"
                    style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                  >
                    {prereq}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Study Tips */}
          <div>
            <h4 
              className="font-semibold mb-3"
              style={{ color: isDark ? '#ffffff' : '#1f2937' }}
            >
              Study Tips
            </h4>
            <div className="space-y-2">
              {currentPrerequisites.studyTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: isDark ? '#065f46' : '#d1fae5',
                    borderColor: isDark ? '#10b981' : '#6ee7b7'
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: isDark ? '#10b981' : '#059669' }}
                  />
                  <span 
                    className="text-sm"
                    style={{ color: isDark ? '#d1fae5' : '#065f46' }}
                  >
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div 
        className="mt-8 p-4 border rounded-lg"
        style={{
          backgroundColor: isDark ? '#1e3a8a' : '#dbeafe',
          borderColor: isDark ? '#3b82f6' : '#93c5fd'
        }}
      >
        <p 
          className="text-sm text-center"
          style={{ color: isDark ? '#dbeafe' : '#1e40af' }}
        >
          💡 <strong>Ready to start?</strong> Make sure you meet the prerequisites above, then dive into the book content below. 
          Remember, consistent practice and understanding the fundamentals are key to success in AP exams.
        </p>
      </div>
    </div>
  )
} 