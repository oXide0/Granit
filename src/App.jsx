import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/catalog' element={<Catalog />} />
		</Routes>
	);
}

export default App;
