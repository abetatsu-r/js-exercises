function lenTest(a, b, c, ...d) {
  return 0;
}

let sum = (x, y) => x + y;
let succ = sum.bind(null, 2);

console.log(lenTest.length); // 3
console.log((() => 1).name); // ""

console.log(succ(1));
console.log(sum.toString()); // (x, y) => x + y
console.log(succ.toString()); // function () { [native code] }
console.log(succ.name); // bound sum
