import React, {useState, useEffect, useContext} from 'react';
import {IntlProvider} from 'react-intl';
import cn from 'classnames';

import Header from '../Header';
import Logo from '../Logo';

import {photoASCII} from '../../constants.js';

import styles from './LayoutRoot.module.scss';

import LocaleCtx from './../../context';

const Wrapper = ({children}: {children: Element}) => {
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
			{children}
		</IntlProvider>
	) : (
		<div className={styles['loading']}>
			<Logo />
		</div>
	);
};

const LayoutRoot = ({children}: {children: Element}) => {
	return (
		<div className={cn('app-container')}>
			<LocaleCtxProvider>
				<Wrapper children={children} />
			</LocaleCtxProvider>
		</div>
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

export default LayoutRoot;
