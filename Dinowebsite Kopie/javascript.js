let data = [];
let searchFilter= ""; 
let filterData =[]; 


fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
        // Daten sind jetzt verfügbar
        data = jsonData;
        checkCards();
        // Hier können Sie auf die Daten zugreifen
        // for (let i = 0; i < data.length; i++) {
        //     // Überprüfe, ob der Suchfilter im aktuellen Dinosauriernamen enthalten ist
        //     if (data[i].name.includes(searchFilter)) {
        //         createCard(data[i]);
        //     }
        // }
    })
    .catch(error => {
        // Behandeln Sie Fehler
        console.error('Ein Fehler ist aufgetreten:', error);
    });

function createCard(dinosaur){
        const field = document.getElementById("field");
        const card = document.createElement("div");
        field.appendChild(card)
        card.classList.add("card-wrapper"); // You can style this class in your CSS
      
        // Populate card content with dinosaur data
        card.innerHTML = `
       
         <div class="card-content">
        <p class="card-number center-content"> ${dinosaur["card number"]}</p>
          <div class="card-title">
         <h2>${dinosaur.name}</h2>
          <p> ${dinosaur.group}</p>
          </div> 
          <div class="card-image center-content">
                <img src=${dinosaur.img} alt="This is not a Dino">
            </div>
          
         <div class="info-icon center-content"> info </div> 
         <p class="info">${dinosaur.random_fact}</p>
         
        
         <div class="stats-wrapper">
            <div class="card-stat center-content top-left">
            <img src="../images/icons/height.png" alt="height">
             </div>
          <p class="card-val center-content"> ${dinosaur.height}</p>
          <div class="card-stat center-content">
          <img src="../images/icons/weight.png" alt="weight">
            </div>
          <p class="card-val center-content top-right"> ${dinosaur.weight}</p>
          <div class="card-stat center-content bottom-left">
                    <img src="../images/icons/brain.png" alt="eq times 100">
                </div>
                <p class="card-val center-content"> ${dinosaur.iq}</p>
          
          <div class="card-stat center-content">
                    <img src="../images/icons/teeth.png" alt="teeth">
                </div>
          <p class="card-val center-content bottom-right"> ${dinosaur.tooth_size}</p>
          
          
          <!-- Add more properties as needed <p> ${dinosaur.speed}</p>-->
      
          <!-- Example: Add an image if you have an image URL in the data 
          <img src="${dinosaur.image_url}" alt="${dinosaur.name}"> -->
      
          <!-- Add other properties as needed -->
            </div> 
          </div> 
        `;
      
        return card;
}




// Funktion zum Sortieren der Karten nach Gruppe
function sortCardsByGroup() {
    // Sortiere das Datenarray nach der Gruppe
    data.sort((a, b) => a.group.localeCompare(b.group));

    // Leere das Kartenfeld
    const field = document.getElementById("field");
    while (field.firstChild) {
        field.firstChild.remove();
    }

    // Erstelle die sortierten Karten
    data.forEach(dino => {
        createCard(dino);
    });
}

// Das Hinzufügen eines Event Listeners für den Sortieren-Button
const sortButton = document.getElementById("show-all");
sortButton.addEventListener("click", sortCardsByGroup);


function searchfield () {
let search = document.getElementById('searchField'); 

search.addEventListener('input', function(event) {
    // Hier kannst du den Code ausführen, der bei einer Änderung im Suchfeld ausgeführt werden soll
    console.log('Suchfeld geändert:', event.target.value);
    searchFilter = event.target.value;
    filterData = [];

    checkCards();
});

}
searchfield(); 

function checkCards(){ 
    let sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedData);
    const field = document.getElementById("field");
    while (field.firstChild) {
        field.firstChild.remove();
    }  
    for (let i = 0; i < data.length; i++) {
        let dinoDetails = `${sortedData[i].name} ${sortedData[i].group}`;
        if(dinoDetails.toLowerCase().includes(searchFilter.toLowerCase()))
        {
            filterData.push(data[i]);
        }
    }
    if(searchFilter!=""){
        filterData.forEach((dino)=>{
            createCard(dino);
        });
    }
    else{
        data.forEach((dino)=>{
            createCard(dino);
        });
    }
}

// Der Button Contact us scrollt zum footer
document.getElementById("show-footer").addEventListener("click", function() {
  
    const impressumElement = document.getElementById("footer");
    
    // Zum Impressum-Element scrollen
    impressumElement.scrollIntoView({ behavior: "smooth" });
});



