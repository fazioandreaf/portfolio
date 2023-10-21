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
					<Grid.Row center>
						<Grid.Column xs={12} md={8}>
							<p>
								<span>
									{intl.formatMessage(messages.firstPhrase, {
										firstSpan: (chunk: any) => (
											<HighlightedSpan color="green">{chunk}</HighlightedSpan>
										),
										secondSpan: (chunk: any) => (
											<HighlightedSpan color="green">{chunk}</HighlightedSpan>
										),
									})}
								</span>
								<span>{intl.formatMessage(messages.secondPhrase)}</span>
							</p>
						</Grid.Column>
						<Grid.Column classNames="profile-wrapper" xs={12} md={4}>
							<img src={require('./../../assets/ln-account.png')} alt="me" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			)}
		</main>
	);
};

export default Main;
