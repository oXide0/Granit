import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer({ products, contacts, production, scrollToSection }) {
    const handleClickScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <footer className='footer'>
            <div className='footer__row'>
                <Link to='/' className='footer__logo'>
                    <img src='img/granit_logo_black.png' alt='logo' className='logo' />
                </Link>
            </div>
            <div className='footer__row'>
                <div className='footer__col col_sm'>
                    <h2 className='footer__title'>Юридична адреса</h2>
                    <Link
                        className='footer__subtitle'
                        target='_blank'
                        to='https://www.google.com/maps/place/%D0%A1%D0%BB%D0%BE%D0%B1%D1%96%D0%B4%D0%BA%D0%B0,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+12512/@50.4453884,28.8736479,13z/data=!4m6!3m5!1s0x472b86d9f77a5793:0xbf9594081db111d0!8m2!3d50.4487013!4d28.8917642!16s%2Fg%2F120vnb9d?entry=ttu'
                    >
                        обл. Житомирська, р. Коростишівський, с. Слобідка
                    </Link>
                    <div className='footer__block_btn'>
                        <button className='footer__button' onClick={handleClickScroll}>
                            <img src='img/arrow-top.svg' alt='arrow' />
                        </button>
                    </div>
                </div>
                <div className='footer__col'>
                    <h2 className='footer__title'>Телефон</h2>
                    <a className='footer__subtitle' href='tel:+380679095069'>
                        +38 (067) 909 50 69
                    </a>
                    <h2 className='footer__title'>Email</h2>
                    <a className='footer__subtitle' href='mailto:bezsmertnijd@gmail.com'>
                        bezsmertnijd@gmail.com
                    </a>
                    <h2 className='footer__title footer__title_sm'>Юридична адреса</h2>
                    <Link
                        className='footer__subtitle footer__subtitle_sm'
                        to='https://www.google.com/maps/place/%D0%A1%D0%BB%D0%BE%D0%B1%D1%96%D0%B4%D0%BA%D0%B0,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+12512/@50.4453884,28.8736479,13z/data=!4m6!3m5!1s0x472b86d9f77a5793:0xbf9594081db111d0!8m2!3d50.4487013!4d28.8917642!16s%2Fg%2F120vnb9d?entry=ttu'
                    >
                        обл. Житомирська, р. Коростишівський, с. Слобідка
                    </Link>
                </div>
                <div className='footer__col'>
                    <h2 className='footer__title'>Навігація</h2>
                    {products === undefined ? (
                        <div className='footer__menu'>
                            <Link to='/' className='footer__subtitle'>
                                Головна
                            </Link>
                        </div>
                    ) : (
                        <div className='footer__menu'>
                            <p
                                className='footer__subtitle'
                                onClick={() => scrollToSection(products)}
                            >
                                Продукція
                            </p>
                            <Link to='/catalog' className='footer__subtitle'>
                                Каталог
                            </Link>
                            <p
                                className='footer__subtitle'
                                onClick={() => scrollToSection(contacts)}
                            >
                                Контакти
                            </p>
                            <p
                                className='footer__subtitle'
                                onClick={() => scrollToSection(production)}
                            >
                                Виробництво
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
