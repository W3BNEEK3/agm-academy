"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

const FAQS = [
  {
    question: "Do I need any experience to start?",
    answer:
      "No. Every course at AGM Academy is built for complete beginners. The curriculum starts from the fundamentals, not the middle.",
  },
  {
    question: "What's the difference between physical and online classes?",
    answer:
      "Physical classes meet in person and can be paid in installments. Online classes follow the same curriculum and mentorship model, but you join remotely and pay in full upfront.",
  },
  {
    question: "How much time do I need to commit each week?",
    answer:
      "It depends on the course and format, and we'll share exact schedules when you apply. Every course is designed around learners who are working or studying alongside it, not full-time students.",
  },
  {
    question: "Will I get a job after finishing a course?",
    answer:
      "We won't promise a guaranteed job. No honest program can. What we do promise is real mentorship, practical skills, and support finding opportunities once you're ready.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "We're building a scholarship program now. It isn't open yet, but check the scholarships section above for updates.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-mist px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
          Questions, answered.
        </h2>

        <div className="mt-10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-ink sm:text-xl">
                    {faq.question}
                  </span>
                  <Plus
                    size={22}
                    className={`shrink-0 text-ink/50 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT_STRONG }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-base leading-relaxed text-ink/70 sm:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
