# Prompt for Claude Code — Paste this as your first message

Copy everything below the line into your Claude Code terminal (run `claude` from inside
the `dr-salil-bhargava` project folder first, so it has full repo context).

---

## Role

You are a senior full-stack React developer and UX psychologist working together in one
person. You already have this repository open. Read `src/data/site.ts`, `src/App.tsx`,
and every file in `src/components/` before changing anything — this is an **upgrade**,
not a rebuild. Preserve the existing architecture: the single-source-of-truth data file,
the `Reveal` scroll-animation wrapper, the `SpiroDivider` motif, the pine/teal/brass
design tokens in `tailwind.config.js`, and the `animate-breathe` keyframe that already
exists there. You're extending a working, deployed-ready site, not starting over.

## The Brief

This is the website for Dr. Salil Bhargava, a pulmonologist with 28+ years of experience
and Professor & Head of Respiratory Medicine at MGM Medical College, Indore. The current
site is clean, correct, and accessible — but it reads like a brochure. I want it to feel
alive, and I want a visitor to walk away trusting this doctor more than any other doctor's
website they've seen.

**The core psychological shift I want:** right now, the site presents sections and waits
for the user to read them. I want the site to *unfold* in front of the user — content
should arrive as they scroll, contextually, so they feel guided rather than searching.
Think of it as the difference between handing someone a brochure and walking them through
a clinic yourself, pointing things out as they matter.

## Core Philosophy — apply these deliberately, don't just decorate

1. **Narrative arc, not a stack of sections.** Restructure the scroll journey so it reads
   like a story: the visitor's problem (breathlessness, a persistent cough, a sleepless
   night from snoring) → the guide who can solve it (Dr. Bhargava, his authority) → the
   plan (services, presented as a path, not a catalogue) → proof (experience, research,
   real patient trust) → an easy next step (booking). Every section should feel like it's
   answering the question the *previous* section raised.

2. **Progressive disclosure over static walls of text.** Nobody wants to read six
   qualification bullet points at once. Reveal detail as attention arrives — on scroll,
   on hover, on tap — so the page always feels light, never like homework.

3. **Real authority signals, tightly clustered near the ask.** Right before the
   appointment form, and near the hero, cluster: years of experience, current academic
   title, patient count, and (once I provide it) his Madhya Pradesh Medical Council
   registration number. **Do not invent a registration number — use a clearly marked
   placeholder (`[MPMC Reg. No. — TBD]`) until I supply the real one.** A fabricated
   number on a medical site is a serious integrity problem, not a placeholder detail.

4. **Reciprocity before the ask.** Give the visitor something useful for free before
   asking for their contact details — a free interactive tool, not just a form. This is
   the single highest-leverage trust move on the page. See "Interactive Trust Tools" below.

5. **A sense of control reduces anxiety.** Medical sites can feel like they're funneling
   you toward a sale. Counter that with visible progress (where am I in this page?),
   predictable structure, and a clear "what happens when I book" preview so nothing about
   visiting the clinic feels unknown.

6. **The isolation effect.** One moment on the page should look and feel nothing like the
   rest — that's the moment people remember and screenshot. The interactive breathing
   exercise (below) is designed to be that moment.

7. **No dark patterns, ever.** No fake countdown timers, no "3 people are viewing this
   right now," no fake scarcity, no auto-playing sound, no pre-checked boxes, no forced
   continuity. Every persuasive technique here works because it's *true* and *useful* —
   that's what makes it trustworthy instead of manipulative. If a technique only works
   because the visitor doesn't notice it, don't build it.

## Signature Visual System — "The Breathing Lung"

Build an ambient, anatomically-simple lung/bronchial-tree SVG (matching the existing
favicon/monogram line style — teal strokes, brass accent node) that lives as a persistent
background presence, not a one-off hero decoration:

