# Exposition Park - Brand & Design Guidelines

> The single source of truth for visual consistency across the Exposition Park parking website. Reference this document when adding new sections, pages, or components.

---

## 1. Brand Identity

**Brand:** Exposition Park (a California state park in south Los Angeles)
**Site Purpose:** Parking information, rates, accessibility, and event-day guidelines
**Tone:** Official, clear, helpful, accessible to all visitors
**Domain:** Government / public services

---

## 2. Color Palette

### Primary Colors

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Brand Blue | `#036b99` | `bg-brand`, `text-brand`, `bg-button` | Primary buttons, links, focus rings, brand bar, CTAs |
| Action Blue | `#2457a3` | `var(--blue)` | Popup primary buttons, tags, notice icons |
| Action Blue Dark | `#1b4178` | `var(--blue-dark)` | Button hover states |

### Semantic Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Green | `#2d8a4e` | `--green` | Success notices, bus/vehicle tags |
| Green Light | `#eff8f2` | `--green-light` | Green notice backgrounds, green tag backgrounds |
| Blue Light | `#edf2f9` | `--blue-light` | Blue notice backgrounds, blue tag backgrounds |
| Amber | `#b5700a` | Inline | Event/calendar tags, amber notice icon |
| Amber Light | `#fff4e5` | Inline | Event popup icon background, amber tag background |

### Neutral Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Dark | `#1a1a1a` | `--dark` | Headings, rate amounts, bold text |
| Text Primary | `#333333` | `--text` | Body text (set on `body`) |
| Text Secondary | `#454545` / `#5c5c5c` | `--color-text-secondary` / `--text-secondary` | Paragraph text, descriptions |
| Text Muted | `#888888` | `--text-muted` | Meta labels, popup subtitles, section headings |
| Background Page | `#FAFAFA` | Inline | Main content background |
| Background Card | `#f8f8f8` | `--bg-card` | Card interiors, rate row backgrounds |
| Background Input | `#EEEEEE` | Inline | Tab selector background |
| Background Alt | `#F7F7F7` | Inline | Tab content panels |
| Border | `#e2e2e2` | `--border` | Close buttons, general borders |
| Border Light | `#efefef` | `--border-light` | Rate rows, popup dividers, table borders |
| White | `#ffffff` | `--white` | Cards, popups, content areas |

### Special Colors

| Name | Hex | Usage |
|------|-----|-------|
| Footer Background | `#3B5E68` | Footer section |
| Footer Text | `#FFFAE6` | Footer text and links |
| Nav Background | `#1F1F1F` at 60% opacity | Secondary navigation bar (with `backdrop-blur-2xl`) |
| Hero Text | `#FFFFFFE5` (white 90%) | Hero heading |
| Hero Subtext | `#FFFFFF` at 80% opacity | Hero paragraph |

### Parking Lot Identifier Colors

| Lot | Tailwind Class | Circle Badge |
|-----|---------------|--------------|
| Blue Structure | `bg-blue-500` | Initials "B" |
| Orange Structure | `bg-orange-500` | Initials "O" |
| Pink Lot | `bg-pink-500` | Initials "P" |
| Yellow Lot | `bg-yellow-500` | Initials "Y" |
| Green Lot | `bg-green-500` | Initials "G" |

---

## 3. Typography

### Font Family

**Source Sans 3** (Google Fonts) -- the only typeface used across the entire site.

```html
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
```

Tailwind config: `--font-sans: 'Source Sans 3', sans-serif;`

### Type Scale

| Element | Mobile | Tablet (md) | Desktop (lg/xl) | Weight | Color |
|---------|--------|-------------|-----------------|--------|-------|
| Hero H1 | `text-5xl` (48px) | `text-6xl` (60px) | `text-7xl` to `96px` | 600 (semibold) | `#FFFFFFE5` |
| Section H2 | `text-3xl` (30px) | `text-[40px]` | `text-5xl` (48px) | 600 (semibold) | Default dark |
| Card H3 | `text-base` (16px) | `text-[28px]` | `text-3xl` (30px) | 700 (bold) | Default dark |
| Subsection H3 | `text-xl` (20px) | `text-xl` | `text-xl` | 600 (semibold) | Default dark |
| Section Intro | `text-lg` (18px) | `text-lg` | `text-xl` (20px) | 400 (normal) | Default or `text-secondary` |
| Body | `text-base` (16px) | `text-base` | `text-base` to `text-lg` | 400 (normal) | `text-secondary` |
| Small / Meta | `text-sm` (14px) | `text-sm` | `text-sm` | 400-600 | `text-muted` |
| Popup Title | 18px | 18px | 18px | 700 (bold) | `--dark` |
| Popup Subtitle | 16px | 16px | 16px | 400 (normal) | `--text-muted` |
| Rate Amount | 22px | 22px | 22px | 700 (bold) | `--dark` |
| Section Heading (uppercase) | 16px | 16px | 16px | 700 (bold) | `--text-muted`, uppercase, `letter-spacing: 0.8px` |

