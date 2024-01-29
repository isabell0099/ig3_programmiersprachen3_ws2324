<script>
  import { onMount } from "svelte";

  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";

  let headerValue = "";
  let mainData = [];

  let groupFilter = "";

  function handleGroupFilter(value) {
    // Hier kannst Wert von groupFilter verwenden, wenn sich dieser ändert
    groupFilter = value;
    console.log("Group Filter in home.svelte:", groupFilter);
  }

  onMount(async () => {
    const response = await fetch("./src/assets/data.json");
    const json = await response.json();
    mainData = json;
  });

  function handleOnInput(event) {
    headerValue = event.target.value;
  }
  function handleChange(event) {
    console.log("test");
  }
</script>

<Header {handleGroupFilter} value={headerValue} on:input={handleOnInput} />

<Main value={headerValue} data={mainData} filter={groupFilter} />

<Footer />

<style>
</style>
