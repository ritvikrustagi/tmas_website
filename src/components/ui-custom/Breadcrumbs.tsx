'use client'

import React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  id: string
  label: string
  href: string
}

const routes: BreadcrumbItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'books', label: 'Free Books', href: '/books' },
  { id: 'testimonials', label: 'Success Stories', href: '/testimonials' },
  { id: 'faq', label: 'FAQ', href: '/faq' },
  { id: 'community', label: 'Community', href: '/community' },
  { id: 'opportunities', label: 'Opportunities', href: '/opportunities' },
]

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null

  const currentRoute = routes.find(route => route.href === pathname)
  if (!currentRoute) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-28 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="glass-effect px-4 py-2 rounded-full border border-gray-200/50 shadow-lg">
        <nav className="flex items-center space-x-2 text-sm">
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
          
          <ChevronRight className="w-3 h-3 text-gray-400" />
          
          <span className="text-blue-600 font-medium">
            {currentRoute.label}
          </span>
        </nav>
      </div>
    </motion.div>
  )
}
