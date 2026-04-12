# AGENT.md
## Project: Cyclomat Website
## Purpose
Build a polished marketing + onboarding website for Cyclomat that introduces the product, explains how it works, and teaches users how to use it through guided, visual learning.
 
---
 
## 1. Product Intent
 
Cyclomat is an art tool for exploring shapes created through harmonic frequencies, rotating arms, layered composition, and geometric transformation. The website should make Cyclomat feel:
 
- Visually intriguing
- Intuitive to understand
- Artist-friendly
- Premium and modern
- Educational without feeling technical or dry
 
This is not a dashboard app. It is a **public-facing website** focused on:
1. Explaining the product
2. Showcasing artwork
3. Teaching the user how to use Cyclomat
4. Driving confidence and curiosity
 
---
 
## 2. Agent Mission
 
When implementing this website, prioritize:
 
- Clarity over cleverness
- Strong visual hierarchy
- Smooth onboarding for new users
- Modular, maintainable code
- Elegant transitions and subtle motion
- Fast page loads despite image-heavy sections
- Accessibility and responsiveness
 
The experience should feel like a hybrid of:
- Product marketing site
- Interactive learning experience
- Generative art showcase
 
---
 
## 3. Core UX Principles
 
### 3.1 Teach visually first
Users should understand Cyclomat primarily through:
- Examples
- visual comparisons
- simple diagrams
- guided explanations
 
Avoid relying on dense technical text.
 
### 3.2 Start simple, then deepen
The user journey should progress in this order:
1. What Cyclomat is
2. Why it is interesting
3. What the main concepts are
4. How to create a first shape
5. How layers, palette, layout, and keyframes expand possibilities
 
### 3.3 Inspire before instructing
Lead with beauty and intrigue before explaining controls.
 
### 3.4 Reduce intimidation
Cyclomat includes advanced concepts like:
- frequency
- phase
- oscillator phase
- keyframes
- tessellation pitch
- blend modes
 
These should be introduced gently and progressively.
 
### 3.5 Feel premium
The site should feel crafted for artists and creative technologists, not like a generic SaaS template.
 
---
 
## 4. Scope
 
### In Scope
- Marketing homepage
- “How It Works” page
- Learning/tutorial content
- Gallery/inspiration section
- Export/share explanation
- About/product story
- Reusable components
- Responsive layout
- Elegant motion and transitions
 
### Out of Scope
- Full Cyclomat editor in browser
- User authentication
- Saved personal projects
- Community upload system
- Full CMS backend
- Payment/subscription flow unless explicitly added later
 
---
 
## 5. Recommended Tech Stack
 
Use this unless there is a compelling reason not to:
 
- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **UI primitives:** shadcn/ui where useful
- **Content format:** MDX or structured JSON/content objects
- **Icons:** lucide-react
- **Image handling:** next/image
- **Deployment:** Vercel
 
Optional:
- **Diagram/interactive visuals:** SVG and lightweight canvas-based components
- **Content collections:** local content folder first, CMS later if needed
 
---
 
## 6. Information Architecture
 
The website should include these primary sections/pages:
 
- Home
- How It Works
- Learn
- Gallery
- Export & Share
- About
 
A sticky header is preferred on desktop. Mobile nav should be simple and clean.
 
---
 
## 7. Page Intent
 
### Home
Purpose:
- Introduce Cyclomat quickly
- Establish aesthetic and value
- Lead users into learning flow
 
Should include:
- Hero
- visual artwork examples
- short explanation
- “why it’s different”
- beginner entry CTA
- featured gallery previews
 
### How It Works
Purpose:
- Explain core mental model in plain language
 
Should explain:
- Cycloid
- Arms
- Frequency
- Radius
- Phase
- Layering
- Keyframes (intro only)
 
### Learn
Purpose:
- Guided onboarding/tutorial content
 
Should include beginner-friendly modules such as:
- First shape
- Increasing complexity
- Layers and color
- Layout transforms
- Keyframes and tweening
- Exporting artwork
 
### Gallery
Purpose:
- Inspire exploration
- showcase artistic range
- create aspiration
 
Should support:
- large previews
- tags or metadata
- optional “how this was made” notes
 
### Export & Share
Purpose:
- Explain export formats and use cases
 
Must cover:
- raster export sizes
- PDF/vector export
- no background / transparency
- project file sharing
 
### About
Purpose:
- Explain product philosophy
- connect Cyclomat to timeless geometric play and harmonic form
 
---
 
## 8. Visual Direction
 
The visual style should be:
 
