# SWMM Flow Forge — Project Handover

## Overview

A single-page brochure/portfolio site for Robert Dickinson's SWMM (Storm Water Management Model) consulting practice. Built with React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

**Live URL:** https://swmm-flow-forge.lovable.app

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | ^18.3.1 |
| Build Tool | Vite | (see package.json) |
| Language | TypeScript | (see tsconfig) |
| Styling | Tailwind CSS + tailwindcss-animate | ^1.0.7 |
| UI Library | shadcn/ui (Radix primitives) | Various |
| Routing | react-router-dom | ^6.30.1 |
| State/Data | @tanstack/react-query | ^5.83.0 |
| Icons | lucide-react | ^0.462.0 |
| Charts | recharts | ^2.15.4 |
| Animations | CSS keyframes (no framer-motion) | — |

---

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── hero-bg.jpg          # Hero background image
│   │   └── profile-headshot.jpeg # Profile photo
│   ├── components/
│   │   ├── ui/                  # shadcn/ui primitives (accordion, button, card, etc.)
│   │   ├── About.tsx            # About/bio section
│   │   ├── BlogArticles.tsx     # Rich article cards (LinkedIn + SWMM5.org)
│   │   ├── Contact.tsx          # Contact form/info
│   │   ├── Hero.tsx             # Hero banner with water particles
│   │   ├── LazyLoadWrapper.tsx  # Intersection Observer lazy loader
│   │   ├── LinkedInInsights.tsx # LinkedIn thought leadership strategy
│   │   ├── Navigation.tsx       # Top navbar
│   │   ├── Resources.tsx        # External resource links
│   │   ├── SEPProposals.tsx     # SEP proposal showcase
│   │   ├── Timeline.tsx         # Career/experience timeline
│   │   └── WaterParticles.tsx   # Animated water droplets/ripples (hero bg)
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Mobile breakpoint hook
│   │   └── use-toast.ts         # Toast notification hook
│   ├── lib/
│   │   └── utils.ts             # cn() utility (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── Index.tsx            # Main page (assembles all sections)
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # Root with providers & router
│   ├── App.css                  # (minimal)
│   ├── index.css                # Design system tokens & animations
│   ├── main.tsx                 # Entry point
│   └── vite-env.d.ts
├── components.json              # shadcn/ui config
├── tailwind.config.ts           # Tailwind theme extensions
├── vite.config.ts               # Vite config (alias @/ → src/)
├── tsconfig.json                # TS config with path aliases
└── package.json                 # Dependencies
```

---

## Architecture Notes

### Single-Page App
- One route (`/`) renders `Index.tsx` which composes all sections vertically.
- `NotFound.tsx` catches unmatched routes.
- No backend, no database, no auth — purely static/client-side.

### Lazy Loading
- Below-the-fold sections use `React.lazy()` + a custom `LazyLoadWrapper` (Intersection Observer) for performance.

### Design System
- All colors defined as HSL CSS variables in `src/index.css` (`:root` and `.dark`).
- Semantic tokens: `--primary`, `--secondary`, `--accent`, `--background`, `--foreground`, `--muted`, etc.
- Custom CSS classes: `.btn-hero`, `.btn-flow`, `.card-technical`, `.animate-flow`, `.animate-pulse-glow`, `.animate-wave`.
- **Important:** Components use Tailwind semantic classes (`bg-primary`, `text-foreground`) — never raw color values.

### shadcn/ui
- Pre-installed components in `src/components/ui/`. These are copy-pasted Radix-based components, not an npm package.
- Config in `components.json` — uses `@/` path alias.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Replit-Specific Setup
1. Create a new Replit with **Node.js** or **Vite (React)** template.
2. Upload/clone all project files.
3. Run `npm install`.
4. In `.replit` or Replit config, set the run command to `npm run dev` and expose port **8080**.
5. If Replit uses a different host binding, the Vite config already binds to `::` (all interfaces), so it should work.

---

## Key Dependencies to Note

| Package | Purpose |
|---------|---------|
| `@tanstack/react-query` | Data fetching (currently unused but wired up) |
| `react-router-dom` | Client-side routing |
| `lucide-react` | Icon library |
| `recharts` | Charts (used in some sections) |
| `sonner` + `@radix-ui/react-toast` | Toast notifications |
| `tailwindcss-animate` | Animation utilities |
| `class-variance-authority` | Component variant management |
| `clsx` + `tailwind-merge` | Conditional class merging |

---

## No Backend

This project is **frontend-only**. There is no database, no API, no authentication, and no server-side logic. All content is hardcoded in the component files. If you want to add dynamic content, you'll need to add a backend service separately.

---

## Known Considerations

1. **BlogArticles.tsx** (312 lines) — largest component, could be split into sub-components.
2. **LinkedInInsights.tsx** — contains strategy/meta content rather than actual insights; may want to replace with real content.
3. **No actual tools hosted** — site markets AI conversion capabilities but doesn't include interactive tools.
4. **Images** — `hero-bg.jpg` and `profile-headshot.jpeg` are in `src/assets/` and imported as ES modules.
