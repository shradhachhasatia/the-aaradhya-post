"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { masthead } from "../content";
import { lock } from "../content";
import { LockIcon } from "../../components/editorial/LockIcon";

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
      setTimeout(() => router.push("/"), 850);
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus("idle"), 900);
    }
  }

  return (
    <main className="lockscreen">
      <motion.div
        className="lockcard"
        animate={status === "wrong" ? { x: [0, -12, 10, -8, 6, -3, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="lockcard-eyebrow">{lock.eyebrow}</p>
        <h1 className="lockcard-title">{masthead.title}</h1>

        <motion.div
          className="lockcard-icon"
          animate={{ scale: status === "checking" ? [1, 1.06, 1] : 1 }}
          transition={{ duration: 0.6, repeat: status === "checking" ? Infinity : 0 }}
        >
          <LockIcon open={status === "unlocked"} className="lockcard-icon-svg" />
        </motion.div>

        <p className="lockcard-copy">{lock.copy}</p>

        <form onSubmit={handleSubmit} className="lockcard-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={lock.placeholder}
            className="lockcard-input"
            autoFocus
            disabled={status === "unlocked"}
          />
          <button
            type="submit"
            className="lockcard-button"
            disabled={status === "checking" || status === "unlocked" || !password}
          >
            {status === "checking"
              ? "Checking"
              : status === "unlocked"
              ? "Unlocked"
              : lock.button}
          </button>
        </form>

        <AnimatePresence>
          {status === "wrong" && (
            <motion.p
              className="lockcard-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {lock.wrong}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
