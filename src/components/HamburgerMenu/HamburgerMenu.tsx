import React from 'react';
import cn from 'classnames';

import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({isOpen, onClick}: {isOpen: boolean; onClick: () => void}) => {
	return (
		<div className={cn(styles['hamburgher-menu'], {[styles.open]: isOpen})} onClick={onClick}>
			<span className="line-1" />
			<span className="line-2" />
			<span className="line-3" />
		</div>
	);
};

export default HamburgerMenu;
