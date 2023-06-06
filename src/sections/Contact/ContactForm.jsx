import './ContactForm.scss';
import { Link } from 'react-router-dom';

function ContactForm({ link }) {
	return (
		<section className='contact__form' ref={link}>
			<div>
				<img src='img/contact_img.jpg' alt='table' className='contact__img' />
			</div>
			<div className='contact__col'>
				<h1 className='contact__title'>Кортить почати?</h1>
				<p className='contact__subtitle'>Зв'яжіться з нами</p>
				<p className='contact__text'>
					Пошта:{' '}
					<Link
						to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMVksjfPCQgkFCFKlqXGmhFLhplQsPTldQqvjNndRVJnsscQhGlwCwfrRqlSkvxpPTntjfg'
						className='contact__src'
					>
						bezsmertnijd@gmail.com
					</Link>
				</p>
				<p className='contact__text'>
					Телефон: <span className='contact__src'>+38 (067) 909 50 69</span>
				</p>
			</div>
		</section>
	);
}

export default ContactForm;
