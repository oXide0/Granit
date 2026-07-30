import { CONTACTS, SITE } from '~/data/site';

const abs = (path: string) => new URL(path, SITE.url).href;

/**
 * `build.format: 'file'` emits `catalog.html`, so `Astro.url.pathname` carries a
 * `.html` suffix in the built output but not in dev. Strip it so the canonical
 * URL matches what the host actually serves — and what the sitemap lists.
 */
export const canonicalUrl = (pathname: string, site: URL | undefined) => {
	const clean = pathname.replace(/index\.html$/, '').replace(/\.html$/, '');
	return new URL(clean, site ?? SITE.url).href;
};

/**
 * The business itself. Emitted on every page under a stable @id so the other
 * graph nodes (breadcrumbs, item lists) can reference it instead of repeating it.
 */
export const organizationSchema = () => ({
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': `${SITE.url}/#organization`,
	name: `${SITE.name}, ${SITE.city}`,
	description: SITE.descriptor,
	url: SITE.url,
	image: abs(SITE.ogImage),
	logo: abs(SITE.logo),
	telephone: CONTACTS.phoneRaw,
	email: CONTACTS.email,
	priceRange: '$$',
	address: {
		'@type': 'PostalAddress',
		addressLocality: CONTACTS.address.locality,
		addressRegion: CONTACTS.address.region,
		postalCode: CONTACTS.address.postalCode,
		addressCountry: CONTACTS.address.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: CONTACTS.geo.latitude,
		longitude: CONTACTS.geo.longitude,
	},
	hasMap: CONTACTS.mapUrl,
	// Named from most to least specific so local search has an explicit signal
	// for the city, not just the country.
	areaServed: [
		{ '@type': 'City', name: SITE.city },
		{ '@type': 'AdministrativeArea', name: SITE.region },
		{ '@type': 'Country', name: 'Україна' },
	],
	knowsLanguage: ['uk', 'ru'],
});

export const websiteSchema = () => ({
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${SITE.url}/#website`,
	url: SITE.url,
	name: SITE.name,
	inLanguage: 'uk-UA',
	publisher: { '@id': `${SITE.url}/#organization` },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: abs(item.path),
	})),
});

export const faqSchema = (items: readonly { question: string; answer: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: items.map((item) => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: { '@type': 'Answer', text: item.answer },
	})),
});

/** Product ranges / granite varieties presented as an ordered list. */
export const itemListSchema = (
	name: string,
	items: readonly { title: string; description?: string; image?: { src: string } }[],
) => ({
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name,
	numberOfItems: items.length,
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		item: {
			'@type': 'Product',
			name: item.title,
			...(item.description ? { description: item.description } : {}),
			...(item.image ? { image: abs(item.image.src) } : {}),
			// No `offers` node: prices are quoted per request, and an Offer
			// without a price is invalid structured data.
			brand: { '@id': `${SITE.url}/#organization` },
		},
	})),
});
