<script></script>

<footer class="footer">
  <ul class="Sitelinks">
    <li><h3>SITELINKS</h3></li>
    <li><h3>Kontakt</h3></li>
    <li><h3>Social Media</h3></li>
  </ul>

  <ul class="Qicklinks">
    <li><h3>QUICKLINKS</h3></li>
    <li><h3>Impressum</h3></li>
    <li><h3>Datenschutz</h3></li>
  </ul>

  <div class="contact-info">
    <div class="address">
      <img src="/images/icons/instagram.png" alt="instagram" height="32" />
      <p>
        Dinosaurier GmbH<br />Oberer Seesteig 7<br />89173 Lonsee
      </p>
    </div>

    <br />
    <div class="phone-fax">
      <img src="/images/icons/phone.png" alt="instagram" height="32" />
      <p>Tel. +49 7336 9603 70<br />Fax +49 7336 9603 75</p>
    </div>
  </div>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns:
      20% 30% 50%,
      minmax(5px, 1fr);
    height: 351px;
    background-color: #d9d9d9;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    box-sizing: border-box;
    grid-template-areas:
      ". . ."
      "sitelinks qicklinks kontakt"
      ". . .";
  }

  ul {
    list-style-type: none;
    font-family: "Inter", sans-serif;
  }

  .Sitelinks {
    grid-area: sitelinks;
    margin-left: 170px;
    min-width: 120px;
    max-width: 120px;
    margin-top: 30px;
  }

  .Qicklinks {
    grid-area: qicklinks;
    margin-top: 30px;
  }

  .contact-info {
    font-family: "Inter", sans-serif;
    grid-area: kontakt;
    font-size: large;
    margin-left: 120px;
    display: grid;
    grid-template-columns: auto auto; /* Zwei Spalten für Bild und Text */
  }

  .address,
  .phone-fax {
    display: flex;
    align-items: center; /* Zentriert die Elemente vertikal */
  }

  .contact-info img {
    margin: 35px;
  }

  @media screen and (max-width: 1300px) {
    .Sitelinks,
    .Qicklinks,
    .contact-info {
      margin-left: 20px; /* Entferne den linken Rand für bessere Anpassung */
    }
  }
</style>
