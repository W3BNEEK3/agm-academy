"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

const GLASS_CARD =
  "rounded-lg border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl";

export function PaymentStatusCard({
  variant,
  title,
  message,
}: {
  variant: "success" | "failed";
  title: string;
  message: string;
}) {
  const accent = variant === "success" ? "#fcc70e" : "#f87171";
  const glow =
    variant === "success" ? "bg-signal-yellow/30" : "bg-red-400/25";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
      className={`relative w-full max-w-md p-8 text-center sm:p-10 ${GLASS_CARD}`}
    >
      <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.6 }}
          animate={{ opacity: 0, scale: 1.8 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className={`absolute inset-0 rounded-full ${glow}`}
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.35 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/15"
        >
          {variant === "success" ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <motion.path
                d="M4.5 12.5L9.5 17.5L19.5 6.5"
                stroke={accent}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.35, ease: EASE_OUT_STRONG }}
              />
            </svg>
          ) : (
            <X size={26} color={accent} strokeWidth={2.5} />
          )}
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5, ease: EASE_OUT_STRONG }}
        className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-white"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.58, ease: EASE_OUT_STRONG }}
        className="mt-3 text-base leading-relaxed text-white/70"
      >
        {message}
      </motion.p>
      {variant === "failed" && (
        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.66, ease: EASE_OUT_STRONG }}
          href="/apply"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-signal-yellow px-6 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
        >
          Try again
          <ArrowRight size={18} />
        </motion.a>
      )}
    </motion.div>
  );
}
