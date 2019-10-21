
const intMax = 0x7fffffff;

// We need genuine int32 behavior when mutliplying (ie. accurate int32 overflow
// behavior), so we're going to cheat and use an int32 array to have JS actually
// treat it as int32 values. Defining this up here and reusing it to avoid having
// to reallocate tiny 8 byte buffers over and over.
const a32 = new Int32Array(2);

export class NumberGenerator {
	constructor(public seed: number) {
		this.next();
	}

	public next() {
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
