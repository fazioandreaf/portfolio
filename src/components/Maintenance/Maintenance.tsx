import React from 'react';

import styles from './Maintenance.module.scss';

const Maintenance = () => {
	return (
		<>
			<div className={styles['maintenance-title']}>
				{/* TODO: Import svg inside the project */}
				<span className="material-symbols-outlined">sync</span>
			</div>
			<p>
				<span>
					The page is under maintenance.
					<br />
					You can find me at{' '}
					<a
						className={styles['linkedin-link']}
						href="https://www.linkedin.com/in/fazioandrea-f/"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin
					</a>
					.
				</span>
			</p>
		</>
	);
};

export default Maintenance;
