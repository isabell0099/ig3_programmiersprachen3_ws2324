<script>
import Card from "./Card.svelte";
import dinosaurier from "./datadino.js" ; 


</script>

<div id="app-wrapper"> 
 <header>
        <div class="nav">

             <img class="imagelogo" src="../public/logo.png" alt="This is a logo">

                <div class="divBox1"> 
                    <input id="searchField" type="text" class="search-input" placeholder=" Search...">
                    <!-- <div class="buttonsearch"> Search</div> -->
                    <div class="menu-item" id="show-all">Sort</div> <!-- id nicht verändern -->

                </div>

                <div class="divBox2"> 
                    <a href="https://www.instagram.com" target="_blank" class="buttonsocialmedia"> <img src="../public/icons/instagram.png" alt="instagram" height="32"></a>
                    <a href="https://www.facebook.com" target="_blank" class="buttonsocialmedia"> <img src="../public/icons/Vector.png" alt="facebook" height="32"></a>
                    <!-- <div class="buttonsocialmedia"> <img src="../public/icons/instagram.png" alt="instagram" height="32"></div>
                    <div class="buttonsocialmedia"> <img src="../public/icons/Vector.png" alt="facebook" height="32"></div> -->
                    <div class="buttonsearch" id="show-footer"> Contact Us</div>
                    <div class="buttonsearch"> Buy</div>

                </div>
            
        </div>
        <div class="navHandy">
            <img src="../public/burgermenu.png" alt="">
    
        </div>
    </header>

        <div class="text-wrapper" > 
            <div class="intro"> Entdecke die erstaunliche Vielfalt von Dinosauriern.</div>
            <div class="infotext" > Jede Karte des Quartetts enthält nicht nur atemberaubende Abbildungen, sondern auch detaillierte Fakten zu den einzelnen Dinos. Lerne mehr über ihre Größe, ihre Lebensweise und ihre erstaunlichen Anpassungen, die sie zu den Herrschern der Urzeit machten.</div> 
        </div>
 
    <div id="field">
    
    <div id="cards-container"> 
    {#each dinosaurier as dinosaur}
    <Card dino= {dinosaur}/> 
    {/each} 
  
  </div>
    
    </div>
    

    <footer id="footer"> 
       
        <ul id="Sitelinks" > 
            <li><h3> SITELINKS</h3> </li>
            <li><h3> Kontakt</h3> </li>
            <li> <h3> Social Media</h3> </li>
            

        </ul>

        <ul id="Qicklinks" > 
            <li><h3> QUICKLINKS</h3> </li>
            <li> <h3> Impressum</h3></li> 
            <li><h3> Datenschutz </h3> </li>
        </ul>

        <div class="contact-info">
            <div class="address">
                <img src="../public/icons/location.png" alt="instagram" height="32">
                <p>Dinosaurier GmbH<br>Oberer Seesteig 7<br>89173 Lonsee</p>
            </div>

            <br>
            <div class="phone-fax">
                <img src="../public/icons/phone.png" alt="instagram" height="32">
                <p>Tel. +49 7336 9603 70<br>Fax +49 7336 9603 75</p>
            </div>
        </div>

    </footer>
    </div> 

<style>
   


    
</style>

