import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import nodeResolve	from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';


export default {
	entry: 'src/app.js',
	dest: 'dist/bundle.js',
	plugins: [
		replace({'process.env.NODE_ENV':'"production"'}),
		buble(), uglify(), filesize(), commonjs(),
		nodeResolve( { jsnext: true, main: true} )
	 ],
	format: 'iife'
};
