<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import * as d3 from 'd3';
	export let data_file = 'https://vega.github.io/vega-datasets/data/miserables.json';
	import { graph_selected } from '../../stores/global.js';
	let width = 400;
	export let rendered_width = 1000;
	export let rendered_height = 600;
	// @ts-ignore
	let element;

	onMount(async function () {
		let data = await d3.json(data_file);
		console.log(data);
		data['edges'] = data['edges'].filter(
			(d) =>
				data['nodes'][d['source']]['name'].length > 0 ||
				data['nodes'][d['target']]['name'].length > 0
		);

		let chart = ForceGraph(data, {
			nodeId: (d) => d.index,
			// @ts-ignore
			nodeGroup: (d) => d.group,
			// @ts-ignore
			nodeTitle: (d) => `${d.name}\n${d.group}`,
			// @ts-ignore
			edgestrokeWidth: (l) => Math.sqrt(l.value),
			width,
			height: 400
		});

		// @ts-ignore
		d3.select(element).append(() => chart);
		// Or alternatively, via the native DOM API:
		// element.appendChild(chart)
	});

	// Copyright 2021 Observable, Inc.
	// Released under the ISC license.
	// https://observablehq.com/@d3/force-directed-graph
	function ForceGraph(
		{
			// @ts-ignore
			nodes, // an iterable of node objects (typically [{id}, …])
			// @ts-ignore
			edges // an iterable of link objects (typically [{source, target}, …])
		},
		{
			// @ts-ignore
			nodeId = (d) => d.id, // given d in nodes, returns a unique identifier (string)
			// @ts-ignore
			nodeGroup, // given d in nodes, returns an (ordinal) value for color
			// @ts-ignore
			nodeGroups, // an array of ordinal values representing the node groups
			// @ts-ignore
			nodeTitle, // given d in nodes, a title string
			nodeFill = 'currentColor', // node stroke fill (if not using a group color encoding)
			nodeStroke = '#fff', // node stroke color
			nodeStrokeWidth = 0, // node stroke width, in pixels
			nodeStrokeOpacity = 1, // node stroke opacity
			nodeRadius = 5, // node radius, in pixels
			// @ts-ignore
			nodeStrength,
			// @ts-ignore
			edgesource = ({ source }) => source, // given d in edges, returns a node identifier string
			// @ts-ignore
			linkTarget = ({ target }) => target, // given d in edges, returns a node identifier string
			edgestroke = '#999', // link stroke color
			edgestrokeOpacity = 0.6, // link stroke opacity
			edgestrokeWidth = 1.5, // given d in edges, returns a stroke width in pixels
			edgestrokeLinecap = 'round', // link stroke linecap
			// @ts-ignore
			edgestrength,
			colors = d3.schemeTableau10, // an array of color strings, for the node groups
			width = 400, // outer width, in pixels
			height = 400, // outer height, in pixels
			// @ts-ignore
			invalidation // when this promise resolves, stop the simulation
		} = {}
	) {
		// Compute values.
		const N = d3.map(nodes, nodeId).map(intern);
		const LS = d3.map(edges, edgesource).map(intern);
		const LT = d3.map(edges, linkTarget).map(intern);
		// @ts-ignore
		if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
		const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
		const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
		const W = typeof edgestrokeWidth !== 'function' ? null : d3.map(edges, edgestrokeWidth);
		const L = typeof edgestroke !== 'function' ? null : d3.map(edges, edgestroke);

		// Replace the input nodes and edges with mutable objects for the simulation.
		// @ts-ignore
		nodes = d3.map(nodes, (a, i) => ({ id: N[i], data: a }));
		// @ts-ignore
		edges = d3.map(edges, (_, i) => ({ source: LS[i], target: LT[i] }));

		// Compute default domains.
		if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

		// Construct the scales.
		const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

		// Construct the forces.
		const forceNode = d3.forceManyBody();
		// @ts-ignore
		const forceLink = d3.forceLink(edges).id(({ index: i }) => N[i]);
		if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
		if (edgestrength !== undefined) forceLink.strength(edgestrength);

		const simulation = d3
			.forceSimulation(nodes)
			.force('link', forceLink)
			.force('charge', forceNode)
			.force('center', d3.forceCenter())
			.on('tick', ticked);

		const svg = d3
			.create('svg')
			.attr('width', rendered_width)
			.attr('height', rendered_height)
			.attr('viewBox', [-width / 2, -height / 2, width, height])
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic; ');

		const link = svg
			.append('g')
			.attr('stroke', typeof edgestroke !== 'function' ? edgestroke : null)
			.attr('stroke-opacity', edgestrokeOpacity)
			.attr('stroke-width', typeof edgestrokeWidth !== 'function' ? edgestrokeWidth : null)
			.attr('stroke-linecap', edgestrokeLinecap)
			.selectAll('line')
			.data(edges)
			.join('line')
			.attr('visibility', (d) => (d['source']['data']['name'].length > 0 ? 'visible' : 'hidden'));

		const node = svg
			.append('g')
			.attr('fill', nodeFill)
			.attr('stroke', nodeStroke)
			.attr('stroke-opacity', nodeStrokeOpacity)
			.attr('stroke-width', nodeStrokeWidth)
			.selectAll('g')
			.data(nodes)
			.join('g')
			.attr('visibility', (d) => (d['data']['name'].length > 0 ? 'visible' : 'hidden'))
			.call(drag(simulation))
			.on('mouseover', handleMouseOver);
		// Append circles to the 'node' group
		const circles = node.append('circle').attr('r', nodeRadius);

		// Append text labels underneath each node
		const labels = node
			.append('text')
			.attr('fill', '#333')
			.text((d) => d['data']['room_number'])
			.attr('text-anchor', 'middle')
			.attr('font-size', '8px')
            .attr('font-family','Arial, sans-serif');

		// .append('text')
		// .text((d) => d['data']['number'])
		// .attr('dy', nodeRadius + 5) // Adjust the vertical position of the text label
		// .attr('text-anchor', 'middle')
		// .attr('fill', 'black') // Set the text color to black
		// .attr('visibility', 'visible'); // Ensure text visibility; // Center the text horizontally

		function handleMouseOver(event, d) {
			console.log(d);
			$graph_selected = d;
		}

		// @ts-ignore
		if (W) link.attr('stroke-width', ({ index: i }) => W[i]);
		// @ts-ignore
		if (L) link.attr('stroke', ({ index: i }) => L[i]);
		// @ts-ignore
		if (G) node.attr('fill', ({ index: i }) => color(G[i]));
		// @ts-ignore
		if (T) node.append('title').text(({ index: i }) => T[i]);
		if (invalidation != null) invalidation.then(() => simulation.stop());

		// @ts-ignore
		function intern(value) {
			return value !== null && typeof value === 'object' ? value.valueOf() : value;
		}

		function ticked() {
			link
				// @ts-ignore
				.attr('x1', (d) => d.source.x)
				// @ts-ignore
				.attr('y1', (d) => d.source.y)
				// @ts-ignore
				.attr('x2', (d) => d.target.x)
				// @ts-ignore
				.attr('y2', (d) => d.target.y);

			circles
				// @ts-ignore
				.attr('cx', (d) => d.x)
				// @ts-ignore
				.attr('cy', (d) => d.y);

			labels
				// @ts-ignore
				.attr('x', (d) => d.x)
				// @ts-ignore
				.attr('y', (d) => d.y + 12);
		}

		// @ts-ignore
		function drag(simulation) {
			// @ts-ignore
			function dragstarted(event) {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				event.subject.fx = event.subject.x;
				event.subject.fy = event.subject.y;
			}

			// @ts-ignore
			function dragged(event) {
				event.subject.fx = event.x;
				event.subject.fy = event.y;
			}

			// @ts-ignore
			function dragended(event) {
				if (!event.active) simulation.alphaTarget(0);
				event.subject.fx = null;
				event.subject.fy = null;
			}

			return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
		}

		return Object.assign(svg.node(), { scales: { color } });
	}
</script>

<div bind:this={element} />

<style>
</style>
