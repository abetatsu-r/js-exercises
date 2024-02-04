import { sub } from "./index.js";

function subTestCase(a, b, expected) {
  return [a, b, expected];
}

const FLAG_OVERFLOW = "OverFlow !!";
// 符号付き32bit計算の範囲は[-(2 ^ 31) ~ 2 ^ 31 -1]
const MAX_INT_32 = 2 ** 31 - 1;
const MIN_INT_32 = -(2 ** 31);

test.each([
  subTestCase(1, 1, 0),
  subTestCase(7, 2, 5),
  subTestCase(3, 5, -2),
  subTestCase(1, 0, 1),
  subTestCase(0, 1, -1),
  subTestCase(0, 0, 0),
  subTestCase(1, -5, 6),
  subTestCase(-3, -8, 5),
  subTestCase(-5, -2, -3),
  subTestCase(MAX_INT_32 - 777, -777, MAX_INT_32), // 計算結果が正の最大値
  subTestCase(MIN_INT_32 + 777, 777, MIN_INT_32), // 計算結果が負の最大値
  subTestCase(MAX_INT_32, 0, MAX_INT_32),
  subTestCase(MIN_INT_32, 0, MIN_INT_32),
  subTestCase(MAX_INT_32, -1, FLAG_OVERFLOW),
  subTestCase(MIN_INT_32, 1, FLAG_OVERFLOW),
  subTestCase(0, MIN_INT_32, FLAG_OVERFLOW),
  subTestCase(-5, MIN_INT_32, MAX_INT_32 - 4), //2の補数計算でOVERFLOWしない
])("sub(%p, %p) => %p", (a, b, expected) => {
  expect(sub(a, b)).toBe(expected);
});
