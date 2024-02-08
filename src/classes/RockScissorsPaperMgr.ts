import {IPlayer} from './IClasses';
import Player from './Player';
import {getRandomIntInclusive} from 'baseUtils/utils';

const BASIC_PLAYERS: IPlayer[] = [
	{
		name: 'Rock',
		weakTo: ['Paper'],
	},
	{
		name: 'Paper',
		weakTo: ['Scissor'],
	},
	{
		name: 'Scissor',
		weakTo: ['Rock'],
	},
];

const PRO_PLAYERS: IPlayer[] = [
	{
		name: 'Rock',
		weakTo: ['Paper'],
	},
	{
		name: 'Paper',
		weakTo: ['Scissor'],
	},
	{
		name: 'Scissor',
		weakTo: ['Rock'],
	},
];

/**
 * Represents Rock Scissors Paper gamer
 */
class RockScissorPaperMgr {
	private versus: 'user' | 'pc';
	private mode: 'basic' | 'pro';

	/**
	 * @constructor
	 * @param {String} name - name of the player
	 */
	constructor(versus: 'user' | 'pc' = 'user', mode: 'basic' | 'pro' = 'basic') {
		this.versus = versus;
		this.mode = mode;
	}

	/**
	 * Returns game data
	 * @returns {Player[]} - customer email address
	 */
	getGame(): Player[] {
		let players = this.getPlayersClass();

		return this.getPlayers(players);
	}

	/**
	 * Returns game data
	 * @returns {Player[]} - return the Players Classes related the mode
	 */
	private getPlayersClass(): Player[] {
		const constructionValue = this.mode === 'basic' ? BASIC_PLAYERS : PRO_PLAYERS;

		return constructionValue.map((elem) => new Player(elem.name, elem.weakTo));
	}

	/**
	 * Returns
	 * @returns {IPlayer[]} - return the correct players
	 */
	private getPlayers(players: Player[]) {
		if (this.versus === 'user') {
			return players;
		}

		if (this.versus === 'pc') {
			const playersLength = players.length;
			const indexPC1 = getRandomIntInclusive(0, playersLength - 1);
			const indexPC2 = getRandomIntInclusive(0, playersLength - 1, indexPC1);

			return [players[indexPC1], players[indexPC2]];
		}

		return [];
	}
}

export default RockScissorPaperMgr;
