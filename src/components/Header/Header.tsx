import React, {useState} from 'react';

import Navigation from './../Navigation';
import {NavLink} from 'react-router-dom';

import './Header.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="header">
			<div className={`logo ${isOpen ? 'open' : ''}`}>
				<NavLink to="/">
					<span>fazio</span>
					<span>andrea</span>
					<span>.</span>
					<span>me</span>
				</NavLink>
				<h1 style={{display: 'none'}}>fazioandrea.me</h1>
			</div>
			<Navigation isOpen={isOpen} handleOpen={handleOpen} />
		</header>
	);
};

export default Header;
