<script>
  import { pinnedList } from '../pinned.js';
</script>

{#if $pinnedList.length > 0}
<div class="container">
    <h1 class="pinnedtext">Pinned List</h1>
    <ul>
      {#each $pinnedList as item}
        <div class="country">

            <img class="img" src={item.flag} alt="" width="62px" height={300}/>
            <div class="tinycontainer">
            <h1>{item.title}</h1>
            <p>{#each item.continents as continent}
                {continent}
            {/each}</p>
            </div>
        
        </div>
      {/each}
    </ul>
  </div>
{/if}



<style>
    .container{
        border-bottom: 1px solid black;
        margin: 40px 0;
    }

    .country {
    display: flex;
    gap: 14px;
    margin-bottom: 23px;
  }

  .pinnedtext {

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
margin-bottom: 14px;
/* identical to box height */


color: #000000;
  }


  .img {
   width: 62px; 
   height: 51px;
   object-fit: contain;
  }
 .tinycontainer {
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