
const recipes = new Set();

for (let i = 0; i < 40; i++) {
	for (let j = 0; j < 40; j++) {
		for (let k = 0; k < 40; k++) {
			// Skip any combination where any two materials are the same
			if (i === j || j === k || i === k) {
				continue;
			}

			const recipe = [i, j, k].sort().join(',');

			recipes.add(recipe);
		}
	}
}

console.log(recipes.size);
