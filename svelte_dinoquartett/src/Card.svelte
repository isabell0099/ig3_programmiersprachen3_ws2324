<script> 

export let dino; 
const imagePath= `dinobilder/${dino.name}.jpg`.toLocaleLowerCase();
</script>


        
<div class="card-wrapper">
    <div class="card-content">
        <div class="card-number center-content">
            {dino.group_letter}{dino.card_number}
        </div>
        <div class="card-title">
            <h3>{dino.name}</h3>
            <h5>{dino.group}</h5>
        </div>
        <div class="card-image center-content">
            <img src="{imagePath}" alt="This is not a {dino.name}" />
        </div>
        <div class="info-icon center-content">Info</div>
        <div class="info">
            Der Parasaurolophus ist viel cooler als ein Velociraptor
            (Dilophosaurier stinken).
        </div>
        <div class="stats-wrapper">
            <div class="card-stat center-content">
                <img src="../icons/height.png" alt="height" />
            </div>
            <div class="card-val center-content">{dino.height}</div>
            <div class="card-stat center-content">
                <img src="../icons/weight.png" alt="weight" />
            </div>
            <div class="card-val center-content">{dino.weight}</div>
            <div class="card-stat center-content">
                <img
                    src="../icons/extinction.png"
                    alt="years since extinction"
                />
            </div>
            <div class="card-val center-content">{dino.years}</div>
            <div class="card-stat center-content">
                <img src="../icons/iq.png" alt="eq times 100" />
            </div>
            <div class="card-val center-content">{dino.encephalization * 100}</div>
            <div class="card-stat center-content bottom-left">
                <img src="../icons/speed.png" alt="max speed" />
            </div>
            <div class="card-val center-content">{dino.speed}</div>
            <div class="card-stat center-content">
                <img src="../icons/teeth.png" alt="no. of teeth" />
            </div>
            <div class="card-val center-content bottom-right">{dino.number_teeth}</div>
        </div>
    </div>
</div>

<style>
    .card-wrapper {
        font-family: "Sofia Sans Extra Condensed", sans-serif;
        border-radius: 18px;
        padding: 10px;
        height: 400px;
        width: 285px;
        background-color: rgb(245, 245, 235);
        margin: auto;
    }

    .card-content {
        display: grid;
        height: 380px;
        width: 265px;
        border: 3px solid #222;
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
        background-color: rgba(0, 128, 64, 0.3);
        border-top-left-radius: 9px;
        font-size: 2rem;
        font-weight: 800;
        border-right: 3px solid #222;
    }

    .card-title {
        grid-area: title;
        text-transform: uppercase;
        font-weight: 800;
        padding-left: 5px;
    }

    .card-image {
        border-top: 3px solid #222;
        border-bottom: 3px solid #222;
        grid-area: image;
        padding: 3px;
    }

    .card-image img {
        max-width: 100%;
        border-radius: 5px;
    }

    .info-icon {
        border-right: 3px solid #222;
        grid-area: info-icon;
        color: white;
        background-color: #004e32;
        text-transform: uppercase;
        text-align: center;
    }

    .info {
        grid-area: info;
        padding-left: 5px;
    }

    .stats-wrapper {
        grid-area: stat;
        max-height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 3px;
        background-color: #222;
        border-top: 3px solid #222;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .card-stat,
    .card-val {
        background-color: rgb(245, 245, 220);
        max-height: 35px;
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

    .center-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>