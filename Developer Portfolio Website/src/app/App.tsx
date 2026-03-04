import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function App() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % portfolioData.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  const featuredProjects = portfolioData.projects.filter((project) => project.featured);

  return (
    <div className="portfolio-root">
      <div className="sparkles" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="top-nav">
        <div className="container nav-inner">
          <a href="#hero" className="brand">SY</a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="section hero-section">
        <div className="animated-blob blob-1" />
        <div className="animated-blob blob-2" />
        <div className="container hero-content reveal is-visible" data-reveal>
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1>{portfolioData.name}</h1>
          <p className="role-pill">
            <span key={activeRoleIndex} className="role-text-swap">
              {portfolioData.roles[activeRoleIndex]}
            </span>
          </p>
          <p className="lead">{portfolioData.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-secondary" href={`mailto:${portfolioData.email}`}>Hire Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container card reveal delay-1" data-reveal>
          <h2>About</h2>
          <p>{portfolioData.tagline}</p>
          <p>{portfolioData.summary}</p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid two-col">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`card hover-lift reveal ${index % 2 === 0 ? "delay-1" : "delay-2"}`}
                data-reveal
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="grid two-col">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <article
                key={category}
                className={`card reveal ${index % 2 === 0 ? "delay-1" : "delay-2"}`}
                data-reveal
              >
                <h3>{category}</h3>
                <div className="tag-list">
                  {skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container card reveal delay-2" data-reveal>
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a></p>
          <p>Phone: <a href={`tel:${portfolioData.contact.phone}`}>{portfolioData.contact.phone}</a></p>
          <p>Location: {portfolioData.contact.location}</p>
          <p>{portfolioData.contact.availability}</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {portfolioData.name}</p>
          <div className="social-links">
            <a href={portfolioData.social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}