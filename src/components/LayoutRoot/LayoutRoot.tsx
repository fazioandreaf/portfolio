import React, {useState, useEffect, useContext, ReactNode} from 'react';
import {IntlProvider} from 'react-intl';
import {Titillium_Web} from 'next/font/google';
import HeadTag from './HeadTag/HeadTag';
import cn from 'classnames';

import Header from '../Header';
import Logo from '../Logo';

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
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => console.log(photoASCII), []);

	useEffect(() => {
		setDomLoaded(true);
		return () => setDomLoaded(false);
	}, []);

	return context && domLoaded ? (
		<IntlProvider locale={context.locale} messages={require(`./../../translations/${context.locale}`).default}>
			<Header />
			<main className={cn(styles['main'], titilliumRegular.className)}>{children}</main>
		</IntlProvider>
	) : (
		<div className={styles['loading']}>
			<Logo />
		</div>
	);
};

const LayoutRoot = ({children}: {children: ReactNode}) => {
	return (
		<LocaleCtxProvider>
			<Wrapper>
				{children}</Wrapper>
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
