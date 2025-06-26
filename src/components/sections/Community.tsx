'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, Users, BookOpen, Trophy, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'
import { useTheme } from '@/contexts/ThemeContext'

export default function Community() {
  const { theme } = useTheme()
  
  const handleJoinDiscord = () => {
    // Open the actual Discord invite link
    window.open('https://discord.com/invite/N6FqMxYn?utm_source=Discord%20Widget&utm_medium=Connect', '_blank')
  }

  // Discord server ID extracted from your invite link
  // Note: You may need to enable the widget in your Discord server settings
  const discordServerId = "1019082642794229870" // Extracted from your invite

  const communityFeatures = [
    {
      icon: Users,
      title: 'Active Study Groups',
      description: 'Join study sessions with like-minded students preparing for the same exams'
    },
    {
      icon: BookOpen,
      title: 'Expert Guidance',
      description: 'Get help from experienced tutors and students who have aced their exams'
    },
    {
      icon: Trophy,
      title: 'Competition Prep',
      description: 'Specialized channels for AMC, AIME, and other math competition preparation'
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Weekly review sessions, problem-solving workshops, and Q&A with Ritvik'
    }
  ]

  return (
    <section id="community" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main Community Card */}
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-12 text-center shadow-xl border border-gray-200">
              {/* Discord Icon */}
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Join TMAS Academy&apos;s Discord
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Connect with hardworking students, prepare for AP exams and math competitions 
                like AMC 10/12 & AIME. Participate in group study sessions and review sessions led 
                by Ritvik Rustagi and others!
              </p>
              
              {/* Official Discord Widget */}
              <div className="mt-12 flex justify-center">
                <div 
                  className="rounded-xl shadow-lg overflow-hidden border w-full max-w-sm mx-auto"
                  style={{
                    backgroundColor: theme === 'dark' ? '#2f3136' : '#ffffff',
                    borderColor: theme === 'dark' ? '#4f545c' : '#e5e7eb'
                  }}
                >
                  <iframe
                    src={`https://discord.com/widget?id=${discordServerId}&theme=${theme === 'dark' ? 'dark' : 'light'}`}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    title="Discord Server Widget"
                    className="block min-w-0"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
              </div>

              {/* Community Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-black">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-sm text-gray-600">Study Sessions</div>
                </div>
                <div className="p-4 md:col-span-1 col-span-2">
                  <div className="text-2xl font-bold text-black">24/7</div>
                  <div className="text-sm text-gray-600">Help Available</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Community Features */}
          <StaggeredGrid className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {communityFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredGrid>
          
          {/* Call to Action */}
          <AnimatedSection className="mt-16 text-center" delay={0.6}>
            <p className="text-gray-600 mb-6">
              Ready to join a community of ambitious learners?
            </p>
            <Button 
              onClick={handleJoinDiscord}
              variant="outline"
              className="border-black text-black hover:bg-gray-100"
            >
              Get Discord Invite Link
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 