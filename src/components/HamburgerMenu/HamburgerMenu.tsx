import React from 'react';

import './HamburgerMenu.scss';

const HamburgerMenu = ({isOpen, onClick}: {isOpen: boolean; onClick: () => void}) => {
	return (
		<div className={`hamburgher-menu ${isOpen ? 'open' : 'close'}`} onClick={onClick}>
			<span className="line-1" />
			<span className="line-2" />
			<span className="line-3" />
		</div>
	);
};

export default HamburgerMenu;
