import { Container } from 'react-bootstrap';

import NavbarLayout from './components/NavbarLayout';

type propType = {
	children?: React.ReactNode;
};

const RootLayout = ({ children }: propType) => {
	return (
		<main>
			<NavbarLayout />
			<Container className='mb-4'>{children}</Container>
		</main>
	);
};

export default RootLayout;
