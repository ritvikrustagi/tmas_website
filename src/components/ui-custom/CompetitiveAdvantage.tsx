'use client'

import { useEffect } from 'react'

// Advanced SEO optimizations for better ranking
export default function CompetitiveAdvantage() {
  useEffect(() => {
    // Add FAQ Schema to help with featured snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are TMAS Academy books really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All TMAS Academy books are completely free to download. We believe quality education should be accessible to everyone. No hidden fees, no subscriptions required."
          }
        },
        {
          "@type": "Question", 
          "name": "How many students have used TMAS Academy books?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over 500 students worldwide have downloaded and used TMAS Academy books, with 100+ achieving perfect AP scores (5s) and qualifying for math competitions like AIME."
          }
        },
        {
          "@type": "Question",
          "name": "Who wrote the TMAS Academy books?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "All books are written by Ritvik Rustagi, a Carnegie Mellon University student who excelled in AP exams and math competitions. He started TMAS Academy in 2021 to help other students succeed."
          }
        },
        {
          "@type": "Question",
          "name": "What makes TMAS Academy books better than other prep materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TMAS Academy books are written by a student who recently took these exams, making them highly relevant. They're concise yet comprehensive, include 150-300+ practice problems, and have helped 100+ students achieve perfect scores with a 20% success rate among users."
          }
        }
      ]
    }

    // Add the schema to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    // Cleanup
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Add breadcrumb schema for better navigation understanding
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tmasacademy.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Free AP Books",
          "item": "https://tmasacademy.com/books"
        },
        {
          "@type": "ListItem",
          "position": 3, 
          "name": "About",
          "item": "https://tmasacademy.com/about"
        }
      ]
    }

    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(breadcrumbScript)

    return () => {
      document.head.removeChild(breadcrumbScript)
    }
  }, [])

  return null // This component doesn't render anything visible
}
