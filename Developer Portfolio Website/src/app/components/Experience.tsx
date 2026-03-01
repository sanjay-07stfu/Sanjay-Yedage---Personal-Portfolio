import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, Zap, TrendingUp } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "Tech Innovations Inc.",
      period: "Jan 2023 - Present",
      description: "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable microservices. Implemented CI/CD pipelines reducing deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "GraphQL"],
      achievements: ["60% faster deployments", "Led team of 5 developers", "99.9% uptime"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "Mar 2021 - Dec 2022",
      description: "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "Redis"],
      achievements: ["Delivered 15+ projects", "40% performance boost", "Client satisfaction: 98%"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      period: "Jun 2019 - Feb 2021",
      description: "Built responsive web applications with modern frameworks. Optimized application performance and improved user experience metrics by 40%.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      achievements: ["40% UX improvement", "Built design system", "Mentored 3 interns"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "Jan 2018 - May 2019",
      description: "Contributed to various web development projects, learned best practices, and gained hands-on experience with modern development workflows.",
      technologies: ["JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
      achievements: ["Contributed to 10+ projects", "Quick learner", "Team player"],
    },
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated lines connecting experiences */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {experiences.map((_, i) => (
            <motion.path
              key={i}
              d={`M ${50 + i * 10} ${100 + i * 150} Q ${200 + i * 20} ${150 + i * 150} ${350 + i * 30} ${200 + i * 150}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 2, delay: i * 0.3 }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {"Experience".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"
            animate={{
              scaleX: [1, 2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto md:text-left"
              }`}
            >
              <div className="flex items-center gap-4 md:gap-0">
                {/* Timeline Dot with pulse */}
                <motion.div
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-slate-900 z-10"
                  animate={{
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(168, 85, 247, 0.7)",
                      "0 0 0 20px rgba(168, 85, 247, 0)",
                      "0 0 0 0 rgba(168, 85, 247, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white"
                    animate={{
                      scale: [0, 1.5],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 flex-1 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <motion.div
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, rotateY: index % 2 === 0 ? -90 : 90 }}
                    animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: index % 2 === 0 ? -90 : 90 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />

                    {/* Particles on hover */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-20, -40, -20],
                          x: [0, 10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    <div className="relative z-10">
                      {/* Period with icon */}
                      <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Calendar className="w-4 h-4" />
                        </motion.div>
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      {/* Title & Company */}
                      <motion.h3 
                        className="text-xl font-bold text-white mb-1"
                        whileHover={{ x: 5, color: "#a855f7" }}
                      >
                        {exp.title}
                      </motion.h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-4">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Briefcase className="w-4 h-4" />
                        </motion.div>
                        <span>{exp.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                            initial={{ x: -20, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                            transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                            whileHover={{ x: 10 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.2,
                              }}
                            >
                              {i === 0 ? (
                                <Zap className="w-3 h-3 text-yellow-400" />
                              ) : (
                                <TrendingUp className="w-3 h-3 text-green-400" />
                              )}
                            </motion.div>
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                            transition={{
                              delay: 0.7 + index * 0.2 + techIndex * 0.05,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{
                              scale: 1.15,
                              backgroundColor: "rgba(168, 85, 247, 0.2)",
                              rotate: [0, -10, 10, 0],
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Corner sparkle */}
                    <motion.div
                      className="absolute top-2 right-2"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <Zap className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Timeline End with animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 bottom-0"
          >
            <motion.div
              className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="text-white text-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                🚀
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [1, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}