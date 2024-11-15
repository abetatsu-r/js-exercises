let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}

console.log(a, x, y);

/**
C:\Users\r00528090\JavaScript研修\js-exercises\ch17\ex01\lint_sample.js
  4:1  error  Parsing error: 'with' in strict mode

✖ 1 problem (1 error, 0 warnings)
 */
