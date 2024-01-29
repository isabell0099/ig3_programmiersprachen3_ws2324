<script>
  export let introText;
  export let infoText;
</script>

<div class="text-wrapper">
  <div class="intro">
    {introText}
  </div>
  <div class="infotext">
    {infoText}
  </div>
</div>

<style>
  .intro {
    flex: 1;
    color: rgb(186, 185, 185);
    max-width: 520px;

    margin-top: 120px;
    font-family: "Inter", sans-serif;
    font-size: 48px;
    margin-left: 7%;
    padding: 10px;
  }

  .infotext {
    flex: 1;
    color: rgb(157, 154, 154);
    font-family: "Inter ", sans-serif;
    font-weight: 200;
    font-size: 20px;
    max-width: 500px;
    margin-top: 128px;
    padding: 10px;
  }

  .text-wrapper {
    display: flex;
  }

  @media screen and (max-width: 1300px) {
    .text-wrapper {
      flex-direction: column; /* Ändert die Anordnung zu einer Spalte bei einer Bildschirmbreite von 1200px oder weniger */
    }

    .infotext {
      margin-left: 7%;
      margin-top: 10px !important;
      max-width: 600px;
    }
  }
</style>
