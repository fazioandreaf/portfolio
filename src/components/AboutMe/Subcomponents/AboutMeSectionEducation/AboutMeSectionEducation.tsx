import React from 'react';
import {useIntl} from 'react-intl';

import './AboutMeSectionEducation.scss';

import messages from './messages';

const AboutMeSectionEducation = () => {
	const intl = useIntl();

	return (
		<>
			<h3>{intl.formatMessage(messages.firstEduTitle)}</h3>
			<h4>{intl.formatMessage(messages.firstEduShortHeading)}</h4>
			<p>{intl.formatMessage(messages.firstEduDescription)}</p>
			<h3>{intl.formatMessage(messages.secondEduTitle)}</h3>
			<h4>{intl.formatMessage(messages.secondEduShortHeading)}</h4>
			<p>{intl.formatMessage(messages.secondEduDescription)}</p>
		</>
	);
};

export default AboutMeSectionEducation;
