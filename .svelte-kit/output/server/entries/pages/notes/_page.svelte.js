import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Seo } from "../../../chunks/Contact.svelte_svelte_type_style_lang.js";
import "../../../chunks/global.js";
/* empty css                                                         */const css$1 = {
  code: ".item-title.svelte-gcq1xf{color:black;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;text-align:center;font-weight:600;padding-top:2vw;font-size:4vw;letter-spacing:2vh}@keyframes svelte-gcq1xf-grow-out{from{transform:scale(1.1) rotate(-5deg)}to{transform:scale(1.0) rotate(0deg);;}}@keyframes svelte-gcq1xf-grow{from{transform:scale(1) rotate(0deg);;}to{transform:scale(1.1) rotate(-5deg);;}}.item-box.svelte-gcq1xf:hover{animation:svelte-gcq1xf-grow 0.4s;transform:scale(1.1) rotate(-5deg);;}.item-container.svelte-gcq1xf{width:fit-content;margin:auto;padding:5vh}.item-box.svelte-gcq1xf{width:30vw;height:30vw;background-color:white;display:inline-block;margin-left:8vw;margin-right:8vw;animation:svelte-gcq1xf-grow-out 0.4s;border:black solid 5px;border-radius:25px;box-shadow:0 0 20px 10px rgba(0,0,0,0.2);overflow:hidden}.jeremy-notes-title.svelte-gcq1xf{color:black;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;text-align:center;font-weight:800;padding:5vh;font-size:8vw;letter-spacing:2vh}.notes-select.svelte-gcq1xf{height:100vh;background-color:transparent}.jeremy-notes-title.svelte-gcq1xf{transition:all 0.2s ease-in-out}.jeremy-notes-title.svelte-gcq1xf:hover{transform:rotateY(-180deg);transform:translateY(-20px) scale(1.1) rotateY(-180deg)}@media(max-width: 768px){.item-box.svelte-gcq1xf{width:80vw;height:80vw;margin:auto}.jeremy-notes-title.svelte-gcq1xf{font-size:10vw;letter-spacing:2vh}.item-title.svelte-gcq1xf{padding-top:4vw;font-size:12vw;letter-spacing:1vh}}",
  map: null
};
const NotesSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="notes-select svelte-gcq1xf" data-svelte-h="svelte-1b9i22w"><h1 class="jeremy-notes-title svelte-gcq1xf">Jeremy&#39;s notes</h1> <div class="item-container svelte-gcq1xf"><a href="./notes/visual-notes"><div class="item-box svelte-gcq1xf"><div class="item-title svelte-gcq1xf">Graphs</div></div></a> </div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.spreadsheet-pattern.svelte-1xxuq07{background-image:url("/Users/lucasgover/Jeremy-Website/src/routes/spreadsheet.svg");height:fit-content}.white-gradient.svelte-1xxuq07{background:linear-gradient(\n			to right,\n			rgb(255,255,255,0),\n			rgba(255,255,255,0)\n		)}.header-blue-pink-gradient.svelte-1xxuq07{background:linear-gradient(\n			to top right,\n			rgb(249, 196, 255),\n			rgb(173, 225, 253)\n		);width:100%;height:fit-content;box-shadow:0 0 20px 20px rgba(0,0,0,0.1)}main.svelte-1xxuq07{display:grid;width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;z-index:100;position:relative}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` ${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})} <main id="home" class="svelte-1xxuq07"><div class="header-blue-pink-gradient svelte-1xxuq07"><div class="spreadsheet-pattern svelte-1xxuq07"><div class="white-gradient svelte-1xxuq07">${validate_component(NotesSelect, "NotesSelect").$$render($$result, {}, {}, {})}</div></div></div>  </main>`;
});
export {
  Page as default
};
