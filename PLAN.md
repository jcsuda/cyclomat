# PLAN.md
## Project: Cyclomat Website
## Goal
Design and build a production-ready marketing and onboarding website for Cyclomat that introduces the product, showcases visual output, and teaches users how to use it.
 
---
 
# 1. Project Phases
 
## Phase 1 — Foundation
Objective:
Set up the project, structure, design direction, and reusable system before building pages.
 
### Tasks
- Initialize Next.js project with TypeScript
- Set up Tailwind CSS
- Install Framer Motion
- Install lucide-react
- Set up shadcn/ui if desired
- Configure app router structure
- Create base layout
- Create typography and spacing system
- Create color tokens/theme direction
- Define reusable container/section patterns
 
### Deliverables
- Working project scaffold
- Global styles
- base layout
- header/footer shell
- design primitives ready
 
---
 
## Phase 2 — Content Modeling
Objective:
Structure editable content before page assembly.
 
### Tasks
- Create site copy/content files for:
  - homepage
  - feature explanations
  - tutorials
  - gallery entries
  - export info
  - about page
- Define TypeScript types for:
  - tutorial step
  - gallery item
  - feature card
  - FAQ item
- Decide whether content lives in:
  - local TS/JSON objects
  - MDX
  - hybrid structure
 
### Deliverables
- typed content layer
- editable content sources
- page copy outline complete
 
---
 
## Phase 3 — Design System Components
Objective:
Build reusable components before full page composition.
 
### Tasks
Create:
- SiteHeader
- MobileNav
- SiteFooter
- SectionWrapper
- SectionHeading
- Hero
- CTASection
- FeatureCard
- ConceptBlock
- TutorialStepCard
- GalleryCard
- FAQAccordion
- PageHero
- ArtworkPreview component
 
Optional:
- AnimatedLineArt component
- ComparisonSlider
- DiagramCallout
 
### Deliverables
- reusable component library
- consistent styling patterns
- motion system conventions
 
---
 
## Phase 4 — Build Pages
Objective:
Implement the full MVP page set.
 
### 4.1 Home Page
Sections:
- Hero
- Intro to Cyclomat
- Why it’s unique
- Featured examples
- Beginner CTA
- Secondary CTA to Gallery/Learn
 
### 4.2 How It Works
Sections:
- Intro
- Cycloid explanation
- Arms
- Frequency
- Radius
- Phase
- Layering
- keyframes intro
 
### 4.3 Learn
Sections:
- Learn landing intro
- Tutorial 1: First Shape
- Tutorial 2: Increase Complexity
- Tutorial 3: Layers & Color
- Tutorial 4: Layout & Motion
- Tutorial CTA blocks
 
### 4.4 Gallery
Sections:
- Intro
- Responsive artwork grid
- metadata or tags
- inspiration CTA
 
### 4.5 Export & Share
Sections:
- export formats
- raster vs vector
- transparency
- project sharing
- practical use cases
 
### 4.6 About
Sections:
- philosophy
- origin of the creative idea
- timeless geometric play
- what Cyclomat invites users to explore
 
### Deliverables
- all core pages built
- routed correctly
- consistent navigation and visual flow
 
---
 
## Phase 5 — Motion, Polish, and Visual Refinement
Objective:
Improve perceived quality and delight.
 
### Tasks
- add subtle entrance animations
- add hover interactions
- refine spacing
- improve image framing
- adjust typography hierarchy
- improve CTA emphasis
- ensure mobile polish
- add smooth state transitions where helpful
 
### Deliverables
- premium-feeling front-end
- refined motion and spacing
- cohesive visual identity
 
---
 
## Phase 6 — Responsive QA and Accessibility
Objective:
Ensure the site works well across devices and remains usable.
 
### Tasks
Test and refine:
- mobile nav
- typography scaling
- image crops
- touch spacing
- keyboard navigation
- focus states
- contrast
- alt text coverage
- reduced motion considerations
 
### Deliverables
- responsive QA pass complete
- accessibility improvements complete
 
---
 
## Phase 7 — Performance and Production Readiness
Objective:
Prepare for deployment and handoff.
 
### Tasks
- optimize images
- lazy-load noncritical visuals
- reduce unnecessary client components
- review bundle size where practical
- confirm SEO basics
- add metadata/page titles/descriptions
- create favicon/app icons if available
- deploy to Vercel
- test production build
 
### Deliverables
- production-ready deployment
- stable build
- strong performance baseline
 
---
 
# 2. MVP Feature Checklist
 
