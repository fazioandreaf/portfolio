import React from 'react';

import CVDownloader from 'baseComponents/CVDownloader';

import styles from './Contacts.module.scss';

const Contacts = () => {
	return (
		<>
			<CVDownloader />
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

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default Contacts;
