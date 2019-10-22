
import { SeedFinder, generateRecipes } from '../src/index';
import { defaultMaterialPreference } from '../src/seed-finder';

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
const lcRequired = new Set();
const apRequired = new Set();
const materialPreferences = Object.assign({ }, defaultMaterialPreference);
const allMaterials = Object.keys(materialPreferences);

const searchSeeds = document.querySelector('section#search-seeds');
const searchSeedsMinScore = searchSeeds.querySelector('.options .score');
const searchSeedsButton = searchSeeds.querySelector('.options button.search');
const searchSeedsStatus = searchSeeds.querySelector('.options .status');
const searchSeedsResults = searchSeeds.querySelector('.results');
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

const renderSeed = (seed) => `
	<div class="seed">
		<h4>Seed: ${seed.seed} (score: ${seed.score})</h4>
		<p>Lively Concoction (${seed.livelyConcoction.probability}%): ${seed.livelyConcoction.materials.join(', ')}</p>
		<p>Alchemical Precursor (${seed.alchemicalPrecursor.probability}%): ${seed.alchemicalPrecursor.materials.join(', ')}</p>
	</div>
`;

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
	const startTime = Date.now();
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

		searched = `about ${start}`
	}

	const duration = (Date.now() - startTime) / 1000;

	searching = false;
	searchSeedsButton.innerHTML = 'Search';
	setSearchStatus(`Done. Checked ${searched} seeds; Found ${results.length} matches in ${duration} seconds`);
	renderSearchResults(results);
};

const setSearchStatus = (message, isError = false) => {
	searchSeedsStatus.innerHTML = message;
	searchSeedsStatus.classList.toggle('error', isError);
};

const clearSearchStatus = () => {
	searchSeedsStatus.innerHTML = '';
	searchSeedsStatus.classList.remove('error');
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const renderSearchResults = (results) => {
	if (! results.length) {
		searchSeedsResults.innerHTML = '<h4>No Results Found</h4>';
		return;
	}

	searchSeedsResults.innerHTML = `
		<header>
			<h4>Found ${results.length} Matching Seeds</h4>
			<a class="clear">Clear Results</a>
		</header>
		<section>
			${results.map((seed) => `
				<div>
					<h5>Seed: ${seed.seed}</h5>
					<p>Lively Concoction: ${seed.livelyConcoction.materials.join(', ')} (Probability ${seed.livelyConcoction.probability}%)</p>
					<p>Alchemical Precursor: ${seed.alchemicalPrecursor.materials.join(', ')} (Probability ${seed.alchemicalPrecursor.probability}%)</p>
				</div>
			`).join('')}
		</section>
	`;

	searchSeedsResults.querySelector('header a.clear').addEventListener('click', () => {
		searchSeedsResults.innerHTML = '';
	});
};
