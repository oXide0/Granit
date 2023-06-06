import './Faq.scss';
import Accordion from '../../components/Accordion/Accordion';
import { AccordionData } from '../../utils/AccordionData';

function Faq({ link }) {
	return (
		<section className='faq' ref={link}>
			<h1 className='faq__title'>Поширені питання</h1>
			<div className='faq__accordion'>
				{AccordionData.map(({ title, content }, index) => (
					<Accordion key={index} title={title} content={content} />
				))}
			</div>
		</section>
	);
}

export default Faq;
