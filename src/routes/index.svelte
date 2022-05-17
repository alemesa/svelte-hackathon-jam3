<script>
    import Country from '$lib/country.svelte'

    let input = "";

    const fetchCountries = (async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        return await response.json();
    })();



</script>

<input type="text" placeholder="Search for a country" bind:value={input}/>

{#await fetchCountries}
    <p>please wait...</p>
{:then data}
{#each data as country}
    <Country title={country.name.common}/>
    <a href={`/countries/${country.cca2}`}>Link -> /countries/{country.cca2}</a>
{/each}
{:catch error}
    <p>An error occured!</p>
{/await}