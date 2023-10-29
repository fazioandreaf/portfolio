import React from 'react';
import {useIntl} from 'react-intl';

import HighlightedSpan from 'baseComponents/HighlightedSpan';

import styles from './AboutMeSectionPortfolio.module.scss';

import messages from './messages';

const AboutMeSectionPortfolio = () => {
	const intl = useIntl();

	return (
		<>
			<h3>{intl.formatMessage(messages.title)}</h3>
			<p className={styles['ams-portfolio__paragraph']}>
				{intl.formatMessage(messages.description, {
					hglt: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
				})}
			</p>
		</>
	);
};

export default AboutMeSectionPortfolio;
