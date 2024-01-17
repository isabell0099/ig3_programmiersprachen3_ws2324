<script>
	import Card from "./Card.svelte";
	import SearchBar from "./SearchBar.svelte";
  
	export let json;
	export let searchFilter = "";
  </script>
  
  <div id="container">
	<SearchBar bind:searchFilter={searchFilter} />
	<div id="field">
	  {#each json.filter((dino) => `${dino.name} ${dino.group}`.toLowerCase().includes(searchFilter.toLowerCase())) as dinosaur}
		<Card {dinosaur} />
	  {/each}
	</div>
  </div>

  
  <style>
	#field {
	  display: flex;
	  flex-wrap: wrap;
	  grid-template-columns: repeat(4, 1fr);
	  grid-template-rows: repeat(8, 1fr);
	  padding: 60px;
	  padding-bottom: 200px;
	  align-items: center;
	  justify-content: center;
	  gap: 120px;
	}
	#container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  padding-top: 10vh;
	}
  </style>