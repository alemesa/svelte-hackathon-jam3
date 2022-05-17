<script>
    import Country from '$lib/country.svelte'
    import PinnedCountries from '$lib/pinnedCountries.svelte';
    import { filtered, term } from '../store.js'

</script>

<input type="text" placeholder="Search for a country" bind:value={$term}/>

<PinnedCountries/>

{$term}
{#each $filtered as country}
    <Country title={country.name.common}/>
    <a href={`/countries/${country.cca2}`}>Link -> /countries/{country.cca2}</a>
{/each}

