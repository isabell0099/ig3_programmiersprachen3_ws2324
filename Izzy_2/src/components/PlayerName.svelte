<script>
  import OpenAI from "openai";
  import { playername } from "../store.js";
  import { createEventDispatcher } from "svelte";

  let playerNameGenerated;

  const dispatch = createEventDispatcher();

  let isLoading = false;

  const runPrompt = async () => {
    const config = {
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true, // this is funny
    };

    const openai = new OpenAI(config);

    try {
      isLoading = true;

      const prompt = `Give me a gamer name that is related to any dinosaur except T-Rex. Only give me one name, not more than that.`;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      console.log("API-Response:", response);
      playername.set(response.choices[0].message.content);
      dispatch("playerNameGenerated");
    } catch (error) {
      // console.error("Error while retrieving the dinosaur name:", error);
    } finally {
      isLoading = false;
    }
  };
</script>

<div class="playername">
  <h1>Erstelle dein Gamer-Name</h1>

  <div class="result-container">
    {#if isLoading}
      <p>Loading...</p>
    {:else}
      <p class="result">{$playername}</p>
    {/if}
  </div>

  <div class="input-controls">
    <button on:click={runPrompt} disabled={isLoading}>Generiere!</button>
  </div>
</div>

<style>
  .playername {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-family: "Inter", sans-serif;
    background-color: #222;
    color: #fff !important;
  }

  h1 {
    color: rgb(186, 185, 185);
    margin-top: 6%;
    padding: 20px;
  }

  .input-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .result-container {
    background-color: rgb(94, 93, 93);
    padding: 10px;
    border-radius: 80px; /* Abgerundete Ecken */
    margin-top: 10px;
    justify-content: center;
  }

  button {
    background-color: lightgrey;
    color: black;
    font-family: "Inter", sans-serif;
    margin-top: 150px;

    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 390px;
    height: 60px;
  }

  p {
    font-size: 1rem;
    color: grey;
    padding: 8px;
  }

  .result {
    margin-top: 0;
    color: lightgray;
    font-size: 1rem;
    padding: 8px;
  }
</style>
