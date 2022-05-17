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
Input: {input}
{console.log(fetchCountries)}
{#each data as country}
    {console.log(country)}
    <Country title={country.name.common}/>
    <a href={`/countries/${country.name.common}`}>Link -> /countries/{country.name.common}</a>
{/each}
{:catch error}
    <p>An error occured!</p>
{/await}