"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-sky-blue px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-48 h-[28rem] w-[28rem] rounded-full border border-white/15" />
        <div className="absolute -right-10 -top-16 h-72 w-72 rounded-full border border-white/20" />
        <div className="absolute right-40 top-10 h-48 w-48 rounded-full border border-white/25" />
        <div className="absolute right-[26rem] top-24 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute right-[34rem] top-44 h-12 w-12 rounded-full bg-white/15" />
        <div className="absolute right-[42rem] top-16 h-5 w-5 rounded-full bg-white/25" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
        className="relative mx-auto flex max-w-4xl flex-col items-start gap-8 rounded-lg border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10 lg:p-14"
      >
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
          Start where you are. Build the career you actually want.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-white/80">
          No experience, no problem. Apply now and we&apos;ll walk you
          through choosing a course, a format, and a payment plan that
          works for you.
        </p>
        <a
          href="/apply"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-signal-yellow px-8 py-4 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
        >
          Apply Now
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
