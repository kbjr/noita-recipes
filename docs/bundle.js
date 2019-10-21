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

}(EventEmitter3));
