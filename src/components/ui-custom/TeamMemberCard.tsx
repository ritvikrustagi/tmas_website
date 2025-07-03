'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

interface TeamMemberCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export default function TeamMemberCard({ name, description, imageUrl }: TeamMemberCardProps) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className="text-center relative cursor-pointer"
      onMouseEnter={() => setDescriptionVisible(true)}
      onMouseLeave={() => setDescriptionVisible(false)}
      onClick={() => setDescriptionVisible(!isDescriptionVisible)}
    >
      <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>

      <p
        className="text-sm font-medium"
        style={{ color: isDark ? '#d1d5db' : '#374151' }}
      >
        {name}
      </p>

      {/* Animated Description */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isDescriptionVisible ? 'max-h-50 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}
      >
        <p
          className="text-xs max-w-xs mx-auto mt-2"
          style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
