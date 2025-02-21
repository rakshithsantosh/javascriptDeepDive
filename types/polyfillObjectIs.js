//polyfill for Object.is()

Object.is = function ObjectIs(x, y) {
  let xNegZero = isItNegZero(x);
  let yNegZero = isItNegZero(y);

  if (xNegZero || yNegZero) {
    return xNegZero && yNegZero;
  } else if (isItNaN(x) && isItNaN(y)) {
    return true;
  } else {
    return x === y;
  }

  function isItNegZero(v) {
    return v == 0 && 1 / v == -Infinity;
  }

  function isItNaN(v) {
    return v !== v;
  }
};
