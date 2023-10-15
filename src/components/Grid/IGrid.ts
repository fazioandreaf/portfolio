import {ReactNode} from 'react';

export interface IGridProps {
    children: ReactNode;
    gridSize?: number;
    classNames?: string;
}