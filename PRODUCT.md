# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Complete beginners with no prior technical experience who want to build a tech/digital-skills career. Same target learner as TS Academy (tsacademyonline.com): career-changers, not people who already code or design.

## Product Purpose

AGM Academy teaches tech and digital skills (development, design, data, cybersecurity, digital marketing, etc.) through both physical (in-person) and online classes, taking beginners from zero to job-ready.

## Positioning

Differentiates from TS Academy and similar bootcamps primarily on stronger mentorship/support and outcomes (completion, job placement) rather than price alone. This claim must be backed by real evidence as it becomes available — do not invent completion rates, placement stats, or testimonials to support it.

## Operating Context

- Two delivery formats: physical (in-person) and online classes.
- Physical classes support installment payment plans; online classes are paid in full (unless the user says otherwise later).
- Pricing is presented as a slash: original price struck through, discounted price shown live.
- Enrollment flow: learner fills out AGM Academy's own `/apply` form. Fields mirror the earlier AGMTechPlus Google Form used for cohort intake: full name, email, phone, gender, country, state/city, current employment/study status, educational level, course, format, prior tech experience, interest in job-placement support, and a required terms-and-conditions agreement. `app/api/apply/route.ts` looks up the price server-side from `lib/courses.ts` (never trusts a client-submitted amount), inserts a pending row into a local SQLite database (`data/registrations.db`), and starts a Paystack transaction (`lib/paystack.ts`), redirecting the learner to Paystack's hosted checkout. Paystack redirects back to `/apply/callback`, which verifies the transaction server-side with the Paystack secret key, marks the registration paid/failed, and only then appends a row to the CSV file (`data/registrations.csv`) — so the CSV only ever contains confirmed, paid applications. No Google Form, no cloud database, no third-party form builder; this relies on the site running on persistent (non-serverless) hosting. Payment currently covers the full amount only; installment arrangements for physical classes are still handled manually/offline, not through Paystack. Staff still manually create the LMS account from a paid submission; there is no automated signup-to-LMS pipeline yet.
- Login (v1): placeholder UI only, not wired to any auth backend. Real LMS login integration is planned for a later phase.
- Scholarship: not live yet — surface should show a "Coming Soon" placeholder rather than a working application flow.

## Capabilities and Constraints

- Course list (real, confirmed via the user's own price-list document, replacing the earlier 15-course TS-Academy-mirrored placeholder list): Full Stack Development, Cyber Security, Graphic Design, Social Media Management, Digital Marketing, AI Automation, Product Design (UI/UX), Data Analysis. Each has real Physical and Online pricing (original + discounted) and a duration — see `lib/courses.ts`. Taglines/descriptions are original AGM Academy copy.
- Testimonials: illustrative (fabricated) student quotes, explicitly authorized by the user after being told this reverses the earlier "no fake testimonials" rule. Names are invented; avatars are initials only (never a real stranger's photo presented as a real student, to avoid misrepresenting an actual person). Shared from `lib/testimonials.ts` — the homepage shows an auto-advancing glassmorphism slider (one at a time), the dedicated `/testimonials` page shows the full set as a grid. Both use the same source data, so they stay in sync.
- `/testimonials` also has WhatsApp-chat and Facebook-comment styled mockups (`WhatsAppTestimonialCard`, `FacebookTestimonialCard`, data in `WHATSAPP_TESTIMONIALS`/`FACEBOOK_TESTIMONIALS` in `lib/testimonials.ts`). The user was explicitly told this is a stronger form of fabricated "evidence" than a quote card (it's designed to look like a captured screenshot of a real conversation/post) and chose to proceed with realistic platform-chrome mockups anyway. Same mitigations as the quote testimonials apply: invented names, no real people's photos, initials/color-circle avatars only, and no actual WhatsApp/Facebook logo assets used.
- No real hiring-partner list exists yet. Do not fabricate numbers the way TS Academy's site does (e.g. "20,000+ learners") — use clear placeholders or omit until real content arrives. Exception: "Trusted by 200+ students" on `/testimonials` is a real, user-confirmed figure (not fabricated like the testimonial content above it), rendered with a decorative initials-only avatar strip (`AVATAR_STRIP` in `app/testimonials/page.tsx`) — no real photos.
- Sign-up routes to the site's own `/apply` form (see Operating Context) — not a Google Form, not a custom account-creation/auth flow.
- Imagery: no real photos (students, classrooms, instructors) exist yet — use high-quality stock photography pulled from online sources for hero/course/about sections until real photos are supplied. Stock imagery is acceptable here (unlike fake testimonials/stats) since it isn't claimed to depict real AGM Academy people or events.

## Brand Commitments

- Name: AGM Academy.
- Logo: navbar and footer use `public/images/agm-academy-main-logo.png` (the current "AGM Academy" mark — replaced the earlier "AGM Tech Pluse" parent-brand logo). No dedicated white/reversed file exists yet; the footer applies a CSS invert as a stopgap on its Royal Blue background — swap in a real white file when available.
- Brand colors: Sky Blue `#56a0d7`, Royal Blue `#2453a5`, Yellow `#fcc70e`.
- Explicit brief: the site must not read as a generic bootcamp template like TS Academy — design bar is "excellent," distinct, and intentional, not a reskin.

## Evidence on Hand

- Logo files: `public/images/` (six variants, see Brand Commitments).
- Color palette: confirmed hex values above.
- Course list, pricing, and copy: pending from user.
- Testimonials, student stats, hiring partners: none yet — absence is real, not a gap to fill with placeholders that look like real data.

## Product Principles

1. Beginner-first: assume zero prior experience in every explanation of the offering.
2. Access over gatekeeping: physical + online formats, installment plans for physical classes.
3. Real proof only: never fabricate stats, testimonials, or partner logos; use honest placeholders or omit.
4. Distinct craft: explicitly rejects the generic-bootcamp-template look; design should feel excellent and intentional.
5. Outcomes/support-led differentiation from competitors, substantiated by real evidence as it arrives, not asserted numbers.

## Accessibility & Inclusion

No product-specific requirement established yet.
