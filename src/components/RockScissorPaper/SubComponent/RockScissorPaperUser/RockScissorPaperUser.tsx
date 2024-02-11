import React, {useState, useRef, useContext} from 'react';

import GameCtx from 'baseComponents/RockScissorPaper/context';

import styles from './RockScissorPaperUser.module.scss';

const RockScissorPaperUser = () => {
	const context = useContext(GameCtx);
	const [loading, setLoading] = useState(true);
	const [lastSubmittedUser, setLastSubmittedUser] = useState('');
	const userText = useRef<any>();

	const handleGetUser = async (user: string) => {
		context.setError('');

		if (user) {
			if ((!!context.currentUser && user === context.currentUser.name) || lastSubmittedUser === user) {
				context.setError('Inserisci un nome differente');
			} else {
				let userJSON;

				setLoading(false);

				userJSON = await fetch(`api/get-user?name=${user}`)
					.then((res) => res.json())
					.then((res) => res.rowsUser[0])
					.finally(() => setLoading(true));

				if (userJSON === undefined) {
					userJSON = await fetch(`api/add-user?name=${user}`)
						.then((res) => res.json())
						.finally(() => setLoading(true));
				}

				context.setCurrentUser(userJSON);
			}

			setLastSubmittedUser(user);
		}
	};

	return (
		<div className={styles['rspu']}>
			<div className={styles['rspu--input-wrapper']}>
				<label htmlFor="nameText" className={styles['rspu--label']}>
					Inserisci il tuo nome utente per salvare il tuo score
					<input id="nameText" type="text" ref={userText} />
				</label>
				<button
					onClick={() => {
						if (!!userText?.current?.value) {
							handleGetUser(userText.current.value);
						}
					}}
				>
					Iscriviti
				</button>
			</div>

			{loading && context.currentUser && (
				<div className={styles['rspu--info-user']}>
					<span>Nome utente: {context.currentUser?.name}</span>
					<br />
					<span>Vittorie utente: {context.currentUser?.user_wins}</span>
					<br />
					<span>Vittore pc: {context.currentUser?.pc_wins}</span>
					<br />
				</div>
			)}
			{!loading && <span>Loading</span>}
		</div>
	);
};

export default RockScissorPaperUser;
