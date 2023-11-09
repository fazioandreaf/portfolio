import React from 'react';
import {useIntl} from 'react-intl';
import MediaQuery from 'react-responsive';
import Image from 'next/image';

import Grid from '../Grid';
import HighlightedSpan from '../HighlightedSpan';

import {SoftSkills, HardSkills} from './SubComponents';

import styles from './HomepageComponent.module.scss';

import profilePic from 'baseAssets/ln-account.png';
import messages from './messages';

const HomepageComponent = () => {
	const intl = useIntl();

	return (
		<>
			<Grid classNames={styles['main__grid']}>
				<Grid.Row>
					<Grid.Column xs={12} md={10} classNames={styles['main__slogan']}>
						<p>
							{intl.formatMessage(messages.homepageSlogan, {
								span: (chunk: any) => <HighlightedSpan color="green">{chunk}</HighlightedSpan>,
							})}
						</p>
						<MediaQuery minWidth={768}>
							<div className={styles['main__skills']}>
								<HardSkills />
								<SoftSkills />
							</div>
						</MediaQuery>
					</Grid.Column>
					<Grid.Column xs={6} md={2} classNames={styles['main__profile-wrapper']}>
						<div className={styles['profile-wrapper']}>
							<Image
								src={profilePic}
								alt="Mine Profile Image"
								className={styles['img']}
								placeholder="blur"
								loading="lazy"
							/>
						</div>
					</Grid.Column>
					<MediaQuery maxWidth={767}>
						<Grid.Column xs={12} md={4} classNames={styles['main__skills']}>
							<HardSkills />
							<SoftSkills />
						</Grid.Column>
					</MediaQuery>
				</Grid.Row>
			</Grid>
		</>
	);
};

export default HomepageComponent;
