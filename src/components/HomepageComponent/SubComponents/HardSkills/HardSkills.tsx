import React from 'react';
import {useIntl} from 'react-intl';

import styles from './HardSkills.module.scss';

import messages from './messages';

const HardSkills = () => {
	const intl = useIntl();

	return (
		<div className={styles['skills']}>
			<h3>{intl.formatMessage(messages.hardSkills)}</h3>
			<ul>
				{intl.formatMessage(messages.hardSkillsList, {
					li: (chunk: any) => <li>{chunk}</li>,
				})}
			</ul>
		</div>
	);
};

export default HardSkills;
