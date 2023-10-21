import React from 'react';
import {NavLink} from 'react-router-dom';
import {useIntl} from 'react-intl';
import MediaQuery, {useMediaQuery} from 'react-responsive';

import LocaleSelector from './../LocaleSelector';
import HamburgerMenu from './../HamburgerMenu';

import './Navigation.scss';

import messages from './messages';

const Navigation = ({isOpen = false, handleOpen}: {isOpen?: boolean; handleOpen: (isOpen: boolean) => void}) => {
	const intl = useIntl();
	const isMobile = useMediaQuery({maxWidth: 778});

	return (
		<nav className={`${isMobile && isOpen ? 'open' : ''}`}>
			<MediaQuery maxWidth={778}>
				<HamburgerMenu onClick={() => handleOpen(!isOpen)} isOpen={isOpen} />
			</MediaQuery>
			<ul className={`${isMobile && isOpen ? 'open' : 'closed'}`}>
				<li>
					<LocaleSelector />
				</li>
				<li>
					<NavLink
						to="/contact"
						className={({isActive, isPending}) => (isPending ? 'pending' : isActive ? 'active' : '')}
					>
						{intl.formatMessage(messages.contact)}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about-me"
						className={({isActive, isPending}) => (isPending ? 'pending' : isActive ? 'active' : '')}
					>
						{intl.formatMessage(messages.aboutMe)}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
