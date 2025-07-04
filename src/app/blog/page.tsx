import { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'
import StructuredData from '@/components/ui-custom/StructuredData'

export const metadata: Metadata = {
  title: 'Blog - Study Tips & Educational Resources | TMAS Academy',
  description: 'Expert study tips, AP exam strategies, and math competition advice from TMAS Academy. Free educational content to help you succeed.',
  keywords: 'study tips, AP exam strategies, math competition tips, educational blog, TMAS Academy, learning resources',
  openGraph: {
    title: 'Blog - Study Tips & Educational Resources | TMAS Academy',
    description: 'Expert study tips, AP exam strategies, and math competition advice from TMAS Academy.',
    type: 'website',
    url: 'https://tmasacademy.com/blog',
  },
  alternates: {
    canonical: 'https://tmasacademy.com/blog',
  },
}

const blogPosts = [
  {
    id: 1,
    title: '5 Essential AP Calculus AB Formulas You Must Know',
    excerpt: 'Master these fundamental formulas to excel in your AP Calculus AB exam. These are the building blocks for success.',
    date: '2025-01-04',
    readTime: '5 min read',
    category: 'AP Calculus',
    slug: 'essential-ap-calculus-ab-formulas',
    featured: true
  },
  {
    id: 2,
    title: 'How to Qualify for AIME: Complete Strategy Guide',
    excerpt: 'Learn the proven strategies and techniques that successful students use to qualify for the American Invitational Mathematics Examination.',
    date: '2025-01-03',
    readTime: '8 min read',
    category: 'Math Competition',
    slug: 'how-to-qualify-for-aime',
    featured: true
  },
  {
    id: 3,
    title: 'AP Physics 1 vs AP Physics C: Which Should You Take?',
    excerpt: 'Understand the key differences between AP Physics 1 and Physics C to make the best choice for your academic goals.',
    date: '2025-01-02',
    readTime: '6 min read',
    category: 'AP Physics',
    slug: 'ap-physics-1-vs-physics-c',
    featured: false
  },
  {
    id: 4,
    title: 'Free AP Exam Resources You Need to Know About',
    excerpt: 'Discover the best free resources available online to supplement your AP exam preparation and boost your scores.',
    date: '2025-01-01',
    readTime: '7 min read',
    category: 'AP Resources',
    slug: 'free-ap-exam-resources',
    featured: false
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <StructuredData 
        type="faq" 
        data={[
          {
            question: "How often do you publish new blog posts?",
            answer: "We publish new educational content and study tips weekly to help students with their AP exams and math competitions."
          },
          {
            question: "Are the blog posts written by experts?",
            answer: "Yes, all our blog posts are written by Ritvik Rustagi and other experienced educators who have excelled in their respective fields."
          }
        ]} 
      />
      
      <div className="min-h-screen">
        <Header />
        <Breadcrumbs />
        
        <main className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Educational Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert study tips, AP exam strategies, and math competition advice to help you achieve academic success.
              </p>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <time className="text-sm text-gray-500">{post.readTime}</time>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                          <a href={`/blog/${post.slug}`}>
                            {post.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 mb-6">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <time className="text-sm text-gray-500">{post.date}</time>
                          <a 
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Read More →
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <time className="text-xs text-gray-500">{post.readTime}</time>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <a href={`/blog/${post.slug}`}>
                          {post.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <time className="text-xs text-gray-500">{post.date}</time>
                        <a 
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl opacity-90 mb-6">
                Get the latest study tips and educational resources delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </main>

        <Footer />
        <FloatingActionButton />
      </div>
    </>
  )
}
