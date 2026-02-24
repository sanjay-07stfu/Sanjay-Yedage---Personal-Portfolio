import { motion } from "motion/react";
import { useState, MouseEvent } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export function ParticleExplosion() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles: Particle[] = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        angle: (360 / particleCount) * i,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up old particles
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9997]"
      onClick={handleClick}
      style={{ pointerEvents: "auto" }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            background: `hsl(${particle.angle}, 70%, 60%)`,
          }}
          initial={{
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: Math.cos((particle.angle * Math.PI) / 180) * 100,
            y: Math.sin((particle.angle * Math.PI) / 180) * 100,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
