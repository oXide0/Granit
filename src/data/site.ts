/**
 * Single source of truth for site-wide metadata, contacts and SEO defaults.
 * Used by the layout, JSON-LD structured data, the sitemap and the UI.
 */

// TODO: replace with the real production domain before deploying — it drives
// canonical URLs, Open Graph tags, JSON-LD and sitemap.xml. Can be overridden
// at build time with SITE_URL=https://example.com npm run build
const PRODUCTION_URL = 'https://granit.com.ua';

export const SITE = {
	url: process.env.SITE_URL ?? PRODUCTION_URL,
	/**
	 * The business trades without a brand name, so the site identifies itself by
	 * trade instead of inventing one. Page titles carry no brand suffix; this
	 * string is only the site/organisation label (lockup, og:site_name, JSON-LD).
	 * Rendered one word per line in the header lockup.
	 */
	name: 'Гранітна майстерня',
	/** Rendered as the second line of the header lockup and appended to og:site_name. */
	city: 'Житомир',
	region: 'Житомирська область',
	descriptor: 'Виробництво та продаж виробів з натурального граніту в Житомирі та області',
	locale: 'uk_UA',
	lang: 'uk',
	themeColor: '#f7f5f2',
	/** Fallback social sharing image, served from /public. */
	ogImage: '/img/og-image.jpg',
	logo: '/img/mark-ink.png',
} as const;

export const CONTACTS = {
	phone: '+38 (067) 909 50 69',
	phoneHref: 'tel:+380679095069',
	phoneRaw: '+380679095069',
	email: 'bezsmertnijd@gmail.com',
	emailHref: 'mailto:bezsmertnijd@gmail.com',
	address: {
		// `locality` is the settlement itself — schema.org's addressLocality is the
		// town/village, not the district, so the district is carried separately.
		locality: 'с. Слобідка',
		district: 'Коростишівський район',
		region: 'Житомирська область',
		postalCode: '12512',
		country: 'UA',
		full: 'обл. Житомирська, р. Коростишівський, с. Слобідка',
		short: 'с. Слобідка, Житомирська обл.',
	},
	geo: { latitude: 50.4487013, longitude: 28.8917642 },
	mapUrl:
		'https://www.google.com/maps/place/%D0%A1%D0%BB%D0%BE%D0%B1%D1%96%D0%B4%D0%BA%D0%B0,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+12512/@50.4453884,28.8736479,13z/data=!4m6!3m5!1s0x472b86d9f77a5793:0xbf9594081db111d0!8m2!3d50.4487013!4d28.8917642!16s%2Fg%2F120vnb9d?entry=ttu',
} as const;

/** Header / footer navigation. Real hrefs so crawlers can follow them. */
export const NAV = [
	{ label: 'Продукція', href: '/#products' },
	{ label: 'Каталог', href: '/catalog' },
	{ label: 'Виробництво', href: '/#production' },
	{ label: 'Контакти', href: '/#contacts' },
] as const;

/** Figures below the hero. Every one is derived from what the site actually sells. */
export const STATS = [
	{ value: '12', label: 'категорій виробів' },
	{ value: '5', label: 'видів граніту' },
	{ value: 'Опт', label: 'і роздріб' },
] as const;

export const ADVANTAGES = [
	{
		title: 'Свій цех на Житомирщині',
		text: 'Обробляємо камінь у власному цеху й продаємо в Житомирі без посередників.',
	},
	{
		title: 'Пʼять видів каменю',
		text: 'Габро/Буки, лабрадорит, Лізники, Капуста та Покостівка — зразки кожного є в каталозі.',
	},
	{
		title: 'Робота під розмір',
		text: 'Стільниці з вирізами під мийку та інші вироби за розмірами замовника.',
	},
	{
		title: 'Опт і роздріб',
		text: 'Від одного памʼятника до оптової партії плит — працюємо з обома форматами.',
	},
] as const;
