import React from 'react';
import {useIntl} from 'react-intl';

import './SoftSkills.scss';

import messages from './messages';

const SoftSkills = () => {
	const intl = useIntl();

	return (
		<div className="skills">
			<h3>{intl.formatMessage(messages.softSkills)}</h3>
			<ul>
				<li>{intl.formatMessage(messages.leadership)}</li>
				<li>{intl.formatMessage(messages.cooperative)}</li>
				<li>{intl.formatMessage(messages.goal)}</li>
				<li>{intl.formatMessage(messages.decision)}</li>
				<li>{intl.formatMessage(messages.spirit)}</li>
				<li>{intl.formatMessage(messages.communicative)}</li>
			</ul>
		</div>
	);
};

export default SoftSkills;
