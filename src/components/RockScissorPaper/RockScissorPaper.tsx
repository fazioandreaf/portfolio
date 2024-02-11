import React, {useState, useCallback} from 'react';
import cn from 'classnames';

import RockScissorPaperMgr from 'baseClasses/RockScissorsPaperMgr';
import Player from 'baseClasses/Player';

import GameCtx from './context';

import RockScissorPaperPlay from './SubComponent/RockScissorPaperPlay/RockScissorPaperPlay';
import RockScissorPaperUser from './SubComponent/RockScissorPaperUser/RockScissorPaperUser';

import styles from './RockScissorPaper.module.scss';

export interface IUserProps {
	name: string;
	pc_wins: number;
	user_wins: number;
}

const RockScissorPaper = () => {
	const [currentUser, setCurrentUser] = useState<IUserProps | undefined>();
	const [versus, setVersus] = useState<'user' | 'pc'>('user');
	const [mode, setMode] = useState<'basic' | 'pro'>('basic');
	const [players, setPlayers] = useState<Player[]>([]);
	const [error, setError] = useState('');

	const handleGame = () => {
		const game = new RockScissorPaperMgr(versus, mode).getGame();

		setPlayers(game);
	};

	const handleCleanGame = useCallback(() => {
		setPlayers([]);
		setError('');
	}, []);

	return (
		<GameCtx.Provider value={{currentUser, setCurrentUser, setError, isPC: versus === 'pc'}}>
			<div className={styles['rock-scissor-paper--game-wrapper']}>
				<h2>Rock Scissor Paper</h2>
				<div className={styles['rock-scissor-paper--main']}>
					<RockScissorPaperUser />
					<div className={styles['rock-scissor-paper--dived']} />
					<div className={styles['rock-scissor-paper--game']}>
						<div className={styles['rock-scissor-paper--versus']}>
							<button
								className={cn({['active']: versus === 'user'})}
								onClick={() => {
									setVersus('user');
									setCurrentUser(undefined);
									handleCleanGame();
								}}
							>
								Gioca Utente VS PC
							</button>
							<button
								className={cn({['active']: versus === 'pc'})}
								onClick={() => {
									setVersus('pc');
									setCurrentUser(undefined);
									handleCleanGame();
								}}
							>
								Gioca PC VS PC
							</button>
						</div>
						<div className={styles['rock-scissor-paper--mode']}>
							<button
								className={cn({['active']: mode === 'basic'})}
								onClick={() => {
									setMode('basic');
									handleCleanGame();
								}}
							>
								3 scelte
							</button>
							<button
								className={cn({['active']: mode === 'pro'})}
								onClick={() => {
									setMode('pro');
									handleCleanGame();
								}}
							>
								5 scelte
							</button>
						</div>
						<RockScissorPaperPlay players={players} />
					</div>
				</div>
				{error && <span className={styles['error-label']}>{error}</span>}
				<button type="submit" onClick={handleGame} className={styles['rock-scissor-paper--submit']}>
					Submit
				</button>
			</div>
		</GameCtx.Provider>
	);
};

export default RockScissorPaper;
