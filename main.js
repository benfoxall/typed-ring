class RingBuffer {
  constructor(ArrayType, n) {
    this.ArrayType = ArrayType

    // set up buffer, array & offset
    if(Number.isFinite(n)) {
      const bytes = (this.ArrayType.BYTES_PER_ELEMENT * n) + 2
      this.buffer = new Uint8Array(bytes).buffer
    } else {
      throw new Error("Couldn't construct RingBuffer")
    }

    this.offset = new Uint16Array(this.buffer, 0, 2)
    this.array = new ArrayType(this.buffer, 2)
  }

  add(source) {
    if(Array.isArray(source)) {
      // todo - this could be optimised a lot with this.array.set
      return source.forEach(v => this.add(v))
    }

    const offset = this.offset[0]
    this.offset[0] = (this.offset[0] + 1) % this.array.length

    this.array[offset] = source
  }

  fill(target) {
    const offset = this.offset[0]
    const start = offset - target.length

    // again, can be more optimised with target.set
    for (var i = 0; i < target.length; i++) {
      const idx = ((i + start) + this.array.length) % this.array.length
      target[i] = this.array[idx]
    }
  }
}

export default RingBuffer
