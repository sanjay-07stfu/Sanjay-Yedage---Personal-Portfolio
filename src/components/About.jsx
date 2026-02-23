import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="grid lg:grid-cols-2 gap-8 items-start container-lg mx-auto">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="text-gray-300">I focus on building performant, accessible and well-tested web applications. I enjoy working on end-to-end product problems, shipping reliable engineering and collaborating with product and design.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React','Node','Python','TensorFlow','TypeScript','GraphQL'].map(s=> (
              <span key={s} className="px-3 py-1 text-sm rounded-full glass border text-gray-200">{s}</span>
            ))}
          </div>
          <div className="mt-6">
            {[['Frontend',80],['Backend',75],['AI/ML',70]].map(([k,v])=> (
              <div key={k} className="mb-4">
                <div className="flex justify-between text-sm text-gray-300"><span>{k}</span><span>{v}%</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2 overflow-hidden">
                  <div style={{width:`${v}%`}} className="h-2 bg-gradient-to-r from-accent to-accent2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
