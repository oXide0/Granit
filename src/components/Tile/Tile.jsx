import './Tile.scss';

function Tile({ title, tile }) {
	return (
		<div className='tile_block'>
			<div>
				<img src={`img/${tile}.webp`} alt='tile' className='tile__img' />
			</div>
			<h1 className='tile__title'>{title}</h1>
		</div>
	);
}

export default Tile;
