"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS, initials } from "@/lib/testimonials";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];
const SLIDE_INTERVAL = 5500;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused]);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden px-6 py-20 sm:px-8 md:py-28 lg:px-12"
    >
      <Image
        src="/images/hero-img2.jpeg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/85" />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
          What our students say
        </h2>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
              className="rounded-lg border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10"
            >
              <div className="flex gap-1 text-signal-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="mt-5 font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-white sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                  {initials(current.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {current.name}
                  </p>
                  <p className="text-sm text-white/60">{current.course}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-signal-yellow" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
