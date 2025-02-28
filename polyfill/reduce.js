Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (!Array.isArray(this)) {
    throw new TypeError("Called on a non-array object");
  }

  let accumulator;
  let startIndex = 0;

  // Correct handling of initialValue
  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    // Find first valid element if initialValue is not provided
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }
    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[startIndex++];
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      // Skip empty indices in sparse arrays
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};
