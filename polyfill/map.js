Array.prototype.MyMap = function (cb, thisArg) {
  if (typeof cb !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (!Array.isArray(this)) {
    throw new TypeError("Called on a non-array object");
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb.call(thisArg, this[i], i, this));
  }
  return result;
};
