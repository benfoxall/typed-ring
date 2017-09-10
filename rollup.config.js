import buble from 'rollup-plugin-buble'

export default {
  input: 'main.js',
  output: {
    file: 'build/SRB.js',
    format: 'iife'
  },
  name: 'SRB',
  plugins: [
    buble()
  ]
}
