

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8bbf12e3.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/index.47c6d460.js","_app/immutable/chunks/stores.a23ae4df.js","_app/immutable/chunks/singletons.6a95a251.js","_app/immutable/chunks/index.c88b4611.js"];
export const stylesheets = [];
export const fonts = [];
