# AI Tools & Prompts Documentation

This document records the AI tools and specific prompts used in the creation of The Dubai Mall Interactive Sales Deck.

---

## 1. ChatGPT (OpenAI) — Copy & Architecture

### Sales Copy Refinement
```
Refine these headlines for a luxury retail leasing sales deck:
- "The World's Most Visited Destination"
- "Why This Property"
- "Where the World Shops"

Make them more compelling for C-suite retail executives. Optimize for emotional impact + business credibility.
```

### Section Structure Planning
```
I need to build an 8-section interactive sales deck for The Dubai Mall targeting:
1. Retail leasing managers
2. Event planners
3. Brand sponsorship decision-makers

Map out the ideal narrative flow with a clear business objective for each section. Include conversion CTAs.
```

### Testimonial Copy Generation
```
Generate 2 anonymous tenant testimonials for The Dubai Mall that sound authentic and include specific business metrics (revenue per sq ft, foot traffic comparisons). Keep them professional and credible.
```

---

## 2. AI Image Analysis — Design System

### Luxury Brand Palette Analysis
```
Analyze the color palettes and typography choices of:
- Apple.com (minimalism, confidence)
- Hermès.com (warmth, editorial)
- Tesla.com (bold simplicity)

Extract the common patterns for a dark-mode luxury web experience. Recommend a primary palette of black + gold + white with specific hex values.
```

**Output Applied:**
- Primary Background: `#0A0A0A`
- Secondary Surface: `#141414`
- Accent Gold: `#C9A96E`
- Text Primary: `#FFFFFF`
- Text Secondary: `#A3A3A3`

---

## 3. Generative AI Image Concepts

### Hero Section Visual
```
Prompt (DALL-E / Midjourney concept):
"Cinematic wide-angle photograph of The Dubai Mall exterior at golden hour, 
Burj Khalifa visible in background, warm ambient lighting, deep blacks and 
gold tones, luxury editorial photography style, 8K, photorealistic"
```

*Implementation note: Final hero uses curated Unsplash photography matching this aesthetic. AI-generated imagery can be swapped in by replacing the ImageWithSkeleton src prop.*

### Venue Rendering Concept
```
Prompt (Stable Diffusion concept):
"Interior of a luxury event atrium in Dubai, floor-to-ceiling glass, 
Burj Khalifa view, fashion week setup, warm gold accent lighting, 
minimalist luxury, architectural visualization, 4K render"
```

### Dining Lifestyle Visual
```
Prompt (Midjourney concept):
"Upscale restaurant interior with Dubai skyline visible through windows, 
fine dining table setting, warm candlelight, gold and black color scheme, 
editorial food photography, shallow depth of field"
```

---

## 4. Code Architecture Assistance

### Component Design Pattern
```
Design a reusable React TypeScript component for lazy-loaded background 
images with:
1. Skeleton loading state (shimmer animation)
2. Error fallback UI
3. Optional gradient overlay
4. Accessibility attributes

Use Framer Motion for transitions. Make it compatible with Next.js static export.
```

**Output:** `ImageWithSkeleton.tsx` component

### Accessibility Hook
```
Write a custom React hook that detects the user's prefers-reduced-motion 
setting and returns a boolean. It should update dynamically if the user 
changes their system preference. Use TypeScript.
```

**Output:** `useReducedMotion.ts` hook

---

## 5. Performance Optimization

### Lighthouse Recommendations
```
What are the top 5 performance optimizations for a Next.js 14 static site 
using Framer Motion, Unsplash images, and Google Fonts? Target 90+ Lighthouse 
score on all metrics.
```

**Key recommendations implemented:**
- GPU-accelerated animations only (`transform`, `opacity`)
- Intersection Observer for lazy loading
- Image loading skeletons to prevent layout shift
- `display=swap` for font loading
- Static export for fast CDN delivery

---

## AI Tool Usage Summary

| Tool | Application | Status |
|------|-------------|--------|
| ChatGPT | Sales copy, headline optimization, architecture planning | ✅ Implemented |
| AI Image Analysis | Luxury brand palette extraction, interaction patterns | ✅ Implemented |
| Generative AI | Hero/venue/dining visual concepts | 📝 Documented, placeholder images used |
| AI Code Assist | Component patterns, accessibility hooks | ✅ Implemented |
| AI Performance | Lighthouse optimization strategy | ✅ Implemented |

