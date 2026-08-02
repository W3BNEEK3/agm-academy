import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses | AGM Academy",
  description:
    "Every course at AGM Academy is beginner-friendly, online or in person, with installment plans on physical classes.",
};

export default function CoursesPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="min-w-0 flex-1 bg-slate-mist px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              All courses.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Every course is beginner-friendly, available online or in
              person, and open for installment payments on physical
              classes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={course.slug} course={course} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
