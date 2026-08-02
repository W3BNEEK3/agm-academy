import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { courses } from "@/lib/courses";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata(
  props: PageProps<"/courses/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} | AGM Academy`,
    description: course.tagline,
  };
}

export default async function CourseDetailPage(
  props: PageProps<"/courses/[slug]">
) {
  const { slug } = await props.params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="min-w-0 flex-1">
        <section className="bg-white px-6 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/courses"
              className="text-sm font-medium text-ink/50 transition-colors hover:text-royal-blue"
            >
              ← All courses
            </Link>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.06em] text-royal-blue">
                  {course.duration}
                </span>
                <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
                  {course.title}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
                  {course.tagline}
                </p>

                <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-md">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-10">
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                    About this course
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
                    {course.description}
                  </p>
                </div>

                <div className="mt-10">
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                    What you&apos;ll learn
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="mt-0.5 shrink-0 text-royal-blue"
                        />
                        <span className="text-base leading-relaxed text-ink/80 sm:text-lg">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="sticky top-24 rounded-md bg-slate-mist p-7 sm:p-8">
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                    Pricing
                  </h2>

                  <div className="mt-5 border-t border-ink/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-ink/60">
                        Physical
                      </span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-sm text-ink/40 line-through">
                          {formatNaira(course.physical.original)}
                        </span>
                        <span className="text-xl font-semibold text-royal-blue">
                          {formatNaira(course.physical.price)}
                        </span>
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink/50">
                      Installment payment plans available.
                    </p>
                  </div>

                  <div className="mt-5 border-t border-ink/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-ink/60">
                        Online
                      </span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-sm text-ink/40 line-through">
                          {formatNaira(course.online.original)}
                        </span>
                        <span className="text-xl font-semibold text-royal-blue">
                          {formatNaira(course.online.price)}
                        </span>
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink/50">
                      Paid in full at enrollment.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5 text-sm">
                    <span className="font-medium text-ink/60">Duration</span>
                    <span className="font-semibold text-ink">
                      {course.duration}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-col gap-3">
                    <a
                      href="/apply"
                      className="flex items-center justify-center gap-2 rounded-md bg-signal-yellow px-6 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
                    >
                      Apply for Physical Class
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="/apply"
                      className="flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold text-royal-blue ring-1 ring-inset ring-royal-blue/25 transition-colors duration-150 hover:bg-white active:scale-[0.97]"
                    >
                      Apply for Online Class
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
