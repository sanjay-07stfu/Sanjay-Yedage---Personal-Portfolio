import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { TextScramble } from "./TextScramble";
import { portfolioData } from "../../data/portfolio";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  
  const roles = portfolioData.roles;

  // Typewriter effect
  useEffect(() => {
    const role = roles[textIndex % roles.length];
    let index = 0;
    const interval = setInterval(() => {
      if (index <= role.length) {
        setCurrentText(role.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTextIndex((prev) => prev + 1);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [textIndex]);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating particles
  const particles = Array.from({ length: 20 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* TEST: Simple visible content */}
      <div className="relative z-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Hi, I'm Sanjay</h1>
        <p className="text-xl text-gray-300">Full Stack Developer & AI/ML Engineer</p>
        <a href="#projects" className="inline-block mt-8 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          View My Work
        </a>
      </div>
    </section>
  );
}