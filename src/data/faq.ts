import { CONTACTS, SITE } from './site';

/** Rendered as <details> accordions and as FAQPage structured data. */
export const FAQ = [
	{
		question: 'Як дізнатися ціну?',
		answer: `Подзвонити нам на номер ${CONTACTS.phone} або написати на пошту — ${CONTACTS.email}`,
	},
	{
		question: `Де ви знаходитесь у ${SITE.city}і?`,
		answer: `Наш цех розташований у Житомирській області: ${CONTACTS.address.locality}, ${CONTACTS.address.district}. Точку на карті можна відкрити з розділу «Контакти».`,
	},
	{
		question: 'Чи є доставка?',
		answer: 'Ні, за доставку відповідає покупець.',
	},
	{
		question: 'Які види граніту є в наявності?',
		answer: 'Види граніту можна переглянути в розділі «Каталог».',
	},
] as const;
