<script>
  import "material-icons/iconfont/material-icons.css";
  export let value;
  let filter = "All";

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  export let handleGroupFilter;
</script>

<header>
  <div class="nav">
    <img class="imagelogo" src="/images/logo.png" alt="This is a logo" />

    <div class="searchingDiv">
      <input
        id="searchField"
        class="search-input"
        name="search"
        bind:value
        on:input
        placeholder="Suche nach Dinosaurier..."
      />
    </div>

    <div class="dropdown" on:click={toggleDropdown}>
      <button class="buttonsearch">
        <span class="material-icons" style="color:darkgrey;"> filter_alt </span>
      </button>
      {#if isDropdownOpen}
        <div id="myDropdown" class="dropdown-content">
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Large Sauropods")}
          >
            Large Sauropods
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Big Predatory Theropods")}
          >
            Big Predatory Theropods
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Flyers")}
          >
            Flyers
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Hadrosaurs")}
          >
            Hardosaurs
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Swimmers")}
          >
            Swimmers
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Armored Dinosaurs")}
          >
            Armored Dinsosaurs
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Small Theropods")}
          >
            Small Theropods
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("Ceratopsians and co.")}
          >
            Ceratopsians
          </div>
          <div
            style="text-decoration: none;"
            on:click={() => handleGroupFilter("")}
          >
            All
          </div>
        </div>
      {/if}
    </div>

    <div class="buttonsDiv">
      <a
        class="buttonsocialmedia"
        href="https://www.facebook.com"
        target="_blank"
        style="text-decoration:none;"
      >
        <span class="material-icons" style="color:darkgrey;">facebook</span>
      </a>
      <a
        class="buttonsocialmedia"
        href="https://www.instagram.com"
        target="_blank"
        style="text-decoration:none;"
      >
        <span class="instagram-icon"></span>
      </a>

      <a
        class="buttonsearch"
        href="#/quiz"
        style="text-decoration: none; background:lightgrey;"
      >
        Quiz
      </a>
    </div>
  </div>
  <div class="navHandy">
    <img src="/images/burgermenu.png" alt="" />
  </div>
</header>

<!-- <div class="dropdown">
				<div class="buttonsearch" id="show-footer">Filter</div>
				<div id="myDropdown" class="dropdown-content">
					<a href="#">Large Sauropods</a>
					<a href="#">Big Predatory Theropods</a>
					<a href="#">Flyers</a>
					<a href="#">Hardosaurs</a>
					<a href="#">Swimmers</a>
					<a href="#">Armored Dinsosaurs</a>
					<a href="#">Small Theropods</a>
					<a href="#">Ceratopsians and co.</a>
				  </div>
			</div> -->
<style>
  header {
    width: 100%;
    height: 100px;
    flex-shrink: 0;
    background: #272727;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-input {
    width: 350px;
    max-width: 55%;
    height: 60px;
    flex-shrink: 0;
    border-radius: 80px;
    background: #393939;
    color: lightgrey;
    padding: 8px;
    border: none;
    /* margin-right: 10px; Platz zwischen dem Suchfeld und den Buttons */
    font-size: 18px;
    font-family: "Inter", sans-serif;
    margin-top: 10px;
    margin-left: 10px;
  }

  .imagelogo {
    max-height: 60%;
    max-width: 40%;
    margin-left: 60px;
    margin-right: 10px;
    margin-top: 10px;
  }

  .buttonsocialmedia {
    display: flex;
    width: 110px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    flex-shrink: 0;
    border-radius: 80px;
    background: #393939;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    padding: 8px;
    margin-top: 10px;
  }

  .instagram-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("images/icons/icons8-instagram-48.png");
    background-size: contain;
  }

  .nav {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
  .navHandy {
    display: none;
  }

  .searchingDiv {
    display: flex;
    width: 45%;
  }
  .buttonsDiv {
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
  }
  .buttonsearch {
    display: flex;
    width: 150px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    flex-shrink: 0;
    border-radius: 80px;
    background: #393939;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    color: #393939;
    margin-top: 10px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 15px;
    font-family: "Inter";
    font-size: 16px;
    margin-left: 15px;
    width: 200px;
    opacity: 90%;
  }

  .dropdown-content div {
    color: rgb(109, 107, 107);
    padding: 12px 16px;
    display: block;
  }

  .dropdown-content div:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media screen and (max-width: 1300px) {
    .nav {
      display: none;
    }
    .navHandy {
      display: flex;
      justify-content: space-between;
      width: 35px;
      height: 35px;
      margin-left: 15px; /* Fügen Sie nach Bedarf zusätzlichen Platz oder Styling hinzu */
    }
  }
</style>
