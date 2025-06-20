'use client'

import React from 'react'

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Circle */}
      <div 
        className="absolute border-2 border-black/10 rounded-full animate-float"
        style={{
          width: '160px',
          height: '160px',
          top: '15%',
          left: '10%',
        }}
      />
      
      {/* Rotated Square */}
      <div 
        className="absolute border-2 border-black/20 transform rotate-45 animate-float-delayed"
        style={{
          width: '100px',
          height: '100px',
          bottom: '20%',
          right: '15%',
        }}
      />
      
      {/* Curved Shape */}
      <div 
        className="absolute border-2 border-black/15 transform rotate-45 animate-float"
        style={{
          width: '80px',
          height: '80px',
          top: '60%',
          left: '20%',
          borderRadius: '0 50% 50% 50%',
        }}
      />
      
      {/* Triangle */}
      <div 
        className="absolute animate-float-delayed"
        style={{
          bottom: '10%',
          right: '35%',
          width: 0,
          height: 0,
          borderLeft: '60px solid transparent',
          borderRight: '60px solid transparent',
          borderBottom: '120px solid rgba(0, 0, 0, 0.08)',
        }}
      />
      
      {/* Horizontal Lines */}
      <div className="absolute w-full transform -translate-y-1/2" style={{ top: '40%', left: 0 }}>
        <div className="w-full h-px bg-black/5" />
        <div className="w-full h-px bg-black/5 mt-10" />
        <div className="w-full h-px bg-black/5 mt-10" />
      </div>
      
      {/* Small decorative dots */}
      <div className="absolute w-2 h-2 bg-black/10 rounded-full animate-float" style={{ top: '25%', right: '25%' }} />
      <div className="absolute w-3 h-3 bg-black/8 rounded-full animate-float-delayed" style={{ top: '75%', left: '75%' }} />
      <div className="absolute w-1 h-1 bg-black/12 rounded-full animate-float" style={{ top: '45%', right: '45%' }} />
    </div>
  )
} 