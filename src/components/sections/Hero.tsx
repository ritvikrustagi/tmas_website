'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import GeometricShapes from '@/components/ui-custom/GeometricShapes'

export default function Hero() {
  const handleScrollToBooks = () => {
    const booksSection = document.getElementById('books')
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePlayButtonClick = () => {
    window.open('https://www.youtube.com/@tmasacademy', '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-[600px] flex items-center justify-center border-b border-gray-200 py-12 text-center">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/40 z-[1]" />
      
      {/* Background geometric shapes */}
      <GeometricShapes />
      
      {/* Hero content */}
      <div className="container relative z-[22] py-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main 3D Graphic */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center mb-16"
          >
            <div className="w-full max-w-lg h-80 flex items-center justify-center">
              {/* 3D Educational Graphic */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Books Stack */}
                <div className="absolute left-1/4 top-1/4 transform -rotate-12 animate-float">
                  <div className="w-24 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl border-2 border-white/20"></div>
                  <div className="w-24 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-xl -mt-28 ml-2 border-2 border-white/20"></div>
                </div>
                
                {/* Play Button */}
                <div className="absolute right-1/4 top-1/3 z-10 animate-float-delayed">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-3 hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={handlePlayButtonClick}>
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                
                {/* Chart/Graph */}
                <div className="absolute right-1/6 bottom-1/4 transform rotate-6 animate-float">
                  <div className="w-16 h-20 bg-white rounded-lg shadow-2xl p-2 border border-gray-200 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-end justify-between h-full gap-1">
                      <div className="w-2 bg-gradient-to-t from-orange-400 to-orange-500 rounded-full h-3/4"></div>
                      <div className="w-2 bg-gradient-to-t from-pink-400 to-pink-500 rounded-full h-1/2"></div>
                      <div className="w-2 bg-gradient-to-t from-blue-400 to-blue-500 rounded-full h-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Golden Sphere */}
                <div className="absolute left-1/3 bottom-1/4 animate-float-delayed">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-300"></div>
                </div>
                
                {/* Central Math Symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-xl flex items-center justify-center border-4 border-white/50 hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-gray-700">π</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >            <Button 
              onClick={handleScrollToBooks}
              size="lg"
              className="bg-primary-gradient text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-0"
            >
              Explore Free Books
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Join Community
            </Button>
          </motion.div>
          
          {/* Stats or highlights */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '9+', label: 'Free Books' },
              { number: '1000+', label: 'Practice Problems' },
              { number: '1600+', label: 'Discord Members' },
              { number: '2021', label: 'Founded' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={statsVariants}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 