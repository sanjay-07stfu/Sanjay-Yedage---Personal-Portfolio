import React from 'react'

export default function Contact(){
  const handleSubmit = (e)=>{
    e.preventDefault()
    const fd = new FormData(e.target)
    console.log(Object.fromEntries(fd))
    alert('Message sent (demo)')
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="glass p-6 rounded-lg border">
          <div className="grid gap-4">
            <input name="name" placeholder="Your name" className="p-3 rounded bg-transparent border border-gray-700" />
            <input name="email" placeholder="Email" className="p-3 rounded bg-transparent border border-gray-700" />
            <textarea name="message" placeholder="Message" rows={6} className="p-3 rounded bg-transparent border border-gray-700" />
            <button type="submit" className="px-4 py-3 rounded bg-gradient-to-r from-accent to-accent2 text-black font-semibold">Send</button>
          </div>
        </form>

        <div className="glass p-6 rounded-lg border">
          <h3 className="font-semibold">Let’s talk</h3>
          <p className="text-gray-300 mt-2">Available for full-time and contract roles. Open to relocation and remote work.</p>
          <div className="mt-6 flex gap-3">
            <a className="px-3 py-2 rounded bg-gray-800">GitHub</a>
            <a className="px-3 py-2 rounded bg-gray-800">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
