'use client'

import React from 'react'
import Header from '@/components/sections/Header'

export default function ChemistryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            AP Chemistry Study Guide
          </h1>
          <div className="w-full h-screen">
            <iframe
              src="/books/ACE_AP_Chemistry_TMAS_Academy.pdf"
              className="w-full h-full border-0 rounded-lg shadow-lg"
              title="AP Chemistry Study Guide"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 