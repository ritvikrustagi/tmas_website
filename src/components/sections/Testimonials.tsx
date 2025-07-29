'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'AP Calculus BC Student',
    school: 'Mountain View High School',
    score: '5',
    subject: 'AP Calculus BC',
    content: 'The ACE AP Calculus BC book was a game-changer for me. The practice problems are challenging but perfectly aligned with the actual exam. I went from struggling with series to confidently solving complex problems!',
    rating: 5,
    subjectColor: 'bg-calculus-gradient',
    avatar: '👩‍🎓'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'AMC 12 Competitor',
    school: 'Lincoln Academy',
    score: '108',
    subject: 'AMC 12',
    content: 'TMAS Academy\'s AMC book helped me achieve my goal of qualifying for AIME. The strategies and problem-solving techniques are explained so clearly. Ritvik\'s approach really works!',
    rating: 5,
    subjectColor: 'bg-competition-gradient',
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'AP Physics Student',
    school: 'Riverside High School',
    score: '5',
    subject: 'AP Physics 1',
    content: 'I was intimidated by physics until I found TMAS Academy. The explanations are so clear and the Discord community is incredibly supportive. Got a 5 on my first try!',
    rating: 5,
    subjectColor: 'bg-physics-gradient',
    avatar: '👩‍🔬'
  },
  {
    id: 4,
    name: 'Alex Kim',
    role: 'AP Calculus AB Student',
    school: 'Central High School',
    score: '5',
    subject: 'AP Calculus AB',
    content: 'The free resources from TMAS Academy are better than most paid courses. The practice problems gradually build up difficulty, which helped me understand concepts deeply.',
    rating: 5,
    subjectColor: 'bg-calculus-gradient',
    avatar: '👨‍🎓'
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'AIME Qualifier',
    school: 'Tech High School',
    score: '115',
    subject: 'AMC 10',
    content: 'The strategies in the AMC book are incredible. I improved my score by 40 points in just 3 months! The Discord study groups were also super helpful for motivation.',
    rating: 5,
    subjectColor: 'bg-competition-gradient',
    avatar: '👩‍💻'
  },
  {
    id: 6,
    name: 'David Thompson',
    role: 'AP Physics C Student',
    school: 'Innovation Academy',
    score: '5',
    subject: 'AP Physics C',
    content: 'Calculus-based physics seemed impossible until I used TMAS resources. The book breaks down complex concepts into manageable pieces. Highly recommend to anyone struggling!',
    rating: 5,
    subjectColor: 'bg-physics-gradient',
    avatar: '👨‍🔬'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from Our Students
          </h2>          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have achieved their academic goals with TMAS Academy. 
            Here&apos;s what they have to say about their experience.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" staggerDelay={0.1}>
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/80 relative overflow-hidden group"
            >
              {/* Subject Color Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${testimonial.subjectColor}`} />
              
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gray-300 transform rotate-180" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                  {/* Testimonial Content */}
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Student Info */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <Badge 
                        className="text-xs px-2 py-1"
                        style={{
                          background: `linear-gradient(135deg, var(--color-primary-light), var(--color-primary))`,
                          color: 'white',
                          border: 'none'
                        }}
                      >
                        {testimonial.subject}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.school}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm font-semibold text-green-600">Score: {testimonial.score}</span>
                      {testimonial.subject.includes('AP') && (
                        <span className="text-xs text-gray-500">AP Score</span>
                      )}
                      {testimonial.subject.includes('AMC') && (
                        <span className="text-xs text-gray-500">AMC Score</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredGrid>

        {/* Statistics Section */}
        <AnimatedSection delay={0.4}>
          <div className="glass-card rounded-3xl p-12 text-center border border-gray-200/80">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Impact in Numbers</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-600 font-medium">Students Improve Scores</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600 font-medium">5s on AP Exams</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-competition-gradient bg-clip-text text-transparent mb-2">
                  300+
                </div>
                <div className="text-sm text-gray-600 font-medium">AIME Qualifiers</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  4.9★
                </div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 italic">
                &ldquo;TMAS Academy is part of my soul. I've nurtured this organization for the past 5 years and spent thousands of hours to make sure I can give back to society to the best of my ability. I love my team, all my students, and the free resources that we have made and will continue to make for your success.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                — Ritvik Rustagi, Founder of TMAS Academy
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
