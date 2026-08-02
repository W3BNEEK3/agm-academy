"use client";

import { motion } from "framer-motion";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

const REASONS = [
  {
    title: "Real mentors, not just videos.",
    body: "You're paired with people working in the field, not left alone with a syllabus and a play button.",
  },
  {
    title: "Learn your way.",
    body: "Join us in person or online, whichever actually fits your life right now.",
  },
  {
    title: "Pay as you go.",
    body: "Physical classes can be paid in installments, so cost isn't what stops you from starting.",
  },
];

export function WhyUs() {
  return (
    <section
      id="about"
      className="relative -mt-10 bg-white px-6 pt-24 pb-16 sm:-mt-14 sm:px-8 sm:pt-28 md:pb-24 lg:-mt-16 lg:px-12 lg:pt-32 lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
        >
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
            Built around people who are starting from zero.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Most online courses hand you a video library and wish you luck.
            AGM Academy is built the other way around, around the people
            teaching, not just the content they upload.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: EASE_OUT_STRONG,
              }}
              className={`py-7 ${
                index !== 0 ? "border-t border-slate-mist" : "pt-0"
              }`}
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-ink sm:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-2 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
