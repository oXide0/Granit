import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import { SITE } from './src/data/site';

// https://astro.build/config
export default defineConfig({
	// `site` is required for canonical URLs, Open Graph tags and the sitemap.
	site: SITE.url,
	trailingSlash: 'never',
	build: {
		format: 'file',
		// Inline small stylesheets to save a render-blocking request.
		inlineStylesheets: 'auto',
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'uk',
				locales: { uk: 'uk-UA' },
			},
		}),
	],
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
			// The source JPEGs are already aggressively compressed; WebP at the
			// default quality re-encodes some of them *larger* than the original.
			config: { webp: { quality: 72, effort: 5 } },
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
