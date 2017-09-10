const expect = chai.expect

describe('shared ring buffer', () => {

  let ring
  before(() => {
    ring = new SRB(10)
  })

  it('stores', () => {
    ring.add([1,2,3])
    ring.add([4,5,6])

    expect(ring.toArray())
      .to.eql([
        1,2,3,4,5,6
      ])
  })

})
