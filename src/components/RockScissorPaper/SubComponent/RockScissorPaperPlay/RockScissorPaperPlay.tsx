import React, {useEffect, useState, useContext} from 'react';
import cn from 'classnames';

import Player from 'baseClasses/Player';
import {getMathRandom} from 'baseUtils/utils';
import GameCtx from 'baseComponents/RockScissorPaper/context';

import styles from './RockScissorPaperPlay.module.scss';

interface IRockScissorPaperPlayProps {
	players: Player[];
	isPC?: boolean;
}

const RockScissorPaperPlay = ({players, isPC}: IRockScissorPaperPlayProps) => {
	const context = useContext(GameCtx);
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
		let fieldToUpdate = '';

		if (player1Choice && player2Choice) {
			switch (true) {
				case player1Choice.isWeakTo(player2Choice):
					label = player2Choice.getName();
					fieldToUpdate = 'pc_wins';

					break;
				case player2Choice.isWeakTo(player1Choice):
					label = player1Choice.getName();
					fieldToUpdate = 'user_wins';

					break;
				default:
					label = 'Pareggio';
			}
		}

		if (!!fieldToUpdate && !!context.currentUser) {
			handleUpdateUser(context.currentUser.name, fieldToUpdate);
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

	const handleUpdateUser = async (name: string, field: string) => {
		if (context.currentUser) {
			const value: number = context.currentUser[field] + 1;
			const userJSON = await fetch(`api/update-user?name=${name}&field=${field}&value=${value}`);
			const {result} = await userJSON.json();

			if (result === 'done') {
				context.setCurrentUser(Object.assign({}, context.currentUser, {[field]: value}));
			}
		}
	};

	if (!players.length) {
		return null;
	}

	return (
		<div className={styles['rspp--wrapper']}>
			<div>
				<div className={cn({['d-none']: isPC || (!!player1Choice && !!player2Choice)})}>
					<h4>Sceglie una forma</h4>
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

				<button
					onClick={handleConfirmed}
					className={cn({['d-none']: isPC || !player1Choice || (!!player1Choice && !!player2Choice)})}
				>
					Confermi la tua Scelta?
				</button>
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
					Il vincitore é <span className="active">{winner}</span>
				</div>
			</div>
		</div>
	);
};

export default RockScissorPaperPlay;
