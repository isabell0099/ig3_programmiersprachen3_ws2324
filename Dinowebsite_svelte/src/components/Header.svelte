<script></script>

<header>
	<div class="nav">
		<img class="imagelogo" src="/images/logo.png" alt="This is a logo" />

		<div class="divBox1">
			<input
				id="searchField"
				type="text"
				class="search-input"
				placeholder=" Search..."
			/>
			<!-- <div class="buttonsearch"> Search</div> -->
			<div class="menu-item" id="show-all">Sort</div>
			<!-- id nicht verändern -->
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
			<!-- <div class="buttonsocialmedia"> <img src="../images/icons/instagram.png" alt="instagram" height="32"></div>
                    <div class="buttonsocialmedia"> <img src="../images/icons/Vector.png" alt="facebook" height="32"></div> -->
			<div class="buttonsearch" id="show-footer">Contact Us</div>
			<div class="buttonsearch">Buy</div>
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
		background: lightgrey;
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
		width: 50%;
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
		background: #595959;
		font-family: "Inter", sans-serif;
		cursor: pointer;
		color: rgb(186, 185, 185);
		margin-top: 10px;
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
