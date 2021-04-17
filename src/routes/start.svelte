<script lang="ts">
    import Flag from '$lib/Flag.svelte';
    import { generateCountryQuiz } from '$lib/CountryQuiz';

	let countryQuiz = generateCountryQuiz();

	let countryCode = countryQuiz.countryToGuess.cca3;

	function loadAnother($event) {
		countryQuiz = generateCountryQuiz();

		countryCode = countryQuiz.countryToGuess.cca3;
	}
</script>

<button on:click={loadAnother}>Load Another</button>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center">
	<div class="border md:w-1/2">
		<Flag {countryCode} />
	</div>
	<div>
		<ul>
			{#each countryQuiz.shuffledCountries as country}
				<li>{country.name.common}</li>
			{/each}
		</ul>
	</div>
</div>
