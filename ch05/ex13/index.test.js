import { genFib } from "./index.js";

function isGenFibTest(n, expected) {
  return [n, expected];
}

function repeated(n) {
  let gen = genFib();

  for (let i = 1; i < n; i++) {
    gen.next().value;
  }

  return gen.next().value;
}

test.each([
  isGenFibTest(1, 1),
  isGenFibTest(2, 1),
  isGenFibTest(10, 55),
  isGenFibTest(50, 12586269025),
])("第%p項 => %p", (n, expected) => {
  expect(repeated(n)).toBe(expected);
});
