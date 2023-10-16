import React from 'react';
import {NavLink} from 'react-router-dom';
import {useIntl} from 'react-intl';

import LocaleSelector from './../LocaleSelector';

import messages from './messages';

const Navigation = () => {
	const intl = useIntl();

	return (
		<nav>
			<ul>
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
