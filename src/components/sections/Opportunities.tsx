'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Palette, 
  Code, 
  BookOpen, 
  ArrowRight,
  Star
} from 'lucide-react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'

const opportunities = [
  {
    icon: BookOpen,
    title: 'Authors for Future Books',
    description: 'Write comprehensive guides for AP subjects or competition math. Join our team of educational content creators.',
    requirements: ['Subject matter expertise', 'Strong writing skills', 'Experience with educational content'],
    badge: 'Prestigious',
    badgeColor: 'bg-yellow-100 text-yellow-700'
  },
  {
    icon: Users,
    title: 'Discord Tutors',
    description: 'Help students with AP subjects and math competitions. Share your expertise and build teaching experience.',
    requirements: ['Strong knowledge in AP subjects or math competitions', 'Good communication skills', 'Commitment to helping others'],
    badge: 'High Demand',
    badgeColor: 'bg-green-100 text-green-700'
  },
  {
    icon: Palette,
    title: 'Thumbnail Artists',
    description: 'Create eye-catching thumbnails for YouTube videos and promotional materials.',
    requirements: ['Proficiency in design software (Photoshop, Figma, etc.)', 'Understanding of YouTube thumbnail best practices', 'Creative mindset'],
    badge: 'Creative',
    badgeColor: 'bg-purple-100 text-purple-700'
  },
  {
    icon: Code,
    title: 'Website Developers',
    description: 'Improve and maintain the TMAS Academy website, add new features, and optimize performance.',
    requirements: ['Experience with React/Next.js', 'Knowledge of modern web technologies', 'Eye for design and UX'],
    badge: 'Technical',
    badgeColor: 'bg-blue-100 text-blue-700'
  },
  {
    icon: Users,
    title: 'Chapter Head',
    description: 'Lead your own TMAS Academy chapter to spread educational resources in your local community. Help incorporate our curriculum into schools and support students worldwide.',
    requirements: ['Leadership and organizational skills', 'Passion for education and community impact', 'Commitment to growing local educational initiatives', 'Ability to work with schools and communities'],
    badge: 'Leadership',
    badgeColor: 'bg-red-100 text-red-700'
  },
  {
    icon: Star,
    title: 'More Opportunities Coming Soon',
    description: 'We\'re always expanding our team and creating new roles. Stay tuned for additional opportunities to contribute to TMAS Academy\'s mission.',
    requirements: ['Keep an eye on our website for updates', 'Join our Discord community for announcements', 'Follow us for the latest opportunities'],
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-100 text-gray-700'
  }
]

export default function Opportunities() {
  const handleApply = (opportunityTitle: string) => {
    // Different forms for different opportunities
    if (opportunityTitle === 'Chapter Head') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLScjT35kPTdgcAbvjSzwdaSrHTrhaiy6U34lQFLM9up1CRkK4w/viewform', '_blank')
    } else {
      // General application form for other opportunities
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSfrabcJSdi3PbuoEaWwOf11Cj0R3iGDVabqUBjsp8zRxrswAg/viewform', '_blank')
    }
  }

  return (
    <section id="opportunities" className="py-24 bg-gray-50/30">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Opportunities at TMAS Academy
          </h2>          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We&apos;re looking for passionate individuals to join our mission. Help us create and share amazing 
            educational content while building valuable experience and making a difference.
          </p>
        </AnimatedSection>

        {/* Opportunities Grid */}
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
          {opportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <opportunity.icon className="w-7 h-7" />
                </div>
                <Badge className={`${opportunity.badgeColor} border-0`}>
                  {opportunity.badge}
                </Badge>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-800 transition-colors">
                {opportunity.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {opportunity.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {opportunity.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                      <Star className="w-3 h-3 mt-1 mr-2 text-gray-400 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <Button 
                onClick={() => handleApply(opportunity.title)}
                variant="outline" 
                className="w-full border-black text-black hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </StaggeredGrid>

        {/* Main CTA */}
        <AnimatedSection className="text-center" delay={0.6}>
          <div className="glass-card p-8 rounded-3xl inline-block shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-gray-700 mb-6 max-w-md">
              Join our team and help shape the future of educational content. 
              We offer mentorship, experience, and the chance to impact thousands of students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              
              <Button 
                onClick={() => handleApply('General')}
                size="lg" 
                className="bg-primary-gradient text-white hover:shadow-xl px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-0"
              >
                Apply Now / Learn More
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-black text-black hover:bg-gray-100 px-8 py-3 rounded-xl"
              >
                Join Discord First
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 