"use client";

import { useEffect, useState } from "react";

// Sponsorship applications are targeted to open roughly 60 days out.
const TARGET_DATE = new Date("2026-09-30T00:00:00");

function getTimeLeft() {
  const total = Math.max(0, TARGET_DATE.getTime() - Date.now());
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    done: total <= 0,
  };
}

export function SponsorshipCountdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.done) {
    return (
      <p className="text-lg font-semibold text-white">
        Sponsorship applications are opening soon. Check back shortly.
      </p>
    );
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center rounded-md border border-white/20 bg-white/10 py-4 sm:py-6"
        >
          <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[0.7rem] uppercase tracking-[0.08em] text-white/50 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
