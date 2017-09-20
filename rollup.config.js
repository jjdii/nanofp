import babel from 'rollup-plugin-babel'
// import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import replace from 'rollup-plugin-replace'

export default {
  input: 'index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  output: [
    { file: 'dist/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/bundle.umd.js', format: 'umd' },
    { file: 'dist/bundle.es.js', format: 'es' }
  ]
}