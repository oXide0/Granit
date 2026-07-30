import gabro from '~/assets/img/gabro.webp';
import kapusta from '~/assets/img/kapusta.webp';
import labrador from '~/assets/img/labrador.webp';
import liznuku from '~/assets/img/liznuku.webp';
import pokostivka from '~/assets/img/pokostivka.webp';

/** Granite varieties shown on /catalog. */
export const TILES = [
	{
		title: 'Габро/Буки',
		image: gabro,
		alt: 'Зразок плитки з граніту габро (Буки) — глибокий чорний камінь',
		description: 'Глибокий чорний граніт габро — класичний вибір для памʼятників та облицювання.',
	},
	{
		title: 'Лабрадорит',
		image: labrador,
		alt: 'Зразок плитки з лабрадориту із синім переливом',
		description: 'Темний камінь із характерним синім переливом кристалів.',
	},
	{
		title: 'Лізники',
		image: liznuku,
		alt: 'Зразок плитки з граніту Лізники сіро-рожевого відтінку',
		description: 'Сіро-рожевий граніт із рівномірним зерном.',
	},
	{
		title: 'Капуста',
		image: kapusta,
		alt: 'Зразок плитки з граніту Капуста із зеленуватим візерунком',
		description: 'Граніт із виразним зеленувато-сірим візерунком.',
	},
	{
		title: 'Покостівка',
		image: pokostivka,
		alt: 'Зразок плитки з покостівського граніту світло-сірого кольору',
		description: 'Світло-сірий покостівський граніт — універсальний для сходів і підвіконь.',
	},
] as const;
