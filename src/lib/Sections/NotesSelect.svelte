<section class="notes-select">
	<h1 class="jeremy-notes-title">Jeremy's notes</h1>
	<div class="item-container">
		<a href="./notes/visual-notes">
			<div class="item-box">
                <div class='item-title'>Graphs</div>
            </div>
		</a>
		<!--<a href="./notes/text-notes"><div class="item-box" /></a>-->
	</div>
</section>

<style>
    .item-title {
        color: black;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		text-align: center;
		font-weight: 600;
        padding-top: 2vw;
		font-size: 4vw;
		letter-spacing: 2vh;
    }
    @keyframes grow-out {
		from {
			transform: scale(1.1) rotate(-5deg);
		}

		to {
			transform: scale(1.0) rotate(0deg);;
		}
	}
	@keyframes grow {
		from {
			transform: scale(1) rotate(0deg);;
		}

		to {
			transform: scale(1.1) rotate(-5deg);;
		}
	}
	.item-box:hover {
        animation: grow 0.4s;
        transform: scale(1.1) rotate(-5deg);;
	}
	.item-container {
		width: fit-content;
		margin: auto;
        padding:5vh;
	}
	.item-box {
		width: 30vw;
		height: 30vw;
		background-color: white;
		display: inline-block;
		margin-left: 8vw;
        margin-right: 8vw;
        animation: grow-out 0.4s;
        border: black solid 5px;
        border-radius: 25px;
        box-shadow: 0 0 20px 10px rgba(0,0,0,0.2);
        overflow:hidden;
	}
	.jeremy-notes-title {
		color: black;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		text-align: center;
		font-weight: 800;
		padding: 5vh;
		font-size: 8vw;
		letter-spacing: 2vh;
	}
	.notes-select {
		height: 100vh;
		background-color: transparent;
	}
	.jeremy-notes-title {
		transition: all 0.2s ease-in-out;
	}

	.jeremy-notes-title:hover {
		transform: rotateY(-180deg); /* Rotate the title */
		transform: translateY(-20px) scale(1.1) rotateY(-180deg); /* Rotate the title */
	}
	@media (max-width: 768px) {
	.item-box {
		width: 80vw;
		height: 80vw;
		margin: auto;
	}
	.jeremy-notes-title {
		font-size: 10vw;
		letter-spacing: 2vh;
	}
	.item-title {
		padding-top: 4vw;
		font-size: 12vw;
		letter-spacing: 1vh;
	}
}	
</style>
