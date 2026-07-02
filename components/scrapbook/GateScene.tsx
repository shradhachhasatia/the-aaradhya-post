"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { FloatingBits } from "./FloatingBits";
import { Polaroid } from "./Polaroid";
import { WashiTape } from "./WashiTape";
import { HeartDoodle, StarDoodle, ArrowDoodle, SquiggleDoodle } from "./Doodles";

type Props = {
  eyebrow: string;
  title: string;
  motto: string;
  tagline: string;
  waitingLine: string;
  openLabel: string;
  archiveLabel: string;
  editionDate: string | null;
  editionLabel: string | null;
};

const sceneVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 170, damping: 16 },
  },
};

export function GateScene({
  eyebrow,
  title,
  motto,
  tagline,
  waitingLine,
  openLabel,
  archiveLabel,
  editionDate,
  editionLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 80,
    damping: 14,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 80,
    damping: 14,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      className="scrapboard"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FloatingBits />

      <motion.div
        className="scrap-scene"
        variants={sceneVariants}
        initial="hidden"
        animate="show"
        style={{ rotateX, rotateY }}
      >
        <motion.div className="scrap-polaroids" variants={popIn}>
          <Polaroid rotate={-8} tapeColor="rose" caption="us, probably">
            <HeartDoodle className="polaroid-doodle" />
          </Polaroid>
          <Polaroid rotate={6} tapeColor="sky" caption="every friday">
            <StarDoodle className="polaroid-doodle" />
          </Polaroid>
        </motion.div>

        <motion.div className="scrap-card" variants={popIn}>
          <WashiTape rotate={-6} color="sage" width={100} className="scrap-card-tape" />
          <p className="scrap-eyebrow">{eyebrow}</p>
          <h1 className="scrap-title">{title}</h1>
          <p className="scrap-motto">{motto}</p>
          <SquiggleDoodle className="scrap-squiggle" />
          <p className="scrap-tagline">{tagline}</p>

          {editionDate ? (
            <>
              <p className="scrap-edition-label">
                this week&rsquo;s edition &mdash; {editionLabel}
              </p>
              <motion.div whileHover={{ scale: 1.06, rotate: -2 }} whileTap={{ scale: 0.96 }}>
                <Link href={`/post/${editionDate}`} className="scrap-button">
                  {openLabel}
                </Link>
              </motion.div>
            </>
          ) : (
            <p className="scrap-edition-label">{waitingLine}</p>
          )}
        </motion.div>

        <motion.div className="scrap-archive" variants={popIn}>
          <ArrowDoodle className="scrap-arrow" />
          <Link href="/archive" className="scrap-archive-link">
            {archiveLabel}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
