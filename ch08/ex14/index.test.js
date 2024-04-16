import { any, catching } from "./index.js";

describe("any", () => {
  test("success return true", () => {
    const check = any(() => true);

    expect(check()).toBe(true);
  });

  test("success return false", () => {
    const check = any(() => false);

    expect(check()).toBe(false);
  });

  test("success with one arg", () => {
    const check = any((n) => !n);

    expect(check(true)).toBe(false);
    expect(check(false)).toBe(true);
  });

  test("success with some arg", () => {
    const check = any((b1, b2) => b1 && b2);

    expect(check(true, true)).toBe(true);
    expect(check(false, true)).toBe(false);
  });

  test("not return true when regarded as true", () => {
    const check = any((n, m) => n + m);

    expect(check(1, 2)).toBe(false);
  });
});

describe("catcing", () => {
  const throwErrFun = function (...args) {
    for (let arg of args) {
      if (arg > 0) throw Error("test");
    }

    return true;
  };

  test("error not thrown", () => {
    const check = catching(throwErrFun, (_) => false);

    expect(check(0)).toBe(true);
  });

  test("errow throw", () => {
    const check = catching(throwErrFun, (e) => {
      return { error: e.toString() };
    });

    expect(check(1)).toEqual({ error: "Error: test" });
  });

  test("success with some args", () => {
    const check = catching(throwErrFun, (e) => {
      return { error: e.toString() };
    });

    expect(check(0, 1)).toEqual({ error: "Error: test" });
  });
});
