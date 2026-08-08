/**
 * Product categories.
 *
 * `slug` doubles as the photo filename in `src/assets/products/`.
 * For the category with slug `pamyatnyky`, for example, dropping in
 * `src/assets/products/pamyatnyky.jpg` is enough — the image is picked up
 * automatically, no code changes needed. Supported extensions:
 * .jpg / .jpeg / .png / .webp / .avif.
 * Until the file exists, a neutral placeholder is shown instead.
 */
export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  /** alt text for the real photo (written in Ukrainian, like all page copy) */
  alt: string;
}

export const products: ProductCategory[] = [
  {
    slug: 'pamyatnyky',
    title: "Пам'ятники та надгробки",
    description:
      'Одинарні та подвійні пам’ятники, надгробні плити, огорожі й комплектуючі з натурального каменю. Розміри та форма — під конкретне місце.',
    alt: "Пам'ятники з натурального каменю",
  },
  {
    slug: 'stilnyci',
    title: 'Стільниці',
    description:
      'Кухонні та ванні стільниці з граніту: розпил, шліфування, полірування і обробка кромки під ваші розміри.',
    alt: 'Гранітна стільниця',
  },
  {
    slug: 'brukivka',
    title: 'Бруківка',
    description:
      'Колота, пиляна та термооброблена бруківка для доріжок, під’їздів і майданчиків. Стійка до морозу й навантажень.',
    alt: 'Гранітна бруківка',
  },
  {
    slug: 'bordyury',
    title: 'Бордюри та поребрики',
    description:
      'Гранітні бордюри для доріжок, клумб і проїздів. Пиляні або з фактурною лицьовою поверхнею, довжина — під ваш проєкт.',
    alt: 'Гранітні бордюри та поребрики',
  },
  {
    slug: 'oblytsuvannya',
    title: 'Облицювальний і фасадний камінь',
    description:
      'Плити та плитка для облицювання фасадів, цоколів, стін і сходових майданчиків. Різні варіанти фактури поверхні.',
    alt: 'Облицювальні плити з природного каменю',
  },
  {
    slug: 'dekor',
    title: 'Декоративний камінь',
    description:
      'Елементи ландшафтного декору: вази, кулі, стели, елементи малих архітектурних форм із природного каменю.',
    alt: 'Декоративні вироби з каменю',
  },
  {
    slug: 'skhody',
    title: 'Сходи',
    description:
      'Проступі, підступенки та цільні сходові елементи з граніту — для будинку, ґанку чи громадських приміщень.',
    alt: 'Гранітні сходи',
  },
  {
    slug: 'pidvikonnya',
    title: 'Підвіконня',
    description:
      'Підвіконня з природного каменю будь-якої довжини та глибини, з обробкою країв на ваш вибір.',
    alt: 'Підвіконня з природного каменю',
  },
];
