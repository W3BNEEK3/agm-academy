import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | AGM Academy",
  description:
    "AGM Academy teaches tech and digital skills to complete beginners, with real mentorship, flexible formats, and installment payment plans.",
};

const REASONS = [
  {
    title: "Real mentors, not just videos.",
    body: "You're paired with people working in the field, not left alone with a syllabus and a play button. Questions get answered by someone who's done the job.",
  },
  {
    title: "Learn your way.",
    body: "Join us in person or online, whichever actually fits your life right now. Same curriculum, same mentorship, different setting.",
  },
  {
    title: "Pay as you go.",
    body: "Physical classes can be paid in installments, so cost isn't what stops you from starting. Online classes are paid in full at enrollment.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Apply",
    body: "Fill out a short application so we know what you're looking for.",
  },
  {
    number: "02",
    title: "Choose your path",
    body: "Pick a course, then decide between physical or online classes.",
  },
  {
    number: "03",
    title: "Learn with a mentor",
    body: "Work through the curriculum with real guidance, not just a video queue.",
  },
  {
    number: "04",
    title: "Graduate ready",
    body: "Walk away with practical skills and work you can actually show for it.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="min-w-0 flex-1">
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
          <Image
            src="/images/bg-img3.jpeg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/70 to-ink/85" />
          <div className="relative mx-auto max-w-3xl">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              Built around people who are starting from zero.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
              Most online courses hand you a video library and wish you
              luck. AGM Academy is built the other way around, around the
              people teaching, not just the content they upload. We teach
              tech and digital skills to complete beginners, in person and
              online, with real mentors and payment plans that don't
              assume you already have the money upfront.
            </p>
          </div>
        </section>

        <section className="bg-slate-mist px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              What's actually different here.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-3">
              {REASONS.map((reason) => (
                <div key={reason.title}>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-ink sm:text-2xl">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70 sm:text-lg">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              How it works.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step) => (
                <div key={step.number} className="border-t border-ink/10 pt-5">
                  <span className="font-[family-name:var(--font-display)] text-sm font-medium text-royal-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/70">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-royal-blue px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
              Ready to see what fits you?
            </h2>
            <Link
              href="/apply"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-signal-yellow px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
