import React, {useState, useCallback} from 'react';
import {useIntl} from 'react-intl';
import Image from 'next/image';
import cn from 'classnames';

import Video from 'baseComponents/Video';
import Grid from 'baseComponents/Grid';

import {
	AboutMeSectionProject,
	AboutMeSectionEducation,
	AboutMeSectionExperience,
	AboutMeSectionBoolBnB,
	AboutMeSectionPortfolio,
} from 'baseComponents/AboutPageSubComponents';

import tlg from 'baseAssets/tlg.png';
import degreeMe from 'baseAssets/degree-me.png';

import styles from './AboutMe.module.scss';

const AboutMe = () => {
	const intl = useIntl();
	const [isOpenObj, setIsOpenObj] = useState<{
		project: boolean;
		education: boolean;
		experience: boolean;
	}>({project: true, education: false, experience: false});

	const handleOpen = useCallback(
		(id: keyof typeof isOpenObj) => {
			setIsOpenObj(Object.assign({}, isOpenObj, {[id]: !isOpenObj[id]}));
		},
		[isOpenObj],
	);
	return (
		<div className={styles['about-me']}>
			<h2 onClick={() => handleOpen('project')} className={cn({close: !isOpenObj.project})}>
				{intl.formatMessage({id: 'project'})}
				<span className="material-symbols-outlined">expand_more</span>
			</h2>
			<Grid classNames={`grid ${isOpenObj['project'] ? 'grid-open' : 'grid-closed'}`}>
				<Grid.Row>
					<Grid.Column xs={12} lg={6} classNames={styles['video-wrapper']}>
						<Video videoId="CL_DMABCj58" iframeClassName="lncc-video" />
					</Grid.Column>
					<Grid.Column xs={12} lg={6}>
						<AboutMeSectionProject />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column xs={12}>
						<AboutMeSectionPortfolio />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column xs={12} lg={6} classNames={styles['video-wrapper']}>
						<Video videoId="aylQMie1Jr0" iframeClassName="lncc-video" />
					</Grid.Column>
					<Grid.Column xs={12} lg={6}>
						<AboutMeSectionBoolBnB />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<h2 onClick={() => handleOpen('experience')} className={cn({close: !isOpenObj.experience})}>
				{intl.formatMessage({id: 'experience'})}
				<span className="material-symbols-outlined">expand_more</span>
			</h2>
			<Grid classNames={`grid ${isOpenObj['experience'] ? 'grid-open' : 'grid-closed'}`}>
				<Grid.Row center>
					<Grid.Column xs={12} lg={6}>
						<div className={styles['experience-imgs']}>
							{/* <img src={require('./../../assets/stories.jpg')} alt="me" /> */}
							<Image src={tlg} alt="me" />
						</div>
					</Grid.Column>
					<Grid.Column xs={12} lg={6}>
						<AboutMeSectionExperience />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<h2 onClick={() => handleOpen('education')} className={cn({close: !isOpenObj.education})}>
				{intl.formatMessage({id: 'education'})}
				<span className="material-symbols-outlined">expand_more</span>
			</h2>
			<Grid classNames={`grid ${isOpenObj['education'] ? 'grid-open' : 'grid-closed'}`}>
				<Grid.Row center>
					<Grid.Column xs={12} lg={6}>
						<div className={styles['education-imgs']}>
							<Image src={degreeMe} alt="me" />
							{/* <img src={require('./../../assets/blb.jpg')} alt="me" /> */}
						</div>
					</Grid.Column>
					<Grid.Column xs={12} lg={6}>
						<AboutMeSectionEducation />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default AboutMe;
