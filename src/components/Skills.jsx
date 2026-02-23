import React from 'react'
import { motion } from 'framer-motion'

const groups = {
  Frontend: ['React','TypeScript','Tailwind'],
  Backend: ['Node','Postgres','Docker'],
  AI: ['Python','PyTorch','TensorFlow']
}

export default function Skills(){
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groups).map(([k,v])=> (
          <motion.div key={k} whileHover={{scale:1.02}} className="glass p-4 rounded-lg border">
            <h4 className="font-semibold mb-3">{k}</h4>
            <div className="flex flex-wrap gap-2">
              {v.map(s=> <div key={s} className="px-3 py-1 rounded-full bg-gradient-to-r from-accent to-accent2 text-sm text-black">{s}</div>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
