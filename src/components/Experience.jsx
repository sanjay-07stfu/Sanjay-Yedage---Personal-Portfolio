import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {role:'Senior Engineer', company:'Acme Corp', period:'2022 — Present', desc:'Platform & AI infra'},
  {role:'Engineer', company:'Startup X', period:'2019 — 2022', desc:'Built core product features'}
]

export default function Experience(){
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {timeline.map((t,i)=> (
          <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="glass p-4 rounded-lg border">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{t.role}</h3>
                <div className="text-sm text-gray-400">{t.company}</div>
              </div>
              <div className="text-sm text-gray-400">{t.period}</div>
            </div>
            <p className="text-gray-300 mt-2">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
