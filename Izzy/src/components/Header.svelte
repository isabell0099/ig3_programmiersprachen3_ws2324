<script>
	  import SearchBar from './SearchBar.svelte';
	  export let onSearchInput = () => {};
</script>

<header>
	<div class="nav">
		<img class="imagelogo" src="/images/logo.png" alt="This is a logo" />

		<SearchBar on:input={onSearchInput} />

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
		
			<div class="dropdown" ><button class="buttonfilter" id="filterDropdown">Filter </button> 
				
		
			</div>
			<div class="buttonsearch">Quiz</div>
		</div>
	</div>
	<div class="navHandy">
		<img src="/images/burgermenu.png" alt="" />
	</div>

	
</header>

<style>
	header {
		width: 100%;
		height: 100px;
		flex-shrink: 0;
		background: #272727;
		display: flex;
		align-items: center;
	}

	.imagelogo {
		max-height: 60%;
		margin-left: 40px;
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
		color: lightgrey;
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

	.divBox2 {
		display: flex;
		justify-content: right;
		margin-right: 60px;
		width: 40%;
	}
	.buttonsearch {
		display: flex;
		width: 150px;
		height: 60px;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
		flex-shrink: 0;
		border-radius: 80px;
		background: lightgrey;;
		font-family: "Inter", sans-serif;
		cursor: pointer;
		color: black;
		margin-top: 10px;
	}

	.buttonfilter {
		display: flex;
		width: 150px;
		height: 60px;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
		flex-shrink: 0;
		border-radius: 80px;
		background: #393939;
		font-family: "Inter", sans-serif;
		cursor: pointer;
		color: darkgray;
		margin-top: 10px;
	}

	@media screen and (max-width: 1000px) {
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
