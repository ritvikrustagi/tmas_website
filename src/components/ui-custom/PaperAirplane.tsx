'use client'

import React from 'react'

export default function PaperAirplane() {
  return (
    <div 
      className="absolute z-10 animate-float"
      style={{
        top: '35%',
        left: '65%',
        transform: 'rotate(-10deg) scale(1.2)',
      }}
    >
      <svg
        width="80"
        height="60"
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black/80"
      >
        {/* Paper Airplane Body */}
        <path
          d="M40 5 L10 50 L25 45 L40 35 L55 45 L70 50 Z"
          fill="currentColor"
          className="opacity-80"
        />
        
        {/* Paper Airplane Left Wing */}
        <path
          d="M40 5 L10 50 L25 30 Z"
          fill="currentColor"
          className="opacity-60"
        />
        
        {/* Paper Airplane Right Wing */}
        <path
          d="M40 5 L70 50 L55 30 Z"
          fill="currentColor"
          className="opacity-60"
        />
        
        {/* Center Crease Line */}
        <line
          x1="40"
          y1="5"
          x2="40"
          y2="50"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-40"
        />
      </svg>
      
      {/* Flight Trail */}
      <div className="absolute -top-2 -left-16 flex space-x-2 opacity-30">
        <div className="w-1 h-1 bg-black rounded-full animate-pulse" />
        <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  )
} 