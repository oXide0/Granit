import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.scss';

// import required modules
import { Navigation } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

function Carousel() {
	SwiperCore.use([Autoplay]);
	return (
		<div>
			<Swiper
				navigation={true}
				loop={true}
				autoplay={{ delay: 3000 }}
				modules={[Navigation]}
				className='mySwiper'
			>
				<SwiperSlide className='swiper__slide'>
					<div className='slide__col'>
						<h1 className='start__title'>Сходи з граніту</h1>
						<p className='start__subtitle'>
							Наша компанія пропонує високоякісні сходи з граніту, що стануть елегантним доповненням до
							будь-якого інтер'єру. Граніт - надзвичайно міцний та довговічний матеріал, який володіє
							неперевершеною красою і витонченістю.
						</p>
						<Link to='/catalog' className='start__button'>
							Перейти
						</Link>
					</div>
					<div>
						<img src='img/stairs.jpg' alt='slide' className='start__img' />
					</div>
				</SwiperSlide>
				<SwiperSlide className='swiper__slide'>
					<div className='slide__col'>
						<h1 className='start__title'>Стільниці з граніту</h1>
						<p className='start__subtitle'>
							Офісні столи з натурального каменю, кухонні гранітні стільниці з вирізами під мийку.
						</p>
						<Link to='/catalog' className='start__button'>
							Перейти
						</Link>
					</div>
					<div>
						<img src='img/table_top.jpg' alt='slide' className='start__img' />
					</div>
				</SwiperSlide>
				<SwiperSlide className='swiper__slide'>
					<div className='slide__col'>
						<h1 className='start__title'>Підвіконня з граніту</h1>
						<p className='start__subtitle'>
							Наші підвіконня з граніту виробляються з уважністю до деталей та з використанням передових
							технологій, що забезпечують високу якість та довговічність.
						</p>
						<Link to='/catalog' className='start__button'>
							Перейти
						</Link>
					</div>
					<div>
						<img src='img/windowsill.jpg' alt='slide' className='start__img' />
					</div>
				</SwiperSlide>
				<SwiperSlide className='swiper__slide'>
					<div className='slide__col'>
						<h1 className='start__title'>Гранітний бордюр</h1>
						<p className='start__subtitle'>
							Виготовленні нашою компанією високоякісні бордюри з граніту, які додають стиль та
							завершеність до вашого пейзажного дизайну.
						</p>
						<Link to='/catalog' className='start__button'>
							Перейти
						</Link>
					</div>
					<div>
						<img src='img/border.jpg' alt='slide' className='start__img' />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carousel;
