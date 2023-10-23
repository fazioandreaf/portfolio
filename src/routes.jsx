import React from 'react';

import {App, Contacts, Maintenance, AboutMe} from './components';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <Maintenance />,
		children: [
			{index: true, element: <Maintenance />},
			{
				path: '/contact',
				element: <Contacts />,
			},
			{
				path: '/about-me',
				element: <AboutMe />,
			},
		],
	},
	{
		path: '*',
		element: <Maintenance />,
	},
];

export default routes;
