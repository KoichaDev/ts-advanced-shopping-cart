import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { navType } from '../types/layout.type';
type DisplayLinkProps = {
	navs?: navType[];
};

const DisplayLink = ({ navs }: DisplayLinkProps) => {
	return (
		<>
			{navs.map((nav, index) => {
				const { url, textContent } = nav;
				return (
					<Nav.Link
						to={url}
						as={NavLink}>
						{textContent}
					</Nav.Link>
				);
			})}
		</>
	);
};

export default DisplayLink;
