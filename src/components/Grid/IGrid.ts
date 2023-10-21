import React from 'react';

export type TGridSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IGridProps {
	classNames?: string;
	children: React.ReactNode;
}
