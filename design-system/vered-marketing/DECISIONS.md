# Design decisions and deviations

`MASTER.md` is the ui-ux-pro-max `--design-system` output for "marketing consultant strategy growth small business advisory" (variance 7, motion 4, density 3). This file records which pro-max result each choice came from, and every deviation.

## Sources

| Area | ui-ux-pro-max source | Used as |
| --- | --- | --- |
| Product type | `--domain product "marketing consultant agency strategy"`, result 1: Marketing Agency; result 2: B2B Service | Energetic look from Marketing Agency, proof-first structure (case studies with numbers) from B2B Service |
| Style | Vibrant & Block-based, the secondary style of Marketing Agency: bold blocks, 48px gaps, large type, geometric shapes, 4-6 contrasting colors | Bento hero, colored service blocks, circle and quarter-circle accents |
| Colors | Marketing Agency palette: pink `#EC4899`, cyan `#0891B2`, background `#FDF2F8`, foreground `#831843`, border `#FBCFE8`. Sunburst `#FFAA00` from the Vibrant & Block-based style | `theme.colors` in `src/config/site.config.ts` |
| Fonts | Hebrew-capable families from the pro-max Google Fonts catalog: Fredoka (rounded, variable weight and width) for headings, Arimo for body | Self-hosted with Fontsource, Hebrew subset preloaded |
| Pattern | Storytelling + Feature-Rich, CTA above the fold | Hero with the booking CTA, funnel story, services, results, tools |
| Motion | Stagger List (standard) | `.reveal` with scale 0.96, 16px rise, 60ms stagger |
| Anti-patterns to avoid | Boring design, hidden work | Results shown in numbers on the home page, four full case studies |

## Deviations

| What | Why |
| --- | --- |
| Soft UI Evolution (the design-system style) replaced by Vibrant & Block-based | Both came from pro-max for this query; the block style is the one pro-max recommends for Marketing Agency and it separates this site clearly from the owner's other sites (the locksmith is dark and dense). |
| Calistoga + Inter replaced by Fredoka + Arimo | Neither Calistoga nor Inter has Hebrew. Fredoka keeps the warm, rounded headline voice; neither font is used on the owner's other sites. |
| Derived colors: `pinkDeep` #BE185D, `cyanDeep` #0E7490, `muted` #6B4A5C | White on pink is 3.53:1 and white on cyan 3.68:1, so buttons and links use the deeper shades (6.0 and 5.4 to 1). The pro-max muted #64748B is 4.36:1 on the pink background, below AA; #6B4A5C is 6.97:1. |
| Small text never sits directly on pink or cyan | Those blocks carry only large bold white text (headings, prices at 19px bold, big numbers). Service summaries on them sit on a white chip. |
| Stagger List without `back.out` overshoot and without GSAP | Same timing, no library for one effect. |
| Signature element: the marketing funnel from a real (demo) case study | frontend-design: spend boldness in one place. It shows exactly what a consultant does, with the conversion rate between every step. It fills once when seen, and is drawn complete with reduced motion or no JavaScript. |
| Striped yellow demo banner on every page | Owner's rule for portfolio demos: it must be obvious that everything is fictional. Shown only while `site.isDemo` is true. |
| Area photos show the city or the region, not always the exact place | Portfolio demo: stock photos stand in until the client supplies real ones. |
