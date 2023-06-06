import './Product.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Product({ title, img }) {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className='product__block' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
			<div className='block__content'>
				<div className={isShown ? 'block__photo active' : 'block__photo'}>
					<img src={`img/${img}.jpg`} alt='product' className='product__img' />
				</div>
				<h3 className='block__title'>{title}</h3>
			</div>
			<Link to='/catalog' className={isShown ? 'product__button active' : 'product__button'}>
				<span>Перейти в каталог</span>
			</Link>
		</div>
	);
}

export default Product;
