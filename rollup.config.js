import buble from 'rollup-plugin-buble'

export default {
  input: 'main.js',
  output: {
    file: 'build/RingBuffer.js',
    format: 'umd'
  },
  name: 'RingBuffer',
  plugins: [
    buble()
  ]
}
