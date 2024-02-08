import React, {useEffect, useState} from 'react';
import cn from 'classnames';

import Player from 'baseClasses/Player';
import {getMathRandom} from 'baseUtils/utils';

import styles from './RockScissorPaperPlay.module.scss';

const RockScissorPaperPlay = ({players, isPC}: {players: Player[]; isPC?: boolean}) => {
	const [winner, setWinner] = useState('');
	const [player1Choice, setPlayer1Choice] = useState<null | Player>(null);
	const [player2Choice, setPlayer2Choice] = useState<null | Player>(null);

	useEffect(() => {
		if (!players.length) {
			return;
		}

		if (isPC) {
			setPlayer1Choice(players[0]);
			setPlayer2Choice(players[1]);
		}
		return () => {
			setPlayer1Choice(null);
			setPlayer2Choice(null);
		};
	}, [players, isPC]);

	useEffect(() => {
		let label = '';

		if (player1Choice && player2Choice) {
			switch (true) {
				case player1Choice.isWeakTo(player2Choice):
					label = player2Choice.getName();

					break;
				case player2Choice.isWeakTo(player1Choice):
					label = player1Choice.getName();

					break;
				default:
					label = 'Pareggio';
			}
		}

		setWinner(label);
	}, [player1Choice, player2Choice]);

	const handleConfirmed = () => {
		if (player1Choice !== null) {
			const availablePlayers = players;
			const remainPlayerForPcSelection = availablePlayers.filter((person: Player) => person !== player1Choice);
			const randomIndex = getMathRandom(0, remainPlayerForPcSelection.length);

			setPlayer2Choice(remainPlayerForPcSelection[randomIndex]);
		}
	};

	if (!players.length) {
		return null;
	}

	return (
		<div className={styles['rspp--wrapper']}>
			<div>
				<div className={cn({['d-none']: isPC | (!!player1Choice && !!player1Choice)})}>
					<label htmlFor="">Sceglie una forma</label>
					<div className={styles['rspp--user-choice']}>
						{players.map((player, index) => (
							<span
								key={`${player.getName()}--${index}`}
								onClick={() => {
									if (!player1Choice || (!!player1Choice && !player2Choice)) {
										setPlayer1Choice(player);
									}
								}}
								className={cn({['active']: player1Choice?.getName() === player.getName()})}
							>
								{player.getName()}
							</span>
						))}
					</div>
				</div>

				<div className={cn({['d-none']: isPC || !player1Choice || (!!player1Choice && !!player2Choice)})}>
					<button onClick={handleConfirmed}>Confermi la tua Scelta?</button>
				</div>
			</div>

			<div className={styles['rspp--info']}>
				<div className={cn({['d-none']: !player1Choice})}>
					<span>
						Scelta del player 1 <span className="active">{player1Choice?.getName()}</span>
					</span>
				</div>
				<div className={cn({['d-none']: !player2Choice})}>
					<span>
						Scelta del player 2 <span className="active">{player2Choice?.getName()}</span>
					</span>
				</div>

				<div className={cn({['d-none']: !winner})}>
					il vincitore é <span className="active">{winner}</span>
				</div>
			</div>
		</div>
	);
};

export default RockScissorPaperPlay;
