export const getMathRandom = (min: number, max: number) => {
	return Math.floor(Math.random() * (min - max + 1) + max);
};

export const getRandomIntInclusive = (min: number, max: number, notAllowed?: number): number => {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	const index = getMathRandom(maxFloored, minCeiled);

	if (index === notAllowed) {
		return getRandomIntInclusive(min, max, notAllowed);
	} else {
		return index;
	}
};
