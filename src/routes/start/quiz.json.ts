import { generateCountryQuiz } from "$lib/CountryQuiz";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
 export async function get() {
    const { countryToGuess, shuffledCountries} = generateCountryQuiz();

    return {
        body: {
            countryToGuess,
            shuffledCountries
        }
    }
 }