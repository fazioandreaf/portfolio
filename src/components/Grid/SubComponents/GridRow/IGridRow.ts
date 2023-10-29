import React from 'react';

import {TGridSpacing} from '../../IGrid';

export interface IGridRowProps {
	classNames?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	center?: boolean;
}
