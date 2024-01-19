<script>
    import StartQuiz from "./StartQuiz.svelte";
    import CorrectAnswer from "./CorrectAnswer.svelte";
    import IncorrectAnswer from "./IncorrectAnswer.svelte";
    import { onMount } from "svelte";
    let dinoJson = [];
    let quizJson = [];
    let numbers;
    let questions = [];
    let quizStarted = false;
    let currentQuestionIndex = 0;
    let QuestionArray = [];
  
    // Variablen für randomFrage
    let AnzahlDinos = 32;
    let RandomZahlen = [];
    let DinoArray = [];
    let json1;
    let currentKeyToCompare = '';

    let showQuizContent = true;
    let showCorrectAnswer = false;
    let showIncorrectAnswer = false;
    
   
  
    function getRandoms(max) {
      let values = [];
      for (let i = 0; i < 3; i++) {
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
  
   
  
  
  
    // onMount(async () => {
    // 	const response1 = await fetch("./src/assets/data.json");
    //     const response2 = await fetch("./src/assets/quiz.json");
    // 	const json1 = await response1.json();
    //     const json2 = await response2.json();
    // 	dinoJson = json1;
    //     quizJson = json2;
    //     numbers = getRandoms((quizJson.length)-1);
    //     numbers.forEach(num => {
    //         console.log(num);
    //         questions.push(quizJson[num]);
    //     });
    //     console.log(questions);
    // });
  
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

    //   let randomIndex = Math.floor(Math.random() * numbers.length);
    //   currentKeyToCompare = quizJson[numbers[randomIndex]].key; // Setze den aktuellen key-Wert
    //   console.log(currentKeyToCompare);
    //   await RandomQuestionManyDinos(); 

    //   numbers.forEach((num) => {
    //     console.log(num);
        
    //     questions.push(quizJson[num]);
    //   });

    for (let i = 0; i < numbers.length; i++) {
    let currentKeyIndex = numbers[i];
    currentKeyToCompare = quizJson[currentKeyIndex].key; // Setze den aktuellen key-Wert in der Reihenfolge der gestellten Fragen
    console.log(currentKeyToCompare);

    await RandomQuestionManyDinos();

    console.log(numbers[i]);

    questions.push(quizJson[currentKeyIndex]);
  }
      

      return questions;

     
    }
  
    async function RandomQuestionManyDinos() {
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
      
      
      
      
    
      // Find the heaviest dinos    
    //   let DinoIndex = 0;
    //   console.log(currentKeyToCompare);
    //   for (let i = 1; i < DinoArray.length; i++) {
    //     if (DinoArray[i][currentKeyToCompare] > DinoArray[DinoIndex][currentKeyToCompare]) {
    //       DinoArray[DinoIndex] = DinoArray[i][currentKeyToCompare];
    //     }
    //   }
    //   let Solution = DinoArray[DinoIndex];
    //   console.log(Solution.name);

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
    Key : currentKeyToCompare,
    Options: DinoArray,
    Answer: Solution.name,
   }

   QuestionArray.push(object);
   console.log(QuestionArray);
    }

    function skipQuestion() { //funktion für skip button
    // Prüfe, ob es noch mehr Fragen gibt
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      RandomQuestionManyDinos(); // Aktualisiere die Dinos für die nächste Frage
    } else {
      // Zeige eine Nachricht oder handle das Ende des Quiz
      console.log("End of Quiz");
    }
  }

  function selectOption(optionIndex) {
    // Hier kannst du die Logik für die ausgewählte Antwortoption implementieren
    const selectedDino = QuestionArray[currentQuestionIndex].Options[optionIndex];
    const correctAnswer = QuestionArray[currentQuestionIndex].Answer;

    if (selectedDino.name === correctAnswer) {
      showCorrectAnswer = true;
      showIncorrectAnswer = false;
    } else {
      showIncorrectAnswer = true;
      showCorrectAnswer = false;
    }
    showQuizContent = false;
  }

  function onNext() {
    // Logik für den Übergang zur nächsten Frage
    if (currentQuestionIndex < QuestionArray.length - 1) {
      currentQuestionIndex++;
      
      RandomQuestionManyDinos(); // Aktualisiere die Dinos für die nächste Frage
      showQuizContent = false; // Setze showQuizContent auf true, um die
      showCorrectAnswer = false;
      showIncorrectAnswer = false;

    } else {
      console.log("Ende des Quiz");
      // Hier kannst du weitere Aktionen durchführen, wenn das Quiz zu Ende ist
    }
  }

    </script>
  
  <main>
    <div class="quiz-container">
      {#if !quizStarted}
        <StartQuiz on:startQuiz={() => (quizStarted = true)} />
      {/if}
  
      {#if quizStarted && showQuizContent }
       
        <h1>Quiz</h1>
        {#await method()}
          <p>Loading ...</p>
        {:then value}
          
        <!-- {#each value as _, i}
            <h2>{value[i].question}</h2>
          {/each} -->
    
          {#if value.length > 0 && currentQuestionIndex < value.length}
          <div>
            <h2>{value[currentQuestionIndex].question}</h2>
            {#each QuestionArray[currentQuestionIndex].Options as dino, i}
            <button on:click={() => selectOption(i)}>{dino.name}</button>
            {/each}
          </div>
          <button on:click={skipQuestion}>Skip</button>
        {/if}
  

        {#if showCorrectAnswer}
        <CorrectAnswer onNext={onNext} />
      {/if}

      {#if showIncorrectAnswer}
      <IncorrectAnswer onNext={onNext} />
      {/if}

      {/await}
      
      {/if}
      
    </div>
  </main>
  
  <style>
    h2 {
      color: white;
    }
    h1 {
      color: white;
    }
   
  </style>