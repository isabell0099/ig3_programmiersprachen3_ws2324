<script>
	import Card from "./Card.svelte";
	export let json;
	
</script>

<div id="field">
	{#each json as dinosaur}
		<Card {dinosaur} />
	{/each}
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
</style>
