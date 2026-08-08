/**
 * Single source of truth for the site's contact details.
 * Change it here and it changes everywhere (header, footer, CTAs, JSON-LD).
 */
export const site = {
  /**
   * TODO: the client has not approved a company name yet (doc.md, §8.1).
   * Temporary neutral name — replace once it is confirmed.
   */
  name: "Кам'яні вироби Житомирщини",
  nameShort: "Кам'яні вироби",
  tagline: 'Вироби з природного каменю власного виробництва',

  phone: {
    display: '+38 (067) 909 50 69',
    href: 'tel:+380679095069',
    plain: '+380679095069',
  },

  email: 'bezsmertnijd@gmail.com',

  address: {
    full: "с. Слобідка, Коростишівський район, Житомирська область, 12512, Україна",
    short: 'с. Слобідка, Житомирська обл.',
    locality: 'с. Слобідка',
    district: 'Коростишівський район',
    region: 'Житомирська область',
    postalCode: '12512',
    country: 'UA',
  },

  /** Search query for the Google Maps embed. TODO: confirm the exact map pin with the client. */
  mapQuery: 'Слобідка, Коростишівський район, Житомирська область',
} as const;

export const nav = [
  { href: '#produkciya', label: 'Продукція' },
  { href: '#vyrobnyctvo', label: 'Виробництво' },
  { href: '#pid-zamovlennya', label: 'Під замовлення' },
  { href: '#roztashuvannya', label: 'Розташування' },
  { href: '#kontakty', label: 'Контакти' },
] as const;
