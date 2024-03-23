let o1 = {};
//let o1.prototype ='a'; // これはだめ

let o = {};
o.x = 1;
let x = Object.create(o);
console.log(x.x); // 1
o.x = 2;
console.log(x.x); // 2
x.x = 3;
console.log(x.x); // 3
console.log(o.x); // 2

let a = 5;
let obj = {b: a};
console.log(Object.getOwnPropertyDescriptors(obj));