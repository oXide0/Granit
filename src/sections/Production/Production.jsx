import './Production.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

function Production({ link }) {
	SwiperCore.use([Autoplay]);
	return (
		<section className='production' ref={link}>
			<h1 className='production__title'>Наше виробництво та фото з цеху</h1>
			<Swiper
				slidesPerView={2}
				centeredSlides={true}
				autoplay={{ delay: 3000 }}
				navigation={true}
				loop={true}
				modules={[Pagination]}
				className='production__swiper'
			>
				<SwiperSlide>
					<img src='img/work_1.jpeg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/work_2.jpeg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/work_3.jpeg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/work_4.jpeg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/work_5.jpeg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/work_6.jpeg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Production;
