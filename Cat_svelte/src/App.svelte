<!-- <script>
  import { onMount } from 'svelte';

  let catImageUrl = '';

 async function fetchCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    catImageUrl = data[0].url;
  }
</script>

<main>
  <h1>Svelte Cat App</h1>
  <button on:click={fetchCatImage}> Get New Cat</button>
{#if catImageUrl}
<img src={catImageUrl} alt="random Cat"/>
{/if}
</main>

<style>
  main {
    text-align: center;
    margin-top: 2rem;
  }
</style> -->

<script>
  let catImageUrls = [];
  import Cat from "./Cat.svelte"; 


  // Function to fetch a new cat image from the API
  async function fetchCatImage() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const data = await response.json();

      for (let i = 0; i < data.length; i++) {
        catImageUrls = [...catImageUrls, data[i].url];
      }
      console.log(catImageUrls);
    } catch (error) {
      console.error('Failed to fetch cat image:', error);
    }
  }

  fetchCatImage();
</script>

<main>
  <h1>Random Cat Image</h1>
  <button on:click={fetchCatImage}>Get New Cat</button>
   
  <div> {#each catImageUrls as url}
    <Cat url={url} />
  {/each}
</div>

</main>

<style>
  button {
    margin-top: 20px;
    display: block;
  }
</style>