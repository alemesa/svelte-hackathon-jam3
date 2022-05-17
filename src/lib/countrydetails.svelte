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

  isPinned = $pinnedList.some((item) => item.code === code);

  function pinCountry(code, country) {
    const isDuplicate = $pinnedList.some((item) => item.code === code);

    if (!isDuplicate) {
      $pinnedList = [{ code: code,  title: country.name.common, continents: country.continents, flag:country.flags.svg }, ...$pinnedList];
    }
  }

  function unpinCountry(code) {
    $pinnedList = $pinnedList.filter((country) => country.code !== code);
  }

</script>

<div class="content-container">
<div class="header">
    <h1>Country Name</h1>
    <div class="btns">
        <button on:click={() => unpinCountry(data.code)}>Unpin it {data.code}</button>
        <button on:click={() => pinCountry(data.code)}>Pin it {data.code}</button>
    </div>
</div>

<div class="country-details">
    <img src={data.flags.svg} alt="" height={300}/>
    <div class="text-details">
        <p><b>Native Name: </b>{data.name.common}</p>
        <p><b>Population: </b>{data.population}</p>
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
</div>
<style>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }
    .country-details{
        display: flex;
        gap: 3rem;
    }
    .content-container{
        margin-left: 1rem;
    }
    .text-details{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center ;
    }

    img{
        border: 1px solid black;
    }

    button {
        background-color: #C4C4C4;
        
    }
</style>