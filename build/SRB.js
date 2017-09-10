var SRB = (function () {
'use strict';

var SRB = function SRB(n) {
  this.size = n;
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
