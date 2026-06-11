# SWMM Flow Forge

> _README added by Robert Dickinson via Comet._

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn--ui-000000?logo=shadcnui&logoColor=white)

## About

**SWMM Flow Forge** is a content and resources website focused on the EPA Storm Water Management Model (SWMM). It brings together blog articles, LinkedIn insights, a development timeline, curated resources, and SWMM Enhancement Proposals (SEPs) in a single water-themed landing site.

It is part of the SWMMEnablement collection and is built on a modern Vite + React + TypeScript frontend styled with Tailwind CSS and shadcn/ui.

## What's Inside

| Area | Description |
| --- | --- |
| `src/components/Hero.tsx` | Landing hero section |
| `src/components/About.tsx` | About / overview section |
| `src/components/BlogArticles.tsx` | SWMM blog articles listing |
| `src/components/LinkedInInsights.tsx` | Curated LinkedIn insights |
| `src/components/SEPProposals.tsx` | SWMM Enhancement Proposals (SEPs) |
| `src/components/Resources.tsx` | Reference resources and links |
| `src/components/Timeline.tsx` | Project / development timeline |
| `src/components/Contact.tsx` | Contact section |
| `src/components/Navigation.tsx` | Site navigation |
| `src/components/WaterParticles.tsx` | Animated water particle background |
| `src/components/LazyLoadWrapper.tsx` | Lazy-loading performance wrapper |
| `src/components/ui/` | shadcn/ui reusable UI primitives |
| `src/assets/`, `public/` | Images and static assets |

## Tech Stack

| Layer | Technology |
| --- | --- |
| Language | TypeScript |
| Framework | React |
| Build tool | Vite |
| Styling | Tailwind CSS |
| UI components | shadcn/ui |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/SWMMEnablement/swmm-flow-forge.git
cd swmm-flow-forge

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL printed by Vite (typically http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## License

No license file is currently included. Contact the SWMMEnablement organization regarding reuse.
