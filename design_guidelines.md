# Owl Fenc Landing Page - Design Guidelines

## Design Approach
**Reference-Based with System Foundation**: Drawing from Linear's clean professionalism + Stripe's trust-building clarity + Notion's accessible hierarchy. This B2B SaaS targets practical contractors who value efficiency and results over decoration.

## Typography System
- **Headings**: Inter font family, Bold (700) for H1/H2, Semibold (600) for H3/H4
- **Hierarchy**: H1 (text-5xl/text-6xl), H2 (text-4xl), H3 (text-2xl), H4 (text-xl), Body (text-base/text-lg)
- **Body Text**: Inter Regular (400) for descriptions, Medium (500) for emphasis
- **Special**: "Mero Patrón" and plan mottos use italic styling for personality

## Layout System
**Tailwind Spacing Primitives**: 4, 6, 8, 12, 16, 20, 24, 32 units
- Section padding: py-20 (desktop), py-12 (mobile)
- Card/Component spacing: p-6 or p-8
- Element gaps: gap-6, gap-8, gap-12
- Container: max-w-7xl with px-4 for consistent content width

## Component Library

**Hero Section (Home)**
- Full-width background with gradient overlay (orange to blue gradient)
- Large hero image showing contractor using tablet/app in construction site
- Centered content with max-w-4xl
- H1 headline + subtitle + dual CTA buttons (Start Free Trial primary, View Demo secondary)
- Stats bar below hero (10x Faster, 98% Accuracy, +40% More Jobs) with icons

**Feature Cards**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: Icon (Lucide) at top, bold title, 2-3 line description
- Subtle border, light background, hover lift effect
- Categories use Badge components for visual grouping

**Pricing Cards**
- Three-column layout (stacks on mobile)
- "Most Popular" badge on Mero Patrón plan
- Price display: Large number + toggle for Monthly/Yearly
- Feature checklist with checkmarks/x-marks
- CTA button at bottom (primary for popular, outline for others)
- Plan motto in italic below title

**Integration Grid**
- 2-column layout (md:grid-cols-2 lg:grid-cols-3)
- Logo/Icon + Name + Category badge
- Description + 4 key features as bullet points
- Status indicator (Active/Premium) with appropriate badge color

**Navigation Header**
- Fixed/sticky on scroll
- Logo left (Owl Fenc branding)
- Center: Home, Features, Pricing, Integrations links
- Right: Log In (outline) + Start Free Trial (primary) buttons
- Mobile: Hamburger menu

**Footer**
- 4-column grid (stacks to 2-col on tablet, 1-col mobile)
- Columns: Product, Company, Legal, Connect
- Social icons using React Icons
- Copyright notice at bottom
- Newsletter signup section above columns

## Images

**Hero Image**: Construction site photograph showing contractor using digital device (tablet/phone) while standing near fence installation. Professional but approachable aesthetic. Natural lighting. Position: Background with dark overlay for text readability.

**Feature Section Images**: 
- Mervin AI section: Chat interface mockup showing AI conversation
- DeepSearch: Material pricing dashboard screenshot
- Property Verification: Map/property data visualization

**Trust Signals**: Consider contractor testimonial photos (authentic, diverse team members in work gear)

## Visual Treatment

**Buttons on Images**: When buttons overlay hero or photo backgrounds, apply backdrop-blur-md with bg-white/90 or bg-primary/90 for readability.

**Shadows**: Subtle elevation - use shadow-sm for cards, shadow-md for elevated states, shadow-lg for modals/overlays

**Borders**: border-gray-200 for light mode divisions, rounded-lg for cards (8px), rounded-xl for hero cards (12px)

**Iconography**: Lucide React icons throughout - construction, AI, legal, payment themes. Size: 24px standard, 32px for feature highlights

## Page-Specific Layouts

**Home**: Hero → Stats bar → Target Audience (3 cards) → Key Features Grid (top 6) → Social Proof → Final CTA

**Features**: Header → Tabs for 4 categories → Feature grid per category (4 items each) → Detailed comparison table

**Pricing**: Header → Monthly/Yearly toggle → 3-plan comparison → Feature comparison table → FAQ section → CTA

**Integrations**: Header → Category filters → Integration grid (8 items) → Future integrations teaser

**Coming Soon Pages**: Centered content, large heading, brief message, back to home link

## Spacing & Rhythm
- Section separation: mb-20 or mb-32
- Card grids: gap-6 or gap-8
- Within cards: space-y-4 for vertical stacking
- Button groups: gap-4 horizontally

## Accessibility
- Focus states: ring-2 ring-primary ring-offset-2
- Color contrast: WCAG AA minimum for all text
- Alt text for all images
- Semantic HTML: nav, main, section, footer elements

This design balances professional credibility with approachable usability for busy contractors who need powerful tools without complexity.