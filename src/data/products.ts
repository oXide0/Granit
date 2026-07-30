import bordur from '~/assets/img/bordur.jpg';
import granitOptom from '~/assets/img/granit_optom.jpg';
import granitnaPlytka from '~/assets/img/granitna-plytka.jpg';
import hrestyGranitni from '~/assets/img/hresty-granitni.jpg';
import kulia from '~/assets/img/kulia.jpg';
import memorialniKompleksy from '~/assets/img/memorialni-kompleksy.jpg';
import odynarniPamyatniki from '~/assets/img/odynarni-pamyatniki.jpg';
import pidvikonnya from '~/assets/img/pidvikonnya-z-granitu.jpg';
import podviyniPamyatnyky from '~/assets/img/podviyni-pamyatnyky.jpg';
import schody from '~/assets/img/schody.jpg';
import stilnitsya from '~/assets/img/stilnitsya-granitna.jpg';
import vaza from '~/assets/img/vaza.jpg';

/** Descriptions feed both the UI (nothing yet) and the ItemList structured data. */
export const PRODUCTS = [
	{ title: 'Граніт оптом', image: granitOptom, alt: 'Гранітні блоки та плити, підготовлені до оптового відвантаження' },
	{ title: 'Гранітні плити', image: granitnaPlytka, alt: 'Полірована гранітна плитка для облицювання' },
	{ title: 'Одинарні памʼятники', image: odynarniPamyatniki, alt: 'Одинарний памʼятник з чорного граніту' },
	{ title: 'Подвійні памʼятники', image: podviyniPamyatnyky, alt: 'Подвійний гранітний памʼятник на дві особи' },
	{ title: 'Меморіальні комплекси', image: memorialniKompleksy, alt: 'Меморіальний комплекс з граніту з огорожею та плиткою' },
	{ title: 'Хрести з граніту', image: hrestyGranitni, alt: 'Різьблений хрест з граніту' },
	{ title: 'Підвіконня з граніту', image: pidvikonnya, alt: 'Гранітне підвіконня з полірованою поверхнею' },
	{ title: 'Стільниці з граніту', image: stilnitsya, alt: 'Гранітна стільниця для кухні' },
	{ title: 'Сходи з граніту', image: schody, alt: 'Сходовий марш, облицьований гранітом' },
	{ title: 'Гранітний бордюр', image: bordur, alt: 'Бордюрний камінь з граніту' },
	{ title: 'Кулі з граніту', image: kulia, alt: 'Декоративна куля з полірованого граніту' },
	{ title: 'Гранітні вази', image: vaza, alt: 'Ваза з граніту для меморіального комплексу' },
] as const;
