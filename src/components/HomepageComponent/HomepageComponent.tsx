import React from 'react';
import {useIntl} from 'react-intl';
import {useMediaQuery} from 'react-responsive';
import Image from 'next/image';
import cn from 'classnames';

import Grid from '../Grid';
import HighlightedSpan from '../HighlightedSpan';

import {SoftSkills, HardSkills} from './SubComponents';

import styles from './HomepageComponent.module.scss';

import messages from './messages';

const HomepageComponent = () => {
	const intl = useIntl();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 768px)',
	});

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
						<div className={cn(styles['main__skills'], {'d-none': !isDesktopOrLaptop})}>
							<HardSkills />
							<SoftSkills />
						</div>
					</Grid.Column>
					<Grid.Column xs={6} md={2} classNames={styles['main__profile-wrapper']}>
						<div className={styles['profile-wrapper']}>
							<Image
								src="./ln-account.webp"
								alt="Mine Profile Image"
								width={100}
								height={100}
								className={styles['img']}
								loading="lazy"
							/>
						</div>
					</Grid.Column>
					<Grid.Column xs={12} md={4} classNames={cn(styles['main__skills'], {'d-none': isDesktopOrLaptop})}>
						<HardSkills />
						<SoftSkills />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
};

export default HomepageComponent;
