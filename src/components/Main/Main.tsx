import React, {useMemo} from 'react';
import {useIntl} from 'react-intl';
import MediaQuery from 'react-responsive';

import Grid from './../Grid';
import GridRow from './../Grid/Subcomponents/GridRow';
import GridColumn from './../Grid/Subcomponents/GridColumn';
import HighlightedSpan from './../HighlightedSpan';

import {SoftSkills, HardSkills} from './SubComponents';

import styles from './Main.module.scss';

import messages from './messages';

const Main = () => {
	const intl = useIntl();
	// const location = useLocation();
	// const isHomepage = useMemo(() => location.pathname === '/', [location.pathname]);

	return (
		<main className={styles['main-wrapper']}>
			<Grid classNames={styles['main__grid']}>
				<GridRow>
					<GridColumn xs={12} md={10} classNames={styles['main__slogan']}>
						<p>
							{intl.formatMessage(messages.firstPhrase, {
								span: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
							})}
							{intl.formatMessage(messages.secondPhrase, {
								span: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
							})}
						</p>
						<MediaQuery minWidth={768}>
							<div className={styles['main__skills']}>
								<HardSkills />
								<SoftSkills />
							</div>
						</MediaQuery>
					</GridColumn>
					<Grid.Column xs={6} md={2} classNames={styles['main__profile-wrapper']}>
						<div className={styles['profile-wrapper']}>
							<img src={require('./../../assets/ln-account.png')} alt="me" />
						</div>
					</Grid.Column>
					<MediaQuery maxWidth={767}>
						<Grid.Column xs={12} md={4} classNames="main__skills">
							<HardSkills />
							<SoftSkills />
						</Grid.Column>
					</MediaQuery>
				</GridRow>
			</Grid>
		</main>
	);
};

export default Main;
