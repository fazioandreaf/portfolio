import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {IntlProvider} from 'react-intl';

import routes from './routes';

import './style/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<IntlProvider locale="en" defaultLocale="en">
			<link
				rel="preload"
				href={require('./style/fonts/TitilliumWeb-Regular.ttf')}
				as="font"
				type="font/woff2"
				crossorigin
			/>
			<RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
		</IntlProvider>
	</React.StrictMode>,
);
