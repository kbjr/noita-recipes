
import { NoitaAlchemyGenerator, Recipe } from './generator';

export { Recipe } from './generator';

export const generateRecipes = (seed: number) => {
	const generator = new NoitaAlchemyGenerator(seed, false);

	return {
		lc: generator.livelyConcoction,
		ap: generator.alchemicalPrecursor
	};
};
