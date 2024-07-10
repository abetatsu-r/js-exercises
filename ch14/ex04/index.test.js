import { Kana } from "./index.js";

test("compare", () => {
  const k1 = new Kana("あ");
  const k2 = new Kana("い");
  const k3 = new Kana("あ");

  expect(k1 > k2).toBe(false);
  expect(k1 < k2).toBe(true);
  expect(k1 >= k3).toBe(true);
  expect(k1 <= k3).toBe(true);
});

test("expected String", () => {
  const k = new Kana("あ");

  expect(`${k}`).toBe("あ");
});

test("expected Number", () => {
  const k = new Kana("あ");

  expect(k - 2354).toBe(10000);
});

test("expected default", () => {
  const k = new Kana("あ");

  expect(k + 0).toBe("あ0");
});
