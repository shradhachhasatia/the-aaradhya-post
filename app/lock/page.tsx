"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingBits } from "../../components/scrapbook/FloatingBits";
import { WashiTape } from "../../components/scrapbook/WashiTape";
import {
  HeartDoodle,
  SparkleDoodle,
  SquiggleDoodle,
} from "../../components/scrapbook/Doodles";

type Status = "idle" | "checking" | "wrong" | "unlocked";

export default function LockPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "checking" || status === "unlocked") return;
    setStatus("checking");

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setStatus("unlocked");
      setTimeout(() => router.push("/"), 1100);
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus("idle"), 900);
    }
  }

  return (
    <main className="lockscreen">
      <FloatingBits />
      <motion.div
        className="diary"
        animate={
          status === "wrong"
            ? { x: [0, -14, 12, -10, 8, -4, 0] }
            : status === "unlocked"
            ? { scale: 1.03, y: -6 }
            : { x: 0 }
        }
        transition={
          status === "wrong"
            ? { duration: 0.5 }
            : { type: "spring", stiffness: 200, damping: 14 }
        }
      >
        <WashiTape rotate={-7} color="mustard" width={110} className="diary-tape diary-tape-left" />
        <WashiTape rotate={9} color="sky" width={90} className="diary-tape diary-tape-right" />

        <SparkleDoodle className="diary-sparkle diary-sparkle-a" />
        <SparkleDoodle className="diary-sparkle diary-sparkle-b" />

        <p className="diary-eyebrow">a very official newspaper</p>
        <h1 className="diary-title">The Aaradhya Post</h1>
        <SquiggleDoodle className="diary-squiggle" />

        <div className="diary-lock-row">
          <AnimatePresence mode="wait">
            {status === "unlocked" ? (
              <motion.div
                key="open"
                className="padlock padlock-open"
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: -18, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 260, damping: 10 }}
              >
                🔓
              </motion.div>
            ) : (
              <motion.div
                key="closed"
                className="padlock"
                initial={{ scale: 1 }}
                animate={{ scale: status === "checking" ? [1, 1.08, 1] : 1 }}
                transition={{ duration: 0.6, repeat: status === "checking" ? Infinity : 0 }}
              >
                🔒
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="diary-copy">
          this one&rsquo;s locked &mdash; just for you, love.
          <br />
          you know the words. type them below.
        </p>

        <form onSubmit={handleSubmit} className="diary-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="whisper the password..."
            className="diary-input"
            autoFocus
            disabled={status === "unlocked"}
          />
          <button
            type="submit"
            className="diary-button"
            disabled={status === "checking" || status === "unlocked" || !password}
          >
            {status === "checking"
              ? "checking..."
              : status === "unlocked"
              ? "unlocked!"
              : "unlock it ♡"}
          </button>
        </form>

        <AnimatePresence>
          {status === "wrong" && (
            <motion.p
              className="diary-error"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              nope, not quite &mdash; try again <HeartDoodle className="inline-heart" />
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {status === "unlocked" && (
            <div className="confetti-burst" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="confetti-bit"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
                  animate={{
                    x: Math.cos((i / 10) * Math.PI * 2) * 90,
                    y: Math.sin((i / 10) * Math.PI * 2) * 90,
                    opacity: 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  <HeartDoodle />
                </motion.span>
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
