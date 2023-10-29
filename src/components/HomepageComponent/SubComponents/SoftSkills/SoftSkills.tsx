import React from 'react';
import {useIntl} from 'react-intl';

import styles from './SoftSkills.module.scss';

import messages from './messages';

const SoftSkills = () => {
	const intl = useIntl();

	return (
		<div className={styles['skills']}>
			<h3>{intl.formatMessage(messages.softSkills)}</h3>
			<ul>
				{intl.formatMessage(messages.softSkillsList, {
					li: (chunk: any) => <li>{chunk}</li>,
				})}
			</ul>
		</div>
	);
};

export default SoftSkills;
