import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { S as Seo } from "../../../../chunks/Contact.svelte_svelte_type_style_lang.js";
import { g as graph_selected } from "../../../../chunks/global.js";
/* empty css                                                            */import "d3";
const Graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_graph_selected;
  $$unsubscribe_graph_selected = subscribe(graph_selected, (value) => value);
  let { data_file = "https://vega.github.io/vega-datasets/data/miserables.json" } = $$props;
  let { rendered_width = 1e3 } = $$props;
  let { rendered_height = 600 } = $$props;
  let element;
  if ($$props.data_file === void 0 && $$bindings.data_file && data_file !== void 0)
    $$bindings.data_file(data_file);
  if ($$props.rendered_width === void 0 && $$bindings.rendered_width && rendered_width !== void 0)
    $$bindings.rendered_width(rendered_width);
  if ($$props.rendered_height === void 0 && $$bindings.rendered_height && rendered_height !== void 0)
    $$bindings.rendered_height(rendered_height);
  $$unsubscribe_graph_selected();
  return `<div${add_attribute("this", element, 0)}></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".graph-info-name.svelte-1ozfeff{font-family:Georgia, Times, 'Times New Roman', serif;font-weight:600;font-size:36px;text-align:center}.graph-info-number.svelte-1ozfeff{font-family:Times, 'Times New Roman', serif;font-weight:400;font-size:28px;font-style:oblique;text-align:center}.graph-info-desc.svelte-1ozfeff{font-family:'Courier New', Courier, monospace;padding:50px;width:50vw;margin:auto}.graph-info.svelte-1ozfeff{padding:20px}.graph-container.svelte-1ozfeff{width:fit-content;background-color:white;height:fit-content;box-shadow:0 0 3px 3px rgba(0, 0, 0, 0.1);margin:auto}.graphs-container.svelte-1ozfeff{background-color:rgb(240, 240, 240);width:100%;padding:20px}.desc.svelte-1ozfeff{color:#555;text-align:center;width:50vw;margin:auto;margin-top:20px;margin-bottom:20px}.graph-select.svelte-1ozfeff{width:fit-content;margin:auto;margin-top:20px}.graph-select-button.svelte-1ozfeff{border:black solid 2px;border-bottom:black solid 4px;width:fit-content;display:inline-block;color:black;padding:5px;border-radius:10px;margin:15px;margin-right:5px;margin-left:5px}.graph-select-button.svelte-1ozfeff:hover{background-color:black;color:white;cursor:pointer}.notes-title.svelte-1ozfeff{font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;color:black;font-weight:600;font-size:48px;text-align:center}.updated.svelte-1ozfeff{text-align:center;margin:20px}p.svelte-1ozfeff{color:black}main.svelte-1ozfeff{display:grid;width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;z-index:100;position:relative}@media(max-width: 768px){.desc.svelte-1ozfeff{width:80vw}.graph-select-button.svelte-1ozfeff{font-size:18px}.graph-info-desc.svelte-1ozfeff{width:fit-content;padding-left:20px;padding-right:20px}}",
  map: null
};
let root = "https://www.lucasgover.com/Jeremy-Website/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let $graph_selected, $$unsubscribe_graph_selected;
  $$unsubscribe_graph_selected = subscribe(graph_selected, (value) => $graph_selected = value);
  let pageWidth;
  $$result.css.add(css);
  pageWidth = pageWidth;
  isMobile = pageWidth < 768;
  $$unsubscribe_graph_selected();
  return ` ${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})} <main id="home" class="svelte-1ozfeff"><p class="updated svelte-1ozfeff" data-svelte-h="svelte-1sc87gf">Updated Nov. 5th, 2023 at 7PM</p> <h1 class="notes-title svelte-1ozfeff" data-svelte-h="svelte-bq5cq3">What&#39;s going on at Alpha Omega?</h1> <p class="desc svelte-1ozfeff" data-svelte-h="svelte-1qxuhad">These are my comprehensive notes, and graphs to help understand the upsetting, and disturbing
		world in the tunnels underneath the lab facility.</p> <ul class="graph-select svelte-1ozfeff"><li class="graph-select-button svelte-1ozfeff" data-svelte-h="svelte-anxycn">Rooms</li> <li class="graph-select-button svelte-1ozfeff" data-svelte-h="svelte-16mwkrc">4D Hypercube</li> <li class="graph-select-button svelte-1ozfeff" data-svelte-h="svelte-1wzvzko">5D Hypercube</li></ul> <div class="graphs-container svelte-1ozfeff"><div class="graph-container svelte-1ozfeff">${`${validate_component(Graph, "Graph").$$render(
    $$result,
    {
      rendered_height: isMobile ? 1e3 : 600,
      data_file: root + "rooms.json"
    },
    {},
    {}
  )}`}</div> <div class="graph-info column svelte-1ozfeff"><div class="graph-info-name svelte-1ozfeff">${escape($graph_selected ? $graph_selected["data"]["name"] : "")}</div> <div class="graph-info-number svelte-1ozfeff">${escape($graph_selected ? $graph_selected["data"]["room_number"] : "")}</div> <div class="graph-info-desc svelte-1ozfeff">${escape($graph_selected ? $graph_selected["data"]["details"] : "")}</div></div></div>  </main>`;
});
export {
  Page as default
};
