# Code Review — Cyclomat Website

**Date:** 2026-04-21
**Reviewer:** Claude Sonnet 4.6
**Branch:** main
**Next.js version:** 16.2.3
**React version:** 19.2.4

---

## Summary

The implementation covers all six MVP pages and establishes a solid design system. The content layer is clean and well-typed. However, several issues range from a visual bug that breaks the hero animation's responsive sizing to pervasive over-use of `"use client"` that unnecessarily ships JavaScript for static content sections. The issues below are grouped by severity.

---

## Critical Issues

### 1. Hero canvas size override breaks responsive classes

**File:** `src/components/marketing/hero-animation.tsx:44–47`

```ts
canvas.style.width = `${size}px`;   // always "500px"
canvas.style.height = `${size}px`;  // always "500px"
```

The `useEffect` hook unconditionally sets inline `width/height` styles to 500 px, which **overrides** the Tailwind responsive classes on the element:

```tsx
className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
```

Inline styles win the CSS cascade, so the canvas is locked at 500 × 500 px on all breakpoints. On mobile the canvas overflows its container and the hero layout breaks.

**Fix:** Remove the inline style assignments. Instead, read the canvas's rendered `clientWidth`/`clientHeight` (or use a `ResizeObserver`) and use those values for the internal drawing dimensions. Keep the responsive Tailwind classes as the sole size authority.

---

### 2. Hero animation RAF loop never terminates

**File:** `src/components/marketing/hero-animation.tsx:76–85`

```ts
if (progress < 1) {
  progress += 0.003;
} else {
  progress = 1;
}
animRef.current = requestAnimationFrame(draw); // ← always queued
```

After `progress` reaches `1` the shape is fully drawn, but the RAF loop continues firing at ~60 fps indefinitely, re-drawing an already-complete canvas on every frame. This wastes CPU/GPU and can cause measurable battery drain on mobile.

**Fix:** After setting `progress = 1`, do not schedule another frame:

```ts
if (progress < 1) {
  progress += 0.003;
  animRef.current = requestAnimationFrame(draw);
} else {
  progress = 1;
  draw(); // draw the final completed frame once
}
```

---

### 3. `React.ElementType` used without importing React

**Files:** `src/app/learn/page.tsx:12`, `src/app/export/page.tsx:16`

```ts
const difficultyIcon: Record<string, React.ElementType> = { ... };
const iconMap: Record<string, React.ElementType> = { ... };
```

`React` is never imported in these files. With `"jsx": "react-jsx"` (the automatic runtime) JSX itself doesn't need an import, but the `React` namespace is still required for TypeScript types like `React.ElementType`. This is a TypeScript error that may be masked by `skipLibCheck: true` in tsconfig.

**Fix:** Add `import type React from 'react'` to both files, or replace `React.ElementType` with the equivalent standalone type `ComponentType` from React:

```ts
import type { ComponentType } from 'react';
const difficultyIcon: Record<string, ComponentType<{ className?: string }>> = { ... };
```

---

## High Priority Issues

### 4. All pages are unnecessarily client components

**Files:** `src/app/page.tsx`, `src/app/how-it-works/page.tsx`, `src/app/learn/page.tsx`, `src/app/gallery/page.tsx`, `src/app/export/page.tsx`, `src/app/about/page.tsx`

Every page has `"use client"` at the top. These pages contain no state, no event handlers, and no browser APIs — they only compose already-client-capable sub-components. Marking a page `"use client"` converts the entire subtree to client-side rendering, sending all component code to the browser and preventing server-side rendering of static content.

The PLAN.md technical conventions explicitly state: *"Prefer server components by default. Use client components only when needed."*

**Impact:** All page-level data fetching potential is lost, bundle size increases, and Time to First Byte (TTFB) is higher than necessary.

**Fix:** Remove `"use client"` from all page files. Pages that import client components (like `<Hero>`, `<SectionWrapper>`) can remain Server Components — the `"use client"` boundary is at the *component* level, not the page level. Only add `"use client"` to components that use `useState`, `useEffect`, `usePathname`, or browser APIs.

