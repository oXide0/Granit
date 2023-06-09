import './Accordion.scss';
import { useState } from 'react';

function Accordion({ title, content }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='accordion'>
			<div className='accordion-title' onClick={() => setIsActive(!isActive)}>
				<div>{title}</div>
				<p className='accordion__sign'>{isActive ? '-' : '+'}</p>
			</div>
			{isActive && <div className='accordion-content'>{content}</div>}
		</div>
	);
}

export default Accordion;
