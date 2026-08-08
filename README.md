# "Кам'яні вироби" landing page (Zhytomyr oblast)

A single-page site built with [Astro](https://astro.build) — statically
generated, no backend. The goal of the site is a **phone call**, not an online
sale: there are no prices and no priced catalogue.

The brief lives in [doc.md](doc.md) and is the source of truth for any factual
claim about the client.

The page copy is Ukrainian; code comments and docs are English.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve the built output locally
```

Requires Node.js >= 22.12.

## Layout of the repo

```
src/
├── data/
│   ├── site.ts        # contacts, address, company name, menu — single source
│   └── products.ts     # product categories (title, description, alt, slug)
├── assets/
│   ├── production/     # real workshop photos (used in the hero and "Виробництво")
│   └── products/       # category photos, resolved by slug (see below)
├── components/         # page sections
├── layouts/BaseLayout.astro   # <head>, SEO, Open Graph, JSON-LD
├── pages/index.astro          # assembles the sections into the landing page
└── styles/global.css          # design tokens (colors, spacing, buttons)
```

## Adding product photos

Drop a file into `src/assets/products/` named after the category `slug` in
[src/data/products.ts](src/data/products.ts). No code changes are needed — the
card picks the image up on the next build.

| File (.jpg / .jpeg / .png / .webp) | Category |
| --- | --- |
| `pamyatnyky.jpg` | Пам'ятники та надгробки |
| `stilnyci.jpg` | Стільниці |
| `brukivka.jpg` | Бруківка |
| `bordyury.jpg` | Бордюри та поребрики |
| `oblytsuvannya.jpg` | Облицювальний і фасадний камінь |
| `dekor.jpg` | Декоративний камінь |
| `skhody.jpg` | Сходи |
| `pidvikonnya.jpg` | Підвіконня |

While a file is missing, a neutral "Фото: <category>" placeholder is shown in
its place. Source images should be at least 1200x900 px, 4:3.

Astro compresses images to WebP and generates several sizes for different
screens, so there is no need to resize anything by hand.

The ninth tile in the grid is not a category — it is the "any custom item" card
([CustomOrderCard.astro](src/components/CustomOrderCard.astro)). It rounds the
grid out to an even 3x3 and answers the most common objection ("what if I need
something that isn't listed?"). If you add categories, keep the total tile
count a multiple of three, otherwise the last row will have gaps again.

> **Note:** every product photo is currently **AI-generated** (prompts live in
> [docs/ai-image-prompts.md](docs/ai-image-prompts.md)). They are a stand-in for
> launch, not the client's actual work. Overwrite them with the same filenames
> as soon as real photos exist.

## Still needed from the client (TODO)

Every one of these is marked with a `TODO` comment at the relevant place in the
code.

1. **Company name** — currently the placeholder "Кам'яні вироби Житомирщини"
   (`src/data/site.ts`, plus the logo wordmark in `src/components/Logo.astro`).
2. **Logo** — currently a placeholder (faceted stone block + text) in
   `Logo.astro` and `public/favicon.svg`.
3. **Real product photos** — AI images are in place for now; replace them with
   photos of actual work (see the table above).
4. **Domain** — set it in `astro.config.mjs` (`site:`) and `public/robots.txt`.
   Canonical URLs and Open Graph tags depend on it.
5. **Map pin** — currently an address lookup; better replaced with the
   coordinates of the yard entrance (`src/components/Location.astro`).
6. **Opening hours** — not provided; there is a slot for them in
   `src/components/Contact.astro`.
7. **Analytics** — a place for Google Analytics / GTM is prepared in
   `BaseLayout.astro` but nothing is wired up yet.
8. **OG image** — currently `public/og-image.jpg` (an AI workshop photo,
   1200x900). Optionally replace with a 1200x630 image carrying the company name.

## Deployment

The project is static: `npm run build` produces `dist/`, which can be uploaded
to any static host. No backend or database is involved.

### Cloudflare Workers

The config lives in [wrangler.jsonc](wrangler.jsonc). The worker executes no
code — it only serves the files in `dist/`.

Project settings in the dashboard must be:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Framework preset | **None** (not Astro) |

> **Why the preset must be None.** With the Astro preset, Cloudflare injects its
> own adapter and switches the site to server rendering. Images then stop being
> optimized at build time and `<img>` tags start pointing at the
> `/_image?href=...` endpoint, which cannot work on Workers because `sharp` is
> not available there. The result is that every image returns 404. This is also
> why `astro.config.mjs` pins `output: 'static'`.

You can verify a build is correct without opening a browser:

```bash
npm run build
grep -c '_image?href' dist/index.html   # must be 0
ls dist/_astro/*.webp | wc -l           # must be > 0
```

If images are still missing after a redeploy, purge the cache in the dashboard
(Caching -> Purge Everything) — an older HTML response may still be cached.
