class SRB {
  constructor(n) {
    this.size = n
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
