"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { WHATSAPP_LINK } from "@/lib/contact";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3, ease: EASE_OUT_STRONG }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)] transition-transform duration-150 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      {!shouldReduceMotion && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 0.35, 0], scale: [1, 1.5, 1.6] }}
          transition={{
            duration: 1.6,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
      )}
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}
