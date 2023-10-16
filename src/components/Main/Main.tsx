import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {useIntl} from 'react-intl';

import HighlightedSpan from './../HighlightedSpan';
import Grid from './../Grid';

import './Main.scss';

import messages from './messages';

const Main = () => {
	const intl = useIntl();
	const location = useLocation();
	const isHomepage = useMemo(() => location.pathname === '/', [location.pathname]);

	return (
		<main>
			{!isHomepage ? (
				<Outlet />
			) : (
				<Grid classNames="main-grid">
					<div>
						<p>
							<span>
								{intl.formatMessage(messages.firstPhrase, {
									firstSpan: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
									secondSpan: (chunk: any) => <HighlightedSpan color="blue">{chunk}</HighlightedSpan>,
								})}
							</span>
							<span>{intl.formatMessage(messages.secondPhrase)}</span>
						</p>
					</div>
					<div className="profile-wrapper">
						<img src={require('./../../assets/ln-account.png')} alt="me" />
					</div>
				</Grid>
			)}
		</main>
	);
};

export default Main;
