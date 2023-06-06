import './Projects.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';

function Projects() {
	return (
		<section className='projects'>
			<h1 className='projects__title'>Наші роботи</h1>
			<Swiper
				slidesPerView={2}
				centeredSlides={true}
				autoplay={{ delay: 3000 }}
				navigation={true}
				loop={true}
				modules={[Pagination]}
			>
				<SwiperSlide>
					<img src='img/carousel-photo.jpg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/stairs.jpg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/stilnitsya-granitna.jpg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/table_top.jpg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/windowsill.jpg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='img/pidvikonnya-z-granitu.jpg' alt='photo-work' className='carousel__photo' />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Projects;
