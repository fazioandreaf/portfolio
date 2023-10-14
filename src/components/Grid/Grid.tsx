import React from 'react';

import './Grid.scss';
import { IGridProps } from './IGrid';

//TODO: add gridColumn and gridRow

const Grid = ({children, gridSize, classNames}: IGridProps) => {
    return (
        <div className={`grid ${classNames}`}>
            {children}
        </div>
    );
}

export default Grid;
