//console.log(Object.getOwnPropertyDescriptors({"x":1}, "x"));
let a = 1;

const random = {
  dummy() {
    a++;
    return 5;
  },

  get octet() {
    a++;
    return Math.floor(Math.random() * 256);
  },
};

//console.log(Object.getOwnPropertyDescriptor(random, "octet"));

/**
 * Object.assignで値をコピーすると、getter()が動く
 */
console.log(a);
const copy = Object.assign({}, random);

console.log(a);
console.log(Object.getOwnPropertyDescriptor(copy, "dummy"));
