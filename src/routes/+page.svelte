<script>
	import Seo from '$lib/Seo.svelte';
	import Header from '$lib/Sections/Header.svelte';
	import Footer from '$lib/Sections/Footer.svelte';
	import About from '../lib/Sections/About.svelte';
	import Contact from '$lib/Sections/Contact.svelte';
	//import Blog from "$lib/Sections/Blog.svelte";
	//import Awards from "$lib/Sections/Awards.svelte";

	/**
	 * @type {number}
	 */
	let pageWidth;
	/**
	 * @type {number}
	 */
	let pageHeight;
	$: isMobile = pageWidth < 768;
	let scroll = 0;
	let parallax_rate = -1.001;
	/**
	 * @type {any}
	 */
	let currentStep;
</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY={scroll} />
<Seo />
<main id="home">
		<div class='header-blue-pink-gradient'><div class='spreadsheet-pattern'><div class='white-gradient'>
			<Header />
		</div></div></div>
		<Contact/>
		<About/>
		<Footer />
		<!--
    <Projects projects={data.projects} />
    <Awards awards={data.awards} {isMobile} />
    <Blog posts={data.posts} {isMobile} /> 
	-->
</main>

<style>
	.white-gradient {
		background: linear-gradient(
			to top right,
			rgb(255,255,255,0),
			rgba(255,255,255,1),
			rgba(255,255,255,0)
		);
	}
	.spreadsheet-pattern {
		background-image: url("/Users/lucasgover/Jeremy-Website/src/routes/spreadsheet.svg");
		height: fit-content;
	}
	.header-blue-pink-gradient {
		background: linear-gradient(
			to top right,
			rgb(249, 196, 255),
			rgba(0,0,0,0),
			rgb(173, 225, 253)
		);
		width:100%;
		height: fit-content;
		box-shadow: 0 0 20px 20px rgba(0,0,0,0.1);
	}
	main {
		display: grid;
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		justify-content: center;

		/* background-color: var(--primary-color); */
		z-index: 100; /* This is over the nav */
		position: relative;
	}

	/* On desktop, do the cool sticky footer that reveals on scroll */
	/* @media screen and (min-width: 768px) {
      main {
        position: relative;
      }
    } */
</style>
