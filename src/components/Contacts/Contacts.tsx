import React from 'react';

import './Contacts.scss';

const Contacts = () => {
	return (
		<ul className="contacts--ul">
			<li>
				<span>Linkedin: </span>
				<a href="https://www.linkedin.com/in/fazioandrea-f/" target="_blank" rel="noreferrer">
					fazioandrea-f
				</a>
			</li>
			<li>
				<span>GitHub: </span>
				<a href="https://github.com/fazioandreaf" target="_blank" rel="noreferrer">
					fazioandreaf
				</a>
			</li>
			<li>
				<span>Gmail: </span>
				<a href="mailto:fazioandrea@gmail.com" rel="noreferrer">
					fazioandrea@gmail.com
				</a>
			</li>
		</ul>
	);
};

export default Contacts;
