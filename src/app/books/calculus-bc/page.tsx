'use client'

import React from 'react'
import Header from '@/components/sections/Header'

export default function CalculusBCPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            AP Calculus BC Study Guide
          </h1>
          <div className="w-full h-screen">
            <iframe
              src="/books/ACE_AP_Calculus_BC_by_RitvikRustagi.pdf"
              className="w-full h-full border-0 rounded-lg shadow-lg"
              title="AP Calculus BC Study Guide"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 