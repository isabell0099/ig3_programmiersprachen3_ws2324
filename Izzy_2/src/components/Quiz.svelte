<script>
  import StartQuiz from "./StartQuiz.svelte";
  import CorrectAnswer from "./CorrectAnswer.svelte";
  import IncorrectAnswer from "./IncorrectAnswer.svelte";
  import PlayerName from "./PlayerName.svelte";
  import { createEventDispatcher } from "svelte";


  let nameGenerated = false;
  let dinoJson = [];
  let quizJson = [];
  let numbers;
  let questions = [];
  let quizStarted = false;
  let currentQuestionIndex = 0;
  let QuestionArray = [];

  let quizCompleted = false;

  

  // Variablen für randomFrage
  let AnzahlDinos = 32;
  let RandomZahlen = [];
  let DinoArray = [];
  let json1;
  let currentKeyToCompare = "";

  let showQuizContent = false;
  let showCorrectAnswer = false;
  let showIncorrectAnswer = false;

  let totalQuestions ; // Setze die Gesamtanzahl der Fragen
  let progress = 1; // Fortschritt beginnt bei 1

  function getRandoms(max) {
    let values = [];
    for (let i = 0; i < 6; i++) {
      while (!values[i] && values[i] != 0) {
        let value = Math.random() * max;
        value = Math.round(value);
        if (!values.includes(value)) {
          values[i] = value;
        }
      }
    }
    return values;
  }



  async function method() {
    const response1 = await fetch("./src/assets/data.json");
    const response2 = await fetch("./src/assets/quizData.json");
    const json1 = await response1.json();
    const json2 = await response2.json();
    dinoJson = json1;
    quizJson = json2;

    numbers = getRandoms(quizJson.length - 1);
    RandomZahlen = []; // Zurücksetzen der RandomZahlen für jede Frage
    DinoArray = []; // Zurücksetzen des DinoArray für jede Frage

    
console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      let currentKeyIndex = numbers[i];
      currentKeyToCompare = quizJson[currentKeyIndex].key; // Setze den aktuellen key-Wert in der Reihenfolge der gestellten Fragen
      console.log(currentKeyToCompare);

      await RandomQuestionManyDinos();

      console.log(numbers[i]);

      questions.push(quizJson[currentKeyIndex]);
    }
    totalQuestions = QuestionArray.length;
    return questions;
  }

  async function RandomQuestionManyDinos() {
    console.log("Quiz-Teil wird angezeigt")
    DinoArray = [];
    console.log("Start RandomQuestionManyDinos");
    const response1 = await fetch("./src/assets/data.json");
    const json1 = await response1.json();
    dinoJson = json1;

    // Vor jeder Frage zurücksetzen
    RandomZahlen = [];

    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * AnzahlDinos);
      while (RandomZahlen.includes(num)) {
        num = Math.floor(Math.random() * AnzahlDinos);
      }
      RandomZahlen.push(num);
      console.log(num);

      DinoArray.push(dinoJson[num]);
    }
    console.log(DinoArray);

    

    let highestValue = DinoArray[0][currentKeyToCompare];
    let DinoIndex = 0;

    for (let i = 1; i < DinoArray.length; i++) {
      if (DinoArray[i][currentKeyToCompare] > highestValue) {
        highestValue = DinoArray[i][currentKeyToCompare];
        DinoIndex = i;
      }
    }

    let Solution = DinoArray[DinoIndex];
    console.log(Solution.name);
    console.log("End RandomQuestionManyDinos");

    //object für question Array
    let object = {
      Key: currentKeyToCompare,
      Options: DinoArray,
      Answer: Solution.name,
    };

    QuestionArray.push(object);
   
    console.log(QuestionArray);

  }

 

  function selectOption(optionIndex) {
    // Hier kannst du die Logik für die ausgewählte Antwortoption implementieren
    const selectedDino =
      QuestionArray[currentQuestionIndex].Options[optionIndex];
    const correctAnswer = QuestionArray[currentQuestionIndex].Answer;

    if (selectedDino.name == correctAnswer) {
      console.log("Richtig");
      showCorrectAnswer = true;
      showIncorrectAnswer = false;
    } else {
      console.log("Falsch");
      showIncorrectAnswer = true;
      showCorrectAnswer = false;
    }
    // showQuizContent = false;
  }

  function onNext() {
    
    if (currentQuestionIndex < QuestionArray.length - 1) {
      currentQuestionIndex++;

      showQuizContent = true; // Setze showQuizContent auf true, um die
      showCorrectAnswer = false;
      showIncorrectAnswer = false;
      totalQuestions
      updateProgress();
    } else {
      console.log("Ende des Quiz");
      quizCompleted = true;
      // Hier kannst du weitere Aktionen durchführen, wenn das Quiz zu Ende ist
    }
  }
  function startQuiz() {
    // Function to start the quiz
    quizStarted = true;
    showQuizContent = true; // Set showQuizContent to true when starting the quiz
    totalQuestions = QuestionArray.length; // Setze die Gesamtanzahl der Fragen
  }

  function updateProgress() {
    progress = currentQuestionIndex + 1;
  }
  function skipQuestion() {
    //funktion für skip button
    // Prüfe, ob es noch mehr Fragen gibt
    if (currentQuestionIndex < totalQuestions - 1) {
      currentQuestionIndex++;
      updateProgress();
    } else {
      // Zeige eine Nachricht oder handle das Ende des Quiz
      console.log("End of Quiz");
    }
  }




