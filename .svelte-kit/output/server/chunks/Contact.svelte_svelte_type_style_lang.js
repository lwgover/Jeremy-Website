import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
import { r as readable } from "./index.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Jeremy" } = $$props;
  let { description = "Jeremy from Accounting" } = $$props;
  let { keywords = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  return `${$$result.head += `<!-- HEAD_svelte-36bwad_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="title" property="og:title"${add_attribute("content", title, 0)}><meta name="description" property="og:description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><meta name="topic"${add_attribute("content", keywords, 0)}><meta name="language" content="EN"><meta name="robots" content="index, follow"><meta name="abstract"${add_attribute("content", description, 0)}><meta name="summary"${add_attribute("content", description, 0)}><meta name="author" content="Lucas Gover"><meta name="url" content="http://www.lucasgover.com"><!-- HEAD_svelte-36bwad_END -->`, ""}`;
});
const getInitialMotionPreference = () => {
  return false;
};
const prefersReducedMotion = readable(getInitialMotionPreference());
gsap.registerPlugin(ScrollTrigger);
const Header_svelte_svelte_type_style_lang = "";
const Footer_svelte_svelte_type_style_lang = "";
const About_svelte_svelte_type_style_lang = "";
const Contact_svelte_svelte_type_style_lang = "";
export {
  Seo as S,
  prefersReducedMotion as p
};
