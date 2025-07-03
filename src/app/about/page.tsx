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
import TeamMemberCard from '@/components/ui-custom/TeamMemberCard'

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
                  <TeamMemberCard
                    name="Aditya Baisakh"
                    description="Aditya hails from Baton Rouge, and is an incoming student at LSU. He wrote the AP Chemistry book and co-wrote the AP Biology book in his senior year. In his free time, he enjoys doing martial arts, coding, and playing the piano."
                    imageUrl="/team_photos/aditya.jpg"
                  />
                  
                  {/* Author 2 */}
                  <TeamMemberCard
                    name="Aviva Iyerkhan"
                    description="Hello! My name is Aviva Iyerkhan and I am a senior at Lynbrook High School in San Jose, California. Throughout middle and high school, I have sought to provide the youth around me with STEM education opportunities, such as through tutoring or creating curriculum. By being an author for TMAS academy, I hope to help other students trying to succeed in STEM."
                    imageUrl="/team_photos/aviva.png"
                  />

                  {/* Author 3 */}
                  <TeamMemberCard
                    name="Ipsaan Sedhai"
                    description="Hi everyone, I'm currently a student in Sewanhaka High School, and I'm interested in Physics, Computer Science, and Math. I wrote the ACE AP CSP book in hopes that resources to prepare for the exam would become more accessible for everyone."
                    imageUrl="/team_photos/ipsaan.png"
                  />

                  {/* Author 4 */}
                  <TeamMemberCard
                    name="Abby Trinh"
                    description="(Authored AP Bio Book) I’m a rising 10th grader with a strong interest in math, biology, and chemistry. I love challenging myself through math competitions, and I spend a lot of time practicing problem-solving and exploring advanced topics. Outside of academics, I like to stay involved in my community and spend time with family and friends. I’m always looking for new opportunities to learn, grow, and contribute. "
                    imageUrl="/team_photos/abby.png"
                  />

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
                  <TeamMemberCard
                    name="Shreyas Penugonda"
                    description="Shreyas Penugonda is passionate about computer science and enjoys coding, problem-solving, and participating in math contests to challenge himself academically. In his free time, he likes playing soccer and watching TV."
                    imageUrl="/team_photos/shreyas.jpg"
                  />
                  
                  {/* Writing Intern 2 */}
                  <TeamMemberCard
                    name="Shivek Saraf"
                    description="Hi! I'm Shivek, a student at McNeil High School. I joined TMAS Academy a year ago to bring my AI skills to the forefront of education specifically in areas where I noticed me and my peers struggling in, like AP Classes. I love automating menial tasks and solving Rubik's Cubes."
                    imageUrl="/team_photos/shivek.JPG"
                  />

                  {/* Writing Intern 3 */}
                  <TeamMemberCard
                    name="Mustafa Hameed"
                    description="Mustafa Hameed is a high school student passionate about education, innovation, and impact. He’s authored a book on mindset, launched AI projects, and led nonprofit initiatives. With strong experience in writing, design, and leadership, Mustafa is committed to making knowledge accessible and engaging for students around the world."
                    imageUrl="/team_photos/mustafa.png"
                  />

                  {/* Writing Intern 4 */}
                  <TeamMemberCard
                    name="Mohnish Naga Satya Sai Chintalapudi"
                    description="Hi, my name is Mohnish Naga Satya Sai Chintalapudi and I am an academic writing intern. Here's the description: Mohnish is a rising sophomore at Alliance Academy for Innovation and is incredibly excited to start making contributions in the field of academia and research."
                    imageUrl="/team_photos/mohnish.jpeg"
                  />

                  {/* Writing Intern 5 */}
                  <TeamMemberCard
                    name="Sanjay Rameshkrishnan"
                    description="Sanjay is one of TMAS Academy's Academic Writing interns. He is currently in the 9th grade at Seminole High School. He is interested in math, physics, and programming, mainly in C++. He aims to create a positive impact on the world by sharing his knowledge and passion of STEM."
                    imageUrl="/team_photos/sanjay.png"
                  />

                  {/* Writing Intern 6 */}
                  <TeamMemberCard
                    name="Anmol Alva"
                    description="I am Anmol Alva. I am a rising 9th grader at Blue Valley High School in Overland Park, KS. I love mathematics, computer science, debate and speech, and writing. I have written and published 3 books. I believe in giving back to my community by teaching my neighborhood kids."
                    imageUrl="/team_photos/anmol.jpg"
                  />

                  {/* Writing Intern 7 */}
                  <TeamMemberCard
                    name="Sricharan Pullela"
                    description="Hi! My name is Sricharan, a Student at Mountain House High School. I joined TMAS as a writing intern to present my writing skills to an academically inclined audience. Some of my hobbies include chess and basketball."
                    imageUrl="/team_photos/sricharan.jpg"
                  />

                  {/* Writing Intern 8 */}
                  <TeamMemberCard
                    name="Nishanth Kotapati"
                    description="Nishanth is a rising junior at Forsyth Central High School and an Academic Writing Intern at TMAS Academy. He’s passionate about STEM education, writing, and mentorship. With experience in research, healthcare, and robotics, Nishanth strives to create clear, accessible educational content that inspires and empowers students."
                    imageUrl="/team_photos/nishanth.jpg"
                  />

                  {/* Writing Intern 9 */}
                  <TeamMemberCard
                    name="Ziang Zhuang"
                    description="Hi! I'm Ziang Zhuang, one of the TMAS Academy Server Moderators/Admins and an author for the AMC 8 Book. I'm a mathematics, physics, and earth science 'main' and enjoy swimming and piano!"
                    imageUrl="/team_photos/ziang.jpeg"
                  />

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
                  <TeamMemberCard
                    name="Katelyn Thilak"
                    description="Hi! I’m Katelyn, a student at Irvington High School. As a Marketing Leader at TMAS, I guide a team of interns and lead projects like social media campaigns, school outreach, and content creation for Instagram, TikTok, and LinkedIn. I’m also passionate about taekwondo, and I enjoy playing badminton, piano, and exploring creativity."
                    imageUrl="/team_photos/katelyn.jpg"
                  />

                {/* Marketing Intern 2 */}
                <TeamMemberCard
                    name="Mahado Abdirahman"
                    description="Mahado is thrilled to lead marketing efforts for TMAS, leveraging her creative expertise to drive education awareness and engagement, and propel TMAS forward."
                    imageUrl="/team_photos/mahado.jpg"
                  />
                  
                  {/* Marketing Intern 3 */}
                  <TeamMemberCard
                    name="Pranav Saravanan"
                    description="Pranav is an aspiring innovator who is passionate about math, finance, and technology. At TMAS Academy, he creates educational content that simplifies complex topics and helps students build confidence in their learning. With experience in research, competitions, and coding, Pranav makes academic subjects more accessible and engaging."
                    imageUrl="/team_photos/pranav.png"
                  />

                  {/* Marketing Intern 4 */}
                  <TeamMemberCard
                    name="Sujay Oggu"
                    description="Hi, my name is Sujay, and I’m an upcoming junior at Mountain House High School. I joined as an intern to TMAS Academy to help people strive in their AP exams, and classes."
                    imageUrl="/team_photos/sujay.jpg"
                  />

                  {/* Marketing Intern 5 */}
                  <TeamMemberCard
                    name="Sasmit Chatterjee"
                    description="I'm a HS student with a passion for mechanical /aerospace engineering. My hobbies are chess, kickboxing, piano and tennis."
                    imageUrl="/team_photos/sasmit.png"
                  />

                  {/* Marketing Intern 6 */}
                  <TeamMemberCard
                    name="Rayyan Siddiqui"
                    description="I am a student passionate about Computer Science, Programming, and Business."
                    imageUrl="/team_photos/rayyan.jpeg"
                  />

                  {/* Marketing Intern 7 */}
                  <TeamMemberCard
                    name="Eliana Zerie"
                    description="Hi, I’m Eliana, a rising junior from Minnesota. I’m currently a violinist and like playing tennis. I always enjoy the opportunity to work with others and I’m excited to be a Marketing Intern for TMAS Academy!"
                    imageUrl="/team_photos/eliana.jpg"
                  />

                  {/* Marketing Intern 8 */}
                  <TeamMemberCard
                    name="Dainna Park"
                    description="Hi! My name is Dainna, and I’m a marketing intern in Group A. I’m passionate about business, computer science, and building meaningful connections through strategic marketing. Outside of school, I enjoy swimming, hiking, and traveling."
                    imageUrl="/team_photos/dainna.jpeg"
                  />

                  {/* Marketing Intern 9 */}
                  <TeamMemberCard
                    name="Bonnie Kim"
                    description="Hi! My name is Bonnie Kim and I’m really passionate about math. As someone from a rural background, I hope to help increase the availability of STEM resources for everyone through this opportunity with TMAS, especially those in similar situations."
                    imageUrl="/team_photos/bonnie.webp"
                  />

                  {/* Marketing Intern 10 */}
                  <TeamMemberCard
                    name="Aashna Mishra"
                    description="Hi! My name is Aashna and I’m a senior from Texas. I'm a 3rd degree black belt instructor and I also love trying out new restaurants or coffee shops. I’m super excited to be part of TMAS Academy as a Marketing Intern!"
                    imageUrl="/team_photos/aashna.png"
                  />

                  {/* Marketing Intern 11 */}
                  <TeamMemberCard
                    name="Vidushi Nalakonda"
                    description="Vidushi Nalakonda is a marketing intern for TMAS Academy and is a rising senior from Texas. She wants to pursue CS or SDS in the future, and some of her hobbies include reading, baking, and trying new foods."
                    imageUrl="/team_photos/vidushi.png"
                  />

                  {/* Marketing Intern 12 */}
                  <TeamMemberCard
                    name="Akshatha Jagan"
                    description="Hi! I’m Akshatha Jagan. I’m from California and a rising sophomore at Mountain House High School. I love the beach, hanging out with friends, exploring new places, and engaging in entrepreneurial activities. I’m excited to be part of the TMAS marketing team and share my passion with others."
                    imageUrl="/team_photos/akshatha.png"
                  />

                  {/* Marketing Intern 13 */}
                  <TeamMemberCard
                    name="Ganga Nair"
                    description="Hi! My name is Ganga Nair and I'm from North Carolina. I'm very interested in Science and am excited to help contribute the TMAS's initiative!"
                    imageUrl="/team_photos/ganga.png"
                  />

                  {/* Marketing Intern 14 */}
                  <TeamMemberCard
                    name="Abiramy Radhakrishnan"
                    description="Abiramy Radhakrishnan is a high school student at Hebron with a passion for healthcare and plans to pursue a career in the field. She enjoys being part of student-led organizations, which is why she joined TMAS and took on a marketing internship to build her communication and outreach skills."
                    imageUrl="/team_photos/abiramy.jpg"
                  />

                  {/* Marketing Intern 15 */}
                  <TeamMemberCard
                    name="Jaden Ryu"
                    description=""
                    imageUrl="/team_photos/jaden.png"
                  />

                  {/* Marketing Intern 15 */}
                  <TeamMemberCard
                    name="Kunsh Ahuja"
                    description="Kunsh is a Marketing Intern at TMAS Academy with an interest in math, programming, and technology. He enjoys playing chess, coding, and swimming in his free time."
                    imageUrl="/team_photos/kunsh.jpeg"
                  />

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
                  <TeamMemberCard
                    name="Dhairya"
                    description="IB student passionate about building innovative digital experiences that are fast, intuitive, and accessible. Part of various clubs like deca, stem, coding club. Also enjoys playing the guitar."
                    imageUrl="/team_photos/dhairya.jpg"
                  />
                  
                  {/* Remaining placeholders */}
                  <TeamMemberCard
                    name="Eric Chen"
                    description="Hey 👋 I'm Eric, an IBDP and AP student from Toronto. In my free time, I enjoy solving physics problems, programming, taking walks, and trying out new foods."
                    imageUrl="/team_photos/eric.png"
                  />
                  
                  <TeamMemberCard
                    name="Sarvesh Sekar"
                    description="I’m an incoming systems design engineering student at the University of Waterloo and love to create interdisciplinary software projects! I’m also a passionate environmentalist, researcher and tech fanatic across scientific fields."
                    imageUrl="/team_photos/sarvesh.png"
                  />
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
