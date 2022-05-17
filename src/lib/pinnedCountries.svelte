<script>
  import { pinnedList } from '../pinned.js';
</script>

{#if $pinnedList.length > 0}
<div class="container">
    <h1>Pinned Countries</h1>
    <ul>
      {#each $pinnedList as item}
        <li>{item.code}</li>
      {/each}
      {$pinnedList.length}
    </ul>
  </div>
{/if}



<style>
    .container{
        border-bottom: 1px solid black;
        margin: 40px 0;
    }
</style>