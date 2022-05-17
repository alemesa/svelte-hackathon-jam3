<script>
  export let title = "Country Default"
  export let continents = []
  export let flag = '';
</script>

<div class="country">

  <img class="img" src={flag} alt="" width="62px" height={300}/>
  <div class="container">
    <h1>{title}</h1>
    <p>{#each continents as continent}
      {continent}
    {/each}</p>
  </div>
 
</div>

<style>

  

  .country {
    display: flex;
    gap: 14px;
    margin-bottom: 23px;
  }

  .img {
   width: 62px; 
   height: 51px;
   object-fit: contain;
  }
 .container {
   display: flex;
   flex-direction: column;

 }

 h1 {
   margin-bottom: 5px;
 }

 h1, p {

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */


color: #000000;
 }



</style>