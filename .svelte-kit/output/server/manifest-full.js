export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","4d.py","4d_hypercube.json","5D_hypercube.py","5d_hypercube.json","ao.svg","edit_rooms.py","favicon.png","rooms.json","rooms_old.json"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d418697f.js","app":"_app/immutable/entry/app.1816e85e.js","imports":["_app/immutable/entry/start.d418697f.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/singletons.6a95a251.js","_app/immutable/chunks/index.c88b4611.js","_app/immutable/entry/app.1816e85e.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/index.47c6d460.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/notes/visual-notes",
				pattern: /^\/notes\/visual-notes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
