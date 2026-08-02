"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

const GLASS_CARD =
  "rounded-lg border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl";
const GLASS_FIELD =
  "mt-2 w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-signal-yellow";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
      className={`relative w-full max-w-md p-8 sm:p-10 ${GLASS_CARD}`}
    >
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
        Welcome back.
      </h1>
      <p className="mt-2 text-base text-white/60">
        Log in to your AGM Academy student account.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
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
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-white/80">
              Password
            </label>
            <span className="text-sm text-white/50">Forgot password?</span>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className={GLASS_FIELD}
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-signal-yellow px-6 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
        >
          Log In
          <ArrowRight size={18} />
        </button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_STRONG }}
            className="rounded-md bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/80"
          >
            Login isn&apos;t connected yet. We&apos;re still wiring this up
            to our learning platform. In the meantime,{" "}
            <Link href="/apply" className="font-medium text-signal-yellow">
              apply here
            </Link>{" "}
            to get started.
          </motion.p>
        )}
      </form>

      <p className="mt-7 text-center text-sm text-white/60">
        Don&apos;t have an account?{" "}
        <Link href="/apply" className="font-medium text-signal-yellow">
          Apply to AGM Academy
        </Link>
      </p>
    </motion.div>
  );
}
