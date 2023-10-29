import React from 'react';
import cn from 'classnames';

import {IGridRowProps} from './IGridRow';

import styles from  './GridRow.module.scss';

const GridRow = ({classNames, center, style, children}: IGridRowProps) => {
	const attrs: {className: string; style?: React.CSSProperties} = {
		className: cn(styles['row'], classNames, {center: center}),
	};

	if (style) {
		attrs.style = style;
	}

	return <div {...attrs}>{children}</div>;
};

export default GridRow;
