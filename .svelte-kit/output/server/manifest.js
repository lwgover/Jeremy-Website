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
		client: {"start":"_app/immutable/entry/start.8865d942.js","app":"_app/immutable/entry/app.24ac7c0d.js","imports":["_app/immutable/entry/start.8865d942.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/singletons.dc993246.js","_app/immutable/chunks/index.c88b4611.js","_app/immutable/entry/app.24ac7c0d.js","_app/immutable/chunks/scheduler.1f863384.js","_app/immutable/chunks/index.47c6d460.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
