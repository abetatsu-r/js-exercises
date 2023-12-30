let obj = {};

// Symbolの場合、同じ文字列を指定してもSymbol値が異なるため別のプロパティとみなされる
let a = Symbol("property name");
let b = Symbol("property name");

obj[a] = 1;
obj[b] = 2;

console.log(obj[a]); // 1
console.log(obj[b]); // 2

// Symbol forの場合、同じ文字列を指定すると関連するSymbol値が代わりに渡されるため同一のプロパティとみなされる
let c = Symbol.for("property name");
let d = Symbol.for("property name");

obj[c] = 3;
obj[d] = 4;

console.log(obj[c]); // 4
console.log(obj[d]); // 4
