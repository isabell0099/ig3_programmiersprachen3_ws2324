<script>
  export let dinosaur;
</script>

<div class="card-wrapper">
  <div class="card-content">
    <p class="card-number center-content">{dinosaur["card number"]}</p>
    <div class="card-title">
      <h2>{dinosaur.name}</h2>
      <p>{dinosaur.group}</p>
    </div>
    <div class="card-image center-content">
      <img src={dinosaur.img} alt="This is not a Dino" />
    </div>

    <div class="info-icon center-content">info</div>
    <p class="info">{dinosaur.random_fact}</p>

    <div class="stats-wrapper">
      <div class="card-stat center-content top-left">
        <img src="/images/icons/height.png" alt="height" />
      </div>
      <p class="card-val center-content">{dinosaur.height}</p>
      <div class="card-stat center-content">
        <img src="/images/icons/weight.png" alt="weight" />
      </div>
      <p class="card-val center-content top-right">{dinosaur.weight}</p>
      <div class="card-stat center-content bottom-left">
        <img src="/images/icons/brain.png" alt="eq times 100" />
      </div>
      <p class="card-val center-content">{dinosaur.iq}</p>

      <div class="card-stat center-content">
        <img src="/images/icons/teeth.png" alt="teeth" />
      </div>
      <p class="card-val center-content bottom-right">
        {dinosaur.tooth_size}
      </p>
    </div>
  </div>
</div>

<style>
  .card-wrapper {
    font-family: "Sofia Sans Extra Condensed", sans-serif;
    border-radius: 18px;
    padding: 10px;
    height: 405px;
    width: 285px;
    background-color: rgb(245, 245, 235);
    margin: auto;
    transform: scale(1);
    transition: transform 0.5s ease;
  }

  .card-wrapper:hover {
    transform: scale(1.05);
  }

  .card-content {
    display: grid;
    height: 380px;
    width: 265px;
    /* border: 3px solid #222; */
    border-radius: 12px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2fr 6fr 2fr 6fr;
    grid-template-areas:
      "number title title title"
      "image image image image"
      "info-icon info info info"
      "stat stat stat stat";
  }

  .card-number {
    grid-area: number;
    background-color: #c1e799;
    border-top-left-radius: 9px;
    font-size: 2rem;
    font-weight: 800;
    border-right: 3px solid #222;
    border-left: 3px solid #222;
    border-top: 3px solid #222;
  }

  .card-title {
    grid-area: title;
    text-transform: uppercase;
    font-weight: 800;
    padding-left: 5px;
    border-right: 3px solid #222;
    border-top: 3px solid #222;
    border-top-right-radius: 9px;
  }

  .card-image {
    border: 3px solid #222;
    /* border-bottom: 3px solid #222; */

    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    object-fit: contain;
    grid-area: image;
    padding: 5px;
  }

  .card-image img {
    width: 300px;
    height: 200px;
    border-radius: 9px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    /* object-fit: cover; */
  }

  .info-icon {
    /* border-right: 3px solid #222; */
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    grid-area: info-icon;
    color: white;
    background-color: #004e32;
    text-transform: uppercase;
    text-align: center;
    height: 40px;
    margin-bottom: 5px;
    margin-top: 5px;
    color: #c1e799;
  }

  .info {
    grid-area: info;
    padding-left: 10px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    /* border: 3px solid #000; */
    /* background: #706F6F;  */
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .stats-wrapper {
    grid-area: stat;

    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
    background-color: #222;
    border: 3px solid #222;
    border-radius: 9px;
    /* border-bottom-right-radius: 5px; */
  }

  .card-stat,
  .card-val {
    background-color: rgb(245, 245, 220);
    max-height: 55px;
    border-radius: 2px;
  }

  .card-stat img {
    max-height: 100%;
    width: auto;
  }

  .card-val {
    font-weight: 800;
    font-size: 1.3em;
  }

  .bottom-right {
    border-bottom-right-radius: 10px;
  }

  .bottom-left {
    border-bottom-left-radius: 10px;
  }
  .top-left {
    border-top-left-radius: 10px;
  }
  .top-right {
    border-top-right-radius: 10px;
  }

  .center-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-wrapper {
    margin: 10px;
  }
</style>
