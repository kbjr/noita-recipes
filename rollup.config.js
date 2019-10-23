
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';

export default {
  input: './docs/app.js',
  output: {
  	format: 'iife',
  	file: './docs/bundle.js',
    globals: {
      'eventemitter3': 'EventEmitter3'
    }
  },
  external: [ 'eventemitter3' ],
  plugins: [
    json(),
    typescript()
  ]
}
