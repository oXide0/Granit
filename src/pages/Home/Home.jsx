import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Production from '../../sections/Production/Production';
import Products from '../../sections/Products/Products';
import Start from '../../sections/Start/Start';
import ContactForm from '../../sections/Contact/ContactForm';
import { useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
    const products = useRef(null);
    const production = useRef(null);
    const contacts = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className='wrapper'>
            <HelmetProvider>
                <Helmet>
                    <title>Granit | Home</title>
                    <meta
                        name='description'
                        content='Купити граніт оптом. Наш асортимент включає різноманітні вироби з граніту, такі як плити, плитка, сходи, бордюри, віконні підвіконня, Стільниці для кухні та ванних кімнат, памятники та багато іншого. Ми працюємо тільки з найкращими постачальниками граніту, щоб забезпечити високу якість продукції та задовольнити навіть найвимогливіших клієнтів.'
                    />
                    <meta
                        name='keywords'
                        content='Граніт оптом, Камінь, купити граніт, Гранітні плити, Одинарні памʼятники, Подвійні памʼятники, Меморіальні комплекси, Хрести з граніту, Підвіконня з граніту, Стільниці з граніту, Сходи з граніту, Гранітний бордюр, Кулі з граніту, Гранітні вази'
                    />
                </Helmet>
            </HelmetProvider>

            <Header
                products={products}
                production={production}
                contacts={contacts}
                scrollToSection={scrollToSection}
            />
            <main>
                <Start />
                <Products link={products} />
                <ContactForm link={contacts} />
                <Production link={production} />
            </main>
            <Footer
                products={products}
                production={production}
                contacts={contacts}
                scrollToSection={scrollToSection}
            />
        </div>
    );
}

export default Home;
