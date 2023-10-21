import React from 'react';

import './Contacts.scss';

const Contacts = () => {
	const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
		e.preventDefault();
		// Crea un elemento a con attributo "download" e simula un clic
		const link = document.createElement('a');
		link.href = url;
		link.download = 'example.pdf'; // Specifica il nome del file da scaricare
		link.click();
	};

	return (
		<>
			<h5>Download the CV in the language of your choice</h5>
			<div className="cv-div">
				<a onClick={(e) => handleDownloadClick(e, './../../assets/andrea-fazio_en.pdf')}>CV en</a>
				<a onClick={(e) => handleDownloadClick(e, './../../assets/andrea-fazio_it.pdf')}>CV it</a>
			</div>
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
		</>
	);
};

export default Contacts;