## Required
- [ ] Homepage
- [ ] How It Works page
- [ ] Learn page
- [ ] Gallery page
- [ ] Export & Share page
- [ ] About page
- [ ] Responsive header/footer
- [ ] Reusable UI components
- [ ] Motion polish
- [ ] Mobile support
- [ ] Accessible structure
- [ ] Deployable build
 
## Nice to Have
- [ ] Animated line-art hero
- [ ] FAQ section
- [ ] richer gallery filtering
- [ ] interactive parameter demo
- [ ] MDX tutorial authoring
 
---
 
# 3. Suggested Build Order
 
Use this exact order unless blocked.
 
1. Initialize project
2. Global layout and theme
3. Header/footer/navigation
4. Reusable section components
5. Homepage
6. How It Works page
7. Learn page
8. Gallery page
9. Export & Share page
10. About page
11. Motion polish
12. Responsive QA
13. Performance pass
14. Deployment
 
This order reduces thrash and helps maintain coherence.
 
---
 
# 4. Page Content Priorities
 
## Highest Priority
- Clear explanation of what Cyclomat is
- visual proof of what it makes
- beginner learning path
- strong first impression
 
## Secondary Priority
- advanced concept explanations
- export details
- product philosophy/storytelling
 
---
 
# 5. Asset Plan
 
## Needed Assets
- hero artwork examples
- gallery artwork set
- simple diagrams for concept explanation
- optional iconography for controls/concepts
 
## If real assets are unavailable
Use:
- tasteful placeholder abstract line art
- generated SVG curves
- framed mock screenshots
- neutral structured illustration blocks
 
Do not let missing final artwork block development.
 
---
 
# 6. Technical Conventions
 
## Code Conventions
- Use TypeScript everywhere practical
- Keep props typed
- Prefer server components by default
- Use client components only when needed
- Keep components focused and reusable
- Avoid deeply nested page files
- Store repeated content outside page components where practical
 
## Styling Conventions
- Use Tailwind utility classes consistently
- extract repeated patterns into components
- maintain consistent spacing rhythm
- use max-width containers
- avoid arbitrary one-off styling unless necessary
 
## Animation Conventions
- use Framer Motion sparingly
- consistent duration/easing
- avoid animation overload
- keep transitions purposeful
 
---
 
# 7. Risks and Mitigation
 
## Risk: Site feels too technical
Mitigation:
- simplify copy
- add visual examples
- explain one concept at a time
 
## Risk: Site feels generic
Mitigation:
- invest in gallery presentation
- use distinctive geometry-inspired visuals
- refine typography and spacing
 
## Risk: Tutorials feel static or boring
Mitigation:
- make tutorials visual
- use step-based cards
- show outcomes and what to try next
 
## Risk: Overengineering too early
Mitigation:
- ship MVP content structure first
- avoid building CMS/backend prematurely
- use local structured content initially
 
## Risk: Heavy visuals hurt performance
Mitigation:
- optimize images
- lazy load gallery sections
- keep hero animation lightweight
 
---
 
# 8. Acceptance Criteria
 
The MVP is successful when:
- users immediately understand Cyclomat is a visual art tool based on harmonic/geometric drawing
- the site feels premium and visually compelling
- a beginner can follow the Learn content without confusion
- gallery content supports product understanding
- all core pages are responsive and polished
- the site can be deployed cleanly to production
 
---
 
# 9. Stretch Goals
 
After MVP, consider:
- interactive mini demo of arm/frequency changes
- artist stories
- downloadable beginner guide
- newsletter signup
- animated export examples
- CMS integration
- search across tutorials
 
---
 
# 10. Suggested Folder Structure
 
```txt
app/
  layout.tsx
  page.tsx
 how-it-works/page.tsx
  learn/page.tsx
  gallery/page.tsx
  export/page.tsx
  about/page.tsx
 
components/
  layout/
    site-header.tsx
    site-footer.tsx
    mobile-nav.tsx
  marketing/
    hero.tsx
    page-hero.tsx
    feature-card.tsx
    concept-block.tsx
    cta-section.tsx
   section-heading.tsx
  learn/
   tutorial-step-card.tsx
   tutorial-module.tsx
  gallery/
    gallery-card.tsx
   artwork-preview.tsx
  ui/
 
content/
  home.ts
  how-it-works.ts
  tutorials.ts
  gallery.ts
  export.ts
  about.ts
  faq.ts
 
lib/
  types.ts
  utils.ts
 
public/
  images/
  artwork/
  diagrams/
