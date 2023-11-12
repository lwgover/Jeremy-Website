import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.5b5d5ba5.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/index.47c6d460.js","_app/immutable/chunks/index.c88b4611.js","_app/immutable/chunks/global.d1478579.js","_app/immutable/chunks/stores.6c16cf16.js","_app/immutable/chunks/singletons.dc993246.js"];
export const stylesheets = ["_app/immutable/assets/0.25a07a64.css"];
export const fonts = [];
