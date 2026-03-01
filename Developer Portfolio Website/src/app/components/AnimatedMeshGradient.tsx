import { motion } from "motion/react";

export function AnimatedMeshGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated mesh gradient blobs */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <g filter="url(#goo)">
          {/* Blob 1 */}
          <motion.circle
            cx="20%"
            cy="30%"
            r="200"
            fill="url(#grad1)"
            animate={{
              cx: ["20%", "30%", "20%"],
              cy: ["30%", "40%", "30%"],
              r: [200, 250, 200],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blob 2 */}
          <motion.circle
            cx="80%"
            cy="70%"
            r="250"
            fill="url(#grad2)"
            animate={{
              cx: ["80%", "70%", "80%"],
              cy: ["70%", "60%", "70%"],
              r: [250, 300, 250],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blob 3 */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="180"
            fill="url(#grad3)"
            animate={{
              cx: ["50%", "60%", "50%"],
              cy: ["50%", "45%", "50%"],
              r: [180, 230, 180],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blob 4 */}
          <motion.circle
            cx="30%"
            cy="80%"
            r="150"
            fill="url(#grad1)"
            animate={{
              cx: ["30%", "40%", "30%"],
              cy: ["80%", "75%", "80%"],
              r: [150, 200, 150],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blob 5 */}
          <motion.circle
            cx="70%"
            cy="20%"
            r="170"
            fill="url(#grad2)"
            animate={{
              cx: ["70%", "65%", "70%"],
              cy: ["20%", "25%", "20%"],
              r: [170, 220, 170],
            }}
            transition={{
              duration: 23,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
    </div>
  );
}
