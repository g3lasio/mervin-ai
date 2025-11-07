# Owl Fenc Landing Page

**Project Type:** Static Landing Page  
**Purpose:** Marketing site for Owl Fenc - AI-powered construction management platform  
**Deployment:** Replit Static Deployment  
**Date Created:** November 6, 2025

## Overview

This is a standalone, static landing page for **Owl Fenc**, completely independent from the main product application. It showcases the platform's features, pricing plans, and integrations for ALL construction professionals—from cleaning and hauling contractors to general contractors managing multi-million dollar projects. The platform is designed to scale from 1 to 100+ estimates per day.

## Key Features

- **4 Main Pages:**
  - Home: Hero section, key features, target audiences, stats
  - Features: 16+ features organized in 4 categories (Estimates & AI, Legal & Contracts, Payments & Finance, Project Management)
  - Pricing: 3 subscription plans with monthly/yearly billing toggle
  - Integrations: 8 major integrations (Stripe, ATTOM Data, OpenAI, Claude, Google AI, QuickBooks, PostgreSQL, SendGrid)
  
- **Additional Pages:** About Owl Fenc, About Mervin AI, Privacy Policy, Terms of Service, Legal Policy (all with full professional content)

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

### Core Features & System Capabilities

The Owl Fenc system offers an automated, fast, and reliable ecosystem designed for contractors to work with precision, security, and professionalism:

1. **AI-Powered Estimates** - Create complete, accurate estimates in under 60 seconds through intelligent automation and dynamic cost analysis
2. **Smart Contract Generator** - Generate formal project contracts in just 70 seconds with all legal clauses and project data integrated
3. **Integrated Digital Signatures** - Fast, secure signature collection without external providers, reducing friction and costs
4. **Property Verification (Ownership Check)** - AI-powered ownership verification prevents fraud and wasted time before investing in estimates
5. **Permit Advisor** - Automatically analyzes all possible required permits, including those both contractor and client might overlook
6. **Invoice Generator** - Create professional invoices in under 60 seconds, ready to send immediately
7. **Complete Project Management** - Manage scheduling, progress, documents, and communication from one centralized dashboard
8. **DeepSearch Material Intelligence** - Real-time pricing research across multiple suppliers
9. **Stripe Payment Processing** - Accept credit cards, ACH, and digital payments with automatic tracking

### Target Audience
1. General Contractors (managing multi-million dollar projects to small jobs)
2. Specialized Contractors (electrical, plumbing, HVAC, roofing, painting, flooring, fencing, etc.)
3. Service Contractors (cleaning, hauling, demolition, landscaping, maintenance)
4. Subcontractors (all trades working with GCs)

**Note:** While the platform was initially conceived with fencing in mind, it is designed for the ENTIRE construction industry across all trades and project sizes.

## External Links

All Call-to-Action buttons redirect to the main application:
- **All CTAs:** https://app.owlfenc.com (app automatically handles login/signup flow)
- **Pricing** (internal): /pricing

Note: The main app at app.owlfenc.com redirects to the login page, which includes a signup option. All "Start Free Trial", "Get Started", and "Log In" buttons point to app.owlfenc.com to leverage this unified entry point.

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

- **November 7, 2025:** Updated all CTA redirections to unified app entry point
  - Changed all signup/login links to point to app.owlfenc.com (no /signup or /login paths)
  - App automatically handles login page with integrated signup option
  - Simplified user experience with single entry point for all authentication flows
  - Updated Header, Home, Pricing, About Owl Fenc, and About Mervin pages
- **November 7, 2025:** Added detailed system capabilities with specific timing metrics
  - Updated Features.tsx with precise timing: estimates <60s, contracts 70s, invoices <60s
  - Updated Home.tsx stats to showcase specific capabilities (<60s estimates, 70s contracts, 1-100+ estimates/day)
  - Added "The Owl Fenc System" section to AboutOwlFenc.tsx detailing complete ecosystem
  - Updated all feature descriptions to emphasize automation, speed, and reliability
  - Changed "Fence Calculators" → "Smart Calculators" for all construction trades
  - Changed "Professional Invoicing" → "Invoice Generator" with <60s generation time
  - Changed "Project Dashboard" → "Complete Project Management" emphasizing centralized control
  - Updated replit.md Core Features section with detailed capabilities and timing
- **November 6, 2025:** Expanded content to reflect full construction industry scope
  - Updated all pages to emphasize platform works for ALL construction trades
  - Changed focus from "fencing contractors" to entire construction ecosystem
  - Added emphasis on scalability (1-100+ estimates per day)
  - Created full content pages: About Owl Fenc, About Mervin AI, Privacy Policy, Terms of Service, Legal Policy
  - Updated target audiences to include general contractors, specialized contractors, and service contractors
  - Removed excessive fencing focus—now includes cleaning, hauling, electrical, plumbing, HVAC, roofing, etc.
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
