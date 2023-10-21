import React from 'react';
import {useIntl} from 'react-intl';

import {HighlightedSpan} from '../../../index';

import './AboutMeSectionProject.scss';

import messages from './messages';

const AboutMeSectionProject = () => {
	const intl = useIntl();

	return (
		<>
			<h3>{intl.formatMessage(messages.lnccPWA)}</h3>
			<p>
				{useIntl().formatMessage(messages.firstProject, {
					lncc: (chunk: any) => (
						<a href="ln-cc.com" target="_blank">
							{chunk}
						</a>
					),
					hglt: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
				})}
			</p>
		</>
	);
};

export default AboutMeSectionProject;
