<script>
  // Variables
  import { INFO_TEXT, INTRO_TEXT } from "../js/constants";
  // Components
  import TextWrapper from "./TextWrapper.svelte";
  import Cards from "./Cards.svelte";
  import { filterBy } from "../js/functions";
  // Exports
  export let value; // Der Wert des Input-Elements
  export let data; // Alle Dinosaurier-Daten
  export let filter = "";

  let json = [];
  let groupFilteredData = [];

  $: {
    console.log("Main.svelte: ", value);
    json = filterBy(data, "name", value);

    // Hier nach "group" filtern
    json = filterBy(json, "group", filter);
  }
</script>

<!--

	Erklärungen:

	1. Wir haben oben einmal die Schnittstelle value definiert. Dort wird der Wert ankommen von dem
	   Input-Element aus der Header-Komponente. Wir haben auch die Schnittstelle data definiert. Dort
	   werden alle Dinosaurier-Daten ankommen, die wir in der App.svelte Komponente geladen haben.
	2. Wir haben eine Variable json definiert, die wir später mit den gefilterten Daten befüllen werden.
	   Dort werden dann alle Dinosauriert landen, die zum Suchbegriff aus value passen.
	3. Wir haben eine Reaktivität definiert, die immer dann ausgelöst wird, wenn sich der Wert von value
	   ändert. In der Reaktivität wird die Funktion filterBy aufgerufen, die wir in der functions.js
	   Datei definiert haben. Diese Funktion filtert die Daten nach dem Suchbegriff und gibt ein Array
	   mit den passenden Dinosauriern zurück. Dieses Array wird dann in der Variable json gespeichert.
	4. Wir haben eine if-else Bedingung definiert, die prüft, ob json mehr als 0 Elemente enthält. Wenn
	   ja, dann wird die TextWrapper-Komponente und die Cards-Komponente gerendert. Wenn nein, dann wird
	   ein "empty state" gerendert, also die Ansicht, die angezeigt wird, wenn keine Dinosaurier gefunden
	   werden konnten.

-->

<main>
  {#if json.length > 0 || groupFilteredData.length > 0}
    <TextWrapper introText={INTRO_TEXT} infoText={INFO_TEXT} />

    <!--  await delay function(set timeout) -->
    {#await json}
      <p>Loading ...</p>
    {:then data}
      <Cards json={data} />
    {/await}
  {:else}
    <div class="empty-state">
      <h2>No results found</h2>
    </div>
  {/if}
</main>

<style>
  /* TODO: Complete and style empty state */
  .empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80svh;
  }
  .empty-state h2 {
    font-size: 2rem;
    color: rgb(186, 185, 185);
    font-family: "Inter", sans-serif;
  }
</style>
