import React from 'react';

import {App, Contacts, ErrorContent, AboutMe} from './components';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorContent />,
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
