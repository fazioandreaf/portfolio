import React from 'react';

import './Maintenance.scss';

const Maintenance = () => {
	return (
		<>
			<div>
				{/* TODO: Import svg inside the project */}
				<span className="material-symbols-outlined">sync</span>
			</div>
			<p>
				<span>
					The page is under maintenance.
					<br />
					You can find me at{' '}
					<a
						className="linkedin-link"
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
