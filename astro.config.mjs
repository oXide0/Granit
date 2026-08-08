// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain once it is registered (see doc.md, §8).
  // Required for absolute URLs in Open Graph and the sitemap.
  site: 'https://example.com.ua',

  // The site is fully static — there is no server-side logic at all.
  // Stated explicitly because hosts (Cloudflare in particular) may inject
  // their own adapter during framework auto-detection and switch the site to
  // server rendering. Images then stop being optimized at build time and are
  // requested through the /_image endpoint, which no static host can serve.
  output: 'static',

  build: {
    inlineStylesheets: 'auto',
  },
});
