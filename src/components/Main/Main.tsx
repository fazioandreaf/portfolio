import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {useIntl} from 'react-intl';

import {HighlightedSpan, Grid} from './../index';

import {SoftSkills, HardSkills} from './SubComponents';

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
				<Grid classNames="main__grid">
					<Grid.Row center>
						<Grid.Column xs={12} md={10} classNames="main__slogan">
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
						<Grid.Column xs={6} md={2} classNames="main__profile-wrapper">
							<div className="profile-wrapper">
								<img src={require('./../../assets/ln-account.png')} alt="me" />
							</div>
						</Grid.Column>
						<Grid.Column xs={12} md={4} classNames="main__skills">
							<HardSkills />
							<SoftSkills />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			)}
		</main>
	);
};

export default Main;
