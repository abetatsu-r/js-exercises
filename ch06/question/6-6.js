let o = { 1: "a", z: "n", 1: 24, 36: 75, x: "hoge" };

console.log(Object.keys(o));

let x = Object.create(o);

x[2] = "addNew";
x.y = "addafter";

console.log(Object.keys(x));
