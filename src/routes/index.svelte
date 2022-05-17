<script>
    let input = "";

    const fetchCountries = (async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        return await response.json();
    })();



</script>

<h1>Countries of the world</h1>
<h2>Hackathon</h2>

<input type="text" placeholder="Search for a country" bind:value={input}/>

{#await fetchCountries}
    <p>please wait...</p>
{:then data}
Input: {input}
{console.log(fetchCountries)}
{#each data as country}
    <p>{country.name.common}</p>
{/each}
{:catch error}
    <p>An error occured!</p>
{/await}

