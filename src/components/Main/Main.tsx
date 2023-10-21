import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {useIntl} from 'react-intl';

import {HighlightedSpan, Grid} from './../index';

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
						<Grid.Column xs={12} md={10}>
							<p>
								{intl.formatMessage(messages.firstPhrase, {
									firstSpan: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
									secondSpan: (chunk: any) => (
										<HighlightedSpan color="green">{chunk}</HighlightedSpan>
									),
								})}
								{intl.formatMessage(messages.secondPhrase)}
							</p>
						</Grid.Column>
						<Grid.Column xs={6} md={2}>
							<div className="profile-wrapper">
								<img src={require('./../../assets/ln-account.png')} alt="me" />
							</div>
						</Grid.Column>
						<Grid.Column xs={6} md={2} classNames="soft-skills">
							<h3>{intl.formatMessage(messages.softSkills)}</h3>
							<ul>
								<li>{intl.formatMessage(messages.leadership)}</li>
								<li>{intl.formatMessage(messages.cooperative)}</li>
								<li>{intl.formatMessage(messages.goal)}</li>
								<li>{intl.formatMessage(messages.decision)}</li>
								<li>{intl.formatMessage(messages.spirit)}</li>
								<li>{intl.formatMessage(messages.communicative)}</li>
							</ul>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			)}
		</main>
	);
};

export default Main;
