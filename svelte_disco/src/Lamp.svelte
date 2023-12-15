<script>
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 let col = `rgb(${r}, ${g}, ${b})`;
//color
export let left;
export let top; 

let interval = Math.random()*1000 +100; 
let isShining=true; 
let radius = Math.random() * 50 + 10; // Zufälliger Radius zwischen 10 und 60

function toggleLamp(){
    isShining = !isShining; 
}

setInterval(toggleLamp,interval );


</script>

<div class="lamp" 
class:hidden ={!isShining}
style= "background-color: {col}; left: {left}px; top:{top}px; width: {radius}px; height: {radius}px;">
</div>

<style> 

.lamp{
    position:absolute;
    /* height:10px;  
    width: 10px; */
    border-radius: 50%;
    box-shadow: 0 0 5px whitesmoke;

}

.hidden{
    opacity: 0;
    transition: all 0.3 ease-in-out;
}

</style>