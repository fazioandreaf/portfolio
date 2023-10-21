import React from 'react';

import {IGridProps} from './IGrid';
import {GridRow, GridColumn} from './Subcomponents';

const Grid = ({classNames, children}: IGridProps) => {
	return <div className={classNames}>{children}</div>;
};

Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
