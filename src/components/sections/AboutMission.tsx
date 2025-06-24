'use client'

import React from 'react'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import StaggeredGrid from '@/components/ui-custom/StaggeredGrid'

export default function AboutMission() {
  return (
    <section id="about-mission" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Story & Mission
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              TMAS Academy (The Math and Science Academy) is dedicated to providing high-quality, accessible 
              educational resources for students preparing for AP exams and math competitions like the AMC 10/12. 
              Founded by Ritvik Rustagi in 2021, TMAS offers several free books covering AP Calculus, AP Physics, 
              and competitive math.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
              Our mission is to make learning efficient and engaging through concise books, rapid review videos, 
              and a supportive Discord community. We believe in making quality education accessible to all students, 
              regardless of their background, by providing exceptional resources in math and science.
            </p>
            
            {/* Custom decorative separator */}
            <div className="flex items-center justify-center my-12">
              <div className="h-px bg-gray-300 w-20" />
              <div className="mx-4 w-2 h-2 bg-gray-300 rounded-full" />
              <div className="h-px bg-gray-300 w-20" />
            </div>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              TMAS Academy makes quality handouts, books, and video lectures for AP courses along with contest math 
              (AMC, AIME). Our books are meticulously designed to be concise yet thorough, each typically 150-350 pages, 
              packed with hundreds of problems and detailed solutions. We serve as an invaluable resource for students 
              aiming for excellence in their academic and competitive endeavors.
            </p>
          </AnimatedSection>
          
          {/* Achievement highlights */}
          <StaggeredGrid className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Comprehensive Resources</h3>
              <p className="text-gray-600 text-sm">150-300 page books packed with hundreds of problems and detailed solutions</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Targeted Preparation</h3>
              <p className="text-gray-600 text-sm">Aligned with College Board standards and competitive exam requirements</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">💡</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Accessible Learning</h3>
              <p className="text-gray-600 text-sm">Complex concepts broken down into approachable, understandable knowledge</p>
            </div>
          </StaggeredGrid>
        </div>
      </div>
    </section>
  )
} 