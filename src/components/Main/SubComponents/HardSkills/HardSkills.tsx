import React from 'react';
import {useIntl} from 'react-intl';

import './HardSkills.scss';

import messages from './messages';

const HardSkills = () => {
	const intl = useIntl();

	return (
		<div className="skills">
			<h3>{intl.formatMessage(messages.hardSkills)}</h3>
			<ul>
				<li>{intl.formatMessage(messages.react)}</li>
				<li>{intl.formatMessage(messages.redux)}</li>
				<li>{intl.formatMessage(messages.sfcc)}</li>
				<li>{intl.formatMessage(messages.node)}</li>
				<li>{intl.formatMessage(messages.api)}</li>
			</ul>
		</div>
	);
};

export default HardSkills;
