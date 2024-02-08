/**
 * Represents a Player of Rock Scissors Paper
 */
class Player {
	private name: string;
	private weakTo: string[];

	/**
	 * @constructor
	 * @param {string} name - name of the player
	 * @param {string[]} weakTo - weak to which other player
	 */
	constructor(name: string, weakTo = ['']) {
		this.name = name;
		this.weakTo = weakTo;
	}

	/**
	 * @constructor
	 * @return {string} name - name of the player
	 */
	getName() {
		return this.name;
	}

	/**
	 * @constructor
	 * @param {Player} enemy - player to defeat
	 * @return {boolean} is weak to this player or not
	 */
	isWeakTo(enemy: Player) {
		return this.weakTo.includes(enemy.name);
	}
}

export default Player;
