import React, {useState, useCallback} from 'react';
import {useIntl} from 'react-intl';

import {Video, Grid} from './../index';

import {
	AboutMeSectionProject,
	AboutMeSectionEducation,
	AboutMeSectionExperience,
	AboutMeSectionBoolBnB,
	AboutMeSectionPortfolio,
} from './Subcomponents';
import messages from './messages';

import './AboutMe.scss';

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
		<div className="about-me">
			<h2 onClick={() => handleOpen('project')} className={`${!isOpenObj.project ? 'close' : ''}`}>
				{intl.formatMessage(messages.project)}
				<span className="material-symbols-outlined">expand_more</span>
			</h2>
			<Grid classNames={`grid ${isOpenObj['project'] ? 'grid-open' : 'grid-closed'}`}>
				<Grid.Row>
					<Grid.Column xs={12} lg={6}>
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
					<Grid.Column xs={12} lg={6}>
						<Video videoId="aylQMie1Jr0" iframeClassName="lncc-video" />
					</Grid.Column>
					<Grid.Column xs={12} lg={6}>
						<AboutMeSectionBoolBnB />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<h2 onClick={() => handleOpen('experience')} className={`${!isOpenObj.experience && 'close'}`}>
				{intl.formatMessage(messages.experience)}
				<span className="material-symbols-outlined">expand_more</span>
			</h2>
			<Grid classNames={`grid ${isOpenObj['experience'] ? 'grid-open' : 'grid-closed'}`}>
				<Grid.Row center>
					<Grid.Column xs={12} lg={6}>
						<div className="experience-imgs">
							{/* <img src={require('./../../assets/stories.jpg')} alt="me" /> */}
							<img src={require('./../../assets/tlg.png')} alt="me" />
						</div>
					</Grid.Column>
					<Grid.Column xs={12} lg={6}>
						<AboutMeSectionExperience />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<h2 onClick={() => handleOpen('education')} className={`${!isOpenObj.education && 'close'}`}>
				{intl.formatMessage(messages.education)}
				<span className="material-symbols-outlined">expand_more</span>
			</h2>
			<Grid classNames={`grid ${isOpenObj['education'] ? 'grid-open' : 'grid-closed'}`}>
				<Grid.Row center>
					<Grid.Column xs={12} lg={6}>
						<div className="education-imgs">
							<img src={require('./../../assets/degree-me.png')} alt="me" />
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
