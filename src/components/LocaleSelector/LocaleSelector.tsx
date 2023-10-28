import React, {useContext} from 'react';
import cn from 'classnames';

import LocaleCtx from './../../context';

import styles from './LocaleSelector.module.scss';

const LocaleSelector = () => {
	const context = useContext(LocaleCtx);

	const handlerLocaleLS = (locale: string) => {
		context.handleLocale(locale);
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
