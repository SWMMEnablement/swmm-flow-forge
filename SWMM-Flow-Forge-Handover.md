# SWMM Flow Forge — Complete Project Handover

> **App Name:** SWMM Flow Forge  
> **Live URL:** https://swmm-flow-forge.lovable.app  
> **Subject:** Robert E. Dickinson — SWMM Architect & Interoperability Expert  
> **Generated:** 2026-02-12  

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Architecture](#architecture)
6. [Design System](#design-system)
7. [Component Documentation](#component-documentation)
8. [Content & Data](#content--data)
9. [SEO & Metadata](#seo--metadata)
10. [Assets](#assets)
11. [Dependencies](#dependencies)
12. [Replit Setup](#replit-setup)
13. [Known Considerations](#known-considerations)

---

## Overview

A single-page portfolio/brochure site for Robert E. Dickinson's SWMM (Storm Water Management Model) consulting practice. The site showcases 52 years of EPASWMM expertise, 18 years at Innovyze/Autodesk, and technical resources for the stormwater modeling community.

**Key site sections:**
- Hero with animated water particles
- About/Bio with profile photo
- Career timeline (1973–present)
- Resources from SWMM5.org & OpenSWMM.org
- Rich article cards (LinkedIn & SWMM5.org)
- SWMM Enhancement Proposals (SEP-001, SEP-002)
- LinkedIn thought leadership strategy
- Contact with collaboration opportunities

**Important:** This is a **frontend-only** static site. No backend, no database, no authentication. All content is hardcoded in component files.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | ^18.3.1 |
| Build Tool | Vite | (see package.json) |
| Language | TypeScript | ES2020 target |
| Styling | Tailwind CSS + tailwindcss-animate | ^1.0.7 |
| UI Library | shadcn/ui (Radix primitives) | Various @radix-ui packages |
| Routing | react-router-dom | ^6.30.1 |
| State/Data | @tanstack/react-query | ^5.83.0 (wired but unused) |
| Icons | lucide-react | ^0.462.0 |
| Charts | recharts | ^2.15.4 |
| Animations | CSS keyframes (no framer-motion) | Custom in index.css |
| Component Variants | class-variance-authority (cva) | ^0.7.1 |
| Class Merging | clsx + tailwind-merge | ^2.1.1 / ^2.6.0 |
| Forms | react-hook-form + zod + @hookform/resolvers | ^7.61.1 / ^3.25.76 |

---

## Project Structure

```
├── public/
│   ├── favicon.ico                # Site favicon
│   ├── og-image.png               # Open Graph social preview image
│   ├── placeholder.svg            # Generic placeholder
│   └── robots.txt                 # Search engine crawling rules
│
├── src/
│   ├── assets/
│   │   ├── hero-bg.jpg            # Hero section background (imported as ES module)
│   │   └── profile-headshot.jpeg  # Robert's profile photo (imported as ES module)
│   │
│   ├── components/
│   │   ├── ui/                    # ~50 shadcn/ui primitives (accordion, button, card, dialog, etc.)
│   │   ├── About.tsx              # Bio section with profile photo, expertise badges, achievements
│   │   ├── BlogArticles.tsx       # Rich article cards with categories, insights, stats bar (312 lines)
│   │   ├── Contact.tsx            # Contact methods, collaboration types, contact form
│   │   ├── Hero.tsx               # Full-screen hero with animated gradient text, CTAs, stats
│   │   ├── LazyLoadWrapper.tsx    # IntersectionObserver-based lazy loading wrapper
│   │   ├── LinkedInInsights.tsx   # Content strategy section (pillars, ready-to-ship posts)
│   │   ├── Navigation.tsx         # Fixed top navbar with dark mode toggle, social links, mobile menu
│   │   ├── Resources.tsx          # Categorized resource cards from SWMM5.org & OpenSWMM.org
│   │   ├── SEPProposals.tsx       # SEP-001 (SWMM-JSON) and SEP-002 (Ensembles) showcase
│   │   ├── Timeline.tsx           # Alternating career timeline with milestones (1973–present)
│   │   └── WaterParticles.tsx     # Animated floating droplets, ripples, SVG wave lines
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile breakpoint detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts               # cn() utility (clsx + tailwind-merge)
│   │
│   ├── pages/
│   │   ├── Index.tsx              # Main page — assembles all sections with lazy loading
│   │   └── NotFound.tsx           # 404 page
│   │
│   ├── App.tsx                    # Root: QueryClientProvider + TooltipProvider + BrowserRouter
│   ├── App.css                    # Minimal (mostly unused)
│   ├── index.css                  # Full design system: CSS variables, gradients, shadows, animations
│   ├── main.tsx                   # Entry point: createRoot + render
│   └── vite-env.d.ts              # Vite type declarations
│
├── components.json                # shadcn/ui configuration
├── tailwind.config.ts             # Tailwind theme: colors, shadows, gradients, animations
├── vite.config.ts                 # Vite config: port 8080, @/ alias → src/
├── tsconfig.json                  # Root TS config with path aliases
├── tsconfig.app.json              # App TS config (ES2020, bundler mode)
├── tsconfig.node.json             # Node TS config for build tools
├── index.html                     # HTML entry with SEO meta tags
└── package.json                   # Dependencies and scripts
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (port 8080, binds to all interfaces)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The Vite dev server is configured to:
- Listen on port **8080**
- Bind to `::` (all network interfaces — works on Replit/containers)
- Use `@/` path alias pointing to `./src/`

---

## Architecture

### Single-Page App (SPA)
- **One route** (`/`) renders `Index.tsx` which composes all sections vertically
- `NotFound.tsx` catches unmatched routes with a 404 page
- Navigation uses anchor links (`#about`, `#timeline`, etc.) with `scrollIntoView({ behavior: 'smooth' })`

### Lazy Loading Strategy
Below-the-fold sections use a dual-layer lazy loading approach:
1. **`React.lazy()`** — code-splits each section into separate chunks
2. **`LazyLoadWrapper`** — custom IntersectionObserver component that delays rendering until the section is near the viewport (100px rootMargin, 0.1 threshold)
3. **`SectionSkeleton`** — animated pulse skeleton shown while loading

```
Index.tsx loads:
  ├── Navigation (eager)
  ├── Hero (eager)
  ├── About (lazy + intersection)
  ├── Timeline (lazy + intersection)
  ├── Resources (lazy + intersection)
  ├── BlogArticles (lazy + intersection)
  ├── SEPProposals (lazy + intersection)
  ├── LinkedInInsights (lazy + intersection)
  └── Contact (lazy + intersection)
```

### Dark Mode
- Toggled via button in `Navigation.tsx`
- Adds/removes `.dark` class on `<html>` element
- Persisted in `localStorage` key `"theme"`
- Falls back to `prefers-color-scheme: dark` system preference
- All colors defined for both `:root` and `.dark` in `index.css`

### State Management
- No global state library
- `@tanstack/react-query` is installed and wired in `App.tsx` but currently unused (no API calls)
- Component-local state via `useState` only

---

## Design System

### CSS Variables (src/index.css)

All colors are HSL values (without the `hsl()` wrapper) defined as CSS custom properties:

#### Light Theme (`:root`)
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `220 15% 97%` | Page background |
| `--foreground` | `210 20% 15%` | Primary text |
| `--primary` | `205 87% 25%` | Deep water blue — headings, links, CTAs |
| `--primary-foreground` | `0 0% 98%` | Text on primary backgrounds |
| `--primary-glow` | `205 100% 45%` | Gradient endpoint, glow effects |
| `--secondary` | `185 65% 35%` | Flow teal — secondary accents |
| `--accent` | `195 100% 50%` | Hydraulic cyan — highlights |
| `--card` | `0 0% 100%` | Card backgrounds |
| `--muted` | `210 15% 93%` | Subtle backgrounds |
| `--muted-foreground` | `210 15% 45%` | Secondary text |
| `--border` | `210 25% 88%` | Borders |
| `--destructive` | `0 75% 55%` | Error/warning states |

#### Dark Theme (`.dark`)
All tokens redefined with darker backgrounds and brighter accent colors (e.g., `--primary: 205 100% 65%`).

### Custom Gradients
```css
--gradient-primary: linear-gradient(135deg, primary → primary-glow)
--gradient-flow: linear-gradient(90deg, secondary → accent)
--gradient-depth: linear-gradient(180deg, primary-glow → primary)
```

### Custom Shadows
```css
--shadow-technical: 0 4px 20px -4px primary/15%
--shadow-flow: 0 8px 32px -8px accent/20%
--shadow-glow: 0 0 40px primary-glow/30%
```

### Custom CSS Classes (index.css @layer components)
| Class | Purpose |
|-------|---------|
| `.btn-hero` | Primary CTA button with gradient, shadow, scale hover |
| `.btn-flow` | Secondary CTA with flow gradient |
| `.card-technical` | Card with backdrop blur, border, technical shadow |
| `.animate-flow` | Gentle floating/rotation (3s infinite) |
| `.animate-pulse-glow` | Pulsing box-shadow (2s infinite) |
| `.animate-wave` | SVG wave path animation (4s infinite) |
| `.animate-wave-slow` | Slower wave variant (6s infinite) |

### Tailwind Extensions (tailwind.config.ts)
- Custom colors mapped to CSS variables via `hsl(var(--token))`
- Custom `boxShadow`: `technical`, `flow`, `glow`
- Custom `backgroundImage`: `gradient-primary`, `gradient-flow`, `gradient-depth`
- `primary.glow` color token for gradient endpoints
- `card.border` color token for card borders
- `tailwindcss-animate` plugin for accordion/transition animations

### Typography
- System font stack (`font-sans`) with antialiasing
- Headings: `font-semibold tracking-tight`
- Code blocks: `font-mono` with muted background
- Font feature settings: `"rlig" 1, "calt" 1`

---

## Component Documentation

### Navigation.tsx
- **Fixed** top bar with backdrop blur (`bg-background/80 backdrop-blur-md`)
- **Nav items:** About, Timeline, Resources, Articles, SEP Proposals, Contact
- **Desktop:** Horizontal links + social icons (LinkedIn, GitHub, Twitter/X) + dark mode toggle
- **Mobile:** Hamburger menu with slide-down panel including social links
- **Dark mode:** Sun/Moon icon toggle, persists to localStorage

### Hero.tsx
- **Full-screen** section with background image (`hero-bg.jpg`) + gradient overlays
- **WaterParticles** component overlaid for animated water effects
- **Content:** Badge ("18 Years Innovyze/Autodesk • 52 Years EPASWMM"), animated gradient headline, subheadline, value props, 3 CTA buttons (SWMM5.org, OpenSWMM.org, LinkedIn), quick stats grid
- **Scroll indicator** at bottom with bounce animation

### WaterParticles.tsx
- **20 floating droplets** — random position, size (2-6px), opacity, with CSS `float` animation
- **5 ripple circles** — expanding ring animation at random positions
- **2 SVG wave lines** — using CSS `animate-wave` for path morphing
- All pointer-events disabled, absolutely positioned

### About.tsx
- **Profile photo** using Avatar component with ring styling and fallback "RD"
- **Expertise badges** (8 skills): ICM InfoWorks, SWMM4/5 Conversions, Ruby Scripting, etc.
- **3 achievement cards** with metrics: "52 Years", "SWMM5.org", "AI Innovation"
- **Professional positioning statement** in highlighted card
- **CTAs:** LinkedIn Articles, SWMM5.org, OpenSWMM.org

### Timeline.tsx
- **9 milestones** from 1973 to present with date ranges
- **Alternating layout** — cards alternate left/right on desktop, all left on mobile
- **Vertical gradient line** connecting milestones (primary → secondary → accent)
- **Color-coded dots** by type (education, research, industry, development, current, community, recognition, leadership)
- **Highlight badges** on key milestones (SWMM 3 & 4, XP-SWMM, SWMM 5, 18 Years, 900+ Articles, SWMM5+)
- **Summary stats** grid: 52 years, 5 SWMM versions, 25K+ support incidents, 900+ articles

### Resources.tsx
- **Two resource groups:**
  - **SWMM5.org** (5 cards): Tutorial, Ruby Scripting, AI Conversion, PRN Tools, Reference Tables
  - **OpenSWMM.org** (5 cards): Knowledge Base, Code Viewer, Example Models, JWMM Journal, ICWMM Conference
- Each card has icon, title, tags, description, and "Learn More" link
- Color-coded by source (primary for SWMM5.org, secondary for OpenSWMM.org)

### BlogArticles.tsx (312 lines — largest component)
- **Stats bar:** 900+ Articles, 50K+ Readers, 200+ Ruby Snippets, 30+ AI Guides
- **LinkedIn Articles** (4 cards): AI conversion, PRN files, Ruby scripting
- **SWMM5.org Posts** (4 cards): EPA tutorial, GeoPlan tips, import/export, reference tables
- **ArticleCard** sub-component with:
  - Gradient accent bar (primary for LinkedIn, secondary for SWMM5)
  - Category badge with color coding (AI & Automation, Interoperability, Ruby Scripting, Tutorial, Best Practices, Reference)
  - Reading time + publication date
  - Icon + title
  - Description (2-line clamp)
  - "Key Insight" callout box with lightbulb icon
  - Tag badges
  - "Read Article" link with arrow animation
- **Bottom CTA** to follow on LinkedIn / visit SWMM5.org

### SEPProposals.tsx
- **Process overview:** 4-step pipeline (Draft → Review → Accepted → Implementation)
- **SEP-001:** SWMM-JSON + Interop SDK — lossless conversion, app connectors, result comparers
- **SEP-002:** Ensembles & Uncertainty — engine-level ensemble manager, sensitivity analysis, percentile outputs
- Each SEP card has: icon, status/priority badges, description, deliverables list, expected impact, timeline, action buttons
- **Benchmark Pack CTA** with 5 quality features

### LinkedInInsights.tsx
- **Metrics:** Target followers (10K+), newsletter open rate (15%), carousel save rate (30%)
- **4 content pillars:** Patterns & Pitfalls, Interop Diaries, Benchmarks in Public, Ensembles in Practice
- **2 ready-to-ship posts** with format, description, CTA, expected engagement
- **Monthly Office Hours CTA** with schedule/join buttons

### Contact.tsx
- **6 contact methods:** LinkedIn (primary), GitHub, Twitter/X, Email (robert.dickinson@gmail.com), SWMM5.org, OpenSWMM.org
- **Quick Actions:** Schedule Office Hours, Download Benchmark Pack (UI only, no backend)
- **4 collaboration types:** SEP Review, Pilot Utility Partnership, GUI Integration, Academic Collaboration
- **Contact form:** Name, Organization, Email, Interest dropdown, Message textarea, Send button
- **Note:** Form has no backend — submission does nothing currently

### LazyLoadWrapper.tsx
- Wraps children with IntersectionObserver
- Shows `fallback` until section enters viewport
- Disconnects observer after first intersection
- Configurable `rootMargin` (default: 100px) and `threshold` (default: 0.1)

---

## Content & Data

All content is **hardcoded** in the component files. Key data objects:

| Component | Data | Count |
|-----------|------|-------|
| About.tsx | `expertise` array | 8 skills |
| About.tsx | `achievements` array | 3 items |
| Timeline.tsx | `milestones` array | 9 milestones |
| Resources.tsx | `swmm5Resources` array | 5 resources |
| Resources.tsx | `openswmmResources` array | 5 resources |
| BlogArticles.tsx | `linkedInArticles` array | 4 articles |
| BlogArticles.tsx | `swmm5Articles` array | 4 articles |
| SEPProposals.tsx | `seps` array | 2 proposals |
| SEPProposals.tsx | `benchmarkFeatures` array | 5 features |
| LinkedInInsights.tsx | `contentPillars` array | 4 pillars |
| LinkedInInsights.tsx | `readyToPosts` array | 2 posts |
| Contact.tsx | `contactMethods` array | 6 methods |
| Contact.tsx | `collaborationTypes` array | 4 types |
| Navigation.tsx | `navItems` array | 6 nav links |

### External Links Referenced Throughout
| URL | Purpose |
|-----|---------|
| https://swmm5.org | Robert's technical blog (900+ articles) |
| https://www.openswmm.org | Community hub / knowledge base |
| https://www.linkedin.com/in/robertdickinson/ | LinkedIn profile |
| https://github.com/dickinsonre | GitHub profile |
| https://x.com/RDickinson | Twitter/X profile |
| mailto:robert.dickinson@gmail.com | Email contact |
| https://www.chijournal.org/JWMM | Journal of Water Management Modeling |
| https://www.icwmm.org | ICWMM Conference |

---

## SEO & Metadata

Defined in `index.html`:

```html
<title>Robert E. Dickinson - SWMM Architect & Interoperability Expert</title>
<meta name="description" content="Leading SWMM interoperability and ensemble modeling initiatives at Autodesk..." />
<meta name="author" content="Robert E. Dickinson" />

<!-- Open Graph -->
<meta property="og:title" content="Robert E. Dickinson - SWMM Architect & Interoperability Expert" />
<meta property="og:url" content="https://swmm5.org" />
<meta property="og:image" content="/og-image.png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@RDickinson" />
```

---

## Assets

| File | Type | Location | Usage |
|------|------|----------|-------|
| `hero-bg.jpg` | Background image | `src/assets/` | Hero section background (ES module import) |
| `profile-headshot.jpeg` | Profile photo | `src/assets/` | About section Avatar (ES module import) |
| `og-image.png` | Social preview | `public/` | Open Graph / Twitter Card image |
| `favicon.ico` | Favicon | `public/` | Browser tab icon |
| `placeholder.svg` | Placeholder | `public/` | Generic fallback |
| `robots.txt` | SEO | `public/` | Search engine crawling rules |

**Important:** Images in `src/assets/` are imported as ES modules (e.g., `import heroImage from '@/assets/hero-bg.jpg'`). They go through Vite's asset pipeline with hashing. Images in `public/` are served as-is.

---

## Dependencies

### Core
| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `react-router-dom` | Client-side routing |
| `@tanstack/react-query` | Data fetching (wired but unused) |

### UI & Styling
| Package | Purpose |
|---------|---------|
| `tailwindcss-animate` | Animation utilities for Tailwind |
| `class-variance-authority` | Component variant management (cva) |
| `clsx` + `tailwind-merge` | Conditional class name merging |
| `lucide-react` | Icon library (Cpu, Code2, Droplets, etc.) |
| `recharts` | Charts (available but minimally used) |

### shadcn/ui Radix Primitives (~25 packages)
All `@radix-ui/react-*` packages provide accessible, unstyled UI primitives: accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, toggle-group, tooltip, etc.

### Forms
| Package | Purpose |
|---------|---------|
| `react-hook-form` | Form state management |
| `@hookform/resolvers` | Validation resolvers |
| `zod` | Schema validation |

### Other
| Package | Purpose |
|---------|---------|
| `sonner` | Toast notifications (alternative) |
| `vaul` | Drawer component |
| `cmdk` | Command palette |
| `date-fns` | Date formatting |
| `embla-carousel-react` | Carousel |
| `input-otp` | OTP input |
| `react-resizable-panels` | Resizable panels |
| `next-themes` | Theme management (installed but custom implementation used) |
| `react-day-picker` | Date picker |

---

## Replit Setup

### Quick Start
1. Create a new Replit with **Node.js** or **Vite (React)** template
2. Upload/clone all project files
3. Run `npm install`
4. Set the run command to `npm run dev`
5. Expose port **8080**

### Configuration Notes
- Vite binds to `::` (all interfaces) — works in containers/Replit
- Port 8080 is hardcoded in `vite.config.ts`
- Path alias `@/` → `./src/` is configured in both `vite.config.ts` and `tsconfig.json`
- No environment variables needed — everything is static/client-side
- No `.env` file required

### .replit Configuration (if needed)
```toml
run = "npm run dev"

[nix]
channel = "stable-24_05"

[[ports]]
localPort = 8080
externalPort = 80
```

---

## Known Considerations

1. **BlogArticles.tsx** (312 lines) is the largest component — could be split into `ArticleCard`, `StatsBar`, and `ArticleSection` sub-components.

2. **LinkedInInsights.tsx** contains content *strategy* (pillars, metrics, ready-to-ship posts) rather than actual embedded insights. Consider replacing with real content or an API feed.

3. **Contact form** has no backend — the `<form>` submit does nothing. To make it functional, add a backend service (e.g., Formspree, SendGrid, or a serverless function).

4. **"Quick Actions"** buttons (Schedule Office Hours, Download Benchmark Pack) are UI-only with no functionality.

5. **"View Full Proposal" and "Join Review Process"** buttons in SEPProposals have no `href` — they're non-functional placeholders.

6. **NotFound.tsx** uses raw color classes (`bg-gray-100`, `text-blue-500`) instead of design system tokens.

7. **`@tanstack/react-query`** and several shadcn/ui components are installed but unused — safe to remove for bundle size if desired.

8. **No tests** — no unit, integration, or e2e tests exist.

9. **No CI/CD** — no GitHub Actions or deployment pipeline configured.

10. **Dynamic Tailwind classes** in BlogArticles.tsx (e.g., `` `text-${accentColor}` ``) may not be picked up by Tailwind's JIT compiler. These work because the full class names appear elsewhere, but could break if those references are removed.
