import React from 'react';

import Link from 'next/link';
import cn from 'classnames';

import styles from './Logo.module.scss';

const Logo = (isOpen: {isOpen?: boolean}) => {
	return (
		<div className={cn('logo', styles['logo'], {open: isOpen})}>
			<Link href="/">
				<span>fazio</span>
				<span>andrea</span>
				<span>.</span>
				<span>me</span>
			</Link>
			<h1 style={{display: 'none'}}>fazioandrea.me</h1>
		</div>
	);
};

export default Logo;
