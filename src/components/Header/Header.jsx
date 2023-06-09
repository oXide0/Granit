import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ products, contacts, production, faq, scrollToSection }) {
	const [menuActive, setMenuActive] = useState(false);

	const onClickHandler = (ref) => {
		setMenuActive(false);
		scrollToSection(ref);
	};

	return (
		<header className='header'>
			<div className='header__logo'>
				<Link to='/'>
					<img src='img/granit_logo_black.png' alt='logo' className='logo' />
				</Link>
			</div>
			{products === undefined ? (
				<Link to='/' className='menu__item catalog__link'>
					Головна
				</Link>
			) : (
				<nav className={menuActive ? 'header__menu active' : 'header__menu'}>
					<div className='header__border'></div>
					<button className='menu__button' onClick={() => onClickHandler(products)}>
						Продукція
					</button>
					<div className='header__border'></div>
					<Link to='/catalog' className='menu__item'>
						Каталог
					</Link>
					<div className='header__border'></div>
					<button className='menu__button' onClick={() => onClickHandler(contacts)}>
						Контакти
					</button>
					<div className='header__border'></div>
					<button className='menu__button' onClick={() => onClickHandler(production)}>
						Виробництво
					</button>
					<div className='header__border'></div>
					<button className='menu__button' onClick={() => setMenuActive(faq)}>
						Поширені питання
					</button>
					<div className='header__border'></div>
					<p className='header__contact_sm'>+38 (067) 909 50 69</p>
				</nav>
			)}
			<p className='header__contact'>+38 (067) 909 50 69</p>
			<div className='burger__menu'>
				<button className='burger__button' onClick={() => setMenuActive(!menuActive)}>
					{menuActive ? (
						<img src='img/close-icon.svg' alt='close_icon' />
					) : (
						<img src='img/menu-logo.svg' alt='menu_icon' />
					)}
				</button>
			</div>
		</header>
	);
}

export default Header;
