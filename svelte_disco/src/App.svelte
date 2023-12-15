<script>
  import Dancefloor from "./Dancefloor.svelte";

</script>

<main>
<Dancefloor w={400} h={400} lampCount={1}/> 
<Dancefloor w={200} h={600} lampCount={40}/> 
<Dancefloor w={100} h={300} lampCount={20}/> 

</main>

 

<style>

  main {
    display: flex;
    gap:10px;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
  
</style>
