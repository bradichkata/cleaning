# Project Status

## What is already done

- Installed Node.js LTS and scaffolded a Next.js 16 + TypeScript + Tailwind CSS v4 app directly in `D:\web_app`.
- Built the public MVP route structure:
  - `/`
  - `/services`
  - `/services/[slug]`
  - `/prices`
  - `/get-a-quote`
  - `/book`
  - `/how-it-works`
  - `/service-areas`
  - `/service-areas/[slug]`
  - `/about`
  - `/reviews`
  - `/before-after`
  - `/commercial-cleaning`
  - `/faq`
  - `/blog`
  - `/contact`
  - legal pages
- Added a data-driven content architecture for services, service areas, FAQs, review slots, before/after stories, blog placeholders, navigation, and legal pages.
- Built a structured quote request flow with:
  - server-side validation
  - estimate-range logic
  - local persistence fallback
  - optional Supabase persistence adapter
  - optional Resend notification adapter
- Built a structured contact form flow with the same persistence approach.
- Added API endpoints for quote and contact submissions.
- Added a cookie-based language switcher in the top-right header with English and Bulgarian options.
- Localized the shared shell and core lead-gen pages used for visual inspection:
  - header and footer
  - mobile CTA bar
  - homepage core sections
  - quote page and contact page
  - about, prices, how-it-works, reviews, and commercial-cleaning pages
- Added SEO foundations:
  - route metadata
  - `robots.ts`
  - `sitemap.ts`
  - Open Graph image
  - local business schema on the homepage
- Added `.env.example` and `supabase/schema.sql`.

## What still needs your touch before launch

- Replace the demo brand identity:
  - company name
  - legal entity name
  - registration details
  - phone number
  - email address
  - physical address
- Replace demo service-area content with the real cities, neighbourhoods, postcodes, and travel-fee rules you actually operate under.
- Replace pricing assumptions inside the service data with your real commercial logic.
- Provide genuine customer reviews from real sources. No fake reviews were added.
- Provide real before/after photographs or licensed imagery. The layout is ready, but image proof is intentionally not fabricated.
- Replace all policy text with your real privacy, cookies, terms, cancellation, and satisfaction wording.
- Decide which integrations to activate:
  - Supabase
  - Resend
  - analytics / call tracking
- Apply the SQL schema in Supabase once credentials are ready.
- Review final copy for local market language and service terminology.

## Practical next phase after your input

- Connect real environment variables.
- Swap demo content for production content in `src/data`.
- Add verified testimonials and owned photography.
- Connect analytics and call tracking.
- Add protected admin views if you want quote management inside the app instead of external handling.
