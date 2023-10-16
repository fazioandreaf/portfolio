import React, {useCallback, useContext} from 'react';

import LocaleCtx from './../../context';

import './LocaleSelector.scss';

const LocaleSelector = () => {
	const context = useContext(LocaleCtx);

	const handlerLocaleLS = useCallback((locale: string) => {
		context.handleLocale(locale);
	}, []);

	return (
		<div className="locale-selector">
			<span className={context.locale === 'en' ? 'active' : ''} onClick={() => handlerLocaleLS('en')}>
				EN
			</span>
			/
			<span className={context.locale === 'it' ? 'active' : ''} onClick={() => handlerLocaleLS('it')}>
				IT
			</span>
		</div>
	);
};

export default LocaleSelector;
