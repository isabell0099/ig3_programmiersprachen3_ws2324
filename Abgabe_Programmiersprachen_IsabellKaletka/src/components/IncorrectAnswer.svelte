<script>
  export let onNext;

  console.log("inCorrectAnswer component mounted");

  function handleNext() {
    console.log("Next button clicked from inCorrectAnswer component");
    onNext();
  }
</script>

<main>
  <div class="wrongAnswerWindow">
    <h1>Falsch! 👎</h1>
    <button on:click={onNext}>Weiter</button>
  </div>
</main>

<style>
  .wrongAnswerWindow {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
  }
  h1 {
    color: white;
    font-family: "Inter", sans-serif;
  }

  button {
    background-color: lightgrey;
    color: black;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
