import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import './Catalog.scss';

function Catalog() {
	return (
		<div className='wrapper'>
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
