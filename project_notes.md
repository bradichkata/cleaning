# Project Notes

## Project Summary

This project is a conversion-focused cleaning services website built with Next.js 16, TypeScript, and Tailwind CSS v4. The current implementation is structured as an MVP that covers the main marketing pages, lead-generation flows, localization, and launch-ready technical foundations.

The site is designed to support:

- Service discovery and conversion
- Quote and contact submission flows
- SEO basics for local search visibility
- English and Bulgarian language support
- Future connection to Supabase, Resend, analytics, and admin tooling

## Work Completed

The following work has already been completed:

- Project scaffolded in `D:\web_app` with Next.js 16, TypeScript, and Tailwind CSS v4
- Core public routes built, including:
  - Home
  - Services
  - Individual service detail pages
  - Prices
  - Get a Quote
  - Booking
  - How It Works
  - Service Areas
  - Individual service area pages
  - About
  - Reviews
  - Before/After
  - Commercial Cleaning
  - FAQ
  - Blog
  - Contact
  - Legal pages
- Data-driven content architecture created for:
  - Services
  - Service areas
  - FAQs
  - Reviews
  - Before/after content
  - Blog placeholders
  - Navigation
  - Legal content
- Quote request flow implemented with:
  - Server-side validation
  - Estimate logic
  - Local persistence fallback
  - Optional Supabase adapter
  - Optional Resend adapter
- Contact form flow implemented
- API endpoints created for quote and contact submissions
- Language switcher added with English and Bulgarian options using cookie-based persistence
- Shared localized site shell and key lead-generation pages implemented
- Visual assets integrated from local folders:
  - `background_image/` for ambient masked background treatment
  - `hero_image/` for one primary hero image and one later supporting trust/proof image
- SEO foundations added, including:
  - Metadata
  - `robots.ts`
  - `sitemap.ts`
  - Open Graph image
  - Local business structured data
- `.env.example` and `supabase/schema.sql` added for future integration setup

## Work Left To Complete

The following items still require completion before a real launch:

- Replace the demo brand details with the real business information:
  - Company name
  - Legal entity name
  - Registration details
  - Phone number
  - Email address
  - Physical address
- Replace demo service-area content with real:
  - Cities
  - Neighbourhoods
  - Postcodes
  - Travel-fee rules
- Replace pricing assumptions with real pricing and operational logic
- Add genuine customer reviews and testimonials
- Add real before/after photos or properly licensed imagery
- Replace all placeholder legal and policy content with real approved text:
  - Privacy policy
  - Cookie policy
  - Terms
  - Cancellation policy
  - Satisfaction policy
- Decide and connect final integrations as needed:
  - Supabase
  - Resend
  - Analytics
  - Call tracking
- Apply the SQL schema in Supabase once credentials are ready
- Review and refine the copy for the local target market and terminology

## Recommended Next Steps

The most practical next phase is:

1. Replace demo business details across the site.
2. Finalize service areas, pricing, and business rules.
3. Add real testimonials and owned/licensed imagery.
4. Connect production integrations and environment variables.
5. Run a final content, legal, and QA review before launch.

## Notes For Your Input

The main items that will likely require your direct touch are:

- Final business identity and contact details
- Real pricing rules
- Approved legal text
- Real reviews/testimonials
- Real service coverage details
- Final media assets if you want to replace the current visuals
