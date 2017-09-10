const expect = chai.expect

describe('shared ring buffer', () => {

  it('stores', () => {
    const ring = new SRB(10)

    ring.add([1,2,3])
    ring.add([4,5,6])

    expect(ring.toArray())
      .to.eql([
        1,2,3,4,5,6
      ])

  })

  it('wraps items', () => {
    const ring = new SRB(5)

    ring.add([1,2,3])
    ring.add([4,5,6])

    expect(ring.toArray())
      .to.eql([
        2,3,4,5,6
      ])

  })

})
