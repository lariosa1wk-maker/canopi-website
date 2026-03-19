# Canopi Landing Page — PRD

## Original Problem Statement
Build a production-quality, responsive single-page landing page for Canopi, a B2B SaaS predictive intelligence platform for reforestation. Nine sections: Hero, Problem, Solution, How It Works, Who It's For, Why Now, Founder, Waitlist CTA, Footer.

## Architecture
- **Frontend**: React (CRA) with Poppins font, custom CSS (no Tailwind utility classes for layout — pure CSS approach within React)
- **Backend**: FastAPI with MongoDB for waitlist email storage
- **Database**: MongoDB (waitlist collection)

## User Personas
- **Primary**: Reforestation project managers/developers accountable for planting success
- **Secondary**: Carbon credit buyers/investors needing project permanence confidence
- **Tertiary**: ML engineers, climate data experts interested in contributing

## Core Requirements (Static)
- Brand: Deep Forest Green #274E3B, Moss Sage #94A991, Mist Blue #A7C2D8, Sand Clay #D8C3A5
- Typography: Poppins (500 headings, 400 body)
- Tone: Professional, technical, confident — B2B SaaS
- Semantic HTML5, accessible, mobile-first responsive
- Smooth scroll navigation, CSS scroll reveal animations
- Waitlist email form with backend persistence
- Founder: Ana Gabriela Larios (LinkedIn: linkedin.com/in/ana-gabriela-larios)

## What's Been Implemented (March 2026)
- [x] All 9 landing page sections with correct content
- [x] Brand-consistent design (colors, typography, visual style)
- [x] Abstract SVG network visualization (hero)
- [x] Dotted Signal Network logo SVG
- [x] Responsive layout (mobile hamburger, tablet, desktop)
- [x] Smooth scroll navigation with glass-morphism navbar
- [x] Intersection Observer scroll reveal animations
- [x] Waitlist form → POST /api/waitlist → MongoDB
- [x] Duplicate email handling (returns existing entry)
- [x] data-testid on all interactive elements
- [x] Proper aria-labels and accessibility attributes

## Backlog
### P0 (Critical)
- None remaining

### P1 (Important)
- Connect waitlist form to production email service (Formspree/Mailchimp)
- Add founder headshot image when available
- Real GitHub repo URL in footer

### P2 (Nice to Have)
- Cookie-less analytics integration
- SEO meta tags (Open Graph, Twitter cards)
- Generate standalone HTML file export for static hosting
- Add favicon with Canopi logo
- Performance optimization (lazy loading, compression)
