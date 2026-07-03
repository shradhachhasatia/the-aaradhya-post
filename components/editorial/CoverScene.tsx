"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { MagazineCard } from "./MagazineCard";
import {
  HeartLine,
  SunLine,
  BookLine,
  StarLine,
  ArrowLine,
  ArchiveMark,
  StampSeal,
} from "./Icons";

type ColumnItem = { title: string; body: string };

type Props = {
  eyebrow: string;
  title: string;
  motto: string;
  waitingLine: string;
  openLabel: string;
  archiveLabel: string;
  editionDate: string | null;
  editionLabel: string | null;
  issueNumber: number;
  headline: string | null;
  subhead: string | null;
  columns: ColumnItem[];
  reasonsTitle: string | null;
  reasonsCount: number;
  songTitle: string | null;
  songArtist: string | null;
};

function iconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes("weather")) return <SunLine className="mag-row-icon-svg" />;
  if (t.includes("sport")) return <HeartLine className="mag-row-icon-svg" />;
  if (t.includes("cultur")) return <BookLine className="mag-row-icon-svg" />;
  return <StarLine className="mag-row-icon-svg" />;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const numeralItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 0.06, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function CoverScene({
  eyebrow,
  title,
  motto,
  waitingLine,
  openLabel,
  archiveLabel,
  editionDate,
  editionLabel,
  issueNumber,
  headline,
  subhead,
  columns,
  reasonsTitle,
  reasonsCount,
  songTitle,
  songArtist,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const numeralX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 60,
    damping: 16,
  });
  const numeralY = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), {
    stiffness: 60,
    damping: 16,
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

  const day = editionDate ? new Date(`${editionDate}T00:00:00`).getDate() : null;

  return (
    <div
      ref={ref}
      className="cover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="cover-nav">
        <Link href="/archive" className="cover-nav-link" aria-label={archiveLabel} title={archiveLabel}>
          <ArchiveMark className="cover-nav-archive-icon" />
        </Link>
        <span className="cover-nav-brand">{title}</span>
        <span className="cover-nav-meta">
          {editionLabel ?? "No. " + String(issueNumber).padStart(2, "0")}
        </span>
      </nav>

      <motion.div variants={container} initial="hidden" animate="show">
        <header className="cover-hero">
          {day !== null && (
            <motion.span
              className="cover-numeral"
              style={{ x: numeralX, y: numeralY }}
              variants={numeralItem}
            >
              {String(day).padStart(2, "0")}
            </motion.span>
          )}
          <motion.div className="cover-hero-text" variants={item}>
            <p className="cover-eyebrow">{eyebrow}</p>
            <h1 className="cover-title">{title}</h1>
            <p className="cover-motto">{motto}</p>
          </motion.div>
        </header>

        {headline ? (
          <>
            <section className="mag-list">
              <motion.div variants={item}>
                <MagazineCard
                  lead
                  accent
                  tag="P.01 — Lead Story"
                  title={headline}
                  teaser={subhead ?? undefined}
                  icon={<HeartLine className="mag-row-icon-svg" />}
                />
              </motion.div>

              {columns.map((col, i) => (
                <motion.div variants={item} key={col.title}>
                  <MagazineCard
                    tag={`P.0${i + 2} — ${col.title}`}
                    title={col.title}
                    teaser={col.body}
                    icon={iconFor(col.title)}
                  />
                </motion.div>
              ))}

              {reasonsTitle && reasonsCount > 0 && (
                <motion.div variants={item}>
                  <MagazineCard
                    tag="Top Headlines"
                    title={reasonsTitle}
                    teaser={`${reasonsCount} reasons, and counting.`}
                    icon={<StarLine className="mag-row-icon-svg" />}
                  />
                </motion.div>
              )}

              {songTitle && (
                <motion.div variants={item}>
                  <MagazineCard
                    lead
                    accent
                    tag="Song Of The Week"
                    title={songTitle}
                    teaser={songArtist ?? undefined}
                    icon={<StampSeal className="mag-row-icon-svg mag-row-icon-stamp" />}
                  />
                </motion.div>
              )}
            </section>

            <motion.div variants={item} className="cover-cta">
              <Link href={`/post/${editionDate}`} className="cover-button">
                {openLabel}
                <ArrowLine className="cover-button-arrow" />
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.p variants={item} className="cover-waiting">
            {waitingLine}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
