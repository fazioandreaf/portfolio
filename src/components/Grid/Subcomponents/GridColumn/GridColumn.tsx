import React from 'react';
import cn from 'classnames';

import {IGridColumnProps} from './IGridColumn';

import styles from './GridColumn.module.scss';

const GridColumn = ({xs, md, lg, classNames, style, children}: IGridColumnProps) => {
	const attrs: {className: string; style?: React.CSSProperties} = {
		className: cn(styles['col'], classNames, {
			[`col-${xs}-xs`]: xs,
			[`col-${md}-md`]: md,
			[`col-${lg}-lg`]: lg,
		}),
	};

	// Prepare the styles object
	let stylesObj = {};

	// Handling styles
	if (style) {
		stylesObj = {...stylesObj, ...style};
	}

	// Check if we have styles to apply
	if (Object.keys(stylesObj).length) {
		attrs.style = stylesObj;
	}

	return <div {...attrs}>{children}</div>;
};

export default GridColumn;
