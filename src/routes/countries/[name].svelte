<script>
    import Country from '$lib/country.svelte'
    import CountryDetails from '$lib/countrydetails.svelte'

	 import { page } from '$app/stores';
import Countrydetails from '../../lib/countrydetails.svelte';
     console.log($page.params.name)


    const fetchCountry = (async () => {
		// const response = await fetch('https://restcountries.com/v3.1/all');
        const response = await fetch(`https://restcountries.com/v3.1/name/${$page.params.name}`)
        return await response.json();
    })();



</script>

<h1>Specific Country</h1>
<h2>Hackathon</h2>

{#await fetchCountry}
    <p>please wait...</p>
{:then data}

{console.log(fetchCountry)}
{#each data as country}
    {console.log(country)}
    <Country title={country.name.common}/>
    <CountryDetails {...country}/>
	
	<code>{JSON.stringify(country, null, 4)}</code>
{/each}
{:catch error}
    <p>An error occured!</p>
{/await}

