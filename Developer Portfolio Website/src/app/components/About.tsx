import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Code2, Sparkles, Rocket, Award, Users, Coffee } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });

  // Animated counters
  useEffect(() => {
    if (!isInView) return;

    const targets = { years: 5, projects: 50, clients: 15 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "AWS", level: 82 },
    { name: "Docker", level: 80 },
  ];

  const achievements = [
    { icon: Award, text: "10+ Certifications", color: "from-yellow-500 to-orange-500" },
    { icon: Users, text: "100K+ Users Served", color: "from-green-500 to-emerald-500" },
    { icon: Coffee, text: "1000+ Cups of Coffee", color: "from-amber-500 to-brown-500" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating icons */}
        {[Code2, Sparkles, Rocket].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Icon className="w-8 h-8 text-purple-500/20" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {"About Me".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                  color: [
                    "#ffffff",
                    "#a855f7",
                    "#3b82f6",
                    "#a855f7",
                    "#ffffff",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
            animate={{
              width: [80, 200, 80],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>

                <motion.p
                  className="text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  I'm a passionate full-stack developer with 5+ years of
                  experience building scalable web applications and AI-powered
                  solutions. I specialize in modern JavaScript frameworks, cloud
                  architecture, and machine learning integration.
                </motion.p>

                <motion.p
                  className="text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  My approach combines technical expertise with creative
                  problem-solving, delivering solutions that are not only
                  functional but also elegant and user-friendly.
                </motion.p>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Code2, value: counts.years, label: "Years Exp", color: "purple" },
                    { icon: Rocket, value: counts.projects, label: "Projects", color: "blue" },
                    { icon: Sparkles, value: counts.clients, label: "Clients", color: "pink" },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={i}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 text-center relative overflow-hidden group"
                        whileHover={{ scale: 1.05, y: -5 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <div className="relative z-10">
                          <motion.div
                            className="flex justify-center mb-2"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                          </motion.div>
                          <motion.p
                            className="text-2xl font-bold text-white mb-1"
                            key={stat.value}
                            initial={{ scale: 1.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {stat.value}+
                          </motion.p>
                          <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Achievements */}
                <motion.div
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 }}
                >
                  {achievements.map((achievement, i) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                        initial={{ x: -50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                      >
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-br ${achievement.color}`}
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          }}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-gray-300 text-sm">{achievement.text}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10"
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Core Skills
                </h3>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <motion.span
                          className="text-gray-300"
                          initial={{ x: -20, opacity: 0 }}
                          animate={
                            isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                          }
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span
                          className="text-purple-400"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative z-10"
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                        >
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                            animate={{
                              scale: [1, 1.5, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(255,255,255,0.7)",
                                "0 0 0 10px rgba(255,255,255,0)",
                                "0 0 0 0 rgba(255,255,255,0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Skills Tags */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-3">
                    Also experienced with:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "GraphQL",
                      "MongoDB",
                      "PostgreSQL",
                      "Redis",
                      "Kubernetes",
                      "Next.js",
                    ].map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 relative overflow-hidden"
                        initial={{ opacity: 0, rotate: -180, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, rotate: 0, scale: 1 }
                            : { opacity: 0, rotate: -180, scale: 0 }
                        }
                        transition={{
                          delay: 1 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.15,
                          backgroundColor: "rgba(168, 85, 247, 0.2)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}