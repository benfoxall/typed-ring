const expect = chai.expect

describe('buffer store', () => {

  const ring = new RingBuffer(Uint16Array, 5)
  const _store = new Uint16Array(ring.buffer)

  it('sets initial', () => {
    ring.add([1,2,3])
    expect(Array.from(_store))
      .to.eql([3, 1, 2, 3, 0, 0])
  })

  it('can be added to', () => {
    ring.add([4])

    expect(Array.from(_store))
      .to.eql([4, 1, 2, 3, 4, 0])
  })

  it('goes back to start', () => {

    ring.add([5])

    expect(Array.from(_store))
      .to.eql([0, 1, 2, 3, 4, 5])

  })

  it('wraps longer input', () => {

    ring.add([6,7,8,9,10,11])

    expect(Array.from(_store))
      .to.eql([1, 11, 7, 8, 9, 10])

  })


  it('wraps much longer input', () => {

    ring.add([7,8,9,10,11,12,13,14,15,16,17])

    expect(Array.from(_store))
      .to.eql([2, 16, 17, 13, 14, 15])

  })

})

describe('output', () => {

  const ring = new RingBuffer(Uint16Array, 10)
  ring.add([1,2,3,4,5,6])

  it('takes last elements', () => {
    const target = new Uint16Array(5)

    ring.fill(target)

    expect(Array.from(target))
      .to.eql([2,3,4,5,6])

    const target_sm = new Uint16Array(3)

    ring.fill(target_sm)

    expect(Array.from(target_sm))
      .to.eql([4,5,6])

  })

  const s_ring = new RingBuffer(Uint16Array, 4)
  s_ring.add([1,2,3,4,5,6,7])

  it('wraps around', () => {
    const target = new Uint16Array(4)

    s_ring.fill(target)

    expect(Array.from(target))
      .to.eql([4,5,6,7])

  })
  
})
