"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const exchange: { voice: "you" | "her"; text: string }[] = [
  { voice: "you", text: "you're the best thing this paper has ever printed." },
  { voice: "her", text: "you say that to everyone." },
  { voice: "you", text: "i don't know anyone else." },
  { voice: "her", text: "you're just being sweet." },
  { voice: "you", text: "i'm never sweet, ask anyone." },
  { voice: "her", text: "you haven't seen me at my worst." },
  { voice: "you", text: "i've read every issue. still here, still printing." },
  { voice: "her", text: "okay, but don't tell anyone." },
  { voice: "you", text: "too late. it's already on the front page." },
];

export default function LoveIYouInsert() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cueGone, setCueGone] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>(".insert-line, .insert-payoff, .insert-ps")
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ticking = false;

    function paint() {
      ticking = false;
      const mid = window.innerHeight / 2;
      const maxD = window.innerHeight * 0.55;
      for (const el of items) {
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const t = Math.min(Math.abs(c - mid) / maxD, 1);
        if (reduce) {
          el.style.opacity = (1 - t * 0.55).toFixed(3);
          continue;
        }
        el.style.opacity = (1 - t * 0.85).toFixed(3);
        el.style.filter = `blur(${(t * 2.6).toFixed(2)}px)`;
        el.style.transform = `scale(${(1 - t * 0.05).toFixed(3)})`;
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
      setCueGone(true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", paint);
    if (document.fonts?.ready) {
      document.fonts.ready.then(paint);
    }
    paint();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", paint);
    };
  }, []);

  return (
    <div className="insert">
      <Link href="/songs" className="insert-back">
        &larr; The Aaradhya Post
      </Link>
      <div className="insert-postmark">
        The Aaradhya Post
        <br />
        Circ. One &middot; Aug 9
      </div>

      <main className="insert-scroll" ref={scrollRef}>
        {exchange.map((line, i) => (
          <p key={i} className={`insert-line ${line.voice}`}>
            {line.text}
          </p>
        ))}

        <p className="insert-payoff">love i you.</p>
        <span className="insert-seal" aria-hidden="true" />
        <p className="insert-ps">p.s. i love you long and steady.</p>
      </main>

      <div className={`insert-cue ${cueGone ? "gone" : ""}`}>
        scroll
        <span className="insert-arrow" aria-hidden="true">
          &darr;
        </span>
      </div>
    </div>
  );
}
