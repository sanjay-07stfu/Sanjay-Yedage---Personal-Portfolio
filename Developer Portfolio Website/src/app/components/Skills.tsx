import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Database,
  Layers,
  Server,
  Smartphone,
  Cloud,
  Brain,
  Wrench,
} from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Redux",
        "HTML/CSS",
        "JavaScript",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Node.js",
        "Python",
        "Express",
        "Django",
        "REST APIs",
        "GraphQL",
        "Microservices",
        "WebSockets",
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Elasticsearch",
        "DynamoDB",
        "Prisma",
        "TypeORM",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-yellow-500",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
        "Jenkins",
        "Nginx",
        "Linux",
      ],
    },
    {
      title: "AI & ML",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "LangChain",
        "Hugging Face",
        "scikit-learn",
        "NLP",
        "Computer Vision",
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      skills: [
        "React Native",
        "Flutter",
        "iOS",
        "Android",
        "Expo",
        "Mobile UI/UX",
        "App Store",
        "Play Store",
      ],
    },
    {
      title: "Architecture",
      icon: Layers,
      color: "from-teal-500 to-cyan-500",
      skills: [
        "System Design",
        "Microservices",
        "Event-Driven",
        "Serverless",
        "API Design",
        "Scalability",
        "Performance",
        "Security",
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-violet-500 to-purple-500",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
        "Jira",
        "Slack",
        "Notion",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {"Skills & Expertise".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies
            I work with.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <motion.div
                  className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(168, 85, 247, 0)",
                      "0 0 20px rgba(168, 85, 247, 0.2)",
                      "0 0 0 rgba(168, 85, 247, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: catIndex * 0.2,
                  }}
                >
                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon with rotation animation */}
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: catIndex * 0.1,
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {category.title}
                    </h3>

                    {/* Skills with stagger and bounce */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={
                            isInView
                              ? {
                                  opacity: 1,
                                  scale: 1,
                                  rotate: 0,
                                }
                              : { opacity: 0, scale: 0, rotate: -180 }
                          }
                          transition={{
                            delay: catIndex * 0.1 + index * 0.05,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{
                            scale: 1.15,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10"
            animate={{
              y: [0, -10, 0],
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.1)",
                "0 10px 30px rgba(168, 85, 247, 0.3)",
                "0 0 20px rgba(168, 85, 247, 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-gray-300">
              Always learning and exploring new technologies
            </span>
            <motion.span
              className="text-2xl"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}