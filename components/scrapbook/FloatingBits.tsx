"use client";

import { motion } from "framer-motion";
import { HeartDoodle, StarDoodle, SparkleDoodle } from "./Doodles";

const BITS = [
  { Icon: HeartDoodle, left: "8%", size: 20, delay: 0, duration: 14 },
  { Icon: StarDoodle, left: "22%", size: 16, delay: 3, duration: 17 },
  { Icon: SparkleDoodle, left: "38%", size: 14, delay: 6, duration: 13 },
  { Icon: HeartDoodle, left: "55%", size: 24, delay: 1.5, duration: 16 },
  { Icon: StarDoodle, left: "70%", size: 18, delay: 4.5, duration: 15 },
  { Icon: SparkleDoodle, left: "84%", size: 16, delay: 8, duration: 18 },
  { Icon: HeartDoodle, left: "93%", size: 18, delay: 2, duration: 14 },
];

export function FloatingBits() {
  return (
    <div className="floating-bits" aria-hidden="true">
      {BITS.map(({ Icon, left, size, delay, duration }, i) => (
        <motion.span
          key={i}
          className="floating-bit"
          style={{ left, width: size, height: size }}
          initial={{ y: "110vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            rotate: 180,
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Icon className="floating-bit-icon" />
        </motion.span>
      ))}
    </div>
  );
}
