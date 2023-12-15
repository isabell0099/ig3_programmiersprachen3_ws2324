
let data; 

// Assuming you have an HTML container with the id "dinosaur-cards-container"
const container = document.getElementById("dinosaur-cards-container");


// Function to generate a card element based on dinosaur data
function createDinosaurCard(dinosaur) {
  const card = document.createElement("div");
  card.classList.add("dinosaur-card"); // You can style this class in your CSS

  // Populate card content with dinosaur data
  card.innerHTML = `
    <h2>${dinosaur.name}</h2>
    <p>Group: ${dinosaur.group}</p>
    <p>Card Number: ${dinosaur["card number"]}</p>
    <p>Random Fact: ${dinosaur.random_fact}</p>
    <p> iq: ${dinosaur.iq}</p>
    <p> height: ${dinosaur.height}</p>
    <p> weight: ${dinosaur.weight}</p>
    <p> weight: ${dinosaur.speed}</p>
    <p> tooth size: ${dinosaur.tooth_size}</p>
    
    <!-- Add more properties as needed -->

    <!-- Example: Add an image if you have an image URL in the data 
    <img src="${dinosaur.image_url}" alt="${dinosaur.name}"> -->

    <!-- Add other properties as needed -->
  `;

  return card;
}

// Generate and append dinosaur cards to the container
for (let i = 0; i < 32; i++) {
  const randomDinosaurIndex = Math.floor(Math.random() * data.length);
  const randomDinosaur = data[randomDinosaurIndex];
  const dinosaurCard = createDinosaurCard(randomDinosaur);
  container.appendChild(dinosaurCard);
}
