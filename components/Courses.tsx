import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredCourses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export function Courses() {
  return (
    <section id="courses" className="bg-slate-mist px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Pick a path. Start from zero.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Every course is beginner-friendly, available online or in
              person, and open for installment payments on physical
              classes.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-2 rounded-md px-5 py-3 text-base font-semibold text-royal-blue ring-1 ring-inset ring-royal-blue/25 transition-colors duration-150 hover:bg-white"
          >
            View all courses
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
