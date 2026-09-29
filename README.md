# Marketing consultant website template (demo: Vered Marketing, Tel Aviv and the center)

Static Astro site, Hebrew RTL, built so the same code can be offered to another marketing consultant (or a similar advisory business) by editing one file.

This is a **portfolio demo**: the consultant, the clients, the results, prices and contact details are fictional, and photos are Pexels stock (see `CREDITS.md`). Demo mode shows a striped "demo site" banner on every page, adds `noindex` to every page, `public/_headers` sends `X-Robots-Tag: noindex`, and the footer says so.

## New client in 4 steps

1. **Edit `src/config/site.config.ts`**: identity, consultant, contact, numbers, theme colors, services (one page each), industries (one page each), areas (one page each, with content written for that area), case studies, packages, the budget calculator ranges, the checkup quiz, FAQ, form destinations and legal details. Nothing client-specific is typed into pages or components.
2. **Replace the photos** in `src/assets/img/` and update the imports at the top of the config.
3. **Set `site.url`** and **`site.isDemo: false`**, and remove the `X-Robots-Tag` line from `public/_headers`.
4. **Regenerate icons** after a color change: `npm run icons`, then `npm run build`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the built site |
| `npm run check` | Type-check |
| `npm run audit` | Check the build: broken links, orphans, titles, descriptions, one H1, canonical, JSON-LD, alt text, em dashes |
| `npm run icons` | Rebuild favicon and app icons from the theme colors |
| `npm run checklist` | Write the progress file for the Website Build Checklist |

## What is on the site (34 pages)

- **Bento hero** with the consultant, a headline stat and a link to the checkup.
- **Marketing funnel** (signature element): impressions to customers for one case study, with the conversion rate between steps.
- **Budget calculator** (`/budget/` and home): customer value x close rate x goal x channel gives the leads needed, a budget range, and a verdict; results can be sent on WhatsApp.
- **Marketing checkup** (`/checkup/`): eight yes/no questions, a score, a level and the first three fixes, each tied to a service.
- **Case studies** (`/cases/`): four clients, before/after metrics, what was done, and a quote.
- 6 service pages, 4 industry pages, 5 area pages, packages and prices, about, FAQ, contact, privacy (Amendment 13) and an accessibility statement (IS 5568).
- Schema: `ProfessionalService`, `Service`, `Article`, `FAQPage`, `BreadcrumbList`, `Person`, `OfferCatalog`, `WebApplication`, `ContactPage`.

## Contact form

`form.destinations` in the config. Every lead goes to every destination in parallel; use two (email via Web3Forms + a webhook to a Google Sheet) so no lead is lost. Empty list = demo mode. GA4 loads only after cookie consent; set `analytics.ga4`.

## Design

ui-ux-pro-max design system in `design-system/vered-marketing/MASTER.md`. Every source and deviation is listed in `design-system/vered-marketing/DECISIONS.md`.
