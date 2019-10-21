
import { List } from './list';
import { NumberGenerator } from './prng';
import { alchemyMaterials, liquidMaterials, Material } from './materials';

export interface Recipe {
	materials: Material[];
	probability: number;
}

/**
 * Noita alchemy generator
 *
 * Algorithm borrowed from https://github.com/zatherz/NoitaAlchemy/blob/master/Program.cs
 */
export class NoitaAlchemyGenerator {
	public readonly prng: NumberGenerator;
	public readonly livelyConcoction: Recipe; 
	public readonly alchemicalPrecursor: Recipe; 

	constructor(public readonly seed: number, public readonly full: boolean) {
		this.prng = new NumberGenerator(this.seed * 0.17127000 + 1323.59030000);

		// Pre-warm the PRNG
		for (let i = 0; i < 5; i++) {
			this.prng.next();
		}

		this.livelyConcoction = this.getRandomRecipe();
		this.alchemicalPrecursor = this.getRandomRecipe();
	}

	public chooseRandomMaterials(target: List<Material>, materialList: Material[], iterations: number) {
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

	public getRandomRecipe() : Recipe {
		const materials: List<Material> = new List();

		this.chooseRandomMaterials(materials, liquidMaterials, 3);
		this.chooseRandomMaterials(materials, alchemyMaterials, 1);

		let probability = this.prng.next();

		this.prng.next();

		probability = (10 - ((probability * -91) | 0));

		this.shuffle(materials);

		if (! this.full && materials.length === 4) {
			materials.removeAt(materials.length - 1);
		}

		return {
			probability,
			materials: materials.array
		};
	}

	public shuffle(list: List<string>) {
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
