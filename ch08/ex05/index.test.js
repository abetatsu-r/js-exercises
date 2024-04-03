import { sequenceToObject } from "./index.js";

describe("課題8-5", () => {
  test("成功すること", () => {
    expect(sequenceToObject("a", 1, "b", 2, "c", 3)).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  test("配列を与えられること", () => {
    expect(sequenceToObject(...[])).toEqual({});
    expect(sequenceToObject(...["a", 1, "b", 2, "c", 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
    expect(sequenceToObject(...["a", 1, "b", , "c", 3])).toEqual({
      a: 1,
      b: undefined,
      c: 3,
    });
  });

  test("奇数番の値がstringでない場合", () => {
    expect(() => sequenceToObject(["a", 1, 3, 2])).toThrowError();
  });

  test("値の個数の合計が偶数でない場合", () => {
    expect(() => sequenceToObject(["a", 1, "b"])).toThrowError();
  });
});
