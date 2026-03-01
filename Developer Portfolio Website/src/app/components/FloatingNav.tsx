import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const current = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id === "hero" ? "" : id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center gap-2 px-6 py-4 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        animate={{
          boxShadow: [
            "0 10px 40px rgba(168, 85, 247, 0.3)",
            "0 10px 60px rgba(59, 130, 246, 0.3)",
            "0 10px 40px rgba(168, 85, 247, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative p-3 rounded-full group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <motion.div
                className="relative z-10"
                animate={{
                  rotate: isActive ? [0, 360] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-white" : "text-gray-400"
                  } group-hover:text-white transition-colors`}
                />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 rounded-lg text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {item.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-800 rotate-45" />
              </motion.div>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}
