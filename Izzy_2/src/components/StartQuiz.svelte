

<script>
   
     import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

  
    const dispatch = createEventDispatcher();
  
    function startQuiz() {
      dispatch("startQuiz");
    }

  



    onMount(() => {
    const images = document.querySelectorAll(".background-images img");
    
    const margin = 40;

    images.forEach((img) => {
      let isValidPosition = false;

    while (!isValidPosition) {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 2 * margin)) + margin;
        const randomY = Math.floor(Math.random() * (window.innerHeight  - 2 * margin)) + margin;

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;

        isValidPosition = true;

        // Check if the current image overlaps with any other images
        images.forEach((otherImg) => {
          if (img !== otherImg && isOverlapping(img, otherImg, margin)) {
            isValidPosition = false;
          }
        });
      }
    });
  });

  function isOverlapping(element1, element2, margin) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
      rect1.left < rect2.right + margin &&
      rect1.right > rect2.left - margin &&
      rect1.top < rect2.bottom + margin &&
      rect1.bottom > rect2.top - margin
    );
  }
    
    

  </script>
  
 
   <div class="background-images">
    <img src="/images/BilderQuiz/Group-1.png" alt="height" />
    <img src="/images/BilderQuiz/Group-2.png" alt="height" />
    <img src="/images/BilderQuiz/Group-3.png" alt="height" />
    <img src="/images/BilderQuiz/Group.png" alt="height" />
    <img src="/images/BilderQuiz/Vector-1.png" alt="height" />
    <img src="/images/BilderQuiz/Vector-2.png" alt="height" style="width:106px;height:223px;" />
    <img src="/images/BilderQuiz/Vector-3.png" alt="height" />
    <img src="/images/BilderQuiz/Vector-4.png" alt="height" />
    <img src="/images/BilderQuiz/Vector-5.png" alt="height" style="width: 129px;height: 299px;"/>
    <img src="/images/BilderQuiz/Vector-6.png" alt="height" />
  </div>
   

 
   
    <button class="startButton"on:click={startQuiz}>Play Quiz</button>

    

   





<style>

   
.background-images {
    position: relative;
    height: 60vh; /* You can adjust this value based on your requirements */
  }

  img {
    width: 10%;
    position: absolute;
    transform: translate(-50%, -50%);
  }



.startButton{
        position: fixed;
        left: 50%;
       top: 50%;
        transform: translate(-50%, -50%);
		  width: 160px;
		  height: 70px;
        display: flex;
        justify-content: center;
       align-items: center;
       
		margin-left: 10px;
		flex-shrink: 0;
		border-radius: 80px;
		background: white;
		font-family: "Inter", sans-serif;
        font-size: larger;
		cursor: pointer;
		color: #393939;
		
}




</style>

