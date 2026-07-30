import stairs from '~/assets/img/stairs.jpg';
import tableTop from '~/assets/img/table_top.jpg';

export const HERO = {
	eyebrow: 'Власне виробництво · Житомир і область',
	title: 'Вироби з граніту у Житомирі',
	lead: 'Памʼятники, плити, сходи, підвіконня, стільниці та бордюри з натурального каменю. Обробляємо граніт у власному цеху на Житомирщині й відвантажуємо оптом і в роздріб.',
	image: stairs,
	imageAlt: 'Гранітні сходи з полірованого каменю у світлому інтерʼєрі',
	/** Small overlapping image that gives the hero its editorial depth. */
	inset: tableTop,
	insetAlt: 'Кухонна стільниця з натурального граніту з вирізом під мийку',
} as const;
