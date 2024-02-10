import { bitcount } from "./index.js";

function bitCountTestCase(n, expected) {
  return [n, expected];
}

test.each([
  bitCountTestCase(0b111, 3),
  bitCountTestCase(0b1111_1111_1111_1111_1111_1111_1111_1111, 32),
  bitCountTestCase(0, 0),
  bitCountTestCase(1, 1),
  bitCountTestCase(-1, 32),
  bitCountTestCase(2 ** 32, 0), // 32bitの範囲外は消滅する
  bitCountTestCase(Infinity, 0),
])("bitcount(%p) => %p", (n, expected) => {
  expect(bitcount(n)).toBe(expected);
});
