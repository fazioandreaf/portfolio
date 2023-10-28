import React from 'react';
import cn from 'classnames';

import {GridRow, GridColumn} from './SubComponents';
import {IGridProps} from './IGrid';

import styles from './Grid.module.scss';

const Grid = ({classNames, children}: IGridProps) => {
	return <div className={cn(classNames, styles['grid'])}>{children}</div>;
};

Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
