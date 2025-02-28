Array.prototype.Myfilter = function (cb, thisArg) {
  if (typeof cb !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (!Array.isArray(this)) {
    throw new TypeError("Called on a non-array object");
  }
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
