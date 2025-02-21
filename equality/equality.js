// in the case of same types == and === does the same thing

//if the types are different === return false and == allows coercion

let obj1 = {};
let obj2 = {};

obj1 == obj2; //returns false as both objects are different

function findAll(match, arr) {
  let ret = [];

  for (let v of arr) {
    if (Object.is(match, v)) {
      ret.push(v);
    } else if (match == null && v == null) {
      ret.push(v);
    } else if (typeof match == "boolean" && typeof v == "boolean") {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "string" &&
      match.trim() != "" &&
      typeof v == "number" &&
      !Object.is(-0, v)
    ) {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "number" &&
      !Object.is(match, Nan) &&
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      !Object.is(match, -0) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (match == v) {
        ret.push(v);
      }
    }
  }

  return ret;
}
