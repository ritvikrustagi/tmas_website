'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Youtube, MessageCircle, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-gray-200 py-12 mt-16">
      <div className="container">
        <div className="text-center">
          {/* Main content */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Ready to Excel? Get Started Today!
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Offering TUTORING for various APs and competitive math. 
              Join thousands of students who have improved their scores with TMAS Academy.
            </p>
            
            {/* Contact Email */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Contact: </span>
              <a 
                href="mailto:ritvikrustagi7@gmail.com" 
                className="text-black font-medium hover:underline"
              >
                ritvikrustagi7@gmail.com
              </a>
            </div>
          </div>          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => window.open('https://www.youtube.com/@tmasacademy', '_blank')}
            >
              <Youtube className="w-5 h-5 text-red-600" />
              <span>YouTube</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => window.open('https://discord.com/invite/u8YhZcDF?utm_source=Discord%20Widget&utm_medium=Connect', '_blank')}
            >
              <MessageCircle className="w-5 h-5 text-indigo-600" />
              <span>Discord</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => window.open('https://www.linkedin.com/company/tmas-academy/', '_blank')}
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span>LinkedIn</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => window.open('https://www.instagram.com/tmasacademy/', '_blank')}
            >
              <Instagram className="w-5 h-5 text-pink-600" />
              <span>Instagram</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            {/* Logo */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-black">TMAS Academy</h2>
              <p className="text-gray-600 text-sm mt-1">The Math and Science Academy</p>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              &copy; 2025 TMAS Academy. Designed with inspiration from modern UI principles.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Empowering students through high-quality, accessible education since 2021.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 