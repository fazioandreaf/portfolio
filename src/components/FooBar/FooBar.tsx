import React, {useCallback, useState} from 'react';
import cn from 'classnames';

import styles from './FooBar.module.scss';

const FooBar = () => {
	const [result, setResult] = useState<string[]>([]);

	const handleFooBar = useCallback(() => {
		if (!result.length) {
			const numbers = Array(100)
				.fill(null)
				.map((_, index) => {
					const correctIndex = index + 1;
					let tempValue = '';

					if (!(correctIndex % 3)) {
						tempValue += 'Foo';
					}

					if (!(correctIndex % 5)) {
						tempValue += 'Bar';
					}

					return tempValue || correctIndex.toString();
				});

			setResult(numbers);
		}
	}, [result]);

	return (
		<div className={styles['foobar']}>
			<button onClick={handleFooBar} className={cn({['d-none']: !!result.length})}>
				Genera numeri
			</button>
			{!!result.length && (
				<div className={styles['foobar__results-container']}>
					{result.map((element, index) => (
						<span key={index} data-color={element}>
							{element}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default FooBar;
