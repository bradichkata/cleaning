# Northline Cleaning Site

Conversion-first cleaning-services MVP built with Next.js 16, TypeScript, and Tailwind CSS v4.

## What is in this build

- Marketing website with premium home page and supporting service pages
- Dynamic service-detail pages and service-area pages
- Quote request workflow with server-side validation and estimate ranges
- Contact form workflow
- SEO basics: route metadata, sitemap, robots, Open Graph image, schema markup
- Optional production adapters for Supabase and Resend
- Local file fallback for lead capture when external services are not configured

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment

Copy `.env.example` and fill values when you are ready to connect real services.

Without external credentials, quote and contact submissions are stored locally in `storage/submissions/`.

## Main folders

- `src/app` route structure
- `src/components` UI, layout, and forms
- `src/data` business content and page data
- `src/features` server actions
- `src/lib` SEO, validation, pricing, and storage helpers
- `supabase/schema.sql` starter schema for production persistence

## Important note

The current build uses demo business identity, contact details, and service-area content until real business data is provided. See `docs/project-status.md` for the exact replacement list.
