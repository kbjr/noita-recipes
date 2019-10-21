
import { Material } from './materials';
import { NoitaAlchemyGenerator, Recipe } from './generator';

export interface SeedFinderOptions {
	/** The seed to start at while checking */
	start: number;
	/** The number of seeds to check before exiting */
	attempts: number;
	/** A list of materials to exclude (any seed using them is automatically disqualified) */
	exclude?: Material[];
	/** The minimum score a seed must achieve to be accepted */
	minScoreThreshold?: number;
	/** The maximum material weight allowed on any one material */
	badMaterialThreshold?: number;
}

/**
 * Calculates the recipes for a given seed, and calculates scoring information about the seed
 *
 * @param start 
 * @param attempts 
 * @param exclude 
 */
export const findSeed = (options: SeedFinderOptions) => {
	const excludeSet = new Set(options.exclude);
	const badMaterialThreshold = options.badMaterialThreshold || 9;
	const minScoreThreshold = options.minScoreThreshold == null ? 70 : options.minScoreThreshold;

	console.log();

	let highestScore = 0;
	let bestSeed;

	for (let i = 0; i < options.attempts; i++) {
		const seed = options.start + i;
		const result = calculateSeed(seed, badMaterialThreshold, excludeSet);

		if (result.hasExcluded || result.hasBad || result.score < minScoreThreshold) {
			continue;
		}

		if (highestScore < result.score) {
			highestScore = result.score;
			bestSeed = result;
		}

		console.log(`Seed ${seed} Score=${result.score}`);
		console.log(`  Lively Concoction = ${result.livelyConcoction.materials.join(' + ')} // Probability ${result.livelyConcoction.probability}%`);
		console.log(`  Alchemical Precursor = ${result.alchemicalPrecursor.materials.join(' + ')} // Probability ${result.alchemicalPrecursor.probability}%`);
		console.log();
	}

	return bestSeed;
};

/**
 * Calculates the recipes for a given seed, and calculates scoring information about the seed. The best possible
 * score for a seed would be 98 / 100. This would be water on both recipes (0 points), and two 1 point materials
 * shared between both recipes (1 point each, only counted once because they're reused). An example of this would
 * be "water" + "blood" + "oil" on both recipes. The worst possible score is 100 - (6 * 16), or 4 out of 100.
 *
 * Interestingly, I actually have no idea what would happen if both recipes are exactly the same, so that should
 * be looked into. It's possible that the probability field has some influence on this, and therefore creating
 * the given mixture would actually result in a mix of both results.
 *
 * @param seed The seed to calculate for
 * @param threshold The maximum material weight allowed on any one material
 * @param exclude A list of materials to exclude (any seed using them is automatically disqualified)
 */
const calculateSeed = (seed: number, threshold: number, exclude: Set<Material>) => {
	const generator = new NoitaAlchemyGenerator(seed, false);

	let score = 100;
	let hasBad = false;
	let hasExcluded = false;

	// Materials are only counted against the score one each, so if they
	// are re-used, don't re-count them. This keeps track of the list of
	// materials we've already seen
	const used: Set<Material> = new Set();
	const materials = [
		...generator.livelyConcoction.materials,
		...generator.alchemicalPrecursor.materials
	];

	for (let i = 0; i < materials.length; i++) {
		const mat = materials[i];

		if (used.has(mat)) {
			continue;
		}

		used.add(mat);

		const matScore = materialPreference[mat];

		if (matScore > threshold) {
			hasBad = true;
		}

		if (exclude.has(mat)) {
			hasExcluded = true;
		}

		score -= matScore;
	}

	return {
		seed,
		score,
		hasBad,
		hasExcluded,
		livelyConcoction: generator.livelyConcoction,
		alchemicalPrecursor: generator.alchemicalPrecursor
	};
};

/**
 * Weighted preference scores for each material (lower score is better)
 */
const materialPreference = {
	// Obviously, prefer the *really* easy stuff
	'water': 0,
	'blood': 1,
	'oil': 1,
	'magic_liquid_charm': 1,
	'magic_liquid_berserk': 1,
	'magic_liquid_invisibility': 1,
	'alcohol': 2,

	// Next, go for stuff that's not too hard, but has some annoying properties / can
	// be mildly annoying to get a hold of at times
	'snow': 3,
	'sand': 3,
	'acid': 5,
	'poison': 5,
	'rotten_meat': 5,
	'water_ice': 5,
	'water_swamp': 5,
	'magic_liquid_polymorph': 6,
	'magic_liquid_random_polymorph': 6,
	'magic_liquid_teleportation': 6,

	// Finally, the stuff that is really hard to find, or is just dangerous
	'blood_worm': 7,
	'bone': 7,
	'lava': 10,
	'coal': 12,
	'gunpowder': 12,
	'fungi': 15,
	'gunpowder_explosive': 15,
	'urine': 15,
	'wax': 15,
	'gold': 15,
	'silver': 15,
	'copper': 15,
	'brass': 15,
	'diamond': 15,

	// Default to "bad" until I care enough to clean up
	'swamp': 16,
	'mud': 16,
	'blood_fungi': 16,
	'radioactive_liquid': 16,
	'cement': 16,
	'soil': 16,
	'honey': 16,
	'slime': 16,
	'grass': 16,
};
