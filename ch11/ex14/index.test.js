import { sortJapanese, toJapaneseDateString } from "./index.js";

test("sortJapanese", () => {
  expect(sortJapanese(["あか", "あお", "きいろ"])).toEqual([
    "あお",
    "あか",
    "きいろ",
  ]);

  // 吃音無視
  expect(sortJapanese(["だっき", "たっきー", "たつ", "たつみ"])).toEqual([
    "たつ",
    "だっき",
    "たっきー",
    "たつみ",
  ]);

  // 濁点無視
  expect(sortJapanese(["はい", "ばあむくうへん", "ぱも"])).toEqual([
    "ばあむくうへん",
    "はい",
    "ぱも",
  ]);
});

test("toJapaneseDateString", () => {
  expect(toJapaneseDateString(new Date(2024, 4, 13, 0, 0, 0))).toBe(
    "令和6年5月13日",
  );

  // 境界値
  expect(toJapaneseDateString(new Date(1989, 0, 7, 0, 0, 0))).toBe(
    "昭和64年1月7日",
  );
  expect(toJapaneseDateString(new Date(1989, 0, 8, 0, 0, 0))).toBe(
    "平成元年1月8日",
  );
});