- It sits fixed/absolute behind the hero at low opacity, inhaling and exhaling on the
  existing ~5.5s cadence (reuse `animate-breathe`, don't reinvent the timing).
- As the user scrolls, tie its scale/opacity subtly to scroll position using Framer
  Motion's `useScroll` + `useTransform` (already have `framer-motion` installed) — it
  should feel like the page itself is breathing with the content, not like a video
  playing in the background. Keep the effect subtle enough that it never competes with
  text for attention.
- Reprise it, smaller and quieter, near the contact section — bookending the page with
  the same breath it opened with.
- Build it in SVG/CSS, not canvas or WebGL — keep it cheap. This must not cost meaningful
  paint/layout time on a mid-range phone.
- Full `prefers-reduced-motion` compliance — falls back to a static, still image.

## Priority 1 — Structural & Flow Changes

- **Rewrite the section order and transitions as a narrative arc** per the philosophy
  above. Section backgrounds should transition smoothly into each other (gradient/color
  interpolation on scroll) rather than hard-cutting between blocks.
- **Sticky mobile action bar**: a slim, persistent bottom bar on mobile with Call,
  WhatsApp, and Book Appointment — mobile visitors won't scroll back up to the nav.
- **Scroll progress indicator** styled as a subtle side-rail of dots or a thin filling
  line — gives the visitor a sense of "how much is left," reducing scroll fatigue.
- **Count-up numbers** in the stats band — animate `28+`, `50k+` etc. counting up when
  they enter the viewport (respect reduced-motion — show final value instantly instead).
- **Contextual micro-CTAs**: under relevant expertise/service cards, a small
  "Concerned about this? Book a consult →" link — don't make the visitor scroll all the
  way back to one generic CTA when they're already interested in a specific symptom.
- **Break grid monotony**: vary card sizes/layout rhythm across sections (a bento-style
  asymmetric grid for one section is enough) so no two consecutive sections look
  structurally identical.

## Priority 2 — Interactive Trust Tools (the reciprocity layer)

Build these as real, working, lightweight React components — not gimmicks:

1. **Symptom-to-Specialist mini triage.** A few tappable symptom chips (persistent cough,
   breathlessness, snoring/sleep issues, wheeze/allergy, chronic condition follow-up).
   Selecting one surfaces the matching expertise/service content and a tailored one-line
   message ("Chronic cough that hasn't resolved is exactly what Dr. Bhargava specializes
   in — here's what a first visit looks like"). This is the single highest-value feature
   in this brief: it makes the visitor feel personally understood before they've spoken
   to anyone.

2. **Interactive breathing exercise widget.** A simple guided box-breathing or 4-7-8
   pacer — an expanding/contracting circle with text cues ("Breathe in… hold… out…").
   This is the isolation-effect moment: thematically perfect for a pulmonologist, genuinely
   useful, calming, and shareable. Keep it self-contained, muted by default, no audio
   unless the visitor explicitly opts in.

3. **"Your First Visit" expectation timeline.** A short 3–4 step visual walkthrough of
   what actually happens when someone books (greeted → history taken → assessment →
   personalized plan). Removing fear of the unknown is one of the highest-ROI trust moves
   available on a medical site.

4. **(Stretch goal, only if time allows) Indore air-quality context widget.** Since he's a
   Clean Air Champion, a small live-AQI card tied to Indore specifically, with a plain-
   language health note. Default to Indore — **never prompt for geolocation permission**,
   that's friction and a trust cost for near-zero benefit here. If no API key is
   configured, fall back to static, clearly-dated example content rather than breaking.

## Priority 3 — Delight & Micro-interactions (polish, do these last)

- Hero portrait + lung graphic on subtle parallax depth layers while scrolling.
- Hover states that feel alive: gentle lift + shadow bloom on cards, a soft magnetic pull
  on the primary CTA button.
- The `SpiroDivider` becomes hoverable — on desktop hover, show a tooltip explaining what
  a flow-volume curve measures. Small, but it quietly demonstrates expertise instead of
  just claiming it.
- Optional: an audio player slot for a short (~20s) personal welcome message *if and when
  I provide a real recording from Dr. Bhargava*. Do not synthesize or fake his voice —
  scaffold the component hidden/inert until real audio is supplied.

## Non-Negotiable Guardrails

- Stay on the existing stack — React 18 + Vite + TS + Tailwind + Framer Motion + Lucide.
  Don't introduce a new animation or state library.
- Every animation must have a `prefers-reduced-motion` fallback — this is already the
  pattern in `index.css` and `Reveal.tsx`; follow it.
- Nothing here may regress accessibility: keyboard operability, visible focus states, and
  `aria` labeling on every new interactive element, including the triage tool and
  breathing widget.
- Keep the bundle lean — check `npm run build` output size after each phase; if a change
  meaningfully bloats the JS, find a lighter approach before moving on.
- All copy, credentials, and numbers still live in `src/data/site.ts` — don't hardcode new
  strings into components.
- No dark patterns (see philosophy #7). If you're ever unsure whether a technique crosses
  the line into manipulation, don't build it — ask me instead.

## How to Work

1. First, read the existing codebase and give me a short plan: section-by-section order
   for the new narrative arc, and which Priority 1/2/3 items you'll tackle in what order.
2. Implement in phases — Priority 1 (structure) → Priority 2 (interactive tools) →
   Priority 3 (polish). Run `npm run build` after each phase and fix anything that breaks
   before moving on.
3. After each phase, briefly tell me what changed and flag anything that needs real
   content from me (his registration number, a real welcome-message recording, an AQI API
   key, real testimonials) rather than guessing or inventing it.
4. Check mobile responsiveness and reduced-motion behavior at every phase, not just at
   the end.

## Definition of Done

The site should feel like it's actively helping the visitor understand their own
symptoms and next step — not just describing the doctor. Someone landing on this page
with a persistent cough should leave feeling like this specific doctor already
understands their specific problem, and that booking is the obvious, low-risk next step.
