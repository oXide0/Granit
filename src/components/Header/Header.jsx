import './Header.scss';
import { Link } from 'react-router-dom';

function Header({ products, contacts, production, faq }) {
	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<header className='header'>
			<div className='header__logo'>
				<Link to='/'>
					<img src='img/granit_logo_black.png' alt='logo' className='logo' />
				</Link>
			</div>
			{products === undefined ? (
				<Link to='/' className='menu__item'>
					Головна
				</Link>
			) : (
				<nav className='header__menu'>
					<button className='menu__button' onClick={() => scrollToSection(products)}>
						Продукція
					</button>
					<Link to='/catalog' className='menu__item'>
						Каталог
					</Link>
					<button className='menu__button' onClick={() => scrollToSection(contacts)}>
						Контакти
					</button>
					<button className='menu__button' onClick={() => scrollToSection(production)}>
						Виробництво
					</button>
					<button className='menu__button' onClick={() => scrollToSection(faq)}>
						Поширені питання
					</button>
				</nav>
			)}

			<p className='header__contact'>+38 (067) 909 50 69</p>
		</header>
	);
}

export default Header;
