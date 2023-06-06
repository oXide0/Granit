import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Production from '../../sections/Production/Production';
import Products from '../../sections/Products/Products';
import Start from '../../sections/Start/Start';
import ContactForm from '../../sections/Contact/ContactForm';
import Faq from '../../sections/FAQ/FAQ';
import { useRef } from 'react';

function Home() {
	const products = useRef(null);
	const production = useRef(null);
	const contacts = useRef(null);
	const faq = useRef(null);

	return (
		<div className='wrapper'>
			<Header products={products} production={production} contacts={contacts} faq={faq} />
			<main>
				<Start />
				<Products link={products} />
				<ContactForm link={contacts} />
				<Production link={production} />
				<Faq link={faq} />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