</script>

<main>
  <div class="quiz-container">
    {#if !quizStarted }
      <!-- <StartQuiz on:startQuiz={() => (quizStarted = true)} /> -->
        <StartQuiz on:startQuiz={startQuiz} />
    {/if}

    {#if quizStarted}
      {#if !nameGenerated}
        <div id="container">        
          <PlayerName />
          <button class="weiterButton" on:click={() => {nameGenerated=true}}>Start</button></div>
        {:else}
        <div class="progress-bar">
        <div class="progress" style="width: {progress / totalQuestions * 100}%"></div>
        {#if !showCorrectAnswer && !showIncorrectAnswer}
          <div class="textProgress"> Frage: {progress} von {totalQuestions}</div>
        {/if}	
      </div>
      {#await method()}
        <p>Loading ...</p>
      {:then value}

      
      
        {#if !showCorrectAnswer && !showIncorrectAnswer}
          <h2>{value[currentQuestionIndex].question}</h2>
          <!-- <img src="images/BilderQuiz/DinoBildQuiz.png" alt="Alternative Text für das Bild" /> -->
          <div class="answer-grid">
          {#each QuestionArray[currentQuestionIndex].Options as dino, i}
            <button on:click={() => selectOption(i)}>{dino.name}</button>
          {/each}
        </div>
    
          <button class="skip-button" on:click={skipQuestion} style="font-size: 14px;">Skip</button>
          <a class="leave-button" href="/" style="text-decoration: none;"> Verlassen </a>
        {/if}
      

        {#if showCorrectAnswer || showIncorrectAnswer}
          {#if showCorrectAnswer}
            <CorrectAnswer {onNext} />
          {/if}

          {#if showIncorrectAnswer}
            <IncorrectAnswer {onNext} />
          {/if}
  {/if}

  {#if quizCompleted }
 
  <div>
    <h2>Quiz beendet!</h2>
    <a class="backHome" href="/">Zurück zur Startseite</a>
  </div>
  {/if}

      {/await}
      {/if}
    {/if}
  </div>
</main>

<style>
  /* h1{
    color: #D9D9D9;
    position: absolute;
        left: 50%;
        top: 15%;
        transform: translate(-50%,-50%);
        padding:1rem; 
        
  } */
  h2 {
    color: #D9D9D9;
    position: absolute;
        left: 50%;
        top: 12%;
        transform: translate(-50%,-50%);
        padding:1rem; 
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center; 
    
      
  }

  .weiterButton{
  
        position:absolute;
        font-family: "Inter", sans-serif;
    
        background-color: #C0E799; 
       
   color: black; 

   padding: 10px 20px; 
   font-size: 16px; 
   border: none; 
   border-radius: 5px; 
   cursor: pointer; 
   width:390px;
   height: 60px;
   cursor: pointer; 
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        
  }

  .answer-grid {
    position: fixed;
   bottom: 0;
    width: 90%;
    left: 0;
  
    padding: 0 20px;
    display: grid;
    margin:80px;
    height:170px;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    text-align: center;
    margin-top:600px;
    
  }

  .skip-button {
    position: absolute;
    top: 60px;
    right: 30px;
    width: 110px;
    height: 60px;
    background-color: #595959; /* Rote Farbe, ändere sie nach Bedarf */
    color: #D9D9D9;
    padding: 10px;
    border: none;
    border-radius: 80px;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }
  .leave-button{
    position: absolute;
    top: 60px;
    left:30px;
    width: 110px;
    height: 60px;
    background-color: #595959; /* Rote Farbe, ändere sie nach Bedarf */
    color: #D9D9D9;
    border: none;
    border-radius: 80px;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    padding: 1rem;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
  }
  .progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px; 
  background-color: grey; 
  z-index: 1000; 
  color: #D9D9D9;

  }
  .progress {
    height: 20px; 
    background-color: #C0E799;
  }
  .textProgress{
    position: fixed;
  
        left: 50%;
        margin: 25px;
        transform: translate(-50%,-50%);
        padding:1rem; 
        color:grey;
        font-family:"Inter", sans-serif;
  }
  button{
    font-size: 20px;
    font-family:"Inter", sans-serif;
  }
  #container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
  }
  img {
    width: 20%;
    height:20%;
    max-width: 20%; /* Optional: Begrenze die maximale Breite */
    max-height: 30%;

    margin-top: 200px; /* Hiermit wird das Bild horizontal zentriert */
    margin-left:40%;
 }

 .backHome{
    position:absolute;
    margin-top: 150px;
    margin-left:50%;  
    padding: 10px 20px;
    background-color: #595959;
    color: #D9D9D9;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    font-size: 14px;
    transform: translate(-50%,-50%);
 }
</style>