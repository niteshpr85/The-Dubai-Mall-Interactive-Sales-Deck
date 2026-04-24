# The Dubai Mall — Interactive Sales Deck

A cinematic, fully interactive browser-based sales deck for **The Dubai Mall**, the world's most visited shopping and entertainment destination. Built as a self-contained web application for screen-shared sales calls and standalone prospect exploration.

<img width="1914" height="853" alt="Screenshot 2026-04-24 120845" src="https://github.com/user-attachments/assets/3b9b2c44-e255-44ea-a3ff-d2e38148c2d8" />
<img width="1918" height="858" alt="Screenshot 2026-04-24 120909" src="https://github.com/user-attachments/assets/8ea710bf-6856-406a-b0f5-3c106bd7cdf9" />



---

## Live Demo



https://github.com/user-attachments/assets/2290ee4d-4299-4872-bf25-ed9223f85eca





**GitHub Repo:** [niteshpr85/The-Dubai-Mall-Interactive-Sales-Deck](https://github.com/niteshpr85/The-Dubai-Mall-Interactive-Sales-Deck)

**Vercel Status:** https://dubai-mall-deck-eta.vercel.app/.

**Local Preview:** Run `npm run dev` and open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** (App Router) | React framework with static export |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Scroll-triggered animations, page transitions, micro-interactions |
| **Lucide React** | Consistent iconography |
| **Google Fonts** | Inter (body) + Playfair Display (luxury headings) |

---

## Design Decisions

### Subject: The Dubai Mall
Chosen for its global recognition, unmatched scale (80M+ visitors, 1,200+ stores), and rich publicly available media assets. It perfectly embodies the "small city" concept described in the brief.

### Visual Language
- **Palette:** Deep blacks (`#0A0A0A`), warm gold accent (`#C9A96E`), crisp white typography
- **Typography:** Playfair Display for editorial luxury headlines; Inter for clean, modern body text
- **Inspiration:** Apple.com minimalism, Digideck non-linearity, Tesla confidence, Hermès warmth

### Video-First Strategy
While this demo uses high-quality imagery from Unsplash (for reliability and zero setup), the architecture is designed for video:
- `VideoBackground` component with intersection-observer play/pause
- Lazy loading with `preload="metadata"`
- Gradient overlays for text legibility

### Non-Linear Navigation
- **Side dot navigation** (desktop): Jump to any section instantly
- **Hamburger menu overlay**: Full-screen section navigator with smooth scroll
- **Scroll-driven journey**: Viewer controls their own path

---

## Project Structure

```
app/
├── sections/           # 8 content sections
│   ├── HeroSection.tsx
│   ├── WhyThisProperty.tsx
│   ├── RetailSection.tsx
│   ├── LuxurySection.tsx
│   ├── DiningSection.tsx
│   ├── AttractionsSection.tsx
│   ├── EventsSection.tsx    # Phase 2: Expandable sub-module
│   └── CTASection.tsx
├── components/         # Reusable UI components
│   ├── Navigation.tsx
│   ├── VideoBackground.tsx
│   ├── StatCard.tsx
│   └── FloatingCTA.tsx
├── hooks/              # Custom React hooks
│   ├── useInView.ts
│   ├── useVideoPreload.ts
│   └── useActiveSection.ts
├── page.tsx            # Main deck container
├── layout.tsx          # Root layout with metadata
└── globals.css         # Global styles, animations, custom properties
```

---

## AI Tools Used

| Tool | Application |
|------|-------------|
| **ChatGPT (OpenAI)** | Sales copy refinement, headline optimization, architectural planning |
| **AI Image Analysis** | Studied luxury brand websites (Apple, Hermès, Tesla) for color palette and interaction patterns |
| **Generative AI Concepts** | Venue rendering descriptions, hypothetical event space visuals (implemented via Unsplash curation for this demo) |

**📄 Detailed Prompt Documentation:** See [`AI_PROMPTS.md`](./AI_PROMPTS.md) for all prompts, concepts, and implementation notes.

---

## Performance Optimizations

- **Lazy Loading:** Images and videos load only when approaching viewport
- **Image Skeleton Loaders:** Custom `ImageWithSkeleton` component prevents layout shift and shows shimmer state during load
- **Error Boundaries:** Graceful error handling prevents single-component failures from crashing the entire deck
- **Intersection Observer:** Videos play/pause based on visibility; animations trigger on scroll
- **Static Export:** `next.config.js` outputs fully static HTML/CSS/JS
- **GPU Acceleration:** All animations use `transform` and `opacity` only
- **Reduced Motion Support:** Respects `prefers-reduced-motion` system preference across all animated sections
- **Font Loading:** Google Fonts with `display=swap`

---

## Setup Instructions

```bash
# Clone the repository
git clone <repo-url>
cd dubai-mall-deck

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static export will be in the /dist folder
```

## Deploy to Vercel

This project is already linked to a Vercel project (`dubai-mall-deck`).

### Option 1: CLI Deployment (Recommended)
```bash
# Login to Vercel (opens browser)
npx vercel login

# Deploy to production
npx vercel --prod
```

### Option 2: Git Integration
1. Push this repository to GitHub
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js and deploy

### Option 3: Vercel Token (CI/CD)
```bash
# Set your token as an environment variable, then:
vercel --token <YOUR_TOKEN> --prod
```

---

## Expandability Architecture

Each section is a self-contained module. Future additions require zero changes to existing code:

```typescript
// Adding a new section:
import NewModule from './sections/NewModule';

// In page.tsx, simply add:
<NewModule />
```

### Planned Expansion Modules
- **Sponsorship Module:** Detailed partnership tiers with ROI calculators
- **Leasing Paths:** Segmented by category (luxury, retail, F&B, pop-up)
- **Venue-Specific Modules:** Dedicated 360° virtual tours for each event space
- **Data Dashboard:** Live foot traffic, demographic heatmaps

---

## Business Objectives Served

| Section | Primary Goal |
|---------|-------------|
| Hero | Emotional buy-in within 10 seconds |
| Why This Property | Data-driven confidence in scale & reach |
| Retail | Drive retail leasing inquiries |
| Luxury | Attract high-end anchor tenants |
| Dining | F&B leasing & lifestyle positioning |
| Attractions | Differentiation from standard malls |
| Events (Module) | Drive event bookings & sponsorships |
| CTA | Convert interest to action |

---

## What I Would Improve With More Time

1. **Real Video Assets:** Integrate official Dubai Mall B-roll with custom compression pipeline
2. **3D Venue Tours:** WebGL-powered 360° walkthroughs of event spaces using Three.js
3. **Interactive Map:** Clickable floor plan showing available retail units in real-time
4. **Analytics Integration:** Track which sections drive the most CTA clicks for sales team optimization
5. **CMS Integration:** Headless CMS (e.g., Sanity) for non-technical content updates
6. **Mobile Polish:** Enhanced touch gestures, swipe navigation, portrait video optimization
7. **AI-Generated Imagery:** Custom Midjourney renders for every section instead of stock photography

---

## License

This is a portfolio project built for demonstration purposes. All Dubai Mall branding, statistics, and imagery are used under fair use for non-commercial portfolio presentation.

---

**Built by:** Nitesh Prajapati
**Date:** 2026
**Role:** Senior Frontend Engineer & AI-Powered Interactive Design

