<script>
  import Dancefloor from "./Dancefloor.svelte";

  let numberOfDiscos = 2;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomDancefloors() {
    let dancefloors = [];
    for (let i = 0; i < numberOfDiscos; i++) {
      let numberOfLamps = getRandomInt(5, 15); // Zufällige Anzahl von Lampen zwischen 5 und 15
      dancefloors.push({ id: i, lamps: numberOfLamps });
    }
    return dancefloors;
  }

  let discos = generateRandomDancefloors();
</script>

<main>
  {#each discos as { id, lamps }}
    <Dancefloor key={id} lamps={lamps} />
  {/each}
</main>

<style>
  main {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
