<script>
	import Seo from '$lib/Seo.svelte';
	import Header from '$lib/Sections/Header.svelte';
	import Footer from '$lib/Sections/Footer.svelte';
	import About from '../../../lib/Sections/About.svelte';
	import Contact from '$lib/Sections/Contact.svelte';
	import NotesSelect from '$lib/Sections/NotesSelect.svelte';
	import Graph from '$lib/Sections/Graph.svelte';
	import { graph_selected } from '../../../stores/global.js';
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
	let scroll = 0;
	/**
	 * @type {any}
	 */
	let root = 'https://www.lucasgover.com/Jeremy-Website/' // 'http://localhost:5173/'; //
	$: isMobile = pageWidth < 768;
	$: pageWidth = pageWidth;
	let selected_graph = 'rooms';
</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY={scroll} />
<Seo />
<main id="home">
	<p class="updated">Updated Nov. 5th, 2023 at 7PM</p>
	<h1 class="notes-title">What's going on at Alpha Omega?</h1>
	<p class="desc">
		These are my comprehensive notes, and graphs to help understand the upsetting, and disturbing
		world in the tunnels underneath the lab facility.
	</p>
	<ul class="graph-select">
		<li class="graph-select-button" on:click={() => (selected_graph = 'rooms')}>Rooms</li>
		<li class="graph-select-button" on:click={() => (selected_graph = '4d')}>4D Hypercube</li>
		<li class="graph-select-button" on:click={() => (selected_graph = '5d')}>5D Hypercube</li>
	</ul>
	<div class="graphs-container">
		<div class="graph-container">
			{#if selected_graph == 'rooms'}
				<Graph rendered_height={isMobile ? 1000 : 600} data_file={root + 'rooms.json'} />
			{:else if selected_graph == '4d'}
				<Graph rendered_height={isMobile ? 1000 : 600} data_file={root + '4d_hypercube.json'} />
			{:else}
				<Graph rendered_height={isMobile ? 1000 : 600} data_file={root + '5d_hypercube.json'} />
			{/if}
		</div>
        <div class='graph-how-to'>* This graph shows connections between rooms. To get information about a room, hover/click the node. You can also drag nodes to separate out the graph.</div>
		<div class="graph-info">
			<div class="graph-info-name">{$graph_selected ? $graph_selected['data']['name'] : ''}</div>
			<div class="graph-info-number">
				{$graph_selected ? $graph_selected['data']['room_number'] : ''}
			</div>
			<div class="graph-info-desc">{$graph_selected ? $graph_selected['data']['details'] : ''}</div>
		</div>
	</div>
	<!--
    <Projects projects={data.projects} />
    <Awards awards={data.awards} {isMobile} />
    <Blog posts={data.posts} {isMobile} /> 
	-->
</main>

<style>
    .graph-how-to {
        font-family: Arial, Helvetica, sans-serif;
		padding: 50px;
        width:1050px;
        max-width: 100vw;
        padding-top: 5px;
        margin:auto;
        font-weight: 10;
        color: #555;
    }
	.graph-info-name {
		font-family: Georgia, Times, 'Times New Roman', serif;
		font-weight: 600;
		font-size: 36px;
		text-align: center;
	}
	.graph-info-number {
		font-family: Times, 'Times New Roman', serif;
		font-weight: 400;
		font-size: 28px;
		font-style: oblique;
		text-align: center;
	}
	.graph-info-desc {
		font-family: 'Courier New', Courier, monospace;
		padding: 50px;
        width:50vw;
        margin:auto;
	}
	.graph-info {
		padding: 20px;
	}
	.graph-container {
		width: fit-content;
		background-color: white;
		height: fit-content;
		box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
		margin: auto;
	}
	.graphs-container {
		background-color: rgb(240, 240, 240);
		width: 100%;
		padding: 20px;
	}
	.desc {
		color: #555;
		text-align: center;
		width: 50vw;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.graph-select {
		width: fit-content;
		margin: auto;
		margin-top: 20px;
	}
	.graph-select-button {
		border: black solid 2px;
		border-bottom: black solid 4px;
		width: fit-content;
		display: inline-block;
		color: black;
		padding: 5px;
		border-radius: 10px;
		margin: 15px;
		margin-right: 5px;
		margin-left: 5px;
	}
	.graph-select-button:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
	.notes-title {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: black;
		font-weight: 600;
		font-size: 48px;
		text-align: center;
	}
	.updated {
		text-align: center;
		margin: 20px;
	}
	p {
		color: black;
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

	@media (max-width: 768px) {
		.desc {
			width: 80vw;
		}
		.graph-select-button {
			font-size: 18px;
		}
        .graph-info-desc {
            width:fit-content;
            padding-left: 20px;
            padding-right: 20px;
        }
	}
</style>
