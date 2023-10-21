import React from 'react';
import cn from 'classnames';

import {IGridRowProps} from './IGridRow';

import './GridRow.scss';

const GridRow = ({classNames, center, style, children}: IGridRowProps) => {
	const attrs: {className: string; style?: React.CSSProperties} = {
		className: cn('row', classNames, {['center']: center}),
	};

	if (style) {
		attrs.style = style;
	}

	return <div {...attrs}>{children}</div>;
};

export default GridRow;
