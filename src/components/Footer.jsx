import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 text-center text-gray-400">
      <div className="container-lg mx-auto"> 
        <div className="mb-4">© {new Date().getFullYear()} Your Name — Built with care.</div>
        <div className="text-sm">Designed for product-focus and engineering excellence.</div>
      </div>
    </footer>
  )
}
