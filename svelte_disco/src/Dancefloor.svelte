<script>
    import Lamp from "./Lamp.svelte"; 
export let h=100; //standardwerte
export let w=100; 
export let lampCount; 

let lamps= [];

for (let i=0; i<lampCount; i++) {

    lamps.push({
        l: Math.random()* w, 
        top: Math.random()*h
});

}
   
</script>

<div class="dancefloor" style= "width: {w}px; height: {h}px; ">
{#each lamps as lamp}
    <Lamp left={lamp.l} top={lamp.top} /> 
{/each}
</div>

<style>
    .dancefloor{
        background-color: #222;
        border: 4px solid ghostwhite;
        border-radius:10px;
        position: relative;
    }

</style>