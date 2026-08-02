"use client";

import dynamic from "next/dynamic";

const SponsorshipCountdown = dynamic(
  () =>
    import("@/components/SponsorshipCountdown").then(
      (mod) => mod.SponsorshipCountdown
    ),
  { ssr: false }
);

export function SponsorshipCountdownMount() {
  return <SponsorshipCountdown />;
}
