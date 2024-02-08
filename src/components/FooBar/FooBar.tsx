import React, {useCallback, useState} from 'react';

import styles from './FooBar.module.scss';

const FooBar = () => {
	const [result, setResult] = useState<string[]>([]);

	const handleFooBar = useCallback(() => {
		if (!result.length) {
			const numbers = Array(100)
				.fill(0)
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
			<button onClick={handleFooBar}>Genera numeri</button>
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
