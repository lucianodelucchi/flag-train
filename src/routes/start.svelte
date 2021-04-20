<script lang="ts">
    import Flag from '$lib/Flag.svelte';
    import { generateCountryQuiz } from '$lib/CountryQuiz';
	import type { Country } from '$lib/Countries';

	let countriesTried = new Set<Country>();

	let selectedCountry: Country;

	let countryQuiz = generateCountryQuiz();

	let countryCode = countryQuiz.countryToGuess.cca3;

	$: isCorrect = countryCode === selectedCountry?.cca3;
	$: isIncorrect = !isCorrect;

	const next = ($event) => {
		selectedCountry = undefined;
		countriesTried.clear();

		countryQuiz = generateCountryQuiz();

		countryCode = countryQuiz.countryToGuess.cca3;
	}

	const selectCountry = (country: Country) => {
		selectedCountry = country;
		countriesTried.add(country);
	}

	const shouldDisable = (selectedCountry, country: Country) => isCorrect && !countriesTried.has(country);

	const isValid = (selectedCountry, country: Country) => countriesTried.has(country) && countryCode === country?.cca3;
	
	const isInvalid = (selectedCountry, country: Country) => countriesTried.has(country) && countryCode !== country?.cca3;

</script>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center">
	<div class="md:w-2/3">
		<Flag {countryCode} />
	</div>
	<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
		{#each countryQuiz.shuffledCountries as country (country.cca3)}
			<button class="p-2 w-full cursor-pointer focus:outline-none disabled:opacity-50" on:click|once="{() => selectCountry(country)}" disabled={shouldDisable(selectedCountry, country)}>
				<div class="bg-gray-100 rounded flex p-2 h-full items-center" class:bg-green-200={isValid(selectedCountry, country)} class:bg-red-200={isInvalid(selectedCountry, country)}>
					<svg class="text-indigo-500 w-6 h-6 flex-shrink-0 mx-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
						<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
					</svg>
					<div class="flex flex-col place-items-start">
						<span class="font-medium">{country.name.common}</span>
						{#if country.name.common !== country.name.native[Object.keys(country.name.native)[0]]?.official}
							<span class="text-xs">{country.name.native[Object.keys(country.name.native)[0]]?.official ?? '-'}</span>						
						{/if}
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>

<button on:click={next} class="load-another disabled:opacity-50" disabled={isIncorrect}>Next</button>

<style style lang="postcss">
	.load-another {
		@apply mt-4;
		@apply px-2;
		@apply py-2;
		@apply text-2xl;
		@apply font-semibold;
		@apply rounded-lg;
		@apply shadow-md;
		@apply border;
		@apply ring;
		@apply ring-green-600;
		@apply ring-offset-2;
		@apply bg-green-600;
		@apply text-white;
		@apply focus:outline-none;
	}
</style>