import React from 'react';
import {useIntl} from 'react-intl';

import messages from './messages';

import styles from './CVDownloader.module.scss';

const CVDownloader = () => {
	return (
		<>
			<h3>{useIntl().formatMessage(messages.cvTitle)}</h3>
			<div className={styles['cv-div']}>
				<a href="./andrea-fazio_it.pdf" download>
					CV IT
				</a>
				<a href="./andrea-fazio_en.pdf" download>
					CV EN
				</a>
			</div>
		</>
	);
};

export default CVDownloader;
