

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/notes/visual-notes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.dca8d519.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/index.47c6d460.js","_app/immutable/chunks/Contact.svelte_svelte_type_style_lang.085ec307.js","_app/immutable/chunks/index.c88b4611.js","_app/immutable/chunks/global.d1478579.js"];
export const stylesheets = ["_app/immutable/assets/4.322d36bd.css","_app/immutable/assets/NotesSelect.33271d33.css","_app/immutable/assets/Contact.0c295024.css"];
export const fonts = [];
