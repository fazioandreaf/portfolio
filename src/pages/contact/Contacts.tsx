import React from 'react';
import {useIntl} from 'react-intl';

import styles from './Contacts.module.scss';

const Contacts = () => {
	const intl = useIntl();

	return (
		<>
			<h3>{intl.formatMessage({id: 'cvTitle'})}</h3>
			<div className={styles['cv-div']}>
				<a href="./andrea-fazio_it.pdf" download>
					CV IT
				</a>
				<a href="./andrea-fazio_en.pdf" download>
					CV EN
				</a>
			</div>
			<ul className={styles['contacts--ul']}>
				<li>
					<h3>Linkedin: </h3>
					<a href="https://www.linkedin.com/in/fazioandrea-f/" target="_blank" rel="noreferrer">
						fazioandrea-f
					</a>
				</li>
				<li>
					<h3>GitHub: </h3>
					<a href="https://github.com/fazioandreaf" target="_blank" rel="noreferrer">
						fazioandreaf
					</a>
				</li>
				<li>
					<h3>Gmail: </h3>
					<a href="mailto:fazioandrea@gmail.com" rel="noreferrer">
						fazioandrea@gmail.com
					</a>
				</li>
			</ul>
		</>
	);
};

export default Contacts;
