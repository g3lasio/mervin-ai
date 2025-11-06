# Owl Fenc Landing Page

**Project Type:** Static Landing Page  
**Purpose:** Marketing site for Owl Fenc - AI-powered construction management platform  
**Deployment:** Replit Static Deployment  
**Date Created:** November 6, 2025

## Overview

This is a standalone, static landing page for **Owl Fenc**, completely independent from the main product application. It showcases the platform's features, pricing plans, and integrations for fencing contractors and construction professionals.

## Key Features

- **4 Main Pages:**
  - Home: Hero section, key features, target audiences, stats
  - Features: 16+ features organized in 4 categories (Estimates & AI, Legal & Contracts, Payments & Finance, Project Management)
  - Pricing: 3 subscription plans with monthly/yearly billing toggle
  - Integrations: 8 major integrations (Stripe, ATTOM Data, OpenAI, Claude, Google AI, QuickBooks, PostgreSQL, SendGrid)
  
- **Additional Pages:** About Owl Fenc, About Mervin AI, Privacy Policy, Terms of Service, Legal Policy (Coming Soon placeholders)

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Routing:** Wouter (lightweight client-side routing)
- **UI Framework:** shadcn/ui + Tailwind CSS
- **Animations:** Framer Motion for smooth transitions and interactions
- **Icons:** Lucide React + React Icons
- **Design:** Orange/Blue color scheme for construction industry

## Project Structure

```
client/
├── src/
│   ├── pages/          # All page components
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Integrations.tsx
│   │   └── ComingSoon.tsx
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   └── ui/         # shadcn UI components
│   ├── lib/            # Utilities
│   ├── App.tsx         # Main app with routing
│   └── index.css       # Global styles
├── index.html          # Entry point with SEO metadata
└── public/             # Static assets
```

## Key Business Data

### Pricing Plans
1. **Primo Chambeador** - Free tier with basic features
2. **Mero Patrón** - $49.99/month (Most Popular) - Professional contractors
3. **Master Contractor** - $99.99/month - Unlimited everything

### Core Features
- Mervin AI Assistant (conversational estimate creation)
- DeepSearch Material Intelligence (real-time pricing)
- Legal Defense Contracts (AI-generated legal protection)
- Property Verification (ATTOM Data integration)
- Stripe Payment Processing
- Project Management Dashboard

### Target Audience
1. Fencing Contractors (wood, vinyl, chain-link specialists)
2. General Contractors (multi-project management)
3. Subcontractors (working with GCs)

## External Links

All Call-to-Action buttons redirect to the main application:
- **Signup:** https://app.owlfenc.com/signup
- **Login:** https://app.owlfenc.com/login
- **Pricing** (internal): /pricing

## Development

The site is completely static with no backend. All data is hardcoded in the components.

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

The build outputs to `dist/` directory ready for static deployment.

## Design Guidelines

- **Color Scheme:** Orange (primary) and Blue (secondary) for construction industry appeal
- **Typography:** Inter font family for modern, professional look
- **Spacing:** Consistent use of Tailwind spacing (4, 6, 8, 12, 16, 20, 24, 32)
- **Components:** Exclusively shadcn/ui components for consistency
- **Responsive:** Mobile-first design with breakpoints at md and lg

## Recent Changes

- **November 6, 2025:** Added Framer Motion animations throughout the site
  - Hero section fade-in and stagger animations on Home page
  - Scroll-triggered animations for stats, features, and audience cards
  - Smooth entrance animations on Features page (per-category tabs)
  - Staggered card animations on Pricing page
  - Integration cards with stagger effect on Integrations page
  - Scale animations for CTA sections
  - whileInView animations for better performance (only animate when visible)
- Initial setup with all 4 main pages
- Header with responsive navigation
- Footer with 4-column layout
- Complete pricing comparison table
- Integration showcase grid
- SEO-optimized metadata

## Notes

- This landing page is **completely separate** from the main Owl Fenc application
- Designed for static deployment (no server-side logic)
- Optimized for SEO and fast page loads via CDN
- All content is marketing-focused, not product features
