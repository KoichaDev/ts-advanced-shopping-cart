import { Container, Navbar, Nav } from 'react-bootstrap';
import DisplayLink from './composable/DisplayLink';
import { navType } from './types/layout.type';

const NavbarLayout = () => {
	const navs: navType[] = [
		{
			url: '/',
			textContent: 'Home',
		},
		{
			url: '/store',
			textContent: 'Store',
		},
		{
			url: '/about',
			textContent: 'About',
		},
	];

	return (
		<header>
			<Container>
				<Navbar className='bg-white shadow-sm mb-3'>
					<Nav>
						<DisplayLink {...navs} />
					</Nav>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavbarLayout;
