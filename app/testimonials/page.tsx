import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppTestimonialCard } from "@/components/WhatsAppTestimonialCard";
import { FacebookTestimonialCard } from "@/components/FacebookTestimonialCard";
import { Marquee } from "@/components/Marquee";
import {
  TESTIMONIALS,
  WHATSAPP_TESTIMONIALS,
  FACEBOOK_TESTIMONIALS,
  initials,
} from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | AGM Academy",
  description: "What AGM Academy students say about learning here.",
};

const AVATAR_STRIP = [
  { initials: "CO", color: "bg-[#2c3546]" },
  { initials: "TA", color: "bg-[#3a3228]" },
  { initials: "NE", color: "bg-[#1f2a38]" },
  { initials: "EO", color: "bg-[#33302c]" },
  { initials: "FB", color: "bg-[#26313f]" },
];

export default function TestimonialsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="min-w-0 flex-1">
        <section className="relative overflow-hidden px-6 py-20 sm:px-8 md:py-28 lg:px-12">
          <Image
            src="/images/bg-img1.jpeg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/75 to-ink/90" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
                What our students say.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
                A few stories from people learning at AGM Academy right
                now: beginners, mid-course, figuring it out same as you
                would be.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-col rounded-lg border border-white/20 bg-white/10 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                >
                  <div className="flex gap-1 text-signal-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-white">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                      {initials(testimonial.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-white/60">
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-ink py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
                Straight from their phones.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                Messages and posts students have shared with us directly,
                recreated here in the same format they sent them.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <Marquee direction="right" duration={50}>
              {[...WHATSAPP_TESTIMONIALS, ...WHATSAPP_TESTIMONIALS].map(
                (testimonial, i) => (
                  <div
                    key={`${testimonial.name}-${i}`}
                    aria-hidden={i >= WHATSAPP_TESTIMONIALS.length}
                    className="w-[300px] shrink-0 sm:w-[340px]"
                  >
                    <WhatsAppTestimonialCard testimonial={testimonial} />
                    <p className="mt-4 text-sm text-white/50">
                      <span className="font-semibold text-white/80">
                        {testimonial.name}
                      </span>{" "}
                      · {testimonial.course}
                    </p>
                  </div>
                )
              )}
            </Marquee>

            <Marquee direction="left" duration={55}>
              {[...FACEBOOK_TESTIMONIALS, ...FACEBOOK_TESTIMONIALS].map(
                (testimonial, i) => (
                  <div
                    key={`${testimonial.name}-${i}`}
                    aria-hidden={i >= FACEBOOK_TESTIMONIALS.length}
                    className="w-[300px] shrink-0 sm:w-[340px]"
                  >
                    <FacebookTestimonialCard testimonial={testimonial} />
                    <p className="mt-4 text-sm text-white/50">
                      <span className="font-semibold text-white/80">
                        {testimonial.name}
                      </span>{" "}
                      · {testimonial.course}
                    </p>
                  </div>
                )
              )}
            </Marquee>
          </div>

          <div className="mx-auto mt-14 max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
              <div className="flex -space-x-3">
                {AVATAR_STRIP.map((avatar) => (
                  <div
                    key={avatar.initials}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink text-xs font-semibold text-white ${avatar.color}`}
                  >
                    {avatar.initials}
                  </div>
                ))}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-white/15 text-xs font-semibold text-white">
                  +195
                </div>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  Trusted by 200+ students
                </p>
                <p className="text-sm text-white/50">
                  Across physical and online classes, and counting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-mist px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-md bg-white px-8 py-12 sm:px-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              Already a student? We'd love to hear from you.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
              Once you've completed a course, reach out. Your story
              could be one of the next featured here.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-royal-blue px-6 py-3.5 text-base font-semibold text-white transition-transform duration-150 active:scale-[0.97]"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
