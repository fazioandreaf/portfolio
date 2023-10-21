import React from 'react';
import cn from 'classnames';

import {IGridProps} from './IGrid';
import {GridRow, GridColumn} from './Subcomponents';

const Grid = ({classNames, children}: IGridProps) => {
	return <div className={cn(classNames, 'grid')}>{children}</div>;
};

Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
