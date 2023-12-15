<script>
    import Lamp from "./Lamp.svelte";
  
    export let lamps;
  </script>
  
  <div class="dancefloor">
    {#each Array(lamps) as _, i}
      <Lamp key={i} />
    {/each}
  </div>
  
  <style>
    .dancefloor {
      background-color: #333;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      gap: 10px;
    }
  </style>