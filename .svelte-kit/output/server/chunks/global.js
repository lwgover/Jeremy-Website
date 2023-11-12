import { r as readable, w as writable } from "./index.js";
readable(900);
const windowWidth = writable(0);
const windowHeight = writable(0);
const graph_selected = writable(null);
export {
  windowWidth as a,
  graph_selected as g,
  windowHeight as w
};
