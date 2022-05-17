<script>
    export let x;
</script>

<div class="header"><h1>Country Name</h1><button>Pin it</button></div>
<div class="country-details">
    <img src='https://via.placeholder.com/350' alt=""/>
    <div class="text-details">
        <p><b>Native Name: {''}</b></p>
        <p><b>Population: {''}</b></p>
        <p><b>Continents: {''}</b></p>
        <p><b>Capital: {''}</b></p>
        <p><b>Languages: {''}</b></p>
        <p><b>Currencies: {''}</b></p>
        <p><b>Borders: {''}</b></p>
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