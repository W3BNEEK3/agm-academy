"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT_STRONG },
  }),
};

export function Hero() {
  return (
    <section className="relative w-full bg-sky-blue">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-royal-blue/80 via-royal-blue/30 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 pt-16 pb-0 sm:px-8 md:pt-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-12 lg:pt-28">
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white"
          >
            Learn the tech skills the industry actually hires for.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/80"
          >
            Beginner-friendly courses in development, design, data, and
            more, taught with real mentorship, not just pre-recorded
            videos. Physical and online classes, with flexible payment
            plans.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-signal-yellow px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#courses"
              className="inline-flex items-center justify-center rounded-md px-7 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors duration-150 hover:bg-white/10 active:scale-[0.97]"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_STRONG }}
          className="relative z-20 self-end"
        >
          <div className="relative mx-auto aspect-[1414/1750] w-full max-w-xs overflow-hidden rounded-lg shadow-[0_12px_32px_rgba(15,23,42,0.18)] sm:max-w-sm lg:mx-0 lg:max-w-none">
            <Image
              src="/images/hero-img2.5.jpeg"
              alt="An AGM Academy student holding a laptop"
              fill
              priority
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 70vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
