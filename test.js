
const { findSeed } = require('./build');

findSeed({
	start: 1,
	attempts: 1000000,
	// attempts: 0x7fffffff,
	exclude: [ ],
	minScoreThreshold: 97,
	// badMaterialThreshold: 3
});











// const { generateRecipes } = require('./build');

// const result = generateRecipes(3342688);

// console.log(result);


// ------------------------------------------------------------


// const { NumberGenerator } = require('./build/prng');


// const seed = 3342688;
// const prng = new NumberGenerator(seed * 0.17127000 + 1323.59030000);

// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());
// console.log(prng.next());


// -----------------------------------------------------------


// const intMult = (a, b) => {
// 	let result = 0;

// 	while (b > 0) {
// 		if (b & 1) {
// 			result += 1;
// 		}

// 		a = a << 1;
// 		b = b >> 1;
// 	}

// 	return result;
// };


// let seed = (123456789 + 23456789 + 1 + 11 * 11) * 0.17127000 + 1323.59030000;

// const next = () => {
// 	const a = seed | 0;
// 	const b = intMult(a, 16807);
// 	const c = a / 127773;
// 	const d = intMult(c, -0x7fffffff);
// 	const e = b + d;

// 	console.log(`seed = ${seed}`);
// 	console.log();
// 	console.log(`int(seed) * 16807 + int(seed) / 127773 * -intMax`);
// 	console.log(`${a} * 16807 + ${a} / 127773 * -2147483647`);
// 	console.log(`${b} + ${c} * -2147483647`);
// 	console.log(`${b} + ${d}`);
// 	console.log(e);

// 	const f = e < 0 ? e + 0x7fffffff : e;

// 	console.log();
// 	console.log(`seed = ${e} < 0 ? ${e} + 2147483647 : ${e}`);
// 	console.log(`seed = ${f}`);

// 	seed = f;

// 	console.log();
// 	console.log(`output: ${f / 0x7fffffff}`);
// 	console.log();
// 	console.log('----------------------------------------------------');
// 	console.log();

// };

// for (let i = 0; i < 5; i++) next();
