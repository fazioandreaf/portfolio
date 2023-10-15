import React from 'react';
import {NavLink} from 'react-router-dom';

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
			<nav>
				<ul>
					<li>
						<NavLink
							to="/contact"
							className={({isActive, isPending}) => (isPending ? 'pending' : isActive ? 'active' : '')}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about-me"
							className={({isActive, isPending}) => (isPending ? 'pending' : isActive ? 'active' : '')}
						>
							About Me
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
