(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TypedRing = factory());
}(this, (function () { 'use strict';

var RingBuffer = function RingBuffer(ArrayType, n) {
  this.ArrayType = ArrayType;

  // set up buffer, array & offset
  if(Number.isFinite(n)) {
    var bytes = (this.ArrayType.BYTES_PER_ELEMENT * n) + 2;
    this.buffer = new Uint8Array(bytes).buffer;
  } else if (n instanceof ArrayBuffer) {
    this.buffer = n;
  }
  else {
    throw new Error("Couldn't construct RingBuffer")
  }

  this.offset = new Uint16Array(this.buffer, 0, 2);
  this.array = new ArrayType(this.buffer, 2);
};

RingBuffer.prototype.add = function add (source) {
    var this$1 = this;

  if(Array.isArray(source)) {
    // todo - this could be optimised a lot with this.array.set
    return source.forEach(function (v) { return this$1.add(v); })
  }

  var offset = this.offset[0];
  this.offset[0] = (this.offset[0] + 1) % this.array.length;

  this.array[offset] = source;
};

RingBuffer.prototype.fill = function fill (target) {
    var this$1 = this;

  var offset = this.offset[0];
  var start = offset - target.length;

  // again, can be more optimised with target.set
  for (var i = 0; i < target.length; i++) {
    var idx = ((i + start) + this$1.array.length) % this$1.array.length;
    target[i] = this$1.array[idx];
  }
};

return RingBuffer;

})));