Components that legitimately need `"use client"`:
- `site-header.tsx` (uses `usePathname`)
- `mobile-nav.tsx` (uses `useState`, `usePathname`)
- `hero-animation.tsx` (uses `useEffect`, `useRef`, canvas)
- `artwork-preview.tsx` (uses `useMemo` + `whileHover`)
- All `motion.*` wrappers (Framer Motion requires client context)

`SectionHeading`, `SiteFooter`, and content-only wrappers can be Server Components.

---

### 5. Fixed header offset not applied to tutorial anchor targets

**File:** `src/app/learn/page.tsx:58–103` / `src/components/marketing/section-wrapper.tsx`

Tutorial navigation cards link to `href={\`#${tutorial.id}\`}`, which scrolls the page to the `id` on the `<SectionWrapper>`. But the site header is fixed (`position: fixed`, height `h-16` = 64 px), so the anchor target is hidden beneath the header on scroll.

**Fix:** Add `scroll-margin-top` to the section wrapper when it has an `id`:

```tsx
// section-wrapper.tsx
className={cn("px-6 py-20 md:py-28 scroll-mt-20", className)}
```

`scroll-mt-20` = 80 px of margin, which clears the 64 px header with breathing room.

---

### 6. `motion.a` used instead of `Link` for anchor navigation

**File:** `src/app/learn/page.tsx:33`

```tsx
<motion.a
  href={`#${tutorial.id}`}
  ...
>
```

The tutorial quick-nav uses a bare `<a>` tag instead of Next.js `<Link>`. For same-page hash navigation this is functionally equivalent, but using `<a>` bypasses Next.js's client-side navigation handling and is inconsistent with the rest of the codebase.

**Fix:** Use `motion(Link)` or wrap `<Link>` in a `<motion.div>`:

```tsx
import { motion } from "framer-motion";
import Link from "next/link";
const MotionLink = motion(Link);

<MotionLink href={`#${tutorial.id}`} ...>
```

---

### 7. No `prefers-reduced-motion` support

**Files:** All animation components

The PLAN.md Phase 6 tasks explicitly require "reduced motion considerations," and AGENT.md Section 12 requires "reduced motion friendliness where feasible." However, no component checks `prefers-reduced-motion`.

Framer Motion has built-in support via the `useReducedMotion` hook:

```ts
import { useReducedMotion } from "framer-motion";
const shouldReduce = useReducedMotion();
```

Or globally via `LazyMotion` + `MotionConfig`:

```tsx
// layout.tsx
import { MotionConfig } from "framer-motion";
<MotionConfig reducedMotion="user">
  {children}
</MotionConfig>
```

**Fix:** Add `<MotionConfig reducedMotion="user">` in `src/app/layout.tsx` (note: this requires making the layout a client component or wrapping it in a client provider). This is the lowest-effort fix and respects the user's OS-level setting automatically.

---

### 8. Active nav items lack `aria-current="page"`

**File:** `src/components/layout/site-header.tsx:34–42`, `src/components/layout/mobile-nav.tsx:43–51`

Active nav items only receive a visual style change but no semantic attribute. Screen readers cannot identify the current page without `aria-current="page"`.

**Fix:**

```tsx
<Link
  aria-current={pathname === item.href ? "page" : undefined}
  ...
