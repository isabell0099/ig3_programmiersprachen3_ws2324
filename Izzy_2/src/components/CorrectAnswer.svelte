<script>
    export let onNext;

console.log("correctAnswer component mounted");

function handleNext() {
  console.log("Next button clicked from correctAnswer component");
  onNext();
}
  </script>
  
  <main>
    <div class="rightAnswerWindow">  
        <h1>Richtig! 👍</h1>
        <!-- Hier kannst du ein Bild oder weitere Informationen einfügen -->
        <button on:click={onNext}>Weiter</button>
    </div>
   
  </main>
  
  <style>

    .rightAnswerWindow{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding:1rem; 
    }
   
    h1{
    color: white; 
   }
  </style>