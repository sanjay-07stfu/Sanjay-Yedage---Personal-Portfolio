import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen text-gray-100 relative font-sans">
      <div className="float-bg">
        <svg className="w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#7c5cff" />
              <stop offset="1" stopColor="#00e0a6" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="120" r="200" fill="url(#g1)" />
          <circle cx="680" cy="420" r="260" fill="#0b1f2b" />
        </svg>
      </div>

      <main className="relative z-10">
        <Hero />
        <div className="container-lg">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  )
}
