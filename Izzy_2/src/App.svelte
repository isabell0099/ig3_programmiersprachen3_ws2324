<script>
  import Router from "svelte-spa-router";

  // Components

  import Quiz from "./components/Quiztest.svelte";
  import Home from "./components/Home.svelte";

  const routes = {
    "/": Home,
    "/quiz": Quiz 
  };
</script>

<!--

	Erklärungen:

	1. Sobald die App.svelte "gemountet" (vgl. onMount), also von Svelte erstellt wurde, wird die data.json Datei
	   geladen und der Variable mainData zugewiesen. Diese Variable wird dann an die Main.svelte Komponente zur
	   "Weiterverarbeitung" weitergegeben.
	2. In der Header-Komponente befindet sich das Input-Element, welches den Wert von headerValue
	   bestimmen wird. Die Variable ist deshalb auf Höhe der App.svelte Komponente definiert, weil sie
	   genauso für die Main.svelte Komponente zugänglich sein muss - von ganz oben an die nächste Ebene also
	   (aka "Top-Bottom-Prinzip").
	3. App.svelte stellt auch eine Funktion handleOnInput bereit, die aufgerufen werden soll, sobald im Input-Element
	   etwas eingegeben wird. Die Funktion setzt den Wert der Variable headerValue auf den eingegebene Wert
	   des Input-Elements. Sie wird an die Header-Komponente weitergegeben und dort von dem echten DOM-Element
	   aufgefangen, indem man implizit nur on:input schreibt (vgl. Header.svelte)

-->

<!-- <main> <Router {routes}/> </main> -->

<div id="wrapper">
  <Router {routes} />
</div>

<!-- <Footer /> -->
<!-- <Header value={headerValue} on:input={handleOnInput} />
<Main value={headerValue} data={mainData} />
<Footer /> -->

<style>
  header a {
    color: white;
  }
</style>
