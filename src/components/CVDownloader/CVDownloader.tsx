import React from 'react';
import {useIntl} from 'react-intl';

import styles from './CVDownloader.module.scss';

const CVDownloader = () => {
	const handlefetch = async () => {
		const cvITurl = await fetch('/api/pdfName').then((res) => {
			console.log(res);
			return 'ciao';
		});
		const cvENurl = cvITurl;
	};
	handlefetch();

	return (
		<>
			<h3>{useIntl().formatMessage({id: 'cvTitle'})}</h3>
			<div className={styles['cv-div']}>
				{/* <a href="/api/andrea-fazio_en" download>CV IT</a> */}
				{/* <a href={cvENurl} download>
					CV EN
				</a> */}
			</div>
		</>
	);
};

export default CVDownloader;
