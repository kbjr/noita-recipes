
Algorithm ported from https://github.com/zatherz/NoitaAlchemy and https://github.com/SaphireLattice/noita_unicorn

#### Checking a specific seed

```typescript
const { generateRecipes } = require('./build');

console.log(generateRecipes(3342688));
// {
//   lc: { probability: 17, materials: [ 'soil', 'acid', 'blood_fungi' ] },
//   ap: { probability: 36, materials: [ 'honey', 'blood', 'poison' ] }
// }
```

#### Generating Seeds

```typescript
const { findSeed } = require('./build');

findSeed({
	// Seed to start checking from
	start: 1,

	// How many seed to check before returning
	attempts: 1000000,

	// Any specific materials to avoid
	exclude: [ ],

	// The minimum score to require on a recipe to include it in the list (always somewhere
	// between 4 and 98, with higher numbers being easier to achieve)
	minScoreThreshold: 97
});

/**

Seed 129440 Score=97
  Lively Concoction = oil + water + magic_liquid_berserk // Probability 31%
  Alchemical Precursor = water + magic_liquid_charm + oil // Probability 68%

Seed 129441 Score=97
  Lively Concoction = oil + water + magic_liquid_berserk // Probability 31%
  Alchemical Precursor = water + magic_liquid_charm + oil // Probability 68%

Seed 732840 Score=97
  Lively Concoction = magic_liquid_charm + magic_liquid_invisibility + oil // Probability 33%
  Alchemical Precursor = magic_liquid_charm + oil + water // Probability 62%

Seed 732841 Score=97
  Lively Concoction = magic_liquid_charm + magic_liquid_invisibility + oil // Probability 33%
  Alchemical Precursor = magic_liquid_charm + oil + water // Probability 62%

Seed 732842 Score=97
  Lively Concoction = magic_liquid_invisibility + magic_liquid_charm + oil // Probability 33%
  Alchemical Precursor = oil + magic_liquid_charm + water // Probability 62%

Seed 732843 Score=97
  Lively Concoction = magic_liquid_invisibility + magic_liquid_charm + oil // Probability 33%
  Alchemical Precursor = oil + magic_liquid_charm + water // Probability 62%

Seed 904244 Score=97
  Lively Concoction = water + blood + magic_liquid_charm // Probability 40%
  Alchemical Precursor = magic_liquid_invisibility + blood + magic_liquid_charm // Probability 86%

Seed 904245 Score=97
  Lively Concoction = water + blood + magic_liquid_charm // Probability 40%
  Alchemical Precursor = magic_liquid_invisibility + blood + magic_liquid_charm // Probability 86%

Seed 904246 Score=97
  Lively Concoction = blood + magic_liquid_charm + water // Probability 40%
  Alchemical Precursor = blood + magic_liquid_charm + magic_liquid_invisibility // Probability 86%

Seed 904247 Score=97
  Lively Concoction = blood + magic_liquid_charm + water // Probability 40%
  Alchemical Precursor = blood + magic_liquid_charm + magic_liquid_invisibility // Probability 86%

**/
```
