import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CursorTrail() {
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev, newTrail].slice(-20));

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursorPos.x - 12,
          y: cursorPos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursorPos.x - 4,
          y: cursorPos.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
        }}
      />

      {/* Trail particles */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed w-1 h-1 bg-purple-400 rounded-full pointer-events-none z-[9998]"
          initial={{
            x: trail.x,
            y: trail.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1 }}
        />
      ))}
    </>
  );
}
