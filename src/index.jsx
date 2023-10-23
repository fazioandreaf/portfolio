import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {IntlProvider} from 'react-intl';

import routes from './routes';
import LocaleCtx from './context';

import {Maintenance} from './components';

import './style/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Wrapper = () => {
	const context = useContext(LocaleCtx);

	return (
		<React.StrictMode>
			{context ? (
				<IntlProvider locale={context.locale} messages={require(`./translations/${context.locale}`).default}>
					<link
						rel="preload"
						href={require('./style/fonts/TitilliumWeb-Regular.ttf')}
						as="font"
						type="font/woff2"
						crossOrigin
					/>
					<RouterProvider router={createBrowserRouter(routes)} fallbackElement={<Maintenance />} />
				</IntlProvider>
			) : (
				<span>Loading...</span>
			)}
		</React.StrictMode>
	);
};

const App = () => {
	return (
		<LocaleCtxProvider>
			<Wrapper />
		</LocaleCtxProvider>
	);
};

const LocaleCtxProvider = ({children}) => {
	const [locale, setLocale] = useState('en');

	// Funzione per aggiornare locale
	const handleLocale = (newData) => {
		setLocale(newData);
	};

	return <LocaleCtx.Provider value={{locale, handleLocale}}>{children}</LocaleCtx.Provider>;
};

root.render(<App />);
