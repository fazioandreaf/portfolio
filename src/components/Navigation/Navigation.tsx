import React from 'react';
import Link from 'next/link';
import {useIntl} from 'react-intl';
import cn from 'classnames';
import MediaQuery, {useMediaQuery} from 'react-responsive';

import LocaleSelector from 'baseComponents/LocaleSelector';
import HamburgerMenu from 'baseComponents/HamburgerMenu';

import styles from './Navigation.module.scss';

import messages from './messages';

const Navigation = ({isOpen = false, handleOpen}: {isOpen?: boolean; handleOpen: (isOpen: boolean) => void}) => {
	const intl = useIntl();
	const isMobile = useMediaQuery({maxWidth: 778});

	return (
		<nav className={cn(styles['nav'], {[styles['open']]: isMobile && isOpen})}>
			<MediaQuery maxWidth={778}>
				<HamburgerMenu onClick={() => handleOpen(!isOpen)} isOpen={isOpen} />
			</MediaQuery>
			<ul className={`${isMobile && isOpen ? styles['open'] : styles['closed']}`}>
				<li>
					<LocaleSelector />
				</li>
				<li>
					<Link href="/contact">{intl.formatMessage(messages.contact)}</Link>
				</li>
				<li>
					<Link href="/about-me">{intl.formatMessage(messages.aboutMe)}</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
