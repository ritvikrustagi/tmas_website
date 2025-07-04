'use client'

import Script from 'next/script'

interface OrganizationData {
  name?: string
}

interface CourseData {
  name: string
  description: string
  topics?: string[]
  courseCode?: string
  timeRequired?: string
}

interface BookData {
  title: string
  author: string
  description: string
  subjects?: string[]
  pages?: string
  publishedDate?: string
  rating?: string
  reviewCount?: string
}

interface FAQData {
  question: string
  answer: string
}

interface ReviewData {
  author: string
  rating: number
  content: string
}

interface StructuredDataProps {
  type: 'organization' | 'course' | 'book' | 'faq' | 'review'
  data: OrganizationData | CourseData | BookData | FAQData[] | ReviewData
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          "@type": "EducationalOrganization",
          "name": "TMAS Academy",
          "alternateName": "The Math and Science Academy",
          "description": "TMAS Academy provides high-quality, free educational resources for AP exams and math competitions like AMC 10/12 & AIME.",
          "url": "https://tmasacademy.com",
          "logo": "https://tmasacademy.com/logo.png",
          "foundingDate": "2021",
          "founder": {
            "@type": "Person",
            "name": "Ritvik Rustagi",
            "description": "Founder of TMAS Academy, author of multiple AP and competition math books"
          },
          "educationalCredentialAwarded": [
            "AP Exam Preparation",
            "Math Competition Training",
            "AIME Qualification Preparation"
          ],
          "areaServed": "Worldwide",
          "knowsLanguage": ["English"],
          "sameAs": [
            "https://discord.gg/tmasacademy",
            "https://youtube.com/@tmasacademy"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Educational Support",
            "availableLanguage": "English"
          }
        }

      case 'course': {
        const courseData = data as CourseData
        return {
          ...baseData,
          "@type": "Course",
          "name": courseData.name,
          "description": courseData.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "TMAS Academy"
          },
          "educationalLevel": "High School",
          "teaches": courseData.topics || [],
          "courseCode": courseData.courseCode,
          "numberOfCredits": 0,
          "timeRequired": courseData.timeRequired || "P3M",
          "inLanguage": "en",
          "isAccessibleForFree": true,
          "learningResourceType": "Study Guide",
          "educationalUse": "Self Study"
        }
      }

      case 'book': {
        const bookData = data as BookData
        return {
          ...baseData,
          "@type": "Book",
          "name": bookData.title,
          "author": {
            "@type": "Person",
            "name": bookData.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "TMAS Academy"
          },
          "description": bookData.description,
          "genre": "Educational",
          "inLanguage": "en",
          "isAccessibleForFree": true,
          "educationalLevel": "High School",
          "learningResourceType": "Textbook",
          "about": bookData.subjects || [],
          "numberOfPages": bookData.pages,
          "datePublished": bookData.publishedDate || "2021",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": bookData.rating || "4.8",
            "reviewCount": bookData.reviewCount || "150"
          }
        }
      }

      case 'faq': {
        const faqData = data as FAQData[]
        return {
          ...baseData,
          "@type": "FAQPage",
          "mainEntity": faqData.map((faq: FAQData) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      }

      case 'review': {
        const reviewData = data as ReviewData
        return {
          ...baseData,
          "@type": "Review",
          "itemReviewed": {
            "@type": "EducationalOrganization",
            "name": "TMAS Academy"
          },
          "author": {
            "@type": "Person",
            "name": reviewData.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": reviewData.rating,
            "bestRating": "5"
          },
          "reviewBody": reviewData.content
        }
      }

      default:
        return baseData
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  )
}
