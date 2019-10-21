
const { SeedFinder } = require('./build');

const seedFinder = new SeedFinder({
	exclude: [ /*'blood', 'water', 'oil', 'alcohol'*/ ],
	// minScoreThreshold: 95,
	minScoreThreshold: 1,
	requireMaterials: {
		ap: [ 'lava' ]
	},
	minApProbability: 90
	// badMaterialThreshold: 17
});

console.log();

seedFinder.on('seed', (result) => {
	console.log(`Seed ${result.seed} Score=${result.score}`);
	console.log(`  Lively Concoction = ${result.livelyConcoction.materials.join(' + ')} // Probability ${result.livelyConcoction.probability}%`);
	console.log(`  Alchemical Precursor = ${result.alchemicalPrecursor.materials.join(' + ')} // Probability ${result.alchemicalPrecursor.probability}%`);
	console.log();
});

seedFinder.seek(5300000, 100000 /*10000*/);
