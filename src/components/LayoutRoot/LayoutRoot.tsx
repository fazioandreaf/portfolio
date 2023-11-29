import React, {useState, useEffect, useContext, ReactNode} from 'react';
import {IntlProvider} from 'react-intl';
import {Titillium_Web} from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import cn from 'classnames';

import Header from '../Header';

// If loading a variable font, you don't need to specify the font weight
const titilliumRegular = Titillium_Web({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

import {photoASCII} from '../../constants.js';

import styles from './LayoutRoot.module.scss';

import LocaleCtx from './../../context';

const Wrapper = ({children}: {children: ReactNode}) => {
	const context = useContext(LocaleCtx);

	//ester egg
	useEffect(() => console.log(photoASCII), []);

	return (
		<IntlProvider locale={context.locale} messages={require(`./../../translations/${context.locale}`).default}>
			<Header />
			<main className={cn(styles['main'], titilliumRegular.className)}>{children}</main>
		</IntlProvider>
	);
};

const LayoutRoot = ({children}: {children: ReactNode}) => {
	return (
		<LocaleCtxProvider>
			<Wrapper>
				<Head>
					<title>Andrea Fazio - Fullstack Developer</title>
					<meta
						name="description"
						content="Hi. I am Andrea fazio, a full stack developer who is passionate about web"
					/>

					<meta property="og:url" content="https://fazioandrea.me/" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Andrea Fazio - Fullstack Developer" />
					<meta
						property="og:description"
						content="Hi. I am Andrea fazio, a full stack developer who is passionate about web"
					/>
					<meta property="og:image" content="./ln-account_og.jpeg" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:domain" content="fazioandrea.me" />
					<meta property="twitter:url" content="https://fazioandrea.me/" />
					<meta name="twitter:title" content="Andrea Fazio - Fullstack Developer" />
					<meta
						name="twitter:description"
						content="Hi. I am Andrea fazio, a full stack developer who is passionate about web"
					/>
					<meta name="twitter:image" content="./ln-account_og.jpeg" />
				</Head>
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-TXXNFPNEME" />
				<Script id="google-analytics">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-TXXNFPNEME');
					`}
				</Script>
				{children}
			</Wrapper>
		</LocaleCtxProvider>
	);
};

const LocaleCtxProvider = ({children}: {children: ReactNode}) => {
	const [locale, setLocale] = useState<string>('en');

	// Funzione per aggiornare locale
	const handleLocale = (newData: string) => {
		setLocale(newData);
	};

	return <LocaleCtx.Provider value={{locale, handleLocale}}>{children}</LocaleCtx.Provider>;
};

export default LayoutRoot;
