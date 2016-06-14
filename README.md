# bubleme
Simple template to put together rollup.js + bublee + reactjs

It was necessary to add

`rollup-plugin-node-resolve` - for node modules resolution
`rollup-plugin-commonjs` - to convert CommonJS modules to ES6 (React)
`rollup-plugin-replace` - to avoid issue when `process` not found due to way generates code based on ENV
