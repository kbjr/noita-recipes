
import { NoitaAlchemyGenerator } from './generator';

export { Recipe } from './generator';
export { findSeed } from './seed-finder';

export const generateRecipes = (seed: number) => {
	const generator = new NoitaAlchemyGenerator(seed, false);

	return {
		lc: generator.livelyConcoction,
		ap: generator.alchemicalPrecursor
	};
};
