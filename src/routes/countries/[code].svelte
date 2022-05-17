<script>
    import Country from '$lib/country.svelte'
    import CountryDetails from '$lib/countrydetails.svelte'

	 import { page } from '$app/stores';
     // console.log($page.params.name)


    const fetchCountry = (async () => {
		// const response = await fetch('https://restcountries.com/v3.1/all');
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${$page.params.code}`)
        return await response.json();
    })();



</script>

{#await fetchCountry}
    <p>please wait...</p>
{:then data}
{#each data as country}
    <CountryDetails data={{code: country.cca2 ,name: country.name, population: country.population,
         continents: country.continents, capital: country.capital, languages: country.languages,
         currencies: country.currencies, borders: country.borders, flags: country.flags}}/>
{/each}
{:catch error}
    <p>An error occured!</p>
{/await}

