import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { CursorTrail } from "./components/CursorTrail";
import { ScrollProgress } from "./components/ScrollProgress";
import { AnimatedMeshGradient } from "./components/AnimatedMeshGradient";
import { ParticleExplosion } from "./components/ParticleExplosion";

/**
 * High-End Developer Portfolio
 * 
 * A modern, fully animated portfolio website featuring:
 * - Hero section with animated gradient backgrounds
 * - About section with skill progression bars
 * - Projects grid with hover effects and image overlays
 * - Timeline-based experience section
 * - Interactive skills showcase with category grouping
 * - Contact form with social links
 * - Responsive design for all screen sizes
 * - Custom cursor trail effects
 * - Floating navigation with section detection
 * - Scroll progress indicators
 * - Animated mesh gradient background
 * - Particle explosion effects
 * - Magnetic buttons
 * - Text scramble effects
 * - 3D tilt cards
 * 
 * Built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion)
 */

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    // Hide default cursor for custom cursor effect
    document.body.style.cursor = "none";
    
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-['Inter',sans-serif] overflow-x-hidden">
      <AnimatedMeshGradient />
      <CursorTrail />
      <ScrollProgress />
      <FloatingNav />
      <ParticleExplosion />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}