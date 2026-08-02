import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SponsorshipCountdownMount } from "@/components/SponsorshipCountdownMount";

export const metadata: Metadata = {
  title: "Sponsorship | AGM Academy",
  description:
    "AGM Academy is launching a sponsorship program to help cover tuition for learners who need it most.",
};

export default function SponsorshipPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden px-6 py-20 sm:px-8">
        <Image
          src="/images/hero-img3.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/75 to-ink/90" />

        <div className="relative flex w-full max-w-2xl flex-col items-center gap-6 rounded-lg border border-white/20 bg-white/10 p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-12">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-signal-yellow">
            Coming soon
          </span>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Sponsorship applications open in
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            We&apos;re partnering with sponsors to help cover tuition for
            learners who need it most. Applications aren&apos;t open yet,
            here&apos;s when they will be.
          </p>

          <div className="mt-2 w-full max-w-md">
            <SponsorshipCountdownMount />
          </div>

          <p className="mt-2 text-sm text-white/50">
            Want to know the moment applications open?{" "}
            <Link href="/contact" className="font-medium text-signal-yellow">
              Get in touch
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
