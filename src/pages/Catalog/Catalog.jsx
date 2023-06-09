import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import './Catalog.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

function Catalog() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='wrapper'>
			<HelmetProvider>
				<Helmet>
					<title>Granit | Catalog</title>
					<meta
						name='description'
						content='Купити граніт оптом. Наш асортимент включає різноманітні вироби з граніту, такі як плити, плитка, сходи, бордюри, віконні підвіконня, Стільниці для кухні та ванних кімнат, памятники та багато іншого. Ми працюємо тільки з найкращими постачальниками граніту, щоб забезпечити високу якість продукції та задовольнити навіть найвимогливіших клієнтів.'
					/>
					<meta
						name='keywords'
						content='Купити граніт, Види граніту, Габро/буки, Лабрадорит, Лізники, Капуста, Покостівка, Граніт оптом, Камінь, купити граніт, Гранітні плити, Одинарні памʼятники, Подвійні памʼятники, Меморіальні комплекси, Хрести з граніту, Підвіконня з граніту, Стільниці з граніту, Сходи з граніту, Гранітний бордюр, Кулі з граніту, Гранітні вази'
					/>
				</Helmet>
			</HelmetProvider>

			<Header />
			<main>
				<section className='catalog'>
					<h1 className='catalog__title'>Види плиток для продукції</h1>
					<div className='catalog__row'>
						<Tile title='Габро/Буки' tile='gabro' />
						<Tile title='Лабрадорит' tile='labrador' />
						<Tile title='Лізники' tile='liznuku' />
						<Tile title='Капуста' tile='kapusta' />
						<Tile title='Покостівка' tile='pokostivka' />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Catalog;