### Key Typography Patterns

- **Nav links (desktop):** `font-bold text-base text-white`
- **Nav links (mobile):** `font-semibold text-lg text-white`
- **CTA button text:** `font-bold text-base text-white`
- **Inline links:** `text-brand font-semibold text-base underline`
- **Footer headings:** `font-semibold text-base`
- **Footer body links:** `text-sm`

---

## 4. Spacing & Layout

### Container

```css
@utility container {
  margin-inline: var(--container-padding); /* 80px */
  width: 100%;
  max-width: 100%;
  @media (min-width: 1440px) {
    max-width: 90rem; /* 1440px */
  }
}
```

Always pair with: `container mx-auto px-4 md:px-8`

### Section Spacing

| Breakpoint | Vertical padding |
|------------|-----------------|
| Mobile | `py-12` (48px) |
| Tablet (md) | `py-16` (64px) |
| Desktop (xl) | `py-24.5` (98px) |

Pattern: `py-12 md:py-16 xl:py-24.5`

### Grid System

- **3-column cards:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- **2-column split:** `grid grid-cols-1 lg:grid-cols-2 gap-6`
- **2-column FAQ:** `grid grid-cols-1 lg:grid-cols-2` (heading left, content right)

### Common Spacing Values

| Pattern | Value | Usage |
|---------|-------|-------|
| Card gap | `gap-4` (16px) | Between grid cards |
| Section gap | `gap-6` (24px) | Between major layout columns |
| Content margin-top | `mt-12` (48px) | Content below section headings |
| Heading bottom margin | `mb-4` (16px) | Below H2 headings |
| Mobile padding | `px-4` (16px) | Horizontal page padding |
| Tablet+ padding | `md:px-8` (32px) | Horizontal page padding |

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `8px` | Popups, main cards |
| `--radius-sm` | `6px` | Rate rows, tags, notice boxes, buttons, popup icons |
| `rounded-lg` | 8px (Tailwind) | Content cards, tab containers, images |
| `rounded-xl` | 12px (Tailwind) | Modal dialogs, settings dropdown |
| `rounded-full` | 50% | Parking lot identifier badges, toggle knobs |
| `rounded` | 4px (Tailwind) | Small elements, tag badges |

---

## 6. Shadows

| Tailwind Class | Usage |
|---------------|-------|
| `shadow-xs` | Process cards (subtle) |
| `shadow-lg` | Hero pricing cards, brand bar |
| `shadow-md` | Tab slider indicator |
| `shadow-xl` | Settings dropdown, mobile menu |
| `shadow-2xl` | Modal dialogs |
| Popup custom shadow | `0 1px 4px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.1)` |

---

## 7. Component Patterns

### Section Block

Every major content section follows this pattern:

```html
<section class="container mx-auto px-4 md:px-8 py-12 md:py-16 xl:py-24.5">
  <h2 class="font-semibold text-3xl md:text-[40px] lg:text-5xl mb-4 text-center">
    Section Title
  </h2>
  <p class="text-lg md:text-lg lg:text-xl font-normal text-center max-w-2xl mx-auto">
    Section description text.
  </p>
  <!-- Content grid/cards below, usually with mt-12 -->
</section>
```

Variant: Left-aligned headings use `text-left` and `mr-auto` instead of `text-center` / `mx-auto`.

### Pricing / Rate Card (Hero)

```html
<div class="bg-white rounded-lg p-5 md:p-8 flex flex-row items-center justify-start shadow-lg gap-5 md:h-[148px]">
  <img src="/icon.svg" alt="" aria-hidden="true" class="size-10 md:size-12" />
  <div class="flex flex-col items-start md:gap-3 space-y-3 md:space-y-0">
    <h2 class="text-text-secondary text-xl font-semibold">Card Title</h2>
    <button class="font-semibold text-sm md:text-base text-button underline">View Rates</button>
  </div>
</div>
```

### Info Card (Key Parking Processes)

