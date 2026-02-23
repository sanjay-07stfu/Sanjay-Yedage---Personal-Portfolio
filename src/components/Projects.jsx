import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Realtime Chat App',
    tech: ['React', 'Socket.IO', 'Node'],
    desc: 'A low-latency chat platform with rooms, typing indicators and persistent history.',
    code: '#',
    live: '#'
  },
  {
    title: 'ML Summarizer',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    desc: 'Document summarization service with batching and GPU inference.',
    code: '#',
    live: '#'
  },
  {
    title: 'Analytics Dashboard',
    tech: ['TypeScript', 'React', 'D3'],
    desc: 'Interactive dashboard for product metrics with real-time streams.',
    code: '#',
    live: '#'
  },
  {
    title: 'E‑commerce POC',
    tech: ['Next.js', 'Stripe', 'Postgres'],
    desc: 'Server-rendered storefront with subscription billing and A/B experiments.',
    code: '#',
    live: '#'
  }
]

function ProjectCard({project}){
  const ref = useRef(null)
  const [rx, setRx] = useState(0)
  const [ry, setRy] = useState(0)

  function onMove(e){
    const el = ref.current
    if(!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width/2
    const cy = rect.height/2
    const px = (x - cx) / cx
    const py = (y - cy) / cy
    setRy((px * 8).toFixed(2))
    setRx((py * -8).toFixed(2))
  }

  function onLeave(){
    setRx(0); setRy(0)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="glass rounded-lg p-4 border transform-gpu focus:outline-none"
      style={{
        transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
      }}
      tabIndex={0}
      onKeyDown={(e)=>{ if(e.key === 'Enter' && project.live){ window.open(project.live,'_blank') } }}
    >
      <div className="relative h-44 rounded-md mb-3 overflow-hidden bg-gradient-to-br from-[#071524] to-[#021218] flex items-end p-4">
        <div>
          <h4 className="font-bold text-lg">{project.title}</h4>
          <p className="text-sm text-gray-300 mt-1">{project.desc}</p>
        </div>
        <div className="card-overlay"></div>
        <div className="card-shine"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-200">{t}</span>
          ))}
        </div>

        <div className="flex gap-2">
          <a href={project.code} className="text-sm text-gray-300 hover:text-white">Code</a>
          <a href={project.live} className="text-sm text-gray-300 hover:text-white">Live</a>
        </div>
      </div>
    </motion.article>
  )
}

const container = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
}

const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:0.15}} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p,i)=> (
          <motion.div key={i} variants={item}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
