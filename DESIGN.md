# Cabs&More — Design System

A single source of truth for the visual language of the Cabs&More website and app landing experience. Use this document when building new pages, sections, or components so everything stays consistent.

---

## 1. Brand

**Cabs&More** is Kenya's all-in-one super app: rides, food & grocery delivery, parcels, home services, health consultations, shopping, and more.

- **Personality:** friendly, fast, trustworthy, local.
- **Voice:** clear, warm, benefit-led. Short sentences. British/Kenyan English.
- **Logo:** `public/images/logo-mark.svg` — a four-colour pinwheel (red, blue, green, yellow) with white glyphs for ride, tasks, repairs, and food. Pair it with the `Cabs&More.` wordmark in the `Logo` component: mixed-case Source Sans Pro 800, `tracking-tight`, `#0B1F14` with a flush `#26C165` period.

Logo palette (use sparingly, mainly in the logo and small accents):

| Color | Hex |
| --- | --- |
| Red | `#E63B2E` |
| Blue | `#1F8FE8` |
| Green | `#2DAA5F` |
| Yellow | `#FFB81C` |

---

## 2. Colour

### Core palette

| Token | Hex | Tailwind | Usage |
| --- | --- | --- | --- |
| Brand green | `#26C165` | `lightgreen` | Primary actions, links, icons, highlights |
| Brand green (hover) | `#1FA855` | `hover:bg-[#1fa855]` | Hover/pressed state for primary buttons |
| Mint | `#D4F5E3` | `from-[#D4F5E3]` | Hero background, soft brand surfaces |
| Forest | `#0B1F14` | `bg-[#0B1F14]` | Footer background, dark contrast sections |
| Ink | `#111827` | `text-[#111827]` | Headings, card titles |
| Heading black | `#000000` | `titledark` | Strong headings |
| Body | `#666666` | body default | Paragraph copy |
| Muted | `#6b7280` | `text-[#6b7280]` | Secondary copy, captions |
| Muted 2 | `#616161` | `titledark2` | Footer / subtle text |
| Border | `#e5e7eb` | `border-neutral-200` | Card and section borders |
| Surface | `#ffffff` | `bg-white` | Cards, sections |
| Surface alt | `#fafafa` | `bg-[#FAFAFA]` | Alternating section background |
| Surface muted | `#f5f5f5` | `stonelight` | Chips, image placeholders |
| Surface warm | `#FBFAFA` | `stonelighter` | Subtle warm surfaces |

### Semantic shadcn tokens

Defined in `app/globals.css` as HSL CSS variables and wired in `tailwind.config.js`:

`--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--radius`.

Use these for shadcn/ui primitives (buttons, accordion, dropdown, etc.). Use the brand hex tokens above for bespoke sections.

### Colour rules

- One primary accent per section: **brand green**.
- Avoid pure black for large text; use `#111827` for headings and `#374151` / `#6b7280` for body.
- Green is for actions and emphasis, never for long paragraphs.
- Maintain WCAG AA contrast: `#26C165` on white is fine for large text and icons, but use `#1b7f45` for small green text.

---

## 3. Typography

Font: **Source Sans Pro** (`@fontsource/source-sans-pro`, set in `tailwind.config.js` as `font-sans`).

| Level | Size | Weight | Line height | Usage |
| --- | --- | --- | --- | --- |
| Display / H1 | `40px` mobile → `62px` desktop (`text-[40px] sm:text-[52px] lg:text-[62px]`) | 700 | `1.08` | Hero headline only |
| H2 | `32px` → `40px` (`text-[32px] md:text-[40px]`) | 700 | `1.1–1.2` | Section titles |
| H3 | `19–20px` | 700 | `1.3` | Card titles |
| Eyebrow | `12px` | 700 | — | Uppercase, `tracking-[0.18em]`, brand green |
| Body large | `17–20px` | 400–500 | `1.6` | Section intros, hero subhead |
| Body | `15–16px` | 400 | `1.6` | Default copy |
| Caption | `13px` | 500 | `1.4` | Meta, trust points |

Rules:

