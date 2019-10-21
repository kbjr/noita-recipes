
import { SeedFinder, generateRecipes } from '../src/index';

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
