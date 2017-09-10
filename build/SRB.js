var SRB = (function () {
'use strict';

var SRB = function SRB(n) {

  if(n instanceof SharedArrayBuffer) {
    this.buffer = n;
  } else {
    this.buffer = new SharedArrayBuffer(
      (n+1) * Uint16Array.BYTES_PER_ELEMENT
    );
  }

  this.size = (
    this.buffer.byteLength / Uint16Array.BYTES_PER_ELEMENT
  ) - 1;

  this.store = [];
};

SRB.prototype.add = function add (items) {
  this.store = this.store.concat(items);
};

SRB.prototype.toArray = function toArray () {
  return this.store.slice(-this.size)
};

return SRB;

}());
