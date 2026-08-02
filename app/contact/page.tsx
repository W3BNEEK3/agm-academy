import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/SocialIcons";
import {
  CONTACT_EMAIL,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER_DISPLAY,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | AGM Academy",
  description: "Get in touch with AGM Academy to apply or ask a question.",
};

const DIRECT_CONTACTS = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: WHATSAPP_NUMBER_DISPLAY,
    href: WHATSAPP_LINK,
    icon: WhatsAppIcon,
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
];

export default function ContactPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="min-w-0 flex-1 bg-white px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
              Get in touch.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 sm:text-xl">
              Whether you're ready to apply or still deciding, here's how
              to reach us.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-md bg-royal-blue p-8 sm:p-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                Ready to enroll?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                Apply now and we'll walk you through choosing a course, a
                format, and a payment plan that works for you.
              </p>
              <a
                href="/apply"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-signal-yellow px-6 py-3.5 text-base font-semibold text-ink transition-transform duration-150 active:scale-[0.97]"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-md bg-slate-mist p-8 sm:p-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink sm:text-2xl">
                Have a question first?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                Reach us directly, or message us on social media.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {DIRECT_CONTACTS.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "WhatsApp" ? "_blank" : undefined}
                    rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-md bg-white px-4 py-3.5 transition-colors duration-150 hover:bg-white/70"
                  >
                    <Icon size={19} className="shrink-0 text-royal-blue" />
                    <span className="text-[0.95rem] font-medium text-ink">
                      {value}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-ink/60 transition-colors duration-150 hover:text-royal-blue"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
