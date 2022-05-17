<script>

    export let data;
    // export let name;
    // export let population;
    // export let continents;
    // export let capital;
    // export let languages;
    // export let currencies;
    // export let borders;
    // export let flags;

  import { pinnedList } from '../pinned.js';
  
  export let isPinned;

  isPinned = $pinnedList.some((item) => item.country === name.common);

  function pinCountry(code) {
    const isDuplicate = $pinnedList.some((item) => item.code === code);

    if (!isDuplicate) {
      $pinnedList = [{ code: code }, ...$pinnedList];
    }
  }

  function unpinCountry(code) {
    $pinnedList = $pinnedList.filter((country) => country.code !== code);
  }

</script>

<div class="header"><h1>Country Name</h1></div>

<div>
  <h1>pinned list</h1>
  <ul>
    {#if isPinned}
      IS PINNED
    {/if}

    {#if !isPinned}
      NOT PINNED
    {/if}

    {console.log($pinnedList)}
    {#each $pinnedList as item}
      <li>{item.code}</li>
    {/each}
  </ul>
</div>

<button on:click={() => unpinCountry(data.code)}>Unpin it {data.code}</button>

<button on:click={() => pinCountry(data.code)}>Pin it {data.code}</button>

<div class="country-details">
    <img src={data.flags.svg} alt="" height=300px/>
    <div class="text-details">
        <p><b>Native Name:</b>{data.name.common}</p>
        <p><b>Population:</b>{data.population}</p>
        <p><b>Continents: 
        </b>
        {#each data.continents as continent}
        {continent}
        {/each}
    </p>
        <p><b>Capital: </b>{data.capital}</p>
        <p><b>Languages:</b>
            {#each Object.values(data.languages) as language}
                {language}
            {/each}
        </p>
        <p><b>Currencies: </b>
        {#each Object.values(data.currencies) as currency}
            {currency.name}
        {/each}</p>
        <p><b>Borders: </b>
        {#each data.borders as border}
            <a href={`/countries/${border}`}>{border} </a>
        {/each}
        </p>
    </div>
</div>

<style>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .country-details{
        display: flex;
        gap: 3rem;
    }
    .text-details{
        display: flex;
        flex-direction: column;
    }
</style>