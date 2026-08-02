<!-- SEED: established with the user before implementation; re-run /impeccable document once there's real built code to capture the actual tokens and components. -->

---
name: AGM Academy
description: A premium, restrained tech-academy site that proves credibility through calm authority, not hype.
colors:
  royal-blue: "#2453a5"
  sky-blue: "#56a0d7"
  signal-yellow: "#fcc70e"
  ink: "#0f172a"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Clash Display, General Sans, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.02em"
    lineHeight: 1.05
  body:
    fontFamily: "General Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
spacing:
  section-y: "clamp(4rem, 8vw, 8rem)"
  gutter: "clamp(1.5rem, 5vw, 3rem)"
---

# Design System: AGM Academy

## Overview

**Creative North Star: "The Confident Briefing"**

AGM Academy reads like a well-run studio briefing, not a bootcamp flyer: one clear claim per screen, generous air around every idea, and color used with intent rather than decoration. Where the category default (see: TS Academy) reaches for wall-to-wall gradient cards, emoji-adjacent icon grids, and a scoreboard of unverified stats shouting for attention, this system earns attention through restraint — deep Royal Blue anchoring the moments that matter, Signal Yellow rationed to the single action that matters most on any given screen, and a white canvas doing the quiet work of making everything else legible.

This is explicitly a rejection of the generic ed-tech template: no rainbow card walls, no oversized rounded emoji-in-a-circle icons, no manufactured urgency counters. Confidence here comes from clarity and craft, not noise.

**Key Characteristics:**
- Committed color strategy: Royal Blue owns whole regions (hero, footer, key dividers), not just accents on a neutral ground.
- Signal Yellow is a scarce resource — one primary action per screen, never a background fill.
- Clash Display headlines set large and tight; General Sans carries every paragraph, label, and form.
- Flat, tonal depth — no drop-shadow-heavy cards. Depth comes from color blocking and layering, not elevation.
- Photography-led where proof is needed; never generic three-icon "why choose us" tiles as the default reflex.

## Colors

Three brand hues plus a deep ink neutral and a pure paper ground — a Committed strategy, not a Full Palette: Royal Blue is the dominant field color, Sky Blue is its lighter echo, Yellow is rationed to single moments of action.

### Primary
- **Sky Blue** (`#56a0d7`): Owns the hero — the brighter, more energetic face of the brand, deployed as a full-bleed diagonal field (blending toward Royal Blue and Royal Blue Deep where it meets text, to hold contrast). This is the color a visitor meets first.

### Secondary
- **Royal Blue** (`#2453a5`) / **Royal Blue Deep** (`#1a3f80`): The grounding half of the hero gradient, plus footer, section dividers, and the sticky-nav's active/hover state. Carries the "authority" register — used wherever text needs guaranteed contrast against a blue field, and wherever a section wants to feel weightier/calmer than the hero.

### Tertiary
- **Signal Yellow** (`#fcc70e`): The one-voice action color. Reserved for exactly one primary call-to-action per screen (the "Apply Now" / "Enroll" button, a single highlighted word in a headline). Never a section background, never a card fill, never used more than once above the fold.

### Neutral
- **Ink** (`#0f172a`): Primary body text color on white/paper backgrounds; near-black rather than pure black for a less harsh, more premium contrast.
- **Paper** (`#ffffff`): The dominant canvas for content sections (courses, FAQ, about). Content lives on white; authority lives on Royal Blue.
- **Slate mist** (`#eef2f7`, a very light blue-grey): Subtle section separators and card backgrounds on the white canvas, used instead of borders or shadows where a soft division is needed.

### Named Rules
**The One Voice Rule.** Signal Yellow appears at most once per viewport as a filled shape (button/badge). If a second yellow element seems necessary, it should be a thin accent (underline, single icon stroke) — never a second fill.

**The Committed Field Rule.** Royal Blue and Sky Blue are deployed as whole-section backgrounds (hero, footer, CTA bands), never as a small accent scattered over white. If either shows up as a fill, it owns the region it's in — the hero's gradient runs Sky Blue to Royal Blue Deep, with a darkening scrim behind any text to hold contrast.

## Typography

**Display Font:** Clash Display (with system sans-serif fallback)
**Body Font:** General Sans (with system sans-serif fallback)

