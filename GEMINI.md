# 🍮 WOBBLE | Project Context & Engineering Standards

Welcome to the **Wobble** workspace. This document serves as the foundational guide for AI agents and developers working on this project.

## 📌 Project Overview
**Wobble** is a premium, single-page Next.js landing page for a Malaysian Panna Cotta brand. It focuses on a high-end visual experience, smooth transitions, and a WhatsApp-based ordering flow.

- **Type**: Next.js 15 (App Router) + TypeScript
- **Primary Goal**: Showcase 6 unique flavors with immersive 3D-like animations and drive conversions via WhatsApp.
- **Key UX Feature**: Auto-rotating flavor hero section with synchronized background and typography transitions.

## 🛠️ Technology Stack
- **Framework**: Next.js 15.4.9 (React 19)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion (via `motion` package)
- **UI Components**: Magic UI (Marquee, Bento Grid, Neon Gradient Cards)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Image Processing**: Sharp

## 📂 Architecture & Key Files
The project follows a modular, component-based architecture:

- `app/page.tsx`: The **Orchestrator**. Manages global state (current flavor, active screen) and auto-rotation logic (5s interval).
- `app/components/screens/`: Contains the main view layers:
  - `home-screen.tsx`: Hero section with flavor details.
  - `all-flavors-screen.tsx`: Grid view of the product lineup.
  - `how-it-works-screen.tsx`: 6-step process showcase.
  - `gift-screen.tsx`: Gifting options and testimonials.
- `app/components/jar-component.tsx`: Core visual asset with 3D floating and pointer-tracking logic.
- `app/components/navigation.tsx`: Accessible navbar with mobile-responsive hamburger menu.

## 🚀 Commands & Development
| Command | Action |
|---------|--------|
| `npm run dev` | Starts development server at `localhost:3000` |
| `npm run build` | Production build (Optimized bundle ~150KB) |
| `npm run lint` | Runs ESLint for code quality |
| `npm run clean` | Wipes `.next` cache for a fresh start |

## 📏 Engineering Standards
1. **Performance First**: Always use `useCallback` for event handlers passed to animated components. Ensure images are optimized via Next/Image with `fetchPriority="high"` for the hero jar.
2. **Accessibility (WCAG 2.1)**: Every interactive element must have `aria-label`. Use semantic HTML (`<nav>`, `<main>`, `<section>`).
3. **Animations**: Standard transition duration is **0.6s** using `cubic-bezier(0.4, 0, 0.2, 1)`.
4. **State Management**: Keep it simple. Use React `useState` and `useEffect` in the root `page.tsx` to drive the shared state across screens.
5. **Mobile-First**: Tailwind classes should prioritize mobile layouts (`block`, `flex-col`) before applying desktop overrides (`md:hidden`, `md:grid-cols-2`).

## 🎨 Flavor Configuration
To add or modify flavors, update the `flavors` array in `app/page.tsx`. Each flavor requires:
- `id`, `name`, `price`, `description`
- `bgColor` & `accentColor` (Gradients/Hex)
- `imagePath` (Linked to `/public/products/`)

---
*Last Updated: Selasa, 24 Mac 2026*
