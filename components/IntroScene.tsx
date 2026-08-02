"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];
const DISPLAY_MS = 2000;

export function IntroScene() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }
    const timeout = setTimeout(() => setVisible(false), DISPLAY_MS);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-scene"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: EASE_OUT_STRONG }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="absolute -right-24 -bottom-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute right-16 top-16 h-24 w-24 rounded-full bg-white/5" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
            className="relative flex flex-col items-center gap-5"
          >
            <Image
              src="/images/agm-academy-main-logo.png"
              alt="AGM Academy"
              width={220}
              height={40}
              priority
              className="h-9 w-auto brightness-0 invert sm:h-11"
            />
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT_STRONG }}
              className="h-[2px] w-20 origin-left bg-signal-yellow"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
