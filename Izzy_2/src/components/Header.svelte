<script>
	import 'material-icons/iconfont/material-icons.css';
	export let value;
	let filter = "All"

	let isDropdownOpen = false;

function toggleDropdown() {
  isDropdownOpen = !isDropdownOpen;
}
    export let handleGroupFilter;
</script>

<header>


	<div class="nav">
		<img class="imagelogo" src="/images/logo.png" alt="This is a logo" />

		<div class="divBox1">
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
			<button class="buttonsearch" >
				<span class="material-icons">
					filter_alt
				</span>
		</button>
			{#if isDropdownOpen}
			  <div id="myDropdown" class="dropdown-content">
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Large Sauropods')} >Large Sauropods</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Big Predatory Theropods')}>Big Predatory Theropods</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Flyers')}>Flyers</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Hadrosaurs')}>Hardosaurs</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Swimmers')}>Swimmers</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Armored Dinosaurs')}>Armored Dinsosaurs</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Small Theropods')}>Small Theropods</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('Ceratopsians and co.')}>Ceratopsians</div>
				<div style="text-decoration: none;" on:click={() => handleGroupFilter('')}>All</div>
		</div>
			{/if}
		  </div>

		<div class="divBox2">
			<a
				href="https://www.instagram.com"
				target="_blank"
				class="buttonsocialmedia"
			>
				<img
					src="../images/icons/instagram.png"
					alt="instagram"
					height="32"
				/></a
			>
			<a
				href="https://www.facebook.com"
				target="_blank"
				class="buttonsocialmedia"
			>
				<img
					src="../images/icons/Vector.png"
					alt="facebook"
					height="32"
				/></a
			>

					

			<a class="buttonsearch" href="#/quiz" style="text-decoration: none;"> Quiz </a>
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
	}

	.search-input {
		width: 60%;
		max-width: 50%;
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
		margin-left: 15px;
		flex-shrink: 0;
		border-radius: 80px;
		background: #393939;
		font-family: "Inter", sans-serif;
		cursor: pointer;
		padding: 8px;
		margin-top: 10px;
	}
	.nav {
		display: flex;
		justify-content: space-between;

		width: 100%;
	}
	.navHandy {
		display: none;
	}

	.divBox1 {
		display: flex;
		width: 45%;
	}
	.divBox2 {
		display: flex;
		justify-content: right;
		margin-right: 30px;
		width: 40%;
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
		background: lightgray;
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
