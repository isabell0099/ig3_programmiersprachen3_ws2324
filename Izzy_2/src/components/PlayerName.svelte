<script>
    import OpenAI from "openai";
  
    let inputText = "";
    let isLoading = false;
    let responseText = "";
  
    const runPrompt = async () => {
      const config = {
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true, // this is funny
      };
  
      const openai = new OpenAI(config);
  
      try {
        isLoading = true;
  
        const prompt = `Return the name of a dinosaur that contains the word ${inputText} in a funny way.`;
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        });
  
        console.log("API-Response:", response);
        responseText = response.choices[0].message.content;
      } catch (error) {
        // console.error("Error while retrieving the dinosaur name:", error);
      } finally {
        isLoading = false;
      }
    };
  </script>
  
  <main>
    <h1>Generiere dein Gamer Name</h1>
    <div class="input-controls">
      <input
        type="text"
        bind:value={inputText}
        placeholder="Enter random name or thing..."
      />
      <button on:click={runPrompt} disabled={isLoading}>Dinofy!</button>
    </div>
    {#if isLoading}
      <p>Loading...</p>
    {:else}
      <p>Result after dinofication:</p>
      <p class="result">{responseText}</p>
    {/if}
  </main>
  
  <style>
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      background-color: #222;
      color: #fff;
    }
  
    .input-controls {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 2em;
    }
  
    input {
      width: 200px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 10px;
    }
  
    button {
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    p {
      font-size: 0.7rem;
    }
    .result {
      margin-top: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
  </style>
  