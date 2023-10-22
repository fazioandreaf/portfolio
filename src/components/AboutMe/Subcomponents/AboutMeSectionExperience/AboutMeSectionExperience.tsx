import React from 'react';
import {useIntl} from 'react-intl';

import './AboutMeSectionExperience.scss';

import messages from './messages';

const AboutMeSectionExperience = () => {
	const intl = useIntl();

	return (
		<>
			<h3>{intl.formatMessage(messages.firstExpTitle)}</h3>
			<h4>{intl.formatMessage(messages.firstShortHeading)}</h4>
			<p>{intl.formatMessage(messages.firstExpDescription)}</p>
			<h3>{intl.formatMessage(messages.secondExpTitle)}</h3>
			<h4>{intl.formatMessage(messages.secondShortHeading)}</h4>
			<p>{intl.formatMessage(messages.secondExpDescription)}</p>
		</>
	);
};

export default AboutMeSectionExperience;
