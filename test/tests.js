const expect = chai.expect

describe('basic api', () => {

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


describe('shared buffer', () => {

  const ring = new SRB(5)
  const ring2 = new SRB(ring.buffer)

  ring.add([1,2,3])

  it('has a shared backing buffer', () => {
    expect(ring.buffer)
      .to.be.a('SharedArrayBuffer')

    expect(ring.buffer)
      .to.equal(ring2.buffer)
  })

  it('initialises the second ring', () => {
    expect(ring2.size)
      .to.eql(5)
  })

  xit('populates across', () => {
    expect(ring2.toArray())
      .to.eql([
        1,2,3
      ])
  })


})
