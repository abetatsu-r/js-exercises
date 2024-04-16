console.log(console.log.toString()); // function () { [native code] }

// アロー関数
let arrow = () => x + 1;
console.log(arrow.toString()); // () => x + 1

// 関数宣言文
function declare() {
  return null;
}
console.log(declare.toString()); // function declare() { return null;}

// 関数式
let expr = function (x) {
  return x * x;
};
console.log(expr.toString()); // function(x) { return x*x}
