<script>

	import Cards from "./Cards.svelte";
	import TextWrapper from "./TextWrapper.svelte";

  
	const INTRO_TEXT = "Entdecke die erstaunliche Vielfalt von Dinosauriern.";
	const INFO_TEXT =
	  "Jede Karte des Quartetts enthält nicht nur atemberaubende Abbildungen, sondern auch detaillierte Fakten zu den einzelnen Dinos. Lerne mehr über ihre Größe, ihre Lebensweise und ihre erstaunlichen Anpassungen, die sie zu den Herrschern der Urzeit machten.";
  
	let json = [];
  
	async function assignData() {
	  const response = await fetch("src/assets/data.json");
	  const data = await response.json();
	  json = data;
	  console.log("Geladene Daten:", json);
	}
  
	async function init() {
	  await assignData();
	}
  
	init();
  </script>
  <TextWrapper introText={INTRO_TEXT} infoText={INFO_TEXT} />
  <Cards {json} /> <!-- Änderung hier -->
  
  <style>
	
  </style>
  