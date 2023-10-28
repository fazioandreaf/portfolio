import React from 'react';
import {useIntl} from 'react-intl';

import {HighlightedSpan} from '../../../../components/index';

import messages from './messages';

const AboutMeSectionBoolBnB = () => {
	const intl = useIntl();

	return (
		<>
			<h3>{intl.formatMessage(messages.title)}</h3>
			<p>
				{intl.formatMessage(messages.description, {
					hglt: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
				})}
			</p>
		</>
	);
};

export default AboutMeSectionBoolBnB;
