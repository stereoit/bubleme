import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'src/app.js',
	dest: 'dist/bundle.js',
	plugins: [ buble(), uglify() ],
	format: 'iife'
};
