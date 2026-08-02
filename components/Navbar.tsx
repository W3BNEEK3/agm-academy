"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
];

const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_8px_24px_rgba(15,23,42,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0" aria-label="AGM Academy home">
          <Image
            src="/images/agm-academy-main-logo.png"
            alt="AGM Academy"
            width={168}
            height={30}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-royal-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-royal-blue"
          >
            Login
          </Link>
          <Link
            href="/apply"
            className="rounded-md bg-signal-yellow px-5 py-2.5 text-[0.95rem] font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT_STRONG }}
            className="overflow-hidden border-t border-slate-mist md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-ink/80 hover:bg-slate-mist"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-ink/80 hover:bg-slate-mist"
              >
                Login
              </Link>
              <Link
                href="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-md bg-signal-yellow px-3 py-3 text-center text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
              >
                Apply Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
