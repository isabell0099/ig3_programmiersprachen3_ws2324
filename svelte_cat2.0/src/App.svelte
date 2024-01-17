<script> 
import Router from 'svelte-spa-router'; 
import About from './About.svelte'; 
import Home from './Home.svelte'; 

const routes= {
  '/': Home,
  '/about': About
}; 
</script>

<header>Funny Demo Site </header>
<nav> 
<a href="#/' "> Start</a>
<a href="#/about "> About</a>
</nav>
<main> 
  <Router {routes}/> 
</main>
<footer> </footer>

<style> 
nav{
  background-color: red;
}


</style>