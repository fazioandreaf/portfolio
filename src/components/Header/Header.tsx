import React, {useState} from 'react';

import Navigation from 'baseComponents/Navigation';
import Logo from 'baseComponents/Logo';

import styles from './Header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={styles['header']}>
			<Logo isOpen={isOpen} />
			<Navigation isOpen={isOpen} handleOpen={handleOpen} />
		</header>
	);
};

export default Header;
