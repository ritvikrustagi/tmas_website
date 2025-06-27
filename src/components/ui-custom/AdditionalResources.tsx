'use client'

import React from 'react'
import { ExternalLink, BookOpen, Globe, Youtube } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface AdditionalResourcesProps {
  bookId: number
}

export default function AdditionalResources({ bookId }: AdditionalResourcesProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Additional resources data for each AP subject
  const additionalResources = {
    1: { // AP Calculus AB
      title: "Additional Resources for AP Calculus AB",
      description: "Enhance your AP Calculus AB preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Calculus AB Premium",
            description: "Comprehensive review with practice tests and detailed explanations",
            url: "https://www.amazon.ca/AP-Calculus-Premium-2025-Comprehensive/dp/1506291686/"
          },
          {
            title: "Princeton Review AP Calculus AB Prep",
            description: "Strategic approach with proven techniques and practice questions",
            url: "https://www.penguinrandomhouse.com/books/775357/princeton-review-ap-calculus-ab-premium-prep-12th-edition-by-the-princeton-review-and-david-khan/"
          },
          {
            title: "5 Steps to a 5: AP Calculus AB",
            description: "Step-by-step study plan with practice exams",
            url: "https://www.amazon.com/Steps-Calculus-2024-Prep-Review/dp/1265315441"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Calculus AB",
            description: "Free comprehensive video lessons and practice problems",
            url: "https://www.khanacademy.org/math/ap-calculus-ab"
          },
          {
            title: "College Board AP Calculus AB",
            description: "Official course description, exam format, and sample questions",
            url: "https://apstudents.collegeboard.org/courses/ap-calculus-ab"
          },
          {
            title: "Paul's Online Math Notes",
            description: "Detailed calculus notes and examples",
            url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx"
          },
          {
            title: "Desmos Graphing Calculator",
            description: "Interactive graphing tool for visualizing calculus concepts",
            url: "https://www.desmos.com/calculator"
          }
        ],
        youtubeChannels: [
          {
            title: "PatrickJMT",
            description: "Clear explanations of calculus concepts and problem-solving techniques",
            url: "https://www.youtube.com/user/patrickJMT"
          },
          {
            title: "Professor Leonard",
            description: "In-depth calculus lectures with detailed explanations",
            url: "https://www.youtube.com/user/professorleonard57"
          },
          {
            title: "NancyPi",
            description: "Friendly approach to calculus with step-by-step solutions",
            url: "https://www.youtube.com/c/NancyPi"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive calculus tutorials and practice problems",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          }
        ]
      }
    },
    2: { // AP Calculus BC
      title: "Additional Resources for AP Calculus BC",
      description: "Enhance your AP Calculus BC preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Calculus BC Premium",
            description: "Comprehensive review including BC-specific topics",
            url: "https://www.amazon.ca/AP-Calculus-Premium-2025-Comprehensive/dp/1506291686/"
          },
          {
            title: "Princeton Review AP Calculus BC Prep",
            description: "Strategic approach with BC-specific content",
            url: "https://www.penguinrandomhouse.com/books/775358/princeton-review-ap-calculus-bc-premium-prep-12th-edition-by-the-princeton-review-and-david-khan/"
          },
          {
            title: "5 Steps to a 5: AP Calculus BC",
            description: "Step-by-step study plan with BC topics",
            url: "https://www.amazon.com/Steps-Calculus-2024-Prep-Review/dp/126531545X"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Calculus BC",
            description: "Free comprehensive video lessons including BC topics",
            url: "https://www.khanacademy.org/math/ap-calculus-bc"
          },
          {
            title: "College Board AP Calculus BC",
            description: "Official course description and BC-specific content",
            url: "https://apstudents.collegeboard.org/courses/ap-calculus-bc"
          },
          {
            title: "Paul's Online Math Notes - Calculus II",
            description: "Detailed notes on series, parametric equations, and polar coordinates",
            url: "https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx"
          },
          {
            title: "Wolfram Alpha",
            description: "Computational knowledge engine for complex calculus problems",
            url: "https://www.wolframalpha.com/"
          }
        ],
        youtubeChannels: [
          {
            title: "PatrickJMT",
            description: "Clear explanations of BC-specific topics like series and parametric equations",
            url: "https://www.youtube.com/user/patrickJMT"
          },
          {
            title: "Professor Leonard",
            description: "In-depth BC calculus lectures with detailed explanations",
            url: "https://www.youtube.com/user/professorleonard57"
          },
          {
            title: "Krista King Math",
            description: "Friendly approach to advanced calculus concepts",
            url: "https://www.youtube.com/c/KristaKing"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive BC calculus tutorials and practice problems",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          }
        ]
      }
    },
    3: { // AP Physics 1
      title: "Additional Resources for AP Physics 1",
      description: "Enhance your AP Physics 1 preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Physics 1 Premium",
            description: "Comprehensive review with practice tests and detailed explanations",
            url: "https://www.amazon.ca/AP-Physics-Premium-2025-Comprehensive/dp/1506291643"
          },
          {
            title: "Princeton Review AP Physics 1 Prep",
            description: "Strategic approach with proven techniques and practice questions",
            url: "https://penguinrandomhousehighereducation.com/book/?isbn=9780593517697"
          },
          {
            title: "5 Steps to a 5: AP Physics 1",
            description: "Step-by-step study plan with practice exams",
            url: "https://www.amazon.com/Steps-Physics-2024-Prep-Review/dp/1265315468"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Physics 1",
            description: "Free comprehensive video lessons and practice problems",
            url: "https://www.khanacademy.org/science/ap-physics-1"
          },
          {
            title: "College Board AP Physics 1",
            description: "Official course description, exam format, and sample questions",
            url: "https://apstudents.collegeboard.org/courses/ap-physics-1-algebra-based"
          },
          {
            title: "Physics Classroom",
            description: "Interactive tutorials and simulations for physics concepts",
            url: "https://www.physicsclassroom.com/"
          },
          {
            title: "PhET Interactive Simulations",
            description: "Interactive physics simulations for hands-on learning",
            url: "https://phet.colorado.edu/en/simulations/physics"
          }
        ],
        youtubeChannels: [
          {
            title: "Flipping Physics",
            description: "Clear explanations of AP Physics 1 concepts with demonstrations",
            url: "https://www.youtube.com/c/FlippingPhysics"
          },
          {
            title: "Bozeman Science",
            description: "Comprehensive AP Physics 1 video lessons",
            url: "https://www.youtube.com/c/BozemanScience"
          },
          {
            title: "Physics Online",
            description: "Step-by-step physics problem solving and explanations",
            url: "https://www.youtube.com/c/PhysicsOnline"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive physics tutorials and practice problems",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          }
        ]
      }
    },
    4: { // AP Physics C
      title: "Additional Resources for AP Physics C",
      description: "Enhance your AP Physics C preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Physics C Premium",
            description: "Comprehensive review with calculus-based physics",
            url: "https://www.amazon.ca/AP-Physics-Premium-Eighth-Comprehensive/dp/1506291627"
          },
          {
            title: "Princeton Review AP Physics C Prep",
            description: "Strategic approach with calculus-based problems",
            url: "https://penguinrandomhousesecondaryeducation.com/book/?isbn=9780593517949"
          },
          {
            title: "5 Steps to a 5: AP Physics C",
            description: "Step-by-step study plan with calculus integration",
            url: "https://www.amazon.com/Steps-Physics-2024-Prep-Review/dp/1265315476"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Physics C",
            description: "Free comprehensive video lessons with calculus-based physics",
            url: "https://www.khanacademy.org/science/ap-physics-c"
          },
          {
            title: "College Board AP Physics C",
            description: "Official course description and calculus-based content",
            url: "https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics"
          },
          {
            title: "HyperPhysics",
            description: "Conceptual physics with mathematical derivations",
            url: "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html"
          },
          {
            title: "MIT OpenCourseWare Physics",
            description: "University-level physics courses with calculus",
            url: "https://ocw.mit.edu/courses/physics/"
          }
        ],
        youtubeChannels: [
          {
            title: "Flipping Physics",
            description: "Clear explanations of AP Physics C concepts with calculus",
            url: "https://www.youtube.com/c/FlippingPhysics"
          },
          {
            title: "Bozeman Science",
            description: "Comprehensive AP Physics C video lessons",
            url: "https://www.youtube.com/c/BozemanScience"
          },
          {
            title: "Physics Online",
            description: "Step-by-step calculus-based physics problem solving",
            url: "https://www.youtube.com/c/PhysicsOnline"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive physics C tutorials with calculus",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          }
        ]
      }
    },
    7: { // AP Biology
      title: "Additional Resources for AP Biology",
      description: "Enhance your AP Biology preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Biology Premium",
            description: "Comprehensive review with practice tests and detailed explanations",
            url: "https://www.amazon.ca/AP-Biology-Premium-2026-Comprehensive/dp/150629670X"
          },
          {
            title: "Princeton Review AP Biology Prep",
            description: "Strategic approach with proven techniques and practice questions",
            url: "https://penguinrandomhousehighereducation.com/book/?isbn=9780593517567"
          },
          {
            title: "5 Steps to a 5: AP Biology",
            description: "Step-by-step study plan with practice exams",
            url: "https://www.amazon.com/Steps-Biology-2024-Prep-Review/dp/1265315484"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Biology",
            description: "Free comprehensive video lessons and practice problems",
            url: "https://www.khanacademy.org/science/ap-biology"
          },
          {
            title: "College Board AP Biology",
            description: "Official course description, exam format, and sample questions",
            url: "https://apstudents.collegeboard.org/courses/ap-biology"
          },
          {
            title: "Bozeman Science",
            description: "Comprehensive biology video lessons and lab explanations",
            url: "https://www.bozemanscience.com/ap-biology/"
          },
          {
            title: "HHMI BioInteractive",
            description: "Interactive biology resources and virtual labs",
            url: "https://www.biointeractive.org/"
          }
        ],
        youtubeChannels: [
          {
            title: "Bozeman Science",
            description: "Comprehensive AP Biology video lessons and lab explanations",
            url: "https://www.youtube.com/c/BozemanScience"
          },
          {
            title: "Amoeba Sisters",
            description: "Engaging biology concepts with animations and humor",
            url: "https://www.youtube.com/c/AmoebaSisters"
          },
          {
            title: "Crash Course Biology",
            description: "Fast-paced biology overview with engaging content",
            url: "https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive biology tutorials and practice problems",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          }
        ]
      }
    },
    8: { // AP Statistics
      title: "Additional Resources for AP Statistics",
      description: "Enhance your AP Statistics preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Statistics Premium",
            description: "Comprehensive review with practice tests and detailed explanations",
            url: "https://www.amazon.ca/AP-Statistics-Premium-2025-Comprehensive/dp/150629197X"
          },
          {
            title: "Princeton Review AP Statistics Prep",
            description: "Strategic approach with proven techniques and practice questions",
            url: "https://www.penguinrandomhouse.com/books/775394/princeton-review-ap-statistics-premium-prep-21st-edition-by-the-princeton-review/"
          },
          {
            title: "5 Steps to a 5: AP Statistics",
            description: "Step-by-step study plan with practice exams",
            url: "https://www.amazon.com/Steps-Statistics-2024-Prep-Review/dp/1265315492"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Statistics",
            description: "Free comprehensive video lessons and practice problems",
            url: "https://www.khanacademy.org/math/ap-statistics"
          },
          {
            title: "College Board AP Statistics",
            description: "Official course description, exam format, and sample questions",
            url: "https://apstudents.collegeboard.org/courses/ap-statistics"
          },
          {
            title: "Stat Trek",
            description: "Interactive statistics tutorials and calculators",
            url: "https://stattrek.com/"
          },
          {
            title: "RStudio Cloud",
            description: "Free online R programming environment for statistical analysis",
            url: "https://rstudio.cloud/"
          }
        ],
        youtubeChannels: [
          {
            title: "Bozeman Science",
            description: "Comprehensive AP Statistics video lessons",
            url: "https://www.youtube.com/c/BozemanScience"
          },
          {
            title: "StatQuest",
            description: "Clear explanations of statistical concepts and methods",
            url: "https://www.youtube.com/c/joshstarmer"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive statistics tutorials and practice problems",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          },
          {
            title: "3Blue1Brown",
            description: "Visual explanations of statistical concepts",
            url: "https://www.youtube.com/c/3blue1brown"
          }
        ]
      }
    },
    9: { // AP Chemistry
      title: "Additional Resources for AP Chemistry",
      description: "Enhance your AP Chemistry preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Chemistry Premium",
            description: "Comprehensive review with practice tests and detailed explanations",
            url: "https://www.amazon.ca/AP-Chemistry-Premium-2025-Comprehensive/dp/1506291791"
          },
          {
            title: "Princeton Review AP Chemistry Prep",
            description: "Strategic approach with proven techniques and practice questions",
            url: "https://www.penguinrandomhouse.com/books/742472/princeton-review-ap-chemistry-premium-prep-26th-edition-by-the-princeton-review/"
          },
          {
            title: "5 Steps to a 5: AP Chemistry",
            description: "Step-by-step study plan with practice exams",
            url: "https://www.amazon.com/Steps-Chemistry-2024-Prep-Review/dp/1265315506"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Chemistry",
            description: "Free comprehensive video lessons and practice problems",
            url: "https://www.khanacademy.org/science/ap-chemistry"
          },
          {
            title: "College Board AP Chemistry",
            description: "Official course description, exam format, and sample questions",
            url: "https://apstudents.collegeboard.org/courses/ap-chemistry"
          },
          {
            title: "ChemCollective",
            description: "Interactive chemistry simulations and virtual labs",
            url: "https://chemcollective.org/"
          },
          {
            title: "PTable",
            description: "Interactive periodic table with detailed element information",
            url: "https://ptable.com/"
          }
        ],
        youtubeChannels: [
          {
            title: "Tyler DeWitt",
            description: "Clear chemistry explanations with step-by-step problem solving",
            url: "https://www.youtube.com/c/TylerDeWitt"
          },
          {
            title: "Bozeman Science",
            description: "Comprehensive AP Chemistry video lessons",
            url: "https://www.youtube.com/c/BozemanScience"
          },
          {
            title: "The Organic Chemistry Tutor",
            description: "Comprehensive chemistry tutorials and practice problems",
            url: "https://www.youtube.com/c/TheOrganicChemistryTutor"
          },
          {
            title: "Crash Course Chemistry",
            description: "Fast-paced chemistry overview with engaging content",
            url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr"
          }
        ]
      }
    },
    10: { // AP Computer Science Principles
      title: "Additional Resources for AP Computer Science Principles",
      description: "Enhance your AP Computer Science Principles preparation with these carefully curated resources.",
      resources: {
        books: [
          {
            title: "Barron's AP Computer Science Principles Premium",
            description: "Comprehensive review with practice tests and detailed explanations",
            url: "https://www.amazon.ca/Barrons-Computer-Science-Online-Tests/dp/1438009194"
          },
          {
            title: "Princeton Review AP Computer Science Principles Prep",
            description: "Strategic approach with proven techniques and practice questions",
            url: "https://www.penguinrandomhouse.com/books/719675/princeton-review-ap-computer-science-principles-prep-3rd-edition-by-the-princeton-review/"
          },
          {
            title: "5 Steps to a 5: AP Computer Science Principles",
            description: "Step-by-step study plan with practice exams",
            url: "https://www.amazon.com/Steps-Computer-Science-Principles-2024-Prep-Review/dp/1265315514"
          }
        ],
        websites: [
          {
            title: "Khan Academy AP Computer Science Principles",
            description: "Free comprehensive video lessons and practice problems",
            url: "https://www.khanacademy.org/computing/ap-computer-science-principles"
          },
          {
            title: "College Board AP Computer Science Principles",
            description: "Official course description, exam format, and sample questions",
            url: "https://apstudents.collegeboard.org/courses/ap-computer-science-principles"
          },
          {
            title: "Code.org",
            description: "Interactive programming tutorials and AP CSP curriculum",
            url: "https://code.org/"
          },
          {
            title: "Scratch",
            description: "Visual programming language for learning computational thinking",
            url: "https://scratch.mit.edu/"
          }
        ],
        youtubeChannels: [
          {
            title: "Code.org",
            description: "Official AP CSP curriculum videos and tutorials",
            url: "https://www.youtube.com/c/CodeOrg"
          },
          {
            title: "CS50",
            description: "Harvard's introduction to computer science",
            url: "https://www.youtube.com/c/cs50"
          },
          {
            title: "Crash Course Computer Science",
            description: "Fast-paced computer science overview",
            url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo"
          },
          {
            title: "The Coding Train",
            description: "Creative coding tutorials and projects",
            url: "https://www.youtube.com/c/TheCodingTrain"
          }
        ]
      }
    }
  }

  const currentResources = additionalResources[bookId as keyof typeof additionalResources]

  if (!currentResources) {
    return null
  }

  return (
    <div 
      className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl p-8 mt-8"
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
          {currentResources.title}
        </h2>
        <p 
          className="text-sm"
          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
        >
          {currentResources.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Books Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6" style={{ color: isDark ? '#60a5fa' : '#2563eb' }} />
            <h3 
              className="text-lg font-semibold"
              style={{ color: isDark ? '#ffffff' : '#1f2937' }}
            >
              Additional Prep Books
            </h3>
          </div>
          <div className="space-y-3">
            {currentResources.resources.books.map((book, index) => (
              <a
                key={index}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: isDark ? '#374151' : '#f9fafb',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-1 group-hover:text-blue-600 transition-colors duration-300"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {book.title}
                    </h4>
                    <p 
                      className="text-sm mb-2"
                      style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                    >
                      {book.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: isDark ? '#60a5fa' : '#2563eb' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Websites Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6" style={{ color: isDark ? '#10b981' : '#059669' }} />
            <h3 
              className="text-lg font-semibold"
              style={{ color: isDark ? '#ffffff' : '#1f2937' }}
            >
              Study Websites
            </h3>
          </div>
          <div className="space-y-3">
            {currentResources.resources.websites.map((website, index) => (
              <a
                key={index}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: isDark ? '#374151' : '#f9fafb',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-1 group-hover:text-green-600 transition-colors duration-300"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {website.title}
                    </h4>
                    <p 
                      className="text-sm mb-2"
                      style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                    >
                      {website.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: isDark ? '#10b981' : '#059669' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube Channels Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Youtube className="w-6 h-6" style={{ color: isDark ? '#ef4444' : '#dc2626' }} />
            <h3 
              className="text-lg font-semibold"
              style={{ color: isDark ? '#ffffff' : '#1f2937' }}
            >
              YouTube Channels
            </h3>
          </div>
          <div className="space-y-3">
            {currentResources.resources.youtubeChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: isDark ? '#374151' : '#f9fafb',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-1 group-hover:text-red-600 transition-colors duration-300"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {channel.title}
                    </h4>
                    <p 
                      className="text-sm mb-2"
                      style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                    >
                      {channel.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: isDark ? '#ef4444' : '#dc2626' }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="mt-8 p-4 border rounded-lg"
        style={{
          backgroundColor: isDark ? '#065f46' : '#d1fae5',
          borderColor: isDark ? '#10b981' : '#6ee7b7'
        }}
      >
        <p 
          className="text-sm text-center"
          style={{ color: isDark ? '#d1fae5' : '#065f46' }}
        >
          💡 <strong>Pro Tip:</strong> Use these resources in combination with our book and video lectures for a comprehensive study approach. 
          Each resource offers different perspectives and teaching styles to help you master the material.
        </p>
      </div>
    </div>
  )
} 