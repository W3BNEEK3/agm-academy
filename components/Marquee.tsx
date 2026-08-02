"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export function Marquee({
  children,
  direction = "left",
  duration = 40,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="group overflow-hidden">
      <div
        className="flex w-max gap-6 group-hover:[animation-play-state:paused]"
        style={
          shouldReduceMotion
            ? undefined
            : {
                animation: `${
                  direction === "left" ? "marquee-left" : "marquee-right"
                } ${duration}s linear infinite`,
              }
        }
      >
        {children}
      </div>
    </div>
  );
}
