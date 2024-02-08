import React, {useEffect, useState} from 'react';
import {db, sql} from '@vercel/postgres';
import cn from 'classnames';

import RockScissorPaperMgr from 'baseClasses/RockScissorsPaperMgr';

import RockScissorPaperPlay from './SubComponent/RockScissorPaperPlay/RockScissorPaperPlay';

import styles from './RockScissorPaper.module.scss';

const RockScissorPaper = () => {
	// useEffect(() => {
	// 	const handleSQL = async () => {
	// 		console.log(sql);
	// 		// const client = sql`SELECT * FROM RockScissorPaperTable`;

	// 		// console.log(client, 'client');
	// 	};

	// 	handleSQL();
	// }, []);

	const handleUser = () => {
		fetch('api/add-user?name=Andrea', {
			method: 'GET',
		})
			// .then((response) => response)
			// .then((rb) => {
			// 	const reader = rb.getReader();

			// 	return new ReadableStream({
			// 		start(controller) {
			// 			// The following function handles each data chunk
			// 			function push() {
			// 				// "done" is a Boolean and value a "Uint8Array"
			// 				reader.read().then(({done, value}) => {
			// 					// If there is no more data to read
			// 					if (done) {
			// 						console.log('done', done);
			// 						controller.close();
			// 						return;
			// 					}
			// 					// Get the data and send it to the browser via the controller
			// 					controller.enqueue(value);
			// 					// Check chunks by logging to the console
			// 					console.log(done, value);
			// 					push();
			// 				});
			// 			}

			// 			push();
			// 		},
			// 	});
			// })
			// .then((stream) =>
			// 	// Respond with our stream
			// 	new Response(stream, {headers: {'Content-Type': 'text/html'}}).text(),
			// )
			.then((result) => {
				// Do things with result
				console.log(result);
			});
	};

	const [versus, setVersus] = useState<'user' | 'pc'>('user');
	const [mode, setMode] = useState<'basic' | 'pro'>('basic');
	const [players, setPlayers] = useState<Player[]>([]);

	const handleGame = () => {
		const game = new RockScissorPaperMgr(versus, mode).getGame();
		setPlayers(game);
	};

	return (
		<div className={styles['rock-scissor-paper--game-wrapper']}>
			<h3>RockScissorPaper</h3>
			{/* <button onClick={handleUser}>post user</button> */}
			{/* <form action={() => handleGame()}>
			</form> */}
			<div className={styles['rock-scissor-paper--mode']}>
				<button
					className={cn({['active']: versus === 'user'})}
					onClick={() => {
						setVersus('user');
						setPlayers([]);
					}}
				>
					Gioca Utente VS PC
				</button>
				<button
					className={cn({['active']: versus === 'pc'})}
					onClick={() => {
						setVersus('pc');
						setPlayers([]);
					}}
				>
					Gioca PC VS PC
				</button>
			</div>
			<RockScissorPaperPlay players={players} isPC={versus === 'pc'} />
			<button type="submit" onClick={() => handleGame()} className={styles['rock-scissor-paper--submit']}>
				Submit
			</button>
		</div>
	);
};

export default RockScissorPaper;