```html
<div class="p-8 border rounded-lg border-[rgba(0,0,0,0.04)] shadow-xs bg-white">
  <img src="/icon.svg" alt="" class="size-8 mb-4" />
  <h3 class="font-semibold text-xl mb-3">Card Title</h3>
  <p class="text-base text-text-secondary mb-11">Description text.</p>
  <button class="text-brand font-semibold text-base underline cursor-pointer">
    Action Link
  </button>
</div>
```

### Direction Card (Parking Locations)

```html
<div class="bg-[#FAFAFA] border-2 rounded-lg p-5 space-y-3 flex flex-col justify-between">
  <div class="space-y-3">
    <div class="flex items-center gap-2">
      <div class="size-8 rounded-full bg-{color}-500 flex items-center justify-center">
        <p class="text-white font-semibold text-xl">{initials}</p>
      </div>
      <h3 class="font-semibold text-xl">{name}</h3>
    </div>
    <p class="text-base text-text-secondary">{description}</p>
  </div>
  <a href="#" class="text-brand font-semibold text-base underline">Get Directions</a>
</div>
```

### Modal / Popup (Rate Detail)

Uses `.popup-custom` class. Structure:

```
.popup-custom (440px max, flex column, rounded-lg, custom shadow)
  .popup-head (icon + title + subtitle + close button, border-bottom)
  .popup-content (scrollable, padded)
    .rate-row (flexbox, bg-card, border, label + amount)
    .rate-desc (description paragraph)
    .notice.{blue|green|neutral} (icon + message, colored background)
    .section-divider (1px line)
    .section-heading (uppercase, muted, spaced)
    .event-table > .event-row (striped table rows)
  .popup-foot (.btn-primary full-width + optional .btn-secondary-link)
```

Modal backdrop: `fixed inset-0 bg-black/50`

### Simple Modal (Image + Info)

```html
<div class="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 z-10">
  <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"><!-- X icon --></button>
  <img src="/image.webp" alt="" class="h-auto w-full" />
  <div class="flex items-center gap-3 mt-5 mb-4">
    <div class="size-10 rounded-full bg-blue-500 flex items-center justify-center">
      <p class="text-white font-semibold text-lg">{initials}</p>
    </div>
    <h3 class="font-bold text-xl md:text-2xl">{title}</h3>
  </div>
  <p class="text-text-secondary text-base mb-10">{address}</p>
  <a href="#" class="text-brand font-semibold text-base underline">Get Directions</a>
</div>
```

### Tab Selector

```html
<div class="relative flex justify-center bg-[#EEEEEE] rounded-lg p-1" role="tablist">
  <!-- Animated slider background -->
  <div class="absolute top-1 bottom-1 bg-white rounded-sm shadow-md transition-all duration-300 ease-in-out"></div>
  <button role="tab" class="relative z-10 lg:py-4 py-3 px-4 md:px-5 lg:px-6 rounded-sm text-sm md:text-xl flex items-center gap-3 font-semibold">
    <img src="/icon.svg" class="size-6" />
    <span>Tab Label</span>
  </button>
</div>
```

### FAQ Accordion

```html
<div class="w-full p-4 md:p-6 bg-white">
  <button class="flex justify-between items-center w-full cursor-pointer text-left group">
    <h3 class="text-lg md:text-xl font-semibold group-hover:text-button">{question}</h3>
    <div class="ml-4 transition-transform duration-300" :class="isOpen ? 'rotate-45' : ''">
      <!-- Plus icon (rotates to X when open) -->
    </div>
  </button>
  <div x-show="isOpen" x-collapse>
    <p class="text-text-secondary text-base md:text-lg pt-4 leading-relaxed">{answer}</p>
  </div>
</div>
```

### Notice Box

Three variants:

```html
<!-- Blue notice -->
<div class="notice blue"><!-- bg: #edf2f9, border: #d4dfee, icon color: #2457a3 --></div>

<!-- Green notice -->
<div class="notice green"><!-- bg: #eff8f2, border: #cde8d5, icon color: #2d8a4e --></div>

<!-- Neutral notice -->
<div class="notice neutral"><!-- bg: #f8f8f8, border: #efefef, icon color: #888888 --></div>
```

### Tag / Badge

```html
<div class="tag blue"><!-- bg: blue-light, text: blue --></div>
<div class="tag green"><!-- bg: green-light, text: green --></div>
<div class="tag amber"><!-- bg: #fff4e5, text: #b5700a --></div>
```

### Primary Button (CTA)

```html
<!-- Hero / section CTA -->
<a class="inline-block py-4 px-8 bg-button text-white font-bold text-base rounded-lg hover:bg-button/90 transition-colors">
  Button Text
</a>

<!-- Popup full-width CTA -->
<button class="btn-primary">Got It</button>
<!-- Renders: w-full, py-12, bg-blue, white text, 600 weight, rounded-sm, hover darkens -->
```

