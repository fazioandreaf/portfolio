import React, {useContext} from 'react';
import {useRouter} from 'next/router';
import cn from 'classnames';

import LocaleCtx from './../../context';

import styles from './LocaleSelector.module.scss';

const LocaleSelector = () => {
	const context = useContext(LocaleCtx);
	const router = useRouter();

	const handlerLocaleLS = (locale: string) => {
		context.handleLocale(locale);
		router.push(router.pathname, router.pathname, {locale});
	};

	return (
		<div className={styles['locale-selector']}>
			<span className={cn({[styles['active']]: context.locale === 'en'})} onClick={() => handlerLocaleLS('en')}>
				EN
			</span>
			/
			<span className={cn({[styles['active']]: context.locale === 'it'})} onClick={() => handlerLocaleLS('it')}>
				IT
			</span>
		</div>
	);
};

export default LocaleSelector;
