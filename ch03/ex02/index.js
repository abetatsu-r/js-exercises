console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);

console.log(Number.MAX_VALUE + 1);
console.log(Number.MAX_VALUE + 2);
//console.log(Number.MAX_VALUE + 9.97920154767e+291);

// MAX_SAFE_INTEGERより大きい整数は下位の値が保証されず、加算された値(1や2)が損なわれるためtrueになる
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2);
//console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 9.97920154767e+291);
