import React from 'react';

import './HighlightedSpan.scss';
import {IHighlightedSpanProps} from './IHighlightedSpan';

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
