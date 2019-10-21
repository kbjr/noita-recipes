
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: './docs/app.js',
  output: {
  	format: 'iife',
  	file: './docs/bundle.js'
  },
  plugins: [
    typescript(),
	nodeResolve({
		// use "jsnext:main" if possible
		// see https://github.com/rollup/rollup/wiki/jsnext:main
		jsnext: true
	})
  ]
}
