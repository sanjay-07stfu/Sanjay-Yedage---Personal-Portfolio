import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TextScramble({ text, className = "", speed = 50 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let frame = 0;
    const totalFrames = text.length * 3;

    const interval = setInterval(() => {
      let scrambled = "";
      
      for (let i = 0; i < text.length; i++) {
        if (frame > i * 3) {
          scrambled += text[i];
        } else if (text[i] === " ") {
          scrambled += " ";
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(scrambled);
      frame++;

      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isHovered, text, speed]);

  return (
    <motion.span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: "monospace" }}
    >
      {displayText}
    </motion.span>
  );
}
