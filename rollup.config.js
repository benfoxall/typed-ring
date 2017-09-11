import buble from 'rollup-plugin-buble'

export default {
  input: 'main.js',
  output: {
    file: 'build/TypedRing.js',
    format: 'umd'
  },
  name: 'TypedRing',
  plugins: [
    buble()
  ]
}
