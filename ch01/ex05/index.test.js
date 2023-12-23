import { abs, factorial, sum } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns same value when positive value given", () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it("returns same value when negative value given", () => {
      expect(sum([-1, -2, -3, -4])).toBe(-10);
    });

    it("returns zero value when emptyList given", () => {
      expect(sum([])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns same value when positive value given", () => {
      expect(factorial(5)).toBe(120);
    });

    it("returns 1 when negative value given", () => {
      expect(factorial(-1)).toBe(1);
    });

    it("returns 1 value when zero given", () => {
      expect(factorial(0)).toBe(1);
    });
  });
});
