/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import FloatingActionButton from '@/components/ui-custom/FloatingActionButton'
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              About the Owner
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* Ritvik's Profile Section */}
            <div className="text-center mb-16">
              <div className="flex flex-col items-center mb-8">
                {/* Profile Picture - Large Circle */}
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-white dark:border-gray-700">
                  <Image
                    src="/ritvik_photos/photo_1.avif"
                    alt="Ritvik Rustagi - Founder of TMAS Academy"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Bio Information */}
                <Card 
                  className="p-8 shadow-xl max-w-3xl w-full"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    borderColor: isDark ? '#4b5563' : '#e5e7eb'
                  }}
                >
                  <h2 
                    className="text-4xl font-bold mb-6 italic"
                    style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                  >
                    Ritvik Rustagi
                  </h2>
                  
                  <div className="prose prose-lg leading-relaxed space-y-4">
                    <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                      Ritvik Rustagi, born in 2007, is the founder of TMAS Academy. He is also the author of the prominent books called ACE The AMC 10/12, ACE AP Physics 1, ACE AP Calculus AB, ACE AP Calculus BC, and ACE AP Physics C: Mechanics.
                    </p>
                    
                    <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                      His goal with TMAS Academy is to educate people through comprehensive content. In addition, he graduated from Prospect High School and is going into CMU this fall. His hobbies include physics, math, coding, running, and listening to music.
                    </p>
                    
                    <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                      He started this program in 2021 due to his passion for competition math. His main reason for starting this journey was to help others including himself learn important topics in contest math. After that, he decided to dedicate time to AP content.
                    </p>
                  </div>

                  {/* LinkedIn Section */}
                  <div 
                    className="mt-8 pt-6"
                    style={{ borderTop: `1px solid ${isDark ? '#4b5563' : '#e5e7eb'}` }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <Linkedin className="w-8 h-8 text-blue-600" />
                      <Button 
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link 
                          href="https://linkedin.com/in/ritvik-rustagi" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          Connect on LinkedIn
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <p className='text-center mb-16'>We’re assembling a Chief Team to build and lead the executive core of this academy — a place where students shape the future for thousands of others. We’re looking for highly motivated students who can dedicate several hours daily and are ready to make this a priority in their lives.
</p>

            {/* Team Sections */}
            <div className="space-y-16">
              {/* Chief Team */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Chief Team
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">

                {/* Advisor 1 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/ziang.jpeg"
                        alt="Ziang Zhuang"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Ziang Zhuang
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! I'm Ziang Zhuang, one of the TMAS Academy Server Moderators/Admins and an author for the AMC 8 Book. I'm a mathematics, physics, and earth science "main" and enjoy swimming and piano!
                      </p>
                  </div>
                </div>
              </div>

              {/* Published Authors */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Published Authors
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">

                {/* Author 1 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/aditya.jpg"
                        alt="Aditya Baisakh"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Aditya Baisakh

                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Aditya hails from Baton Rouge, and is an incoming student at LSU. He wrote the AP Chemistry and Biology books as a senior. In his free time, he enjoys doing martial arts, coding, and playing the piano.
                      </p>
                  </div>
                  
                  {/* Author 2 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/aviva.png"
                        alt="Aviva Iyerkhan"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Aviva Iyerkhan
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hello! My name is Aviva Iyerkhan and I am a senior at Lynbrook High School in San Jose, California. Throughout middle and high school, I have sought to provide the youth around me with STEM education opportunities, such as through tutoring or creating curriculum. By being an author for TMAS academy, I hope to help other students trying to succeed in STEM.
                      </p>
                  </div>

                  {/* Author 3 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/ipsaan.png"
                        alt="Ipsaan Sedhai"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                       Ipsaan Sedhai
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi everyone, I'm currently a student in Sewanhaka High School, and I'm interested in Physics, Computer Science, and Math. I wrote the ACE AP CSP book in hopes that resources to prepare for the exam would become more accessible for everyone.
                      </p>
                  </div>

                </div>
              </div>

              {/* Academic Writing Interns */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Academic Writing
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">

                {/* Writing Intern 1 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/shreyas.jpg"
                        alt="Shreyas Penugonda - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Shreyas Penugonda
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Shreyas Penugonda is passionate about computer science and enjoys coding, problem-solving, and participating in math contests to challenge himself academically. In his free time, he likes playing soccer and watching TV.
                      </p>
                  </div>
                  
                  {/* Writing Intern 2 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/shivek.JPG"
                        alt="Shivek Saraf - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Shivek Saraf
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! I'm Shivek, a student at McNeil High School. I joined TMAS Academy a year ago to bring my AI skills to the forefront of education specifically in areas where I noticed me and my peers struggling in, like AP Classes. I love automating menial tasks and solving Rubik's Cubes.
                      </p>
                  </div>

                  {/* Writing Intern 3 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/mustafa.png"
                        alt="Mustafa Hameed - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Mustafa Hameed
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Mustafa Hameed is a high school student passionate about education, innovation, and impact. He’s authored a book on mindset, launched AI projects, and led nonprofit initiatives. With strong experience in writing, design, and leadership, Mustafa is committed to making knowledge accessible and engaging for students around the world.
                      </p>
                  </div>

                  {/* Writing Intern 4 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/mohnish.jpeg"
                        alt="Mohnish Naga Satya Sai Chintalapudi - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Mohnish Naga Satya Sai Chintalapudi
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi, my name is Mohnish Naga Satya Sai Chintalapudi and I am an academic writing intern. Here's the description: Mohnish is a rising sophomore at Alliance Academy for Innovation and is incredibly excited to start making contributions in the field of academia and research.
                      </p>
                  </div>

                  {/* Writing Intern 5 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/sanjay.png"
                        alt="Sanjay Rameshkrishnan - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Sanjay Rameshkrishnan
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Sanjay is one of TMAS Academy's Academic Writing interns. He is currently in the 9th grade at Seminole High School. He is interested in math, physics, and programming, mainly in C++. He aims to create a positive impact on the world by sharing his knowledge and passion of STEM.
                      </p>
                  </div>

                  {/* Writing Intern 6 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/anmol.jpg"
                        alt="Anmol Alva - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Anmol Alva
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        I am Anmol Alva. I am a rising 9th grader at Blue Valley High School in Overland Park, KS. I love mathematics, computer science, debate and speech, and writing. I have written and published 3 books. I believe in giving back to my community by teaching my neighborhood kids.
                      </p>
                  </div>

                  {/* Writing Intern 7 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/sricharan.jpg"
                        alt="Sricharan Pullela - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Sricharan Pullela
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! My name is Sricharan, a Student at Mountain House High School. I joined TMAS as a writing intern to present my writing skills to an academically inclined audience. Some of my hobbies include chess and basketball.
                      </p>
                  </div>

                  {/* Writing Intern 8 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/nishanth.jpg"
                        alt="Nishanth Kotapati - Academic Writing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Nishanth Kotapati
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Nishanth is a rising junior at Forsyth Central High School and an Academic Writing Intern at TMAS Academy. He’s passionate about STEM education, writing, and mentorship. With experience in research, healthcare, and robotics, Nishanth strives to create clear, accessible educational content that inspires and empowers students.
                      </p>
                  </div>

                </div>
              </div>

              {/* Marketing Interns */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Marketing 
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">

                  {/* Marketing Intern 1 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/katelyn.jpg"
                        alt="Katelyn Thilak - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Katelyn Thilak
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! I’m Katelyn, a student at Irvington High School. As a Marketing Leader at TMAS, I guide a team of interns and lead projects like social media campaigns, school outreach, and content creation for Instagram, TikTok, and LinkedIn. I’m also passionate about taekwondo, and I enjoy playing badminton, piano, and exploring creativity. 
                      </p>
                  </div>

                {/* Marketing Intern 2 */}
                <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/mahado.jpg"
                        alt="Mahado Abdirahman - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Mahado Abdirahman
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Mahado is thrilled to lead marketing efforts for TMAS, leveraging her creative expertise to drive education awareness and engagement, and propel TMAS forward.
                      </p>
                  </div>
                  
                  {/* Marketing Intern 3 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/pranav.png"
                        alt="Pranav Saravanan - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Pranav Saravanan
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Pranav is an aspiring innovator who is passionate about math, finance, and technology. At TMAS Academy, he creates educational content that simplifies complex topics and helps students build confidence in their learning. With experience in research, competitions, and coding, Pranav makes academic subjects more accessible and engaging. 
                      </p>
                  </div>

                  {/* Marketing Intern 4 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/sujay.jpg"
                        alt="Sujay Oggu - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Sujay Oggu
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi, my name is Sujay, and I’m an upcoming junior at Mountain House High School. I joined as an intern to TMAS Academy to help people strive in their AP exams, and classes.
                      </p>
                  </div>

                  {/* Marketing Intern 5 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/sasmit.png"
                        alt="Sasmit - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Sasmit Chatterjee
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        I'm a HS student with a passion for mechanical /aerospace engineering. My hobbies are chess, kickboxing, piano and tennis.
                      </p>
                  </div>

                  {/* Marketing Intern 6 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/rayyan.jpeg"
                        alt="Rayyan Siddiqui - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Rayyan Siddiqui
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        I am a student passionate about Computer Science, Programming, and Business.
                      </p>
                  </div>

                  {/* Marketing Intern 7 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/eliana.jpg"
                        alt="Eliana Zerie - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Eliana Zerie
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi, I’m Eliana, a rising junior from Minnesota. I’m currently a violinist and like playing tennis. I always enjoy the opportunity to work with others and I’m excited to be a Marketing Intern for TMAS Academy!
                      </p>
                  </div>

                  {/* Marketing Intern 8 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/dainna.jpeg"
                        alt=""
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Dainna Park
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! My name is Dainna, and I’m a marketing intern in Group A. I’m passionate about business, computer science, and building meaningful connections through strategic marketing. Outside of school, I enjoy swimming, hiking, and traveling.
                      </p>
                  </div>

                  {/* Marketing Intern 9 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/bonnie.webp"
                        alt="Bonnie Kim - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Bonnie Kim
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! My name is Bonnie Kim and I’m really passionate about math. As someone from a rural background, I hope to help increase the availability of STEM resources for everyone through this opportunity with TMAS, especially those in similar situations.
                      </p>
                  </div>

                  {/* Marketing Intern 10 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/aashna.png"
                        alt="Aashna Mishra - Marketing Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Aashna Mishra
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hi! My name is Aashna and I’m a senior from Texas. I'm a 3rd degree black belt instructor and I also love trying out new restaurants or coffee shops. I’m super excited to be part of TMAS Academy as a Marketing Intern!
                      </p>
                  </div>

                  {/* Marketing Intern 11 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/vidushi.png"
                        alt="Vidushi Nalakonda"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Vidushi Nalakonda
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Vidushi Nalakonda is a marketing intern for TMAS Academy and is a rising senior from Texas. She wants to pursue CS or SDS in the future, and some of her hobbies include reading, baking, and trying new foods.
                      </p>
                  </div>

                  {/* Marketing Intern 12 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/akshatha.png"
                        alt="Akshatha Jagan"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Akshatha Jagan
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Vidushi Nalakonda is a marketing intern for TMAS Academy and is a rising senior from Texas. She wants to pursue CS or SDS in the future, and some of her hobbies include reading, baking, and trying new foods.
                      </p>
                  </div>

                  {/* Marketing Intern 13 */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/ganga.png"
                        alt="Ganga Nair"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Ganga Nair 
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Vidushi Nalakonda is a marketing intern for TMAS Academy and is a rising senior from Texas. She wants to pursue CS or SDS in the future, and some of her hobbies include reading, baking, and trying new foods.
                      </p>
                  </div>

                </div>
              </div>

              {/* Software Engineering Interns */}
              <div>
                <h2 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Software Engineers
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {/* Dhairya - First Software Engineer */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/dhairya.jpg"
                        alt="Dhairya - Software Engineering Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Dhairya
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        IB student passionate about building innovative digital experiences that are fast, intuitive, and accessible. Part of various clubs like deca, stem, coding club. Also enjoys playing the guitar.
                      </p>
                  </div>
                  
                  {/* Remaining placeholders */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/eric.png"
                        alt="Eric Chen - Software Engineering Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Eric Chen
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        Hey 👋 I'm Eric, an IBDP and AP student from Toronto. In my free time, I enjoy solving physics problems, programming, taking walks, and trying out new foods. 
                      </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <Image
                        src="/team_photos/sarvesh.png"
                        alt="Sarvesh - Software Engineering Intern"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p 
                      className="text-sm"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      Sarvesh Sekar
                    </p>
                    <p 
                        className="text-xs max-w-xs mx-auto"
                        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                      >
                        {/* Placeholder description, max 50 words */}
                        I’m an incoming systems design engineering student at the University of Waterloo and love to create interdisciplinary software projects! I’m also a passionate environmentalist, researcher and tech fanatic across scientific fields.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          {/* Call to Action */}
              <Card 
                className="p-8 shadow-xl max-w-2xl mx-auto mb-16"
                style={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  Ready to Start Learning?
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                >
                  Explore our free educational resources and join thousands of students who have improved their understanding of mathematics and physics.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-3"
                  >
                    <Link href="/books">
                      View Free Books
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="font-semibold px-8 py-3"
                    style={{
                      borderWidth: '2px',
                      borderColor: isDark ? '#4b5563' : '#d1d5db',
                      backgroundColor: 'transparent',
                      color: isDark ? '#ffffff' : '#1f2937'
                    }}
                  >
                    <Link href="/community">
                      Join Community
                    </Link>
                  </Button>
                </div>
              </Card>
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  )
}
