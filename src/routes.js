import React from 'react';

import App from './components/App/App';
import Contacts from './components/Contacts';
import ErrorContent from './components/ErrorContent';
import Maintenance from './components/Maintenance';

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
				element: <Maintenance />,
			},
		],
	},
];

export default routes;
