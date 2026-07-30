# Гранітна майстерня

Static marketing site for a granite manufacturer (Zhytomyr region, Ukraine), built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) v4. Ships as
pre-rendered HTML with no UI framework and no JavaScript bundle — the only script is an
inlined menu toggle.

## Commands

| Command           | Action                            |
| ----------------- | --------------------------------- |
| `npm install`     | Install dependencies              |
| `npm run dev`     | Dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist` |
| `npm run preview` | Serve the built site locally      |
| `npm run check`   | Type-check `.astro` / `.ts` files |

## Before deploying

Set the production domain — it drives canonical URLs, Open Graph tags, JSON-LD and
`sitemap.xml`. Either edit `PRODUCTION_URL` in [`src/data/site.ts`](src/data/site.ts) or
override it at build time:

```bash
SITE_URL=https://your-domain.ua npm run build
```

The build emits flat files (`catalog.html`, not `catalog/index.html`) and canonical URLs
without a trailing slash, so the host must serve `/catalog` from `catalog.html`. Netlify,
Vercel, Cloudflare Pages and GitHub Pages do this by default; for bare nginx add
`try_files $uri $uri.html $uri/ =404;`.

## Structure

```
src/
  data/        Content + business details — single source of truth for copy,
               contacts and structured data
  components/  Astro components (header, hero, product cards, gallery, FAQ, footer)
  layouts/     BaseLayout — the whole <head>, SEO tags and JSON-LD
  pages/       Routes: / , /catalog , 404, robots.txt
  styles/      global.css — Tailwind import, design tokens, component classes
  assets/img/  Photos processed by astro:assets (resized, WebP, srcset)
public/
  img/         Logo variants, favicon, OG image — served as-is
  font/        Gilroy webfonts
```

Editing content means editing `src/data/*` — the pages, the JSON-LD and the sitemap all
read from there.

## Design system

Tokens live in the `@theme` block of [`src/styles/global.css`](src/styles/global.css):
warm paper background, near-black ink, brass accent used sparingly, and fluid
`clamp()` type sizes so headings need no per-breakpoint overrides. Reusable
`.btn`, `.eyebrow`, `.container-page` and `.link-underline` classes are defined in the
same file; everything else is Tailwind utilities in the components.

Icons are inline SVG ([`Icon.astro`](src/components/Icon.astro)) drawn with
`currentColor`, so they invert correctly between the paper sections and the ink footer.

## Naming

The business trades without a brand name, so nothing on the site presents one. Page
titles stand on their own with no brand suffix, and the site identifies itself by trade
via `SITE.name` in [`src/data/site.ts`](src/data/site.ts) — used for the header lockup,
`og:site_name` and the JSON-LD organisation name. The logo is a lockup
([`Logo.astro`](src/components/Logo.astro)): the stone symbol (`mark-ink.png` /
`mark-paper.png`, cropped from the original artwork) beside live text. **If the real
registered or trading name is ever confirmed, changing `SITE.name` updates the lockup,
the metadata and the structured data in one edit.**

## SEO

Handled in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) and
[`src/utils/seo.ts`](src/utils/seo.ts): per-page title/description/keywords, canonical
URLs, Open Graph + Twitter cards, `hreflang`, `robots.txt`, a generated sitemap, and
JSON-LD for `LocalBusiness`, `WebSite`, `ItemList`, `BreadcrumbList` and `FAQPage`.

No page ships a JavaScript bundle. The mobile menu is a small inlined script; the FAQ is
`<details>/<summary>`, card hover states are CSS, and the workshop gallery is a static
grid rather than a carousel — so all content is in the HTML for crawlers.
