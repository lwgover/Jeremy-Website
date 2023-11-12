<section class="contact">
	<div class="left">
		<div class="box">
			<div class="shadow">
				<div class="pfp-container">
					<img
						class="jeremy-pfp"
						src="https://www.bourkeaccounting.com/files/JEREMY-e1646928808914.jpg"
						style="max-width: 105%;"
						alt="jeremy picture"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="right">
		<div class="contact-info">
			<ul>
				<li class="info">123 Boring Street</li>
				<li class="info">Denver, CO 80202</li>
				<li class="info">Phone: (773) 123-4567</li>
				<li class="info">Email: jeremy@αΩ.com</li>
			</ul>
		</div>
	</div>
</section>

<style>
    .info {
        font-size: 3vw;
    }
    .right {
        float: right;
        display: inline;
    }
    .left {
        float: left;
        display: inline;
    }
	.contact-info {
		width: fit-content;
		display: inline-block;
        padding: 7.5vw;
        height: fit-content;
        border: #fff dashed 3px;
        border-radius: 20px;
	}
	.contact {
		width: 100%;
		background-color: #000;
		padding: 5vw;
		display: inline-block;
        box-shadow: 0 0 10px 10px rgba(0,0,0,0.2);
	}
	.pfp-container {
		width: 30vw;
		height: 30vw;
		border-radius: 15vw;
		overflow: hidden;
		background-size: 30vw;
		position: relative;
		transform-style: preserve-3d;
		z-index: 2;
		display: inline-block;
	}
	.shadow {
		padding: 1rem;
		position: relative;
		width: fit-content;
		display: inline-block;
	}
	/* pseudo-class for making gradient shadow. */

	.shadow::after {
		content: '';
		position: absolute;
		inset: 2vw;
		background: linear-gradient(to bottom right, rgb(239, 94, 255), rgb(106, 203, 255));
		filter: blur(2.5em);
		z-index: 1;
		border-radius: 15vw;
		display: inline-block;
	}
@media (max-width: 576px) {
	.pfp-container {
		width: 25vw;
		height: 25vw;
	}
}	

</style>
