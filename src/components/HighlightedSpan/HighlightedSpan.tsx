import React from 'react';

import {IHighlightedSpanProps} from './IHighlightedSpan';

import './HighlightedSpan.scss';

const HighlightedSpan = ({color, children}: IHighlightedSpanProps) => {
	return color && children ? (
		<span className="highlighted-span" data-color={color}>
			{children}
		</span>
	) : (
		<></>
	);
};

export default HighlightedSpan;
