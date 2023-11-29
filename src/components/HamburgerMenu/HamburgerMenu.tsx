import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import cn from 'classnames';

import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({isOpen, onClick}: {isOpen: boolean; onClick: () => void}) => {
	const isMobile = useMediaQuery({maxWidth: 768});
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		isMobile &&
		isClient && (
			<div className={cn(styles['hamburgher-menu'], {[styles.open]: isOpen})} onClick={onClick}>
				<span className="line-1" />
				<span className="line-2" />
				<span className="line-3" />
			</div>
		)
	);
};

export default HamburgerMenu;
