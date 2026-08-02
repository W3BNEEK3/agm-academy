"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/courses";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

type Status = "idle" | "submitting" | "error";

const GLASS_CARD =
  "rounded-lg border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl";
const GLASS_FIELD =
  "mt-2 w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-signal-yellow";
const TILE_LABEL =
  "flex cursor-pointer items-center justify-center rounded-md border border-white/20 px-4 py-3 text-sm font-medium text-white transition-colors has-[:checked]:border-signal-yellow has-[:checked]:bg-signal-yellow/15 has-[:checked]:text-signal-yellow";

const COUNTRIES = ["Nigeria", "UK", "United States", "Ghana", "Kenya", "Canada", "Other"];

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
  "Other",
];

const EMPLOYMENT_STATUSES = [
  "Student", "Graduate", "NYSC Corper", "Working Professional (Employed)",
  "Self Employed", "Unemployed", "Other",
];

const EDUCATION_LEVELS = [
  "High School", "Degree", "Masters", "HND", "Diploma", "OND",
  "Mphil / PhD", "NCE", "Other",
];

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      gender: formData.get("gender"),
      country: formData.get("country"),
      stateCity: formData.get("stateCity"),
      employmentStatus: formData.get("employmentStatus"),
      educationLevel: formData.get("educationLevel"),
      course: formData.get("course"),
      format: formData.get("format"),
      priorExperience: formData.get("priorExperience"),
      jobPlacementInterest: formData.get("jobPlacementInterest"),
      agreedToTerms: formData.get("agreedToTerms") === "on",
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.authorizationUrl) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      window.location.href = data.authorizationUrl;
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
      className={`relative w-full max-w-md p-8 sm:p-10 ${GLASS_CARD}`}
    >
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
        Apply to AGM Academy.
      </h1>
      <p className="mt-2 text-base text-white/60">
        Fill this out and we'll be in touch to get you started.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-white/80">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={GLASS_FIELD}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={GLASS_FIELD}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Phone / WhatsApp number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="0801 234 5678"
            className={GLASS_FIELD}
          />
        </div>

        <div>
          <span className="text-sm font-medium text-white/80">Gender</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <label className={TILE_LABEL}>
              <input type="radio" name="gender" value="Male" required className="sr-only" />
              Male
            </label>
            <label className={TILE_LABEL}>
              <input type="radio" name="gender" value="Female" required className="sr-only" />
              Female
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="country" className="text-sm font-medium text-white/80">
            Country
          </label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className={`${GLASS_FIELD} [color-scheme:dark]`}
          >
            <option value="" disabled>
              Select your country
            </option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="stateCity" className="text-sm font-medium text-white/80">
            State / City
          </label>
          <select
            id="stateCity"
            name="stateCity"
            required
            defaultValue=""
            className={`${GLASS_FIELD} [color-scheme:dark]`}
          >
            <option value="" disabled>
              Select your state or city
            </option>
            {NIGERIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="employmentStatus" className="text-sm font-medium text-white/80">
            Current employment / study status
          </label>
          <select
            id="employmentStatus"
            name="employmentStatus"
            required
            defaultValue=""
            className={`${GLASS_FIELD} [color-scheme:dark]`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {EMPLOYMENT_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="educationLevel" className="text-sm font-medium text-white/80">
            Educational level
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            required
            defaultValue=""
            className={`${GLASS_FIELD} [color-scheme:dark]`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {EDUCATION_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="course" className="text-sm font-medium text-white/80">
            Course
          </label>
          <select
            id="course"
            name="course"
            required
            defaultValue=""
            className={`${GLASS_FIELD} [color-scheme:dark]`}
          >
            <option value="" disabled>
              Select a course
            </option>
            {courses.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="text-sm font-medium text-white/80">Format</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <label className={TILE_LABEL}>
              <input
                type="radio"
                name="format"
                value="Physical"
                required
                className="sr-only"
              />
              Physical
            </label>
            <label className={TILE_LABEL}>
              <input
                type="radio"
                name="format"
                value="Online"
                required
                className="sr-only"
              />
              Online
            </label>
          </div>
        </div>

        <div>
          <span className="text-sm font-medium text-white/80">
            Do you have any prior tech experience?
          </span>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <label className={TILE_LABEL}>
              <input type="radio" name="priorExperience" value="Yes" required className="sr-only" />
              Yes
            </label>
            <label className={TILE_LABEL}>
              <input type="radio" name="priorExperience" value="No" required className="sr-only" />
              No
            </label>
            <label className={TILE_LABEL}>
              <input type="radio" name="priorExperience" value="Maybe" required className="sr-only" />
              Maybe
            </label>
          </div>
        </div>

        <div>
          <span className="text-sm font-medium text-white/80">
            Would you like help with job placement after completing your course?
          </span>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <label className={TILE_LABEL}>
              <input type="radio" name="jobPlacementInterest" value="Yes" required className="sr-only" />
              Yes
            </label>
            <label className={TILE_LABEL}>
              <input type="radio" name="jobPlacementInterest" value="No" required className="sr-only" />
              No
            </label>
            <label className={TILE_LABEL}>
              <input type="radio" name="jobPlacementInterest" value="Maybe" required className="sr-only" />
              Maybe
            </label>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-white/70">
          <input
            type="checkbox"
            name="agreedToTerms"
            required
            className="mt-0.5 size-4 shrink-0 rounded-sm border-white/30 bg-white/10 accent-signal-yellow"
          />
          I agree to the terms and conditions of enrollment.
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-signal-yellow px-6 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97] disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit Application"}
          {status !== "submitting" && <ArrowRight size={18} />}
        </button>

        {status === "error" && (
          <p className="rounded-md bg-white/10 px-4 py-3 text-sm text-white/80">
            {errorMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
}
