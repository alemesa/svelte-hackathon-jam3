<script>
    import Country from '$lib/country.svelte'
    import PinnedCountries from '$lib/pinnedCountries.svelte';
    import { filtered, term } from '../store.js'

</script>

<input type="text" placeholder="Search for a country" bind:value={$term}/>

<PinnedCountries/>

{#each $filtered as country}
<a href={`/countries/${country.cca2}`}>
    <Country title={country.name.common} continents={country.continents} flag={country.flags.svg}/>
</a>
{/each}


<style>
 
 input {
     text-align: center;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px auto 44px;
  }

    a {
        text-decoration: none;
        color: black;
    }

 
</style>
