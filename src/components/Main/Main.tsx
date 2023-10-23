import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {useIntl} from 'react-intl';
import MediaQuery from 'react-responsive';

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
					<Grid.Row>
						<Grid.Column xs={12} md={10} classNames="main__slogan">
							<p>
								{intl.formatMessage(messages.firstPhrase, {
									span: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
								})}
								{intl.formatMessage(messages.secondPhrase, {
									span: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
								})}
							</p>
							<MediaQuery minWidth={768}>
								<div className="main__skills">
									<HardSkills />
									<SoftSkills />
								</div>
							</MediaQuery>
						</Grid.Column>
						<Grid.Column xs={6} md={2} classNames="main__profile-wrapper">
							<div className="profile-wrapper">
								<img src={require('./../../assets/ln-account.png')} alt="me" />
							</div>
						</Grid.Column>
						<MediaQuery maxWidth={767}>
							<Grid.Column xs={12} md={4} classNames="main__skills">
								<HardSkills />
								<SoftSkills />
							</Grid.Column>
						</MediaQuery>
					</Grid.Row>
				</Grid>
			)}
		</main>
	);
};

export default Main;
