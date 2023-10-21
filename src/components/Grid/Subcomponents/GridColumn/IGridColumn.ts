import React from 'react';

export interface IGridColumnProps {
	xs?: number;
	md?: number;
	lg?: number;
	classNames?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}
