const p1 = {
  fname: "firstname",
  lname: "lastname",
  age: 22,
};

//proxy takes in object reference and a handler function as inputs
const p1Proxy = new Proxy(p1, {
  get(target, prop) {
    if (prop in target) return Reflect.get(target, prop);
    return false;
  },
  set(target, prop, value) {
    if (!(prop in target)) throw new Error(`${prop} does not exists`);
    switch (prop) {
      case "firstname":
      case "lastname":
        if (typeof value !== "string")
          throw new Error(`${prop} must be a string `);
        break;
      case "age":
        if (typeof value !== "number")
          throw new Error(`${prop} must be a number `);
        if (value <= 0) throw new Error(`${prop} must be greater than zero`);
    }
    Reflect.set(target, prop, value);
  },
});
