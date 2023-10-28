import React from 'react';

import {IHighlightedSpanProps} from './IHighlightedSpan';

import styles from './HighlightedSpan.module.scss';

const HighlightedSpan = ({color, children}: IHighlightedSpanProps) => {
	return color && children ? (
		<span className={styles['highlighted-span']} data-color={color}>
			{children}
		</span>
	) : (
		<></>
	);
};

export default HighlightedSpan;
