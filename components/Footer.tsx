import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import { featuredCourses } from "@/lib/courses";

const QUICK_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
  { label: "Apply Now", href: "/apply" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-royal-blue px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/agm-academy-main-logo.png"
              alt="AGM Academy"
              width={168}
              height={30}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Tech and digital skills for complete beginners, online and
              in person, with real mentorship along the way.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-white/50">
              Courses
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {featuredCourses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href="/courses"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-white/50">
              Quick links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-white/50">
              Follow along
            </h3>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white/70 transition-colors duration-150 hover:bg-white/15 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            © {year} AGM Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
