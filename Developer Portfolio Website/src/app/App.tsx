import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollProgress />
      <FloatingNav />
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