
import { NoitaAlchemyGenerator } from './generator';

export { Recipe } from './generator';
export { SeedFinder, SeedFinderOptions } from './seed-finder';
export { Material, MaterialWeightMap, alchemyMaterials, liquidMaterials } from './materials';

export const generateRecipes = (seed: number) => {
	const generator = new NoitaAlchemyGenerator(seed, false);

	return {
		lc: generator.livelyConcoction,
		ap: generator.alchemicalPrecursor
	};
};