- Sentence case for headings and card titles. Avoid ALL CAPS except eyebrows.
- Keep H2 titles short (2–5 words).
- Body copy max width: `max-w-xl` (hero) / `max-w-2xl` (section intros).
- Use curly apostrophes in prose (`Kenya’s`, `you’re`) where practical.

---

## 4. Layout & spacing

- **Container:** `mx-auto w-full max-w-[1140px] px-4`.
- **Section padding:** `py-16 md:py-24` (64px mobile / 96px desktop).
- **Grid gaps:** `gap-6` (24px) standard; `gap-10`/`gap-12` for larger separations.
- **Section rhythm:** alternate backgrounds to separate content:
  1. Hero — mint gradient
  2. Trust bar — white with top/bottom border
  3. Services — white
  4. How it works — `#FAFAFA`
  5. Why Cabs&More — white
  6. Partner CTA — `#FAFAFA`
  7. FAQ — white
  8. Final CTA — brand green gradient
- **Responsive grids:**
  - 3-col: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`
  - 4-col: `grid gap-6 sm:grid-cols-2 lg:grid-cols-4`
  - 2-col split: `lg:grid-cols-[0.8fr_1.2fr]`

---

## 5. Radius

| Token | Value | Usage |
| --- | --- | --- |
| `rounded-xl` | 12px | Icon tiles, app-store buttons, inputs |
| `rounded-2xl` | 16px | Cards, image panels, feature tiles |
| `rounded-full` | 999px | Primary buttons, pills, badges, avatars |
| `rounded-md` | `var(--radius) - 2px` | shadcn inputs/selects |

Keep radii consistent within a component: a `rounded-2xl` card should contain `rounded-xl` icon tiles.

---

## 6. Elevation

| Level | Class | Usage |
| --- | --- | --- |
| Flat | `border border-neutral-200` | Default cards |
| Soft | `shadow-sm` | Resting cards |
| Raised | `hover:shadow-lg` / `hover:shadow-xl` | Card hover |
| Floating | `shadow-xl` | Dropdowns, floating hero card, modals |
| Glow | `shadow-[0_20px_60px_-20px_rgba(38,193,101,0.45)]` | Primary CTA emphasis (sparingly) |

Cards should lift on hover: `hover:-translate-y-1` plus `hover:shadow-lg`.

---

## 7. Components

### Buttons

**Primary**

```html
<a class="inline-flex items-center justify-center rounded-full bg-[#26C165] px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fa855]">
  Contact support
</a>
```

**Secondary / outline**

```html
<a class="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-2.5 text-[15px] font-semibold text-[#111827] transition-colors hover:border-[#26C165] hover:text-[#26C165]">
  Learn more
</a>
```

**App store buttons:** use `components/ActionButtons/GooglePlayButton.js` and `AppleStoreButton.js` (black `rounded-xl`, `min-w-[180px]`).

Rules:

- Primary buttons: `rounded-full`, brand green, white text, `font-semibold`.
- Never use green for destructive actions.
- Minimum touch target: 44×44px.

### Cards

```html
<div class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#26C165]/40 hover:shadow-lg">
  <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#26C165]">
    <!-- icon -->
  </span>
  <h3 class="mt-4 text-[19px] font-bold text-[#111827]">Title</h3>
  <p class="mt-2 text-[15px] leading-relaxed text-[#6b7280]">Description.</p>
