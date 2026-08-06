// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: замінити на реальний домен після його реєстрації (див. doc.md, п.8).
  // Потрібно для абсолютних URL в Open Graph та sitemap.
  site: 'https://example.com.ua',
  build: {
    inlineStylesheets: 'auto',
  },
});