**Character:** Clash Display is geometric and confident with distinctive, slightly unconventional letterforms — it carries the "premium, not generic" brief in headlines alone. General Sans is a quiet, highly legible grotesk that recedes so the display face can lead; same foundry family, so the pairing reads as one coherent voice rather than two competing ones.

### Hierarchy
- **Display** (Clash Display, 600, `clamp(2.75rem, 6vw, 5rem)`, line-height 1.02, tracking -0.02em): Hero headline only. One per page above the fold.
- **Headline** (Clash Display, 600, `clamp(2rem, 4vw, 3rem)`, line-height 1.08): Section titles ("Why AGM Academy", "Our Courses", etc.).
- **Title** (Clash Display, 500, `1.375rem–1.75rem`, line-height 1.2): Course card titles, sub-section headers.
- **Body** (General Sans, 400, `1rem–1.125rem`, line-height 1.6, max 68ch): Paragraphs, descriptions, FAQ answers.
- **Label** (General Sans, 500, `0.8125rem`, letter-spacing 0.04em, uppercase): Nav links, eyebrow tags above headlines, badge text.

### Named Rules
**The Single Display Rule.** Only one element per screen uses the Display size. Everything else steps down to Headline or Title — this keeps the "one clear claim per screen" promise from the North Star.

## Layout

Editorial, asymmetric, generous. Content sections default to a `max-w-7xl` container with `clamp(1.5rem, 5vw, 3rem)` side gutters. Section vertical rhythm uses one scale: `clamp(4rem, 8vw, 8rem)` between major sections — more space above a heading than below it, so headlines feel like they're arriving, not crammed against the prior section.

The hero and any full-bleed Royal Blue bands break the container to true full-bleed (100vw), with an inner content container matching the standard max-width — this is what makes the "committed field" color strategy read as intentional rather than accidental.

Grids favor asymmetric splits (e.g. 3/5 + 2/5 for hero text vs. image) over centered, symmetric hero clichés. Course listings use a clean grid (2–3 columns desktop, 1 mobile) on the white canvas — no card-shadow stacking; separation comes from generous gutter space and the Slate Mist background, not borders.

## Elevation & Depth

Flat by design. No ambient drop-shadows on cards or buttons — depth comes from color layering (Royal Blue fields against Paper fields) and occasional subtle tonal backgrounds (Slate Mist), not shadow stacking. This keeps the system feeling architectural and premium rather than "dashboard software."

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only permitted shadow is a very soft, tight ambient shadow (`0 8px 24px rgba(15, 23, 42, 0.08)`) on floating/sticky elements (the nav on scroll, a modal) — never on static content cards.

## Shapes

Corners are gently rounded, not bubbly: `10px` (`rounded.md`) is the default for buttons, inputs, and cards; `16px` (`rounded.lg`) for larger image/media containers; `6px` (`rounded.sm`) for small tags/badges. Nothing uses full-pill (`9999px`) radius except badges/tags — buttons stay rectangular-with-rounded-corners to avoid the generic "SaaS pill button" look every bootcamp template shares.

## Do's and Don'ts

### Do:
- **Do** let Royal Blue own entire sections (hero, footer, CTA bands) rather than sprinkling it as text-color accents.
- **Do** keep exactly one Signal Yellow filled action per screen.
- **Do** use real, specific stock photography of learners/technology when a section needs proof or humanity — never generic 3D-render icon illustrations.
- **Do** set headlines in Clash Display at the weights specified (500/600); never render body copy in Clash Display.
- **Do** give motion a reason (entrance, state change, feedback) per the animation guidance already established for this project — no decorative animation on high-frequency actions.

### Don't:
- **Don't** build a rainbow card wall (each course card a different bright color) — this is the single most recognizable trait of the generic bootcamp-template look this project explicitly rejects.
- **Don't** use oversized circular emoji/gradient icon tiles for "why choose us" style sections.
- **Don't** display fabricated stats, testimonials, or partner logos — placeholders or omission only, per PRODUCT.md.
- **Don't** use drop-shadows on static cards, or `scale(0)` entrance animations (start from `scale(0.95)` minimum with opacity).
- **Don't** default to a centered, symmetric hero layout — this system's compositions are asymmetric by rule.
