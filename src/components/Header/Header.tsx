import React from 'react';

import Navigation from './../Navigation';

import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<a href="/">
					<span>fazio</span>
					<span>andrea</span>
					<span>.</span>
					<span>me</span>
				</a>
				<h1 style={{display: 'none'}}>fazioandrea.me</h1>
			</div>
			<Navigation />
		</header>
	);
};

export default Header;