### Inline Link

```html
<a class="text-brand font-semibold text-base underline">Link Text</a>
```

---

## 8. Imagery & Assets

### Image Formats

| Format | Usage |
|--------|-------|
| `.webp` | All photographs (hero, parking lots, elevators, payment stations) |
| `.svg` | Icons, logos, illustrations, decorative backgrounds |
| `.png` | Tab indicator icons, car illustration (legacy) |

### Image Handling

- **Loading:** `loading="lazy" decoding="async"` on all images below the fold
- **Object fit:** `object-cover` for constrained images, `object-center` for positioning
- **Responsive heights:** `h-70 md:h-125` or `h-[280px] md:h-[364px] lg:h-[576px]`
- **Alt text:** Descriptive for informational images, `alt="" aria-hidden="true"` for decorative icons
- **Rounded:** `rounded-lg` or `rounded-none md:rounded-lg` for mobile full-bleed

### Icon Style

- **Source:** Inline SVGs (Heroicons / Bootstrap Icons style)
- **Default size:** `w-5 h-5` or `size-8` depending on context
- **Stroke-based:** `fill="none" stroke="currentColor" stroke-width="2"` with `stroke-linecap="round" stroke-linejoin="round"`
- **Color:** Inherits from parent via `currentColor` or set explicitly for popup icons

---

## 9. Animation & Transitions

### Standard Transitions

| Property | Duration | Easing | Usage |
|----------|----------|--------|-------|
| Background/color | `150ms` | Default | Button hovers, link hovers |
| All properties | `300ms` | `ease-in-out` | Card border highlights, tab slider, nav scroll |
| Transform | `300ms` | Default | FAQ plus icon rotation, mobile menu |
| Opacity | `200ms` | Default | Dropdowns, mobile menu enter |

### Image Reveal Animation

```css
@keyframes fadeIn {
  0%   { opacity: 0; transform: scale(1.02); }
  100% { opacity: 1; transform: scale(1); }
}
```

Duration: `0.6s ease-out`. Applied to `.reveal-current` inside `.animating` container.

### Alpine.js Transitions

- **Dropdowns:** `x-transition` (default fade)
- **Mobile menu:** `x-transition:enter="transition ease-out duration-200"` with translate-y
- **Modals:** `x-transition.opacity` for backdrop + content
- **Accordion:** `x-collapse` (Alpine Collapse plugin)

---

## 10. Responsive Breakpoints

| Name | Min-width | Tailwind Prefix | Usage |
|------|-----------|----------------|-------|
| Mobile | 0px | (default) | Single column, compact spacing |
| Small | 480px | Custom `@media` | Popup mobile adjustments |
| Tablet | 768px | `md:` | 2-column grids, larger text, more padding |
| Desktop | 1024px | `lg:` | 3-column grids, side-by-side layouts, sticky nav |
| Large Desktop | 1280px | `xl:` | Maximum section padding, hero text scaling |
| Max Width | 1440px | Custom | Container max-width cap |

### Mobile-First Patterns

- Navigation: hamburger menu on mobile, horizontal links on `lg:`
- Grids: `grid-cols-1` -> `md:grid-cols-2` -> `lg:grid-cols-3`
- Hero text: `text-5xl` -> `md:text-6xl` -> `lg:text-7xl` -> `xl:text-[96px]`
- Section padding: `py-12` -> `md:py-16` -> `xl:py-24.5`
- Content padding: `px-4` -> `md:px-8`

---

## 11. Header & Navigation Structure

### Top Bar (Brand Bar)

- Background: `bg-brand` (`#036b99`)
- Contains: CA.gov logo, social links (Instagram, TikTok), Contact Us link, Settings dropdown, Google Translate
- Padding: `py-2`
- Text: white, `text-sm`

### Main Nav Bar

- Background: `bg-[#1F1F1F]/60 backdrop-blur-2xl`
- Contains: Exposition Park logo (left), navigation links (right)
- Logo height: `h-10 md:h-12`
- Nav links: `font-bold text-base text-white`, hover to `text-gray-300`
- Padding: `py-3 md:py-4`
- Fixed on scroll: `md:fixed top-0 w-full z-40`

### Scroll anchor offset

Sections targeted by nav links use: `scroll-mt-[60px]`

---

## 12. Footer Structure

