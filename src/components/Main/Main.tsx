import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

import './Main.scss';

import HighlightedSpan from './../HighlightedSpan';

import Grid from './../Grid';

const Main = () => {
	const location = useLocation();
	const isHomepage = useMemo(() => location.pathname === '/', [location.pathname]);

	console.log(location);
	return (
		<main>
			{!isHomepage ? (
				<Outlet />
			) : (
				<Grid classNames="main-grid">
					<div>
						<p>
							<span>
								In addition to being a <HighlightedSpan color="green">developer</HighlightedSpan>, I am
								also an <HighlightedSpan color="blue">engineer</HighlightedSpan>.
							</span>
							<span>
								Since high school there has been a strong passion for computer science and technology
								with a clear goal in mind: to maximize the potential of the tools at hand and improve
								processes.
							</span>
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
