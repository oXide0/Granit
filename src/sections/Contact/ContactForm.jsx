import './ContactForm.scss';

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
                    <a href='mailto:bezsmertnijd@gmail.com' className='contact__src'>
                        bezsmertnijd@gmail.com
                    </a>
                </p>
                <p className='contact__text'>
                    Телефон:{' '}
                    <a className='contact__src' href='tel:+380679095069'>
                        +38 (067) 909 50 69
                    </a>
                </p>
            </div>
        </section>
    );
}

export default ContactForm;
