
import { EventEmitter } from 'eventemitter3';
import { Material, MaterialWeightMap } from './materials';
import { NoitaAlchemyGenerator, Recipe } from './generator';

export interface SeedFinderOptions {
	/** A list of materials to exclude (any seed using them is automatically disqualified) */
	exclude?: Material[];
	/** The minimum score a seed must achieve to be accepted */
	minScoreThreshold?: number;
	/** The maximum material weight allowed on any one material */
	badMaterialThreshold?: number;

	materialPreferences?: MaterialWeightMap;

	requireMaterials?: {
		lc?: [ Material?, Material?, Material? ];
		ap?: [ Material?, Material?, Material? ];
	};

	minLcProbability: number;
	maxLcProbability: number;
	minApProbability: number;
	maxApProbability: number;
}

export class SeedFinder extends EventEmitter {
	protected readonly exclude: Set<Material>;
	protected readonly minScoreThreshold: number;
	protected readonly badMaterialThreshold: number;
	protected readonly materialWeights: MaterialWeightMap;
	protected readonly lcRequired: Set<Material>;
	protected readonly apRequired: Set<Material>;
	protected readonly minLcProbability: number;
	protected readonly maxLcProbability: number;
	protected readonly minApProbability: number;
	protected readonly maxApProbability: number;

	constructor(public readonly options: SeedFinderOptions) {
		super();

		this.exclude = new Set(this.options.exclude);
		this.minScoreThreshold = this.options.minScoreThreshold || 1;
		this.badMaterialThreshold = this.options.badMaterialThreshold || 17;
		this.materialWeights = Object.assign({ }, defaultMaterialPreference, this.options.materialPreferences || { });

		const required = this.options.requireMaterials || { };

		this.lcRequired = new Set(required.lc || [ ]);
		this.apRequired = new Set(required.ap || [ ]);

		this.minLcProbability = this.options.minLcProbability || 0;
		this.maxLcProbability = this.options.maxLcProbability || 100;
		this.minApProbability = this.options.minApProbability || 0;
		this.maxApProbability = this.options.maxApProbability || 100;
	}

	/**
	 * Start looking for seeds
	 *
	 * @param start The seed to start at while checking
	 * @param count The number of seeds to check before stopping
	 */
	public seek(start: number, count: number) {
		const end = start + count;

		let canceled = false;
		const cancel = () => canceled = true;

		for (let seed = start; seed < end; seed++) {
			const result = this.calculateSeed(seed);

			if (result.score < this.minScoreThreshold || result.hasExcluded || ! result.hasIncluded || result.hasBadMat || result.hasBadProbability) {
				continue;
			}

			this.emit('seed', result, cancel);

			if (canceled) {
				break;
			}
		}

		this.emit('done');
	}

	/**
	 * Calculates the recipes for a given seed, and calculates scoring information about the seed. The best possible
	 * score for a seed would be 98 / 100. This would be water on both recipes (0 points), and two 1 point materials
	 * shared between both recipes (1 point each, only counted once because they're reused). An example of this would
	 * be "water" + "blood" + "oil" on both recipes. The worst possible score is 100 - (6 * 16), or 4 out of 100.
	 *
	 * @param seed The seed to calculate for
	 */
	protected calculateSeed(seed: number) {
		const generator = new NoitaAlchemyGenerator(seed, false);

		let score = 100;
		let hasBadMat = false;
		let hasExcluded = false;
		let hasBadProbability = false;

		// Materials are only counted against the score one each, so if they
		// are re-used, don't re-count them. This keeps track of the list of
		// materials we've already seen
		const used: Set<Material> = new Set();
		const materials = [
			...generator.livelyConcoction.materials,
			...generator.alchemicalPrecursor.materials
		];

		let stillRequired = this.apRequired.size + this.lcRequired.size;
		const processMats = (recipe: Recipe, required: Set<Material>, minProb: number, maxProb: number) => {
			if (recipe.probability < minProb || recipe.probability > maxProb) {
				hasBadProbability = true;
			}

			for (let i = 0; i < 3; i++) {
				const mat = recipe.materials[i];

				if (required.has(mat)) {
					stillRequired--;
				}

				if (used.has(mat)) {
					continue;
				}

				used.add(mat);

				const matScore = this.materialWeights[mat];

				if (matScore > this.badMaterialThreshold) {
					hasBadMat = true;
				}

				if (this.exclude.has(mat)) {
					hasExcluded = true;
				}

				score -= matScore;
			}
		};

		processMats(generator.livelyConcoction, this.lcRequired, this.minLcProbability, this.maxLcProbability);
		processMats(generator.alchemicalPrecursor, this.apRequired, this.minApProbability, this.maxApProbability);

		return {
			seed,
			score,
			hasBadMat,
			hasExcluded,
			hasBadProbability,
			hasIncluded: ! stillRequired,
			livelyConcoction: generator.livelyConcoction,
			alchemicalPrecursor: generator.alchemicalPrecursor
		};
	}
}

/**
 * Weighted preference scores for each material (lower score is better)
 */
export const defaultMaterialPreference: MaterialWeightMap = {
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
