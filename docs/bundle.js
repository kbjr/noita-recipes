(function (eventemitter3) {
	'use strict';

	class List {
	    constructor() {
	        this.set = new Set();
	        this.array = [];
	    }
	    get length() {
	        return this.array.length;
	    }
	    has(value) {
	        return this.set.has(value);
	    }
	    add(value) {
	        if (!this.has(value)) {
	            this.set.add(value);
	            this.array.push(value);
	        }
	    }
	    remove(value) {
	        if (this.has(value)) {
	            this.set.delete(value);
	            for (let i = 0; i < this.array.length; i++) {
	                if (this.array[i] === value) {
	                    this.array.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    removeAt(index) {
	        if (this.array.length - 1 < index) {
	            return;
	        }
	        const [value] = this.array.splice(index, 1);
	        this.set.delete(value);
	    }
	}

	const intMax = 0x7fffffff;
	// We need genuine int32 behavior when mutliplying (ie. accurate int32 overflow
	// behavior), so we're going to cheat and use an int32 array to have JS actually
	// treat it as int32 values. Defining this up here and reusing it to avoid having
	// to reallocate tiny 8 byte buffers over and over.
	const a32 = new Int32Array(2);
	class NumberGenerator {
	    constructor(seed) {
	        this.seed = seed;
	        this.next();
	    }
	    next() {
	        const intSeed = this.seed | 0;
	        // Calculate the first portion of the equation in int32:
	        //   a32[0] = (int) seed * 16807
	        a32[0] = intSeed;
	        a32[0] *= 16807;
	        // Calculate the second portion, also in int32:
	        //   a32[1] = (int) seed / 127773 * -0x7fffffff
	        a32[1] = intSeed;
	        a32[1] /= 127773;
	        a32[1] *= -intMax;
	        // Add the two results above:
	        //   a32[0] = (int) seed * 16807 + (int) seed / 127773 * -0x7fffffff
	        a32[0] += a32[1];
	        if (a32[0] < 0) {
	            a32[0] += intMax;
	        }
	        // When we're done, store the new seed
	        this.seed = a32[0];
	        return this.seed / intMax;
	    }
	}

	const liquidMaterials = [
	    'water',
	    'water_ice',
	    'water_swamp',
	    'oil',
	    'alcohol',
	    'swamp',
	    'mud',
	    'blood',
	    'blood_fungi',
	    'blood_worm',
	    'radioactive_liquid',
	    'cement',
	    'acid',
	    'lava',
	    'urine',
	    'poison',
	    'magic_liquid_teleportation',
	    'magic_liquid_polymorph',
	    'magic_liquid_random_polymorph',
	    'magic_liquid_berserk',
	    'magic_liquid_charm',
	    'magic_liquid_invisibility'
	];
	const alchemyMaterials = [
	    'sand',
	    'bone',
	    'soil',
	    'honey',
	    'slime',
	    'snow',
	    'rotten_meat',
	    'wax',
	    'gold',
	    'silver',
	    'copper',
	    'brass',
	    'diamond',
	    'coal',
	    'gunpowder',
	    'gunpowder_explosive',
	    'grass',
	    'fungi'
	];

	/**
	 * Noita alchemy generator
	 *
	 * Algorithm borrowed from https://github.com/zatherz/NoitaAlchemy/blob/master/Program.cs
	 */
	class NoitaAlchemyGenerator {
	    constructor(seed, full) {
	        this.seed = seed;
	        this.full = full;
	        this.prng = new NumberGenerator(this.seed * 0.17127000 + 1323.59030000);
	        // Pre-warm the PRNG
	        for (let i = 0; i < 5; i++) {
	            this.prng.next();
	        }
	        this.livelyConcoction = this.getRandomRecipe();
	        this.alchemicalPrecursor = this.getRandomRecipe();
	    }
	    chooseRandomMaterials(target, materialList, iterations) {
	        for (let i = 0; i < iterations; i++) {
	            const rand = this.prng.next();
	            const pick = materialList[(rand * materialList.length) | 0];
	            if (target.has(pick)) {
	                i--;
	                continue;
	            }
	            target.add(pick);
	        }
	    }
	    getRandomRecipe() {
	        const materials = new List();
	        this.chooseRandomMaterials(materials, liquidMaterials, 3);
	        this.chooseRandomMaterials(materials, alchemyMaterials, 1);
	        let probability = this.prng.next();
	        this.prng.next();
	        probability = (10 - ((probability * -91) | 0));
	        this.shuffle(materials);
	        if (!this.full && materials.length === 4) {
	            materials.removeAt(materials.length - 1);
	        }
	        return {
	            probability,
	            materials: materials.array
	        };
	    }
	    shuffle(list) {
	        const seed = ((this.seed >> 1) | 0) + 0x30f6;
	        const prng = new NumberGenerator(seed);
	        for (let i = list.length - 1; i >= 0; i--) {
	            const swapIndex = (prng.next() * (i + 1)) | 0;
	            const element = list.array[i];
	            list.array[i] = list.array[swapIndex];
	            list.array[swapIndex] = element;
	        }
	    }
	}

	class SeedFinder extends eventemitter3.EventEmitter {
	    constructor(options) {
	        super();
	        this.options = options;
	        this.exclude = new Set(this.options.exclude);
	        this.minScoreThreshold = this.options.minScoreThreshold || 1;
	        this.badMaterialThreshold = this.options.badMaterialThreshold || 17;
	        this.materialWeights = Object.assign({}, defaultMaterialPreference, this.options.materialPreferences || {});
	        const required = this.options.requireMaterials || {};
	        this.lcRequired = new Set(required.lc || []);
	        this.apRequired = new Set(required.ap || []);
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
	    seek(start, count) {
	        const end = start + count;
	        let canceled = false;
	        const cancel = () => canceled = true;
	        for (let seed = start; seed < end; seed++) {
	            const result = this.calculateSeed(seed);
	            if (result.score < this.minScoreThreshold || result.hasExcluded || !result.hasIncluded || result.hasBadMat || result.hasBadProbability) {
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
	    calculateSeed(seed) {
	        const generator = new NoitaAlchemyGenerator(seed, false);
	        let score = 100;
	        let hasBadMat = false;
	        let hasExcluded = false;
	        let hasBadProbability = false;
	        // Materials are only counted against the score one each, so if they
	        // are re-used, don't re-count them. This keeps track of the list of
	        // materials we've already seen
	        const used = new Set();
	        const materials = [
	            ...generator.livelyConcoction.materials,
	            ...generator.alchemicalPrecursor.materials
	        ];
	        let stillRequired = this.apRequired.size + this.lcRequired.size;
	        const processMats = (recipe, required, minProb, maxProb) => {
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
	            hasIncluded: !stillRequired,
	            livelyConcoction: generator.livelyConcoction,
	            alchemicalPrecursor: generator.alchemicalPrecursor
	        };
	    }
	}
	/**
	 * Weighted preference scores for each material (lower score is better)
	 */
	const defaultMaterialPreference = {
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

	const generateRecipes = (seed) => {
	    const generator = new NoitaAlchemyGenerator(seed, false);
	    return {
	        lc: generator.livelyConcoction,
	        ap: generator.alchemicalPrecursor
	    };
	};

	const checkSeed = document.querySelector('#check-seed');
	const checkSeedInput = checkSeed.querySelector('input');
	const checkSeedButton = checkSeed.querySelector('button');
	const checkSeedOutput = checkSeed.querySelector('.output');

	checkSeedButton.addEventListener('click', () => {
		const seed = parseInt(checkSeedInput.value, 10);
		const recipes = generateRecipes(seed);

		checkSeedOutput.innerHTML = `
		<div class="lc">
			<h3>Lively Concoction</h3>
			<small>Probability: ${recipes.lc.probability}%</small>
			<ul>
				${recipes.lc.materials.map((mat) => `<li>${mat}</li>`).join('')}
			</ul>
		</div>
		<div class="ap">
			<h3>Alchemical Precursor</h3>
			<small>Probability: ${recipes.ap.probability}%</small>
			<ul>
				${recipes.ap.materials.map((mat) => `<li>${mat}</li>`).join('')}
			</ul>
		</div>
	`;
	});

	const allowed = new Set();
	const materialPreferences = Object.assign({ }, defaultMaterialPreference);
	const allMaterials = Object.keys(materialPreferences);

	const searchSeeds = document.querySelector('section#search-seeds');
	const searchSeedsMinScore = searchSeeds.querySelector('.options .score');
	const searchSeedsButton = searchSeeds.querySelector('.options button.search');
	const searchSeedsStatus = searchSeeds.querySelector('.options .status');
	const searchSeedsMaterials = searchSeeds.querySelector('.materials');

	let canceled;
	let searching;
	const maxSeed = 0x7fffffff;
	const desiredResults = 200;
	const attemptsPerCycle = 10000;
	const threadPausePerCycle = 100;

	allMaterials.forEach((material) => {
		allowed.add(material);

		const row = searchSeedsMaterials.querySelector('table tbody').appendChild(
			document.createElement('tr')
		);

		const cost = materialPreferences[material];

		row.setAttribute('data-material', material);
		row.innerHTML = `
		<td class="material">${material}</td>
		<td class="allowed"><input type="checkbox" checked /></td>
		<td class="cost"><input type="number" value="${cost}" min="0" max="16" /></td>
		<td class="lc-required"><input type="checkbox" /></td>
		<td class="ap-required"><input type="checkbox" /></td>
	`;
	});

	searchSeedsButton.addEventListener('click', () => {
		if (searching) {
			canceled = true;
			searchSeedsButton.innerHTML = 'Canceling';
		}

		else {
			runSeedsSearch();
			searchSeedsButton.innerHTML = 'Stop and View Results';
		}
	});

	const getSearchQuery = () => {
		const exclude = new Set(allMaterials);
		const minScoreThreshold = searchSeedsMinScore.value;
		const requireMaterials = {
			lc: [ ],
			ap: [ ]
		};

		[ ...searchSeedsMaterials.querySelectorAll('table tbody tr') ].forEach((row) => {
			const material = row.getAttribute('data-material');
			const allowed = row.querySelector('.allowed input').checked;
			const cost = row.querySelector('.cost input').value;
			const lcRequired = row.querySelector('.lc-required input').checked;
			const apRequired = row.querySelector('.ap-required input').checked;

			if (allowed) {
				exclude.delete(material);
				materialPreferences[material] = cost;
				
				if (lcRequired) {
					requireMaterials.lc.push(material);
				}

				if (apRequired) {
					requireMaterials.ap.push(material);
				}
			}
		});

		if (allMaterials.length - 3 < exclude.size) {
			return setSearchStatus('Must have at least 3 enabled materials', true);
		}

		if (requireMaterials.lc.length > 3) {
			return setSearchStatus('Can only require up to 3 materials for LC recipe');
		}

		if (requireMaterials.ap.length > 3) {
			return setSearchStatus('Can only require up to 3 materials for AP recipe');
		}

		return {
			exclude,
			requireMaterials,
			minScoreThreshold,
			requireMaterials,
			materialPreferences
		};
	};

	const runSeedsSearch = async () => {
		const results = [ ];
		const searchQuery = getSearchQuery();

		if (! searchQuery) {
			return;
		}

		canceled = false;
		searching = true;

		let nextSeed = 0;
		let searched = `less than ${attemptsPerCycle}`;
		const seedFinder = new SeedFinder(searchQuery);

		seedFinder.on('seed', (seed, cancel) => {
			results.push(seed);

			setSearchStatus(`Checked ${searched} seeds; Found ${results.length} matches`);

			if (canceled || results.length >= desiredResults) {
				canceled = true;
				cancel();
			}
		});

		while (results.length < desiredResults && nextSeed < maxSeed && ! canceled) {
			const start = nextSeed;
			
			nextSeed += attemptsPerCycle;

			const count = (nextSeed > maxSeed)
				? maxSeed - start
				: attemptsPerCycle;

			setSearchStatus(`Checked ${searched} seeds; Found ${results.length} matches`);

			await sleep(threadPausePerCycle);

			seedFinder.seek(start, count);

			searched = `about ${start}`;
		}

		searching = false;
		searchSeedsButton.innerHTML = 'Search';
		setSearchStatus(`Done. Checked ${searched}; Found ${results.length} matches (see console)`);
		console.log(results);
	};

	const setSearchStatus = (message, isError = false) => {
		searchSeedsStatus.innerHTML = message;
		searchSeedsStatus.classList.toggle('error', isError);
	};

	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

}(EventEmitter3));
