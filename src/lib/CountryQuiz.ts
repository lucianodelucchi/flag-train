import { countries } from '$lib/Countries';
import type { Countries, Country } from '$lib/Countries';
import { getRandomIndices, shuffle } from '$lib/_utils'; 

const numberOfCountries = countries.length;

const selectCountries = ()  => getRandomIndices(numberOfCountries).map(i => countries[i]);

export interface CountryQuiz {
    countryToGuess: Country
    shuffledCountries: Countries
}

export const generateCountryQuiz:() => CountryQuiz = () => {
    const selectedCountries = selectCountries();
    const countryToGuess = selectedCountries[0];
    const shuffledCountries = shuffle(selectedCountries);

    return {
        countryToGuess,
        shuffledCountries
    }
}