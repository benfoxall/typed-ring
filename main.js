class SRB {
  constructor(n) {

    if(n instanceof SharedArrayBuffer) {
      this.buffer = n
    } else {
      this.buffer = new SharedArrayBuffer(
        (n+1) * Uint16Array.BYTES_PER_ELEMENT
      )
    }

    this.size = (
      this.buffer.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) - 1

    this.store = []
  }

  add(items) {
    this.store = this.store.concat(items)
  }

  toArray() {
    return this.store.slice(-this.size)
  }
}

export default SRB
