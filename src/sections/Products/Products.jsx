import './Products.scss';
import Product from '../../components/Product/Product';

function Products({ link }) {
	return (
		<section className='products' ref={link}>
			<div className='products__row'>
				<h2 className='products__title'>Наша продукція</h2>
			</div>
			<div className='products__row_blocks'>
				<Product title='Граніт оптом' img='granit_optom' />
				<Product title='Гранітні плити' img='granitna-plytka' />
				<Product title='Одинарні памʼятники' img='odynarni-pamyatniki' />
			</div>
			<div className='products__row_blocks'>
				<Product title='Подвійні памʼятники' img='podviyni-pamyatnyky' />
				<Product title='Меморіальні комплекси' img='memorialni-kompleksy' />
				<Product title='Хрести з граніту' img='hresty-granitni' />
			</div>
			<div className='products__row_blocks'>
				<Product title='Підвіконня з граніту ' img='pidvikonnya-z-granitu' />
				<Product title='Стільниці з граніту' img='stilnitsya-granitna' />
				<Product title='Сходи з граніту' img='schody' />
			</div>
			<div className='products__row_blocks'>
				<Product title='Гранітний бордюр' img='bordur' />
				<Product title='Кулі з граніту' img='kulia' />
				<Product title='Гранітні вази' img='vaza' />
			</div>
		</section>
	);
}

export default Products;
