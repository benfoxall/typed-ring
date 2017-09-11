# typed-ring

This is a circular/ring buffer wrapped in a provided typed array.

```js
const store = new TypedRing(Uint16Array, 500)

store.add([1,2,3,4,5,6,7])

const out = new Uint16Array(4)
store.fill(out)

// out => [4,5,6,7]
```

The API is pretty limited; just for recalling the last inserted items.  The use case would be for capturing a stream of values and providing access to the most recent ones.

A store may be used with a shared buffer to allow updating/reading in different places.

---

TODO:

* support SharedArrayBuffer (the main reason I was building this)
* optimise copying of array
