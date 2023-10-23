import React from 'react';
import cn from 'classnames';

import {GridRow, GridColumn} from './Subcomponents';
import {IGridProps} from './IGrid';

import './Grid.scss';

const Grid = ({classNames, children}: IGridProps) => {
	return <div className={cn(classNames, 'grid')}>{children}</div>;
};

Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
