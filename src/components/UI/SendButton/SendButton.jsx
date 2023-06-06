import './SendButton.scss';

function SendButton() {
	return (
		<form
			action='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMVksjfPCQgkFCFKlqXGmhFLhplQsPTldQqvjNndRVJnsscQhGlwCwfrRqlSkvxpPTntjfg'
			className='send__form'
		>
			<p className='send__text'>Надіслати листа</p>
			<button type='submit' className='button_send'>
				<img src='img/right-arrow.svg' alt='send' />
			</button>
		</form>
	);
}

export default SendButton;
