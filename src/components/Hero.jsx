import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 18 } }
}

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center" id="home">
      <div className="container-lg mx-auto py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={container} className="space-y-6 z-20">
            <motion.h1 aria-label="Hi, I'm Your Name" className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block">
                {['Hi,', `I'm`, <span key="name" className="gradient-text">Your Name</span>].map((w,i)=>(
                  <motion.span key={i} variants={item} className="inline-block mr-2">{w}</motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p variants={item} className="text-lg text-gray-300 max-w-xl">Full Stack Developer | AI Engineer | Problem Solver — I build reliable, scalable products and delightful user experiences.</motion.p>

            <motion.div variants={item} className="flex gap-4 flex-wrap">
              <a href="#projects" className="btn btn-primary glass cta-glow">View Projects</a>
              <a href="#contact" className="btn btn-outline glass">Contact Me</a>
              <div className="ml-2 social-row" aria-hidden>
                <a href="#" aria-label="GitHub" title="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18.91-.25 1.88-.38 2.85-.39.97.01 1.94.14 2.85.39 2.18-1.5 3.14-1.18 3.14-1.18.62 1.57.23 2.73.12 3.02.74.81 1.18 1.85 1.18 3.11 0 4.45-2.71 5.43-5.29 5.71.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.79.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z"/></svg></a>
                <a href="#" aria-label="LinkedIn" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98H5c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 5 3.5h-.02zM3.5 8.98h3v12.5h-3v-12.5zM9.5 8.98h2.78v1.72h.04c.39-.73 1.35-1.5 2.8-1.5 3 0 3.55 1.98 3.55 4.56v6.72h-3v-5.95c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.54-2.28 3.13v6.07h-3v-12.98z"/></svg></a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.2}} className="relative">
            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-gray-100 font-semibold">Featured</h3>
              <p className="text-sm text-gray-300 mt-2">Curated case studies that show product thinking, technical depth and impact.</p>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="project-img-placeholder rounded-lg p-4 border border-gray-800 transform hover:-translate-y-1 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">Project A</h4>
                      <div className="text-xs text-gray-400">React · Node · AI</div>
                    </div>
                    <div className="text-sm text-gray-400">Case Study</div>
                  </div>
                </div>
                <div className="project-img-placeholder rounded-lg p-4 border border-gray-800">
                  <h4 className="font-bold">Project B</h4>
                  <div className="text-xs text-gray-400">SaaS · Performance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Floating decorative blobs */}
      <div className="float-bg">
        <svg className="blob" width="520" height="520" style={{left:'-10%', top:'10%'}} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gA" x1="0" x2="1"><stop offset="0" stopColor="var(--accent1)"/><stop offset="1" stopColor="var(--accent2)"/></linearGradient>
          </defs>
          <g transform="translate(0,0)">
            <circle cx="300" cy="300" r="260" fill="url(#gA)" />
          </g>
        </svg>
        <svg className="blob" width="420" height="420" style={{right:'-5%', bottom:'5%', animation:'floatY 8s ease-in-out infinite'}} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="260" fill="#06202a" />
        </svg>
      </div>
    </section>
  )
}

