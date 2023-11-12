import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "lodash.debounce";
import { w as windowHeight, a as windowWidth } from "../../chunks/global.js";
import { p as page } from "../../chunks/stores.js";
const defaultValue = "dark";
const initialValue = defaultValue;
const theme = writable(initialValue);
theme.subscribe((value) => {
});
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_windowHeight;
  let $$unsubscribe_windowWidth;
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value) => value);
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  let { debounceDur = 300 } = $$props;
  if ($$props.debounceDur === void 0 && $$bindings.debounceDur && debounceDur !== void 0)
    $$bindings.debounceDur(debounceDur);
  $$unsubscribe_windowHeight();
  $$unsubscribe_windowWidth();
  return ``;
});
const immutable = "";
const code = "";
const project = "";
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  async function scrollTop() {
  }
  $page.url.pathname;
  {
    scrollTop();
  }
  $$unsubscribe_page();
  return `${validate_component(Window, "Window").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
