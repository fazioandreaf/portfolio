import React, {useState} from 'react';
import cn from 'classnames';

import FooBar from 'baseComponents/FooBar/FooBar';
import RockScissorPaper from 'baseComponents/RockScissorPaper/RockScissorPaper';

import styles from './TechnicalInterview.module.scss';

const TechnicalInterview = () => {
	const [toggleVisibility, setToggleVisibility] = useState(false);

	return (
		<div>
			<button className={styles['technical-interview__button']}
			onClick={() => setToggleVisibility(!toggleVisibility)}>
				Mostra il {toggleVisibility ? 'primo' : 'secondo'} gioco
			</button>
			<div className={cn({['d-none']: toggleVisibility})}>
				<FooBar />
			</div>
			<div className={cn({['d-none']: !toggleVisibility})}>
				<RockScissorPaper />
			</div>
		</div>
	);
};

export default TechnicalInterview;
