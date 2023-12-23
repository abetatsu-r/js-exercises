import { fib } from "./index.js";

describe("フィボナッチ数列", () => {
  it("n >= 3の場合値が一致すること", () => {
    expect(fib(3)).toBe(2);
    expect(fib(5)).toBe(5);
    expect(fib(50)).toBe(12586269025);
  });

  it("n < 3については1", () => {
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
  });
});
