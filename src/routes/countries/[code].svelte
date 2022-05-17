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

<h1>Specific Country</h1>
<h2>Hackathon</h2>

{#await fetchCountry}
    <p>please wait...</p>
{:then data}
{#each data as country}
    <Country title={country.name.common}/>
    <CountryDetails data={{name: country.name, population: country.population,
         continents: country.continents, capital: country.capital, languages: country.languages,
         currencies: country.currencies, borders: country.borders, flags: country.flags}}/>
	
	<code>{JSON.stringify(country, null, 4)}</code>
{/each}
{:catch error}
    <p>An error occured!</p>
{/await}

