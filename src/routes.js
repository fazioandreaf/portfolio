import React from 'react';

import {App, Contacts, Maintenance, AboutMe} from './components';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <Maintenance />,
		children: [
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
];

export default routes;
