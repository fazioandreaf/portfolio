import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {IntlProvider} from 'react-intl';

import {Main, Header} from './components/index';

import './style/global.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/contact',
		element: <span>contactcontactcontactcontact</span>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<IntlProvider locale="en" defaultLocale="en">
			<Header />
			<main>
				<RouterProvider router={router} />
			</main>
		</IntlProvider>
	</React.StrictMode>,
);
