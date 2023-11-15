

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.046ba19f.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/index.47c6d460.js","_app/immutable/chunks/stores.e07be38b.js","_app/immutable/chunks/singletons.d80dcf27.js","_app/immutable/chunks/index.c88b4611.js"];
export const stylesheets = [];
export const fonts = [];
