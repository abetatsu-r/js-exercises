import { TypeMap } from "./index.js";

describe("正常系", () => {
  const typeMap = new TypeMap();
  const d = new Date();

  test("set(primitive)", () => {
    typeMap.set(String, "string");
    typeMap.set(Number, 123);
    typeMap.set(Boolean, true);
  });

  test("set(constructor)", () => {
    class Foo {}
    typeMap.set(Foo, new Foo());
    typeMap.set(Date, d);
  });

  test("get", () => {
    expect(typeMap.get(String)).toBe("string");
    expect(typeMap.get(Number)).toBe(123);
    expect(typeMap.get(Boolean)).toBe(true);

    expect(typeMap.get(Date)).toBe(d);
  });

  test("update value", () => {
    typeMap.set(String, "string2");
    expect(typeMap.get(String)).toBe("string2");

    const d2 = new Date();
    typeMap.set(Date, d2);
    expect(typeMap.get(Date)).toBe(d2);
  });
});

describe("異常系: set", () => {
  const typeMap = new TypeMap();

  test("constructor以外を指定した場合", () => {
    expect(() =>
      typeMap.set(
        () => {},
        () => {},
      ),
    ).toThrow();
    expect(() =>
      typeMap.set(
        function test() {},
        () => {},
      ),
    ).toThrow();
  });

  test("primitive値で異なるラッパークラスの指定があった場合", () => {
    expect(() => typeMap.set(String, 123)).toThrow();
    expect(() => typeMap.set(Number, true)).toThrow();
    expect(() => typeMap.set(Boolean, "string")).toThrow();
  });

  test("constructor関数のクラス以外を渡した場合", () => {
    class Expected {}
    class Invalid {}
    expect(() => typeMap.set(Expected, new Invalid())).toThrow();
  });
});