</div>
```

- Image cards: `overflow-hidden`, image `aspect-[3/2]` or `aspect-[4/3]`, `object-cover`, subtle zoom on hover.
- Icon cards: 48px (`h-12 w-12`) rounded-xl tile with `bg-[#26C165]/10` and `text-[#26C165]`.

### Eyebrow / section header

Use `components/Home/SectionHeading.js`:

```jsx
<SectionHeading
  eyebrow="What we do"
  title="One app for your everyday"
  description="Optional supporting copy."
/>
```

- Eyebrow: 12px, 700, uppercase, `tracking-[0.18em]`, brand green.
- Title: H2, 32→40px, `#000000` / `titledark`.
- Description: 17→18px, `#666666`, `max-w-2xl`.

### Badges

```html
<span class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1b7f45] backdrop-blur">
  Ride
</span>
```

### Footer

The footer is a dark, high-contrast band that closes every page.

- Background: `bg-[#0B1F14]` with a 4px brand gradient accent on top (`from-[#26C165] via-[#FFB81C] to-[#26C165]`).
- Layout: 12-column grid on desktop (brand 4 / services 2 / company 2 / contact 4); 2-column on mobile with brand and contact spanning both.
- Text: white headings (`text-white/50` uppercase labels), `text-white/70` links and body.
- Social icons: 40px circles, `bg-white/10`, hover `bg-[#26C165]`.
- App store buttons: `variant="light"` (white background, black text) via `GooglePlayButton` / `AppleStoreButton`.
- Contact: phone, email, address, and opening hours with green icons.
- Bottom bar: copyright, "Made in Kenya", legal links, and payment badges (M-Pesa, Visa, Mastercard).

---

## 8. Imagery

- Photography: bright, natural, Kenyan/urban context. Prefer real product screenshots over stock where possible.
- How-it-works illustrations: 1600×1300 (16:13) PNGs in `/images/processWork/` (`how-1-sign-up.png`, `how-2-choose-a-service.png`, `how-3-book-and-pay.png`, `how-4-track-and-enjoy.png`); display in `aspect-[16/13]` rounded cards with `object-cover`.
- Partner images: polished 1200×800 illustrations in `/images/partnerCTA/` (`why-4-live-tracking.png` for drivers, `why-1-all-in-one.png` for stores, `why-3-verified-professionals.png` for service providers); 3:2 landscape, use `aspect-[3/2] object-cover`.
- Hero image: `/images/banners/banner-phones.jpg` (2133×2347 portrait card). Display at ~440px wide with `rounded-[2rem]`, a subtle ring, and a soft green/amber glow behind it.
- Blog thumbnails: `/images/featured-services/*.jpg`, cropped with `aspect-[16/10] object-cover` in cards and `aspect-[21/9]` on post covers.
- Always set meaningful `alt` text.
- Use `next/image` with `sizes`; reserve `priority` for the hero image only.

---

## 9. Motion

- Keep it subtle and purposeful.
- Hover lifts: `transition-all duration-300 hover:-translate-y-1`.
- Image zoom: `transition-transform duration-500 group-hover:scale-105`.
- Icon nudges: `group-hover:translate-x-1`.
- Existing CSS: `.animate-fadeIn` (0.5s fade + 20px rise).
- Respect `prefers-reduced-motion` for non-essential animation.
- Avoid autoplay carousels and parallax on the landing page.

---

## 10. Iconography

- Library: **lucide-react**.
- Sizes: 16px (`h-4 w-4`) inline, 20px (`h-5 w-5`) standard, 24px (`h-6 w-6`) feature tiles.
- Stroke width: default (2).
- Colour: brand green for emphasis, `#6b7280` for neutral, white on green.
- Use icons to reinforce meaning, not decorate every line.

---

## 11. Accessibility

- One `<h1>` per page (hero). Sections use `<h2>`, cards use `<h3>`.
- All images have descriptive `alt`.
- Icon-only buttons/links need `aria-label`.
- Focus states: rely on shadcn `focus-visible:ring` for primitives; add `focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26C165]` for custom controls.
- Colour contrast: body text `#666666` on white passes AA at 16px+; avoid `#9f9c9c` for meaningful text.
- Touch targets ≥ 44px.
- Accordions and dropdowns use Radix primitives for keyboard/ARIA support.

---

## 12. Do's and Don'ts

**Do**

- Use the 1140px container and 64/96px section rhythm consistently.
- Use brand green for one primary action per section.
- Keep copy short and benefit-led.
- Alternate white and `#FAFAFA` sections.
- Use `rounded-2xl` cards with `shadow-sm` and a green hover border.

**Don't**

- Don't invent stats or testimonials you can't back up.
- Don't use more than one bright accent colour in a section (logo colours are exempt).
- Don't use tiny green text on white; use `#1b7f45`.
- Don't use `pure black` for body copy or large headings; use `#111827`.
- Don't use hover-only interactions for primary navigation (must work on touch).
- Don't ship empty data sections; use static content or a graceful empty state.

---

## 13. Project map

| Concern | Location |
| --- | --- |
| Global CSS variables | `app/globals.css` |
| Tailwind tokens | `tailwind.config.js` |
| Header | `components/Header.js` |
| Footer | `components/Footer.js` |
| Logo | `components/Logo.js` |
| Home sections | `components/Home/*` |
| Section heading | `components/Home/SectionHeading.js` |
| Service card | `components/ServiceCard.js` |
| FAQ content | `data/faq.js` |
| Accordion primitive | `components/ui/accordion.jsx` |
| App store buttons | `components/ActionButtons/*` |

### Adding a new home section

1. Create `components/Home/YourSection.js`.
2. Use `mx-auto w-full max-w-[1140px] px-4` inside a `<section className="bg-white py-16 md:py-24">`.
3. Use `SectionHeading` for the title block.
4. Add it to `app/page.js` in the desired position.
5. Follow the background alternation order in section 4.

---

## 14. Home page composition

The landing page (`app/page.js`) is fully static and does not depend on Firestore or store data:

1. `Banner` — hero with app store buttons and trust points
2. `TrustBar` — four trust signals
3. `Services` — six core services
4. `ProcessWork` — four-step how-it-works
5. `WhyCabsAndMore` — six benefit cards
6. `PartnerCTA` — driver, store, and service-partner cards
7. `FAQ` — visible accordion (also powers the FAQ JSON-LD)
8. `FinalCTA` — download band

---

## 15. Blog

- Routes: `/blog` (listing) and `/blog/[slug]` (post), both statically generated from `data/blogPosts.js`.
- Components: `components/blog/PostCard.js` (card) and `components/blog/PostContent.js` (block renderer for `p`, `h2`, `h3`, `ul`, `ol`, `quote`, `callout`).
- Listing: mint-gradient hero → overlapping featured story → 3-column latest grid → dark CTA.
- Post: breadcrumb + category/title/excerpt/meta → 21:9 cover → 760px article body → author box + share row → related stories → CTA.
- Imagery: `/images/featured-services/*.jpg` cropped to `aspect-[16/10] object-cover` in cards; `aspect-[21/9]` on the post cover.
- SEO: `metadata` plus `JsonLd` (`blogSchema` on the listing; `articleSchema` + `breadcrumbSchema` on posts). Schema helpers live in `lib/seo/article.js`.
- Navigation: "Blog" is in the desktop header (active green via `cn`), the mobile drawer, and the footer Company links.

---

## 16. Contact page

- Route: `/contact-us` (static).
- Hero: mint gradient, "We're here to help", plus quick contact chips (phone, email, hours).
- Contact cards: 4-up grid (call, support email, business/partnerships, visit) with hover lift.
- Form: `components/ContactForm.js` — name, email, topic, message. On submit it opens a pre-filled `mailto:` (`support@cabsandmore.com`, or `info@cabsandmore.com` for Partnership/Media) and shows a status note. No backend required.
- Side panel: response time, booking-reference tip, privacy note, social links, and `CopyEmailButton` (`components/CopyEmailButton.js`).
- FAQ: 5 contact-specific accordion items; powers `faqPageSchema` in the page JSON-LD.
- Closing: reuses `FinalCTA` (app download band).
- SEO: updated metadata, `localBusinessSchema` + `breadcrumbSchema` + `faqPageSchema`.

---

## 17. Favicons & floating controls

- Favicon source: `public/favicon.svg` (dark `#0B1F14` background with the four-colour pinwheel).
- Generated assets: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180), `android-chrome-192x192.png`, `android-chrome-512x512.png`, and `site.webmanifest`.
- `app/layout.js` exposes the icon set plus `viewport.themeColor` (`#26C165`).
- Single floating back-to-top button (`components/ScrollToTop.js`) appears after 300px of scroll; the scroll-to-bottom button was removed.