- Dark or neutral-forward with rich contrast
- Gallery-led
- geometric
- elegant
- spacious
- subtly futuristic
- artist-centric
 
### Design cues
- Rounded but not playful
- Crisp typography
- Thin line accents
- Rich image framing
- Soft motion
- Occasional grid / diagram motifs
- Avoid excessive gradients unless tastefully restrained
 
### Avoid
- Generic startup SaaS aesthetic
- crowded hero sections
- too much copy above the fold
- overuse of glassmorphism
- loud neon unless used very intentionally
 
---
 
## 9. Content Tone
 
Use language that is:
 
- clear
- calm
- inspiring
- confident
- non-jargony
- slightly poetic where appropriate
 
Avoid:
- overly technical explanations
- hard-sell marketing language
- vague “revolutionary” claims
- AI-sounding filler copy
 
Good tone examples:
- “Frequency shapes the family of the form.”
- “Start with two arms and simple ratios.”
- “Small changes in phase can create dramatically different results.”
 
---
 
## 10. Component Guidelines
 
Build reusable components. Prefer composability over page-specific one-offs.
 
Suggested components:
- Header
- Footer
- Hero section
- Artwork showcase cards
- Feature cards
- Concept explainer blocks
- Tutorial step cards
- Before/after comparison blocks
- CTA sections
- Gallery grid
- FAQ accordion
- Section heading component
 
Optional components:
- parameter diagram card
- animated line-art preview
- callout box
- learning progression rail
 
---
 
## 11. Motion Guidelines
 
Animation should feel intentional and restrained.
 
Good uses:
- fade/slide section entrances
- hover zoom on artwork
- gentle parallax or drift
- animated line drawing reveals
- tab/content transitions
 
Avoid:
- overly bouncy motion
- distracting infinite movement
- large animation delays that slow comprehension
 
---
 
## 12. Accessibility Requirements
 
Must include:
- semantic HTML
- keyboard navigability
- sufficient contrast
- reduced motion friendliness where feasible
- alt text for artwork previews
- readable text sizing and spacing
 
Do not sacrifice usability for artistic styling.
 
---
 
## 13. Performance Requirements
 
Optimize for:
- fast initial page load
- lazy loading for gallery assets
- properly sized responsive images
- minimal unnecessary client-side JS
- strong Lighthouse performance where practical
 
---
 
## 14. File / Code Organization
 
Suggested structure:
 
/app
  /(marketing)
    /page.tsx
   /how-it-works/page.tsx
    /learn/page.tsx
    /gallery/page.tsx
    /export/page.tsx
    /about/page.tsx
 
/components
  /layout
  /marketing
  /gallery
  /learn
  /ui
 
/content
  /tutorials
  /gallery
  /site-copy
 
/lib
  /types
  /utils
 
/public
  /images
  /artwork
  /diagrams
 
Keep content and UI separated where reasonable.
 
---
 
## 15. Content Modeling Guidance
 
Content likely to change should be abstracted into data structures.
 
Examples:
- tutorial steps
- gallery entries
- feature summaries
- FAQs
- concept explainers
 
This allows quick editing without deeply touching layout code.
 
---
 
## 16. MVP Definition
 
The MVP must include:
 
1. Home page
2. How It Works page
3. Learn page with at least 3 tutorials
4. Gallery page
5. Export & Share page
6. About page
7. Responsive navigation/footer
8. Reusable styling system
9. Placeholder or curated artwork assets
10. Smooth deployment-ready production build
 
---
 
## 17. Quality Bar
 
The website is ready when:
- a first-time visitor immediately understands what Cyclomat is
- the site feels premium and art-driven
- tutorials are genuinely helpful, not filler
- visual examples support comprehension
- mobile experience remains strong
- code is clean enough for continued iteration
 
---
 
## 18. Implementation Behavior for the Agent
 
When coding:
- implement page-by-page, not randomly
- establish design system early
- create reusable section primitives
- keep copy editable
- avoid premature complexity
- use tasteful placeholder assets when final assets are unavailable
- leave clean comments only where useful
- prefer maintainability over flashy hacks
 
When uncertain:
- choose clarity
- choose elegance
- choose modularity
- choose faster comprehension for the user
 
---
 
## 19. Future Expansion Hooks
 
Architect so the site can later support:
- interactive mini playground
- blog/journal
- downloadable guide PDFs
- artist showcases
- embedded demo video
- CMS-driven content
- newsletter/email capture
- app download / product launch funnel
 
---
 
## 20. Final Principle
 
The site should make a new visitor think:
 
“I understand what this is, I want to try it, and I believe I can learn it.”