- Background: `#3B5E68`
- Text color: `#FFFAE6`
- Padding: `px-4 md:px-16 pt-10 pb-8`
- Top section: Logo, tagline, social links, two-column link groups ("Visit" and "Parking")
- Divider: `border-b border-[#FFFAE6]`
- Bottom section: Copyright + legal links (Privacy, Terms, Accessibility)
- Footer heading weight: `font-semibold text-base`
- Footer link size: `text-sm`

---

## 13. Accessibility Requirements

Every new section or page MUST follow these standards:

1. **Semantic HTML:** Use `<section>`, `<nav>`, `<main>`, `<header>`, `<footer>` appropriately
2. **ARIA labels:** All interactive elements need `aria-label` or visible labels
3. **Focus rings:** Automatic via global `*:focus-visible { outline: 3px solid #036b99; outline-offset: 2px; }`
4. **Keyboard navigation:** All interactive elements reachable via Tab; modals close on Escape
5. **Alt text:** Informational images get descriptive alt; decorative images get `alt="" aria-hidden="true"`
6. **High contrast mode:** Supported globally -- avoid overriding the `.high-contrast` CSS rules
7. **Font scaling:** Content must remain usable at 150% font size (accessibility store)
8. **Color contrast:** Maintain WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
9. **Screen reader:** Use `.sr-only` class for visually hidden but screen-reader-accessible content
10. **Roles:** Use `role="list"`, `role="listitem"`, `role="tablist"`, `role="tab"`, `role="tabpanel"`, `role="dialog"` where applicable

---

## 14. Tech Stack Reference

| Layer | Technology |
|-------|-----------|
| Markup | Vanilla HTML |
| Styling | Tailwind CSS 4.x (via `@tailwindcss/vite`) + custom CSS |
| Interactivity | Alpine.js 3.x + `@alpinejs/collapse` |
| Build | Vite (with rolldown-vite) |
| Fonts | Google Fonts (Source Sans 3) |
| Animations | Custom CSS keyframes + Animate.css (CDN) |
| Deployment | GitHub Pages (gh-pages) |

### Alpine.js Patterns

- **Component data:** Defined in `src/main.js` via `Alpine.data('name', () => ({...}))`
- **Global state:** `Alpine.store('accessibility', {...})` for accessibility settings
- **Show/hide:** `x-show` + `x-cloak` + `x-transition`
- **Loops:** `<template x-for="item in data">`
- **Events:** `@click`, `@mouseenter`, `@mouseleave`, `@keydown.escape`
- **Collapse:** `x-collapse` for accordion panels

### Performance Patterns

- Images: WebP format, `loading="lazy"`, `decoding="async"`
- Image preloading: `new Image().src` in Alpine `init()` for interactive image reveals
- IntersectionObserver: Used for mobile scroll-based interactions in directions component
- Minimal JS: No heavy frameworks, Alpine.js is ~15KB

---

## 15. File & Asset Naming

| Type | Convention | Example |
|------|-----------|---------|
| SVG icons | `kebab-case-icon.svg` | `parking-area.svg`, `bus-parking-icon.svg` |
| Photos | `kebab-case-description.webp` | `direction-parking-blue.webp`, `hero-bg.webp` |
| Section IDs | `kebab-case` | `#direction-parking`, `#bus-parking`, `#ev-charging` |
| Alpine data | `camelCase` | `directions`, `dropOffPickup`, `accessibleParking` |

---

## 16. Checklist for New Sections

When adding a new section, verify:

- [ ] Uses `<section>` with a unique `id` for anchor linking
- [ ] Wrapped in `container mx-auto px-4 md:px-8 py-12 md:py-16 xl:py-24.5`
- [ ] H2 follows the established type scale (`font-semibold text-3xl md:text-[40px] lg:text-5xl mb-4`)
- [ ] Description paragraph uses `text-lg md:text-lg lg:text-xl font-normal`
- [ ] Cards use `bg-white rounded-lg` with appropriate padding and shadow
- [ ] Colors come from the defined palette -- no new hex values without updating this doc
- [ ] Images use WebP, lazy loading, and have proper alt text
- [ ] Interactive elements have Alpine.js data bindings
- [ ] All links/buttons have hover states with `transition-colors`
- [ ] Inline action links use `text-brand font-semibold text-base underline`
- [ ] Responsive: works at all breakpoints (test mobile-first)
- [ ] Accessibility: ARIA labels, keyboard support, semantic HTML
- [ ] If linking from nav/footer, add `scroll-mt-[60px]` to account for fixed header
- [ ] New footer links added to the appropriate column ("Visit" or "Parking")
