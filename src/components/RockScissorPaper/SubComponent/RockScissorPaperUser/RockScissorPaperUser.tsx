import React, {useState, useRef, useContext} from 'react';

import GameCtx from 'baseComponents/RockScissorPaper/context';

const RockScissorPaperUser = () => {
	const context = useContext(GameCtx);
	const [loading, setLoading] = useState(true);
	const [lastSubmittedUser, setLastSubmittedUser] = useState('');
	const userText = useRef<HTMLInputElement>();

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
		<>
			<input
				type="text"
				placeholder="Inserisci il tuo nome utente per non perdere i tuoi risultati"
				ref={userText}
			/>
			<button
				onClick={() => {
					if (!!userText?.current?.value) {
						handleGetUser(userText.current.value);
					}
				}}
			>
				Iscriviti
			</button>

			{loading && context.currentUser && (
				<div>
					<span>Nome utente: {context.currentUser?.name}</span>
					<br />
					<span>Vittorie utente: {context.currentUser?.user_wins}</span>
					<br />
					<span>Vittore pc: {context.currentUser?.pc_wins}</span>
					<br />
				</div>
			)}
			{!loading && <span>Loading</span>}
		</>
	);
};

export default RockScissorPaperUser;
