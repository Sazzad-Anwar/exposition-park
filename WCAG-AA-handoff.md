# Exposition Park Parking — Accessibility / Compliance Handoff

**Site audited:** https://sazzad-anwar.github.io/exposition-park/
**Target standard:** WCAG 2.1 Level AA (satisfies AB 434, ADA Title II, Section 508, CA Gov Code 7405/11135)
**Tooling:** axe-core 4.10.2, scope `wcag2a, wcag2aa, wcag21a, wcag21aa` + manual verification of contrast, keyboard, and DOM.
**Result:** 26 rule-groups passed · 1 automated violation · 3 needs-review (2 resolved as PASS, 1 confirmed as a real bug) · 35 N/A.

> Bottom line: the site is **one small commit from a clean WCAG 2.1 AA pass.** Color contrast — the biggest risk item — PASSES. Two Level-A defects remain, both pure code fixes.

---

## 🔴 MUST FIX — confirmed defects (both WCAG Level A)

### 1. Header icon links have no accessible name
- **Rule:** `link-name` — WCAG 2.4.4 (Link Purpose) + 4.1.2 (Name, Role, Value) — *serious*
- **What:** Three links in the `<header>` contain only an inline `<svg>` with no text and no `aria-label`, so screen readers announce them as an empty "link":
  - Site logo link → `expositionpark.ca.gov`
  - Instagram icon link
  - TikTok icon link
- **Fix:** add an `aria-label` (or visually-hidden text) to each anchor:
  ```html
  <a href="https://expositionpark.ca.gov/" aria-label="Exposition Park home">…svg…</a>
  <a href="https://www.instagram.com/…" aria-label="Instagram">…svg…</a>
  <a href="https://www.tiktok.com/…" aria-label="TikTok">…svg…</a>
  ```
  Also mark the SVGs `aria-hidden="true"` / `focusable="false"` since the label now carries the name.

### 2. All FAQ items share one duplicate ID (`faq-answer-undefined`)
- **Rule:** `duplicate-id` — WCAG 4.1.1 (Parsing) + 4.1.2 — *critical*
- **What:** The FAQ accordion renders **14 elements that all have `id="faq-answer-undefined"`** — a template variable is interpolating as `undefined`. Each FAQ question button's `aria-controls` then points at that same shared id, so assistive tech cannot map a question to its specific answer.
- **Root cause:** the id is built from a variable that's `undefined` at render (e.g. `id={`faq-answer-${item.id}`}` where `item.id` doesn't exist). Likely the FAQ map/loop is missing an index or key field.
- **Fix:** give every answer a unique id and wire each button to its own answer:
  ```jsx
  {faqs.map((faq, i) => (
    <>
      <button aria-controls={`faq-answer-${i}`} aria-expanded={open===i}>…</button>
      <div id={`faq-answer-${i}`} role="region">…</div>
    </>
  ))}
  ```

---

## 🟢 VERIFIED PASS — no action needed (documented so the dev doesn't re-chase them)

- **Color contrast — PASS.** axe returned 7 nav links as "needs review" only because white text overlaps a background image. Manually measured: white bold text sits on a solid dark overlay (`~#383838`, Lab L\*≈11.8) → **≈11:1**, well above the 4.5:1 AA threshold.
- **`aria-valid-attr-value` (accessibility-settings dropdown) — PASS.** The `aria-controls` target element exists in the DOM. Same verified-good for the mobile menu and the two pay-station tab panels.
- Already correct: `<html lang="en">`, descriptive `<title>`, exactly one `<h1>`, skip-to-content link, all 54 images have `alt` (19 decorative `alt=""`, 35 descriptive), ARIA landmarks/roles in use, built-in high-contrast toggle + text-resize controls, no forms/inputs (no PII collected).

---

## 🟡 MANUAL CHECKS axe cannot perform — please verify before sign-off

- **Keyboard operation:** Tab through the page — every link, the accordion(s), the pay-station tabs, and the mobile menu must be reachable and operable with Enter/Space, with a **visible focus indicator** on each.
- **Focus order & escape:** opening the mobile menu / accessibility dropdown should move focus sensibly and close on `Esc`.
- **Screen-reader pass:** quick read-through with VoiceOver (Mac) or NVDA (Win) once fixes #1 and #2 land — confirm the icon links and FAQ questions/answers announce correctly.
- **Reflow / zoom:** at 200%–400% browser zoom there should be no horizontal scrolling or clipped content (WCAG 1.4.10).

---

## 🛠 Minor / best-practice (not blocking AA)

- **Heading order:** an `<h3>` appears in the DOM before the `<h1>`. Reorder so the hierarchy doesn't skip (WCAG 2.4.6, best practice).
- **Footer "Contact" link:** footer currently links Privacy Policy, Terms/Conditions of Use, and Accessibility (all → `expositionpark.ca.gov`). The standard ca.gov footer set also expects **Contact** — add it for consistency.

---

## 📦 Deployment gates (host-level, not code — flagged for whoever deploys)

- **The audited URL is GitHub Pages (`*.github.io`), a staging/preview host — not the ca.gov production domain.** The HTTPS/TLS/HSTS requirement only counts on the real `expositionpark.ca.gov` deployment.
- On production confirm: valid TLS cert, HTTP→HTTPS redirect, HSTS enabled.

---

## Acceptance criteria (definition of done)

- [ ] axe-core scan (`wcag2a, wcag2aa, wcag21a, wcag21aa`) returns **0 violations**.
- [ ] `faq-answer-undefined` no longer appears in the DOM; each FAQ answer has a unique id matched by its button's `aria-controls`.
- [ ] The three header icon links each expose an accessible name.
- [ ] Keyboard-only walkthrough completes with visible focus throughout.
- [ ] (Production) HTTPS + redirect + HSTS verified on the ca.gov host.

*Note: not legal advice — formal certification wording is owned by the agency's counsel/CIO. This covers what affects the build.*
