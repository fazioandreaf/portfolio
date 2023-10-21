import React, {useState} from 'react';

import Navigation from './../Navigation';

import './Header.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="header">
			<div className={`logo ${isOpen ? 'open' : ''}`}>
				<a href="/">
					<span>fazio</span>
					<span>andrea</span>
					<span>.</span>
					<span>me</span>
				</a>
				<h1 style={{display: 'none'}}>fazioandrea.me</h1>
			</div>
			<Navigation isOpen={isOpen} handleOpen={handleOpen} />
		</header>
	);
};

export default Header;
