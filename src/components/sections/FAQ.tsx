'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'

const faqs = [
  {
    id: 1,
    question: 'Are the books really free?',
    answer: 'Yes! All of our books are completely free to download and use. We believe in making quality education accessible to everyone, regardless of financial circumstances. There are no hidden fees or subscriptions required.',
    category: 'General'
  },
  {
    id: 2,
    question: 'How often are the books updated?',
    answer: 'We regularly update our books to reflect the latest College Board standards and exam formats. Major updates typically happen annually, with minor corrections and improvements made throughout the year based on student feedback.',
    category: 'Books'
  },
  {
    id: 3,
    question: 'Can I use these books if I\'m not taking AP classes?',
    answer: 'Absolutely! Our books are designed to be comprehensive learning resources. Whether you\'re self-studying, homeschooled, or just want to deepen your understanding of mathematics and science, our materials are suitable for independent learners.',
    category: 'Usage'
  },
  {
    id: 4,
    question: 'How do I join the Discord community?',
    answer: 'Simply click the "Join Discord" button on our website or community section. You\'ll be redirected to our Discord server where you can participate in study groups, ask questions, and connect with other students preparing for similar exams.',
    category: 'Community'
  },
  {
    id: 5,
    question: 'What makes TMAS Academy books different from other prep materials?',
    answer: 'Our books are written by students who have excelled in these subjects, so they understand the challenges you face. They\'re concise yet comprehensive, focusing on the most important concepts and providing plenty of practice problems with detailed solutions.',
    category: 'Books'
  },
  {
    id: 6,
    question: 'Do you offer one-on-one tutoring?',
    answer: 'Yes! Ritvik and other qualified tutors offer personalized tutoring sessions for AP subjects and math competitions. Contact us through email or Discord to discuss availability and scheduling.',
    category: 'Tutoring'
  },
  {
    id: 7,
    question: 'How can I contribute to TMAS Academy?',
    answer: 'We\'re always looking for talented individuals to join our team! Check out our Opportunities section for current openings in tutoring, content creation, web development, and more. You can also contribute by sharing feedback or helping other students in our Discord community.',
    category: 'Contributing'
  },
  {
    id: 8,
    question: 'Are solutions provided for all practice problems?',
    answer: 'Yes! Every practice problem in our books comes with detailed, step-by-step solutions. We believe that understanding the solution process is just as important as getting the right answer.',
    category: 'Books'
  },
  {
    id: 9,
    question: 'What if I find an error in one of the books?',
    answer: 'We appreciate feedback! If you find any errors, please report them through our Discord server or email. We review all feedback carefully and make corrections in future updates. Contributors who help improve our materials are often recognized in our acknowledgments.',
    category: 'Feedback'
  },
  {
    id: 10,
    question: 'Can I print the books?',
    answer: 'Yes, you\'re welcome to print the books for personal use. The PDFs are formatted to be printer-friendly. However, please respect our copyright and don\'t distribute printed copies commercially.',
    category: 'Usage'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <section id="faq" className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about TMAS Academy, our books, 
            community, and services.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-gradient text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <StaggeredGrid className="space-y-4" staggerDelay={0.05}>
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="glass-card rounded-xl border border-gray-200/80 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-16">
          <div className="glass-card p-8 rounded-3xl inline-block border border-gray-200/80">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6 max-w-md">
              Can&apos;t find what you&apos;re looking for? Our community is here to help, 
              or you can reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://discord.com/invite/u8YhZcDF?utm_source=Discord%20Widget&utm_medium=Connect', '_blank')}
                className="px-6 py-3 bg-primary-gradient text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 border-0"
              >
                Ask in Discord
              </button>
              <button 
                onClick={() => window.open('mailto:ritvikrustagi7@gmail.com?subject=Question about TMAS Academy', '_blank')}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Send Email
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
