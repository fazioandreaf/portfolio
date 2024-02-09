import React, {useState, useRef, useEffect} from 'react';
import cn from 'classnames';

import FooBar from 'baseComponents/FooBar/FooBar';
import RockScissorPaper from 'baseComponents/RockScissorPaper/RockScissorPaper';

import styles from './TechnicalInterview.module.scss';

const TechnicalInterview = () => {
	const [toggleVisibility, setToggleVisibility] = useState(false);
	const [allowed, setAllowed] = useState('false');
	const [error, setError] = useState('');
	const inpRef = useRef<any>();
	const password = process.env.NEXT_PUBLIC_TECHNICAL_INTERVIEW_PASSWORD;

	useEffect(() => {
		setAllowed(sessionStorage.getItem('allowed') || '');
	}, []);

	const handleSubmit = () => {
		setError('');
		if (inpRef?.current?.value.toLocaleLowerCase() === password?.toLocaleLowerCase()) {
			sessionStorage.setItem('allowed', 'true');
			setAllowed('true');
		} else {
			setAllowed('false');
			setError('Password sbagliato');
		}
	};

	const handleChangeText = () => {
		if (error !== '') {
			setError('');
		}
	};

	return allowed === 'true' ? (
		<div>
			<button
				className={styles['technical-interview__button']}
				onClick={() => setToggleVisibility(!toggleVisibility)}
			>
				Mostra il {toggleVisibility ? 'primo' : 'secondo'} gioco
			</button>
			{!toggleVisibility ? <FooBar /> : <RockScissorPaper />}
		</div>
	) : (
		<div className={styles['password-wrapper']}>
			<label htmlFor="">Inserisci password</label>
			<input type="text" ref={inpRef} onChange={handleChangeText} />
			{error && <span>{error}</span>}
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default TechnicalInterview;
