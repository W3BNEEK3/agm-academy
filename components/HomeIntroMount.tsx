"use client";

import dynamic from "next/dynamic";

const IntroScene = dynamic(
  () => import("@/components/IntroScene").then((mod) => mod.IntroScene),
  { ssr: false }
);

export function HomeIntroMount() {
  return <IntroScene />;
}
