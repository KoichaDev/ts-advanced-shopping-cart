import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import RootLayout from './layouts/RootLayout';
import ViewHome from './views/home/ViewHome';
import ViewAbout from './views/about/ViewAbout';
import ViewStore from './views/store/ViewStore';

function App() {
	return (
		<RootLayout>
			<Routes>
				<Route
					path='/'
					element={<ViewHome />}
				/>
				<Route
					path='/about'
					element={<ViewAbout />}
				/>
				<Route
					path='/store'
					element={<ViewStore />}
				/>
			</Routes>
		</RootLayout>
	);
}

export default App;