>
```

---

### 9. Mobile nav does not close on `Escape` key

**File:** `src/components/layout/mobile-nav.tsx`

When the mobile nav is open, pressing `Escape` does not close it. This is a standard UX expectation for disclosure widgets.

**Fix:**

```ts
useEffect(() => {
  if (!open) return;
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };
  document.addEventListener("keydown", handleKey);
  return () => document.removeEventListener("keydown", handleKey);
}, [open]);
```

---

## Medium Priority Issues

### 10. `shadcn` in production `dependencies`

**File:** `package.json:20`

```json
"shadcn": "^4.2.0"
```

`shadcn` is a CLI tool used to scaffold components. It should be in `devDependencies` (if kept at all). It is currently a runtime `dependency`, which means it is included in production bundles and installed on deployment servers unnecessarily.

The CSS import `@import "shadcn/tailwind.css"` in `globals.css` imports a stylesheet from the package, which is a valid runtime use — but the package itself should still be `devDependencies` if only used for CLI scaffolding and CSS. Verify the CSS import works before moving it.

---

### 11. `Button` component is dead code

**File:** `src/components/ui/button.tsx`

The `Button` component is never imported anywhere in the application. All interactive CTAs use inline `<Link>` elements with hardcoded Tailwind classes.

**Options:**
- Delete it to reduce bundle surface area, or
- Refactor all CTA inline styles to use `Button` for consistency (recommended long-term).

---

### 12. Last `TutorialStepCard` has a dangling connector line

**File:** `src/components/learn/tutorial-step-card.tsx:40`

```tsx
<div className="mt-2 h-full w-px bg-border/50" />
```

The vertical line connecting steps extends to the bottom of every card — including the last one in each tutorial, where it dangles with no next step to connect to.

**Fix:** Pass an `isLast` prop and conditionally omit the connector:

```tsx
{!isLast && <div className="mt-2 h-full w-px bg-border/50" />}
```

---

### 13. Type name collision: `FeatureCard` interface vs component

**Files:** `src/lib/types.ts:6`, `src/components/marketing/feature-card.tsx`

The `FeatureCard` interface in `lib/types.ts` shares its name with the `FeatureCard` component. While they don't conflict at the module level (they're in different files), the naming increases cognitive overhead and will cause a compile error if both are imported into the same file.

**Fix:** Rename the type to `FeatureCardData` or `FeatureCardItem` in `lib/types.ts` and update the import in `src/content/home.ts`.

---

### 14. `SectionWrapper` creates nested animation conflicts

**File:** `src/components/marketing/section-wrapper.tsx`

`SectionWrapper` is a `motion.section` with its own `whileInView` fade-in. Its children — `ConceptBlock`, `FeatureCard`, `TutorialStepCard` — each also have `whileInView` fade-ins. This creates a visual inconsistency: the outer section fades in while the inner items independently fade in on top of a partially transparent container.

On slow scroll or large viewports, the outer section may complete its animation while inner items are still animating, which looks unpolished.

**Fix:** Either:
- Remove the `motion` animation from `SectionWrapper` and let it be a plain `<section>`, relying on child animations for entrance effects, or
- Use the `variants` API with stagger so the outer section drives child timing.

---

### 15. Footer has duplicate links

**File:** `src/components/layout/site-footer.tsx:16–17`

```ts
{ label: "Getting Started", href: "/learn" },
{ label: "Tutorials", href: "/learn" },
```

Both "Getting Started" and "Tutorials" point to the same `/learn` route. One of these should be removed or differentiated (e.g., if tutorial sections have their own anchor IDs, link directly to them).

---

### 16. Copyright year is build-time only

**File:** `src/components/layout/site-footer.tsx:54`

```tsx
<p>&copy; {new Date().getFullYear()} Cyclomat.</p>
```

`SiteFooter` is a Server Component. In a statically generated deployment, `new Date().getFullYear()` is evaluated **once at build time**. If the site is built in December 2026 and the build artifact is served in 2027, it will display the wrong year until the next deploy.

**Fix:** Either accept this limitation for a static site, or use a small Client Component just for the year:

```tsx
"use client";
export function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
```

---

### 17. `components.json` declares `"rsc": true` but is inconsistently applied

**File:** `components.json:4`

The shadcn config declares `"rsc": true`, meaning components should be Server Components by default. The generated `button.tsx` follows this pattern (no `"use client"`), but all other components added manually are client components. This inconsistency is fine functionally but will cause confusion when adding new shadcn components.

---

## Low Priority Issues

### 18. `next.config.ts` is completely empty

**File:** `next.config.ts`

No configuration has been set. For a production deployment the following should be considered:

- `images.remotePatterns` — not needed now but required if any external images are added
- Security headers via `headers()` (Content-Security-Policy, X-Frame-Options, etc.)
- `compress: true` (enabled by default but worth verifying)
- `poweredByHeader: false` — removes the `X-Powered-By: Next.js` header

---

### 19. No Open Graph or Twitter Card metadata

**File:** `src/app/layout.tsx`

Root metadata has `title`, `description`, and `keywords` but no `openGraph` or `twitter` fields. Social shares of any page will have no image preview and may use fallback text.

**Fix:**

```ts
export const metadata: Metadata = {
  // ...existing
  openGraph: {
    type: "website",
    title: "Cyclomat — Geometric Art Through Harmonic Motion",
    description: "...",
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

---

### 20. No custom 404 page

There is no `src/app/not-found.tsx`. Next.js 16 uses a file-based `not-found.tsx` convention. Without it, a generic Next.js 404 is shown, which breaks the site's visual identity.

---

### 21. Empty public asset directories

**Directory:** `public/artwork/`, `public/images/`, `public/diagrams/`

These directories are empty. All artwork is currently generated client-side via SVG/canvas. While generative previews are acceptable for MVP per the PLAN.md, the directories signal intent for future static assets. Document this clearly (or remove the empty dirs) to avoid future confusion.

---

### 22. No error boundaries

No `error.tsx` boundary is defined at any route level. If a component throws during rendering, the Next.js default error UI is shown. Given this is a marketing site with only static content, this is low risk, but a simple root-level `error.tsx` would provide a consistent recovery experience.

---

## PRD / PLAN Conformance

| Requirement | Status | Notes |
|---|---|---|
| Homepage | ✅ Complete | All sections implemented |
| How It Works page | ✅ Complete | 7 concept blocks, key principle quote |
| Learn page (≥3 tutorials) | ✅ Complete | 4 tutorials with steps |
| Gallery page | ✅ Complete | 9 items with generative previews |
| Export & Share page | ✅ Complete | 4 formats + use cases |
| About page | ✅ Complete | 4 philosophy sections |
| Responsive header/footer | ✅ Complete | Mobile nav implemented |
| Reusable UI components | ✅ Complete | Good component separation |
| Motion polish | ⚠️ Partial | Animations present but no `prefers-reduced-motion` |
| Mobile support | ⚠️ Partial | Hero canvas overflows on mobile (Issue #1) |
| Accessible structure | ⚠️ Partial | Missing `aria-current`, no Escape key on mobile nav |
| Deployable build | ⚠️ Partial | TypeScript errors likely (Issue #3), empty `next.config.ts` |
| FAQ section | ➖ Not built | Listed as nice-to-have; `FAQItem` type defined but unused |
| Animated line-art hero | ✅ Complete | Canvas animation implemented |
| Interactive parameter demo | ➖ Not built | Post-MVP stretch goal |
| MDX tutorial authoring | ➖ Not built | Content in `.ts` files instead; acceptable for MVP |

---

## Recommended Action Order

1. **Fix the hero canvas responsive bug** (Issue #1) — visible to all users immediately
2. **Stop the RAF loop after completion** (Issue #2) — performance and battery impact
3. **Fix `React.ElementType` TypeScript errors** (Issue #3) — may fail production build
4. **Add `scroll-margin-top` to anchor targets** (Issue #5) — usability on Learn page
5. **Add `aria-current="page"` to nav links** (Issue #8) — quick win, accessibility
6. **Add Escape key handler to mobile nav** (Issue #9) — quick win, usability
7. **Add `<MotionConfig reducedMotion="user">` in layout** (Issue #7) — single-line accessibility fix
8. **Remove `"use client"` from all page files** (Issue #4) — performance, aligns with stated architecture
9. **Fix last-step connector line** (Issue #12) — visual polish
10. **Move `shadcn` to devDependencies** (Issue #10) — dependency hygiene
11. **Add Open Graph metadata** (Issue #19) — important for social sharing
12. **Add `not-found.tsx`** (Issue #20) — brand consistency
