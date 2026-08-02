"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function CourseCard({
  course,
  index = 0,
}: {
  course: Course;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.06,
        ease: EASE_OUT_STRONG,
      }}
      className="group flex flex-col overflow-hidden rounded-md bg-white transition-transform duration-300 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-ink">
              {course.title}
            </h3>
            <span className="mt-1 shrink-0 text-xs font-medium uppercase tracking-[0.06em] text-ink/40">
              {course.duration}
            </span>
          </div>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
            {course.tagline}
          </p>
        </div>

        <div className="mt-6 space-y-2 border-t border-slate-mist pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink/50">Physical</span>
            <span className="flex items-baseline gap-1.5">
              <span className="text-ink/40 line-through">
                {formatNaira(course.physical.original)}
              </span>
              <span className="font-semibold text-royal-blue">
                {formatNaira(course.physical.price)}
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink/50">Online</span>
            <span className="flex items-baseline gap-1.5">
              <span className="text-ink/40 line-through">
                {formatNaira(course.online.original)}
              </span>
              <span className="font-semibold text-royal-blue">
                {formatNaira(course.online.price)}
              </span>
            </span>
          </div>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-md bg-royal-blue/10 px-4 py-2.5 text-sm font-semibold text-royal-blue transition-colors duration-150 hover:bg-royal-blue hover:text-white"
        >
          Learn More
          <ArrowRight
            size={16}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}
