"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Scholarship() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 md:py-24 lg:px-12">
      <Image
        src="/images/hero-img1.jpeg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/75 to-ink/85" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
        className="relative mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-lg border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10"
      >
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-signal-yellow">
          Coming soon
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
          Scholarships for learners who need them most.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70">
          We&apos;re building a scholarship program to make AGM Academy free
          for learners who can&apos;t cover the cost. Applications aren&apos;t
          open yet. Check back soon.
        </p>
      </motion.div>
    </section>
  );
}